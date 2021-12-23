import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

class PostController {
    static postPost = async(req:Request, res:Response) => {
        const newPost = { 
            title: req.body.title, 
            content: req.body.content 
        }
        const post = getRepository(Post).create(newPost);
        const result = await getRepository(Post).save(post);
        return res.json(result);
    };
}
export default PostController;