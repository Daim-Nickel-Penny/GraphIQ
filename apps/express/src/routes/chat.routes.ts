import chatController from "@/controllers/chat.controller";
import userPromptMiddleware from "@/middlewares/userPrompt.middleware";
import { Router } from "express";

const router = Router();

router.post(
  "/get-chat-completion",
  userPromptMiddleware.userPromptMiddleware,
  chatController.getChatCompletion
);

export default router;
