const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Recipe must have a name"]
    },
    ingredients: {
        type: String,
        required: [true, "As far as I recall, all the recipes had to have ingredients list..."]
    },
    instructions: {
        type: String,
        required: [true, "Ooh, Recipe app without the recipe wouldn't be nice, would it?"]
    },
    timeTaken: {
        type: String,
        required: false,
        default: 0
    }
}, {
    timestamps: true
})
