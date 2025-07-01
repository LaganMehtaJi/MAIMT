import express from "express";
const router = express.Router();
import { GetClass ,GetSyllabus } from "../controllers/class.controllers.js";
router.get("/class",GetClass);
router.get("/class/syllabus/:class",GetSyllabus);
router.get("/class/papers/:class",);
router.get("/class/econtent/:class",);
router.get("/class/journals/:class",);

export default router;


