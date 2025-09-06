const recipeModel = require("../model/recipe.model")

const getAllRecipes = (req, res) => {
    const recipes = recipeModel.
    res.send("Hellooooooo")
}

module.exports = {
    getAllRecipes
}
