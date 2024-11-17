import { Router } from "express";
import chatRouter from "./routes/chat.routes";
const router = Router();

router.use("/chats", chatRouter);

export default router;
