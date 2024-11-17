import chatService from "@/services/chat.service";
import { NextFunction, Request, Response } from "express";

const getChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userPrompt } = req.body;
    const response = await chatService.getGroqChatCompletion(userPrompt);

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default { getChatCompletion };
