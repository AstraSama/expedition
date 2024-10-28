import { Schema, model } from "mongoose";

const explorer_Schema = new Schema({
    name: {
        type: String,
        required: true 
    },
    field_study: {
        type: String,
        required: true
    },
    expeditions_participated: {
        type: Number,
        required: true
    }
});

const Explorer = model("Explorer", explorer_Schema);

export default Explorer;