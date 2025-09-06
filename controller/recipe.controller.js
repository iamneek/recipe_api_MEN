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

const updateRecipe = async (req, res) => {
    const new_recipe = req.body
    try {
        const updatedRecipe = await recipeModel.findByIdAndUpdate(req.params.id, new_recipe, {
            new: true
        })
        res.status(200).send(updatedRecipe)
    } catch (err) {
        console.log("error: ", err);
        res.status(400).send("Failed")
    }
}

const deleteRecipe = async (req, res) => {
    try {
        await recipeModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Requested recipe was deleted.")
    } catch (err) {
        console.log("error: ", err);
        res.status(400).send("Failed")
    }
}

module.exports = {
    getAllRecipes,
    addRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}
