import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const schemValidate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json(error.issues.map((issue) => ({ message: issue.message })));
      }
      res.status(500).json({ message: "Internal server error" });
    }
  };

export { schemValidate };
