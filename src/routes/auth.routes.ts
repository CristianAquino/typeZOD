import express from "express";
import { signin } from "../controllers/auth.controller";
import { schemValidate } from "../middleware/schemaValidator.moddleware";
import { signinSchema } from "../schemas/auth.schema";

const router = express.Router();

router.post("/signin", schemValidate(signinSchema), signin);

export default router;
