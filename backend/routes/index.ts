import express, { Request, Response } from "express";
let router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

export default router;
