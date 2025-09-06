const express = require("express")
const {
    getAllRecipes,
    addRecipe,
    getRecipeById
} = require("../controller/recipe.controller")
const router = express.Router()

router.get("/", getAllRecipes)
router.post("/add", addRecipe)
router.get("/:id", getRecipeById)

module.exports = router;
