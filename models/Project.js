import mongoose from "mongoose";
import { taskSchema } from "./Task.js";


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    
    // could specify w/e u want in the array below as tasks like title, arthur etc
    tasks: [],
    // created AT no longer needed with timestamps code added
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // },
},
{ timestamps: true },
);

// index for organization
// can add mongoose here like pre save middleware
// methods 

const Project = new mongoose.model('Project', projectSchema);
export default Project;