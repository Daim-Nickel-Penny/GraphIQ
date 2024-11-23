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
    const response = await chatService.getGroqChatCompletion(userPrompt, "");

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
      base64Image,
      ""
    );

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const getChatCompletionBasedOnBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let context = "";

    if (req.body?.context) {
      context = req.body.context;
    }

    if (!req.body?.base64Image) {
      console.log("Calling text based model");
      const { userPrompt } = req.body;
      const response = await chatService.getGroqChatCompletion(
        userPrompt,
        context
      );

      res.status(200).json(response);
    } else {
      console.log("Calling vision based model");
      const { userPrompt, base64Image } = req.body;
      const response = await visionChatService.getGroqVisionChatCompletion(
        userPrompt,
        base64Image,
        context
      );
      res.status(200).json(response);
    }
  } catch (error) {
    next(error);
  }
};

export default {
  getChatCompletion,
  getVisionChatCompletion,
  getChatCompletionBasedOnBody,
};
