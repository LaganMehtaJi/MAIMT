import express from "express";
import Class from "../models/class.models.js";

const GetClass = async(req, res) => {
    try{
     const class = await Class.find({});
        if(!class || class.length === 0){
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(class);
    
    }catch(error){
        console.error("Error fetching class:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}