const express = require("express");
const cors = require("cors")
const recipeRouter = require("./route/recipe.route")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

app.listen(4000, () => {
    console.log("Listening on port 4000");
})
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log("Failed to connect to mongodb", err);
})

app.use("/recipe", recipeRouter)
