import express from "express";
const router = express.Router();
import { GetClass ,GetSyllabus ,GetEContent,GetPapers,GetJournals } from "../controllers/class.controllers.js";
router.get("/class",GetClass);
router.get("/class/syllabus/:class",GetSyllabus);
router.get("/class/papers/:class",GetPapers);
router.get("/class/econtent/:class",GetEContent);
router.get("/class/journals/:class",GetJournals);

export default router;


