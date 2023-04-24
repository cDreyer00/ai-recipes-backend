import dotenv from "dotenv";
dotenv.config();

import { RecipeRquest, getRecipe } from "./assistants/recipe.js";

const m: RecipeRquest = {
    foods: ["arroz", "massa", "pao", "leite", "quejo", "pimetao"],
    tools: ["Fogao", "AirFryer", "microondas"],
    language: "ptbr",
}

getRecipe(m).then((data) => {
    console.log(data.title);
    console.log('============');
    console.log(data.description);
    console.log('============');
    console.log(data.time);
    console.log('============');
    console.log(data.serves);
    console.log('============');
    console.log(data.ingredients);
    console.log('============');
    console.log(data.tools);
    console.log('============');
    // console.log(data.steps);
    // console.log('============');
})
.catch((err) => {
    console.log(err);
})


