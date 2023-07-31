import { Request, Response } from "express";

const signin = (req: Request, res: Response) => {
  console.log("login");
  res.send("login");
};

export { signin };
