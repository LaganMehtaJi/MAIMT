import express from "express";
const router = express.Router();
import { GetClass } from "../controllers/class.controllers.js";
router.get("/class",GetClass);
router.get("/class/syllabus/:id",);
router.get("/class/papers/:id",);
router.get("/class/econtent/:id",);
router.get("/class/journals/:id",);

export default router;


