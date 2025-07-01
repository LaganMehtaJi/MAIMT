import express from "express";
import course from "../models/class.models.js";

const GetClass = async(req, res) => {
    try{
     const data = await course.find({});
        if(!data || data.length === 0){
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(data);
    
    }catch(error){
        console.error("Error fetching class:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const GetSyllabus = async(req, res) => {
    const {  courseName } = req.body.deta;
    try{
        const data = await course.findOne({  courseName: courseName });
        if(!data){
            return res.status(404).json({ message: "Syllabus not found" });
        }
        res.status(200).json(data.syllabus);
    }catch(error){
        console.error("Error fetching syllabus:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
