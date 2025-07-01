import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    courseName : {
        type: String,
        required: true
    },
    courseImage: {
        type: String,
        required: true
    },
    courseSyllabus: {
        type: Object,
        required: true
    },
    coursePapers: {
        type:   Object,
        required: true
    },
    courseContent: {
        type: Object,
        required: true
    },
    courseJournal: {
        type: Object,
        required: true
    }

});

const course = mongoose.model("course", coursesSchema);
export default course;


  