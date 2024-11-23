import { Router } from "express";
import chatController from "src/controllers/chat.controller";
import userPromptMiddleware from "src/middlewares/userPrompt.middleware";

const router = Router();

router.post(
  "/get-chat-completion",
  userPromptMiddleware.userPromptMiddleware,
  chatController.getChatCompletion
);

router.post(
  "/get-vision-chat-completion",
  userPromptMiddleware.userPromptMiddleware,
  chatController.getVisionChatCompletion
);

export default router;
