import Groq from "groq-sdk";
import { MODELS } from "src/constants/models.constatnts";
import { SYSTEM_PROMPS } from "src/constants/prompts.constant";
import { HttpError } from "src/errors/httpError";
import { GROQ_API_KEY } from "src/key";
import { IChatResponse } from "src/types/chatResponse";
import chatResponseFormatter from "src/utils/chatResponseFormatter";

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});

async function getGroqVisionChatCompletion(
  userPrompt: string,
  base64Image: string
): Promise<IChatResponse> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPS.SYSTEM_PROMOT_FOR_VISION_CHAT,
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: userPrompt,
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`,
              },
            },
          ],
        },
      ],
      model: MODELS.LLAMA_3_2_11b_vision_preview,
      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    if (!chatCompletion) {
      throw new HttpError("Response is empty", 400);
    }

    const formattedResponse = chatResponseFormatter.formatter(chatCompletion);

    return formattedResponse;
  } catch (error) {
    throw error;
  }
}

export default { getGroqVisionChatCompletion };
