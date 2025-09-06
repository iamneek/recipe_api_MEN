const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Recipe must have a name"]
    },
    ingredients: {
        type: [String],
        validate: {
            validator: function (err) {
                return err.length > 0
            },
            message: "Ateast enter a single ingredient"
        },
        required: [true, "As far as I recall, all the recipes had to have ingredients list..."]
    },
    instructions: {
        type: String,
        required: [true, "Ooh, Recipe app without the recipe wouldn't be nice, would it?"]
    },
    timeTaken: {
        type: String,
        required: false,
        default: "0 minutes"
    }
}, {
    timestamps: true
})

const recipeModel = mongoose.model('recipes', recipeSchema)
module.exports = recipeModel
