import { HttpError } from "@/errors/httpError";
import { IChatResponse } from "@/types/chatResponse";

const formatter = (response: any): IChatResponse => {
  try {
    if (!response) {
      throw new HttpError("Response is empty", 400);
    }

    const { id, created, model, choices, usage } = response;

    //created is 1731837644 make it Date format
    const createdAt = new Date(created * 1000).toLocaleString();

    const responseObj: IChatResponse = {
      id,
      createdAt: createdAt,
      model,
      response: choices[0].message.content,
      timeTaken: usage.total_time,
    };

    return responseObj;
  } catch (error) {
    throw new HttpError("Error formatting chat response", 400);
  }
};

export default { formatter };
