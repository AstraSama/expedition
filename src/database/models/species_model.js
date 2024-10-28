import { Schema, model } from "mongoose";

const species_Schema = new Schema({
    name: {
        type: String,
        required: true 
    },
    discovery_location: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        required: true
    }
});

const Species = model("Species", species_Schema);

export default Species;