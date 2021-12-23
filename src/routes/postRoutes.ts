import { Router } from "express";
import PostController from "../controller/PostController";

const router = Router();
router.get("/post",PostController.getPost);

export default router;