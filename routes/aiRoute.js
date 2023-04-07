import express from "express";
const router = express.Router();
import { generateImage, testRoute} from "../controllers/ai.controller.js";

router.route("/").get(testRoute);
router.route("/generate").post(generateImage);

export default router;
