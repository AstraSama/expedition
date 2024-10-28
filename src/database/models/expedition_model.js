import { Schema, model } from "mongoose";

const expedition_Schema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: [{
        type: Schema.ObjectId,
        ref: "Explorer",
        required: true
    }],
    species_found: [{
        type: Schema.ObjectId,
        ref: "Species",
        required: true
    }]
});

const Expedition = model("Expedition", expedition_Schema);

export default Expedition;