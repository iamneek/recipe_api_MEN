const express = require("express")
const {
    getAllRecipes,
    addRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} = require("../controller/recipe.controller")
const router = express.Router()

router.get("/", getAllRecipes)
router.post("/add", addRecipe)
router.get("/:id", getRecipeById)
router.put("/update/:id", updateRecipe)
router.delete("/delete/:id", deleteRecipe)

module.exports = router;
