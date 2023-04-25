import dotenv from "dotenv";
dotenv.config();

import { RecipeRquest, getRecipe } from "./assistants/recipe.js";

const m: RecipeRquest = {
    foods: ["milk", "cheese", "rice", "chicken"],
    tools: ["microwave", "AirFryer", "oven"],
    max_calories: 250,
    language: "ptbr"
}