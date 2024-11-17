import chatController from "@/controllers/chat.controller";
import { Router } from "express";

const router = Router();

router.post("/get-chat-completion", chatController.getChatCompletion);

export default router;
