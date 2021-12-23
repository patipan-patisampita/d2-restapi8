import { Router } from "express";
import PostController from "../controller/PostController";

const router = Router();
router.post("/post",PostController.postPost)

export default router;