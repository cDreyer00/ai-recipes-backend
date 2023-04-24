import dotenv from "dotenv";
dotenv.config();

import { RecipeRquest, getRecipe } from "./gptHandler/gpt.js";

const m: RecipeRquest = {
    foods: ["cheese", "flour", "milk", "butter", "cream cheese", "dry tomato"],
    tools: ["Stove", "AirFryer"],
}

// getRecipe(m).then((data) => {
//     // console.log(data);
//     // console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })


type Recipe = {
    title: string,
    description: string,
    time: string,
    serves: string,
    ingredients: string[],
    tools: string[],
    steps: string[],
}