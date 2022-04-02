import express, { Request, Response } from "express";
let router = express.Router();

import { Category } from "../models/category";

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  const list = await Category.find({});
  return res.status(200).send({
    message: "Hello World!",
    todo: list,
  });
});

export default router;
