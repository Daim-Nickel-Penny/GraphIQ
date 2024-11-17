import { Router } from "express";
import chatRouter from "./routes/chat.routes";
import { errorMiddleware } from "./middlewares/errorMiddleware";
const router = Router();

router.use("/chats", chatRouter);

router.use(errorMiddleware);

export default router;
