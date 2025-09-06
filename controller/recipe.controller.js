const recipeModel = require("../model/recipe.model")

const getAllRecipes = async (req, res) => {
    const recipes = await recipeModel.find({})
    res.send(recipes);
}

const getRecipeById = async (req, res) => {
    const recipes = await recipeModel.findById(req.params.id)
    res.send(recipes);
}

const addRecipe = async (req, res) => {
    const recipe = req.body
    try {
        await recipeModel.create(recipe)
        res.status(200).send("Received")
    } catch (err) {
        console.log("error: ", err);
        res.status(400).send("Failed")
    }
    console.log(recipe)
}

module.exports = {
    getAllRecipes,
    addRecipe,
    getRecipeById
}
