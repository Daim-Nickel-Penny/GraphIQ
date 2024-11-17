import { MODELS } from "@/constants/models.constatnts";
import { SYSTEM_PROMPS } from "@/constants/prompts.constant";
import { HttpError } from "@/errors/httpError";
import { GROQ_API_KEY } from "@/key";
import chatResponseFormatter from "@/utils/chatResponseFormatter";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: GROQ_API_KEY,
});

const getGroqChatCompletion = async (userPrompt: string) => {
  try {
    const response = await groq.chat.completions.create({
      model: MODELS.LLAMA_3_8B_8192,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPS.SYSTEM_PROMPT_FOR_CHAT,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],

      temperature: 0.5,
      max_tokens: 1024,
      top_p: 1,
      stop: null,
      stream: false,
    });

    if (!response) {
      throw new HttpError("Response is empty", 400);
    }

    const formattedResponse = chatResponseFormatter.formatter(response);

    return formattedResponse;
  } catch (error) {
    throw error;
  }
};

export default { getGroqChatCompletion };
