import { NextFunction, Request, Response } from "express";
import chatService from "src/services/chat.service";
import visionChatService from "src/services/visionChat.service";

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

const getVisionChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userPrompt, base64Image } = req.body;
    const response = await visionChatService.getGroqVisionChatCompletion(
      userPrompt,
      base64Image
    );

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default { getChatCompletion, getVisionChatCompletion };
