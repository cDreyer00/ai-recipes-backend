import dotenv from "dotenv";
dotenv.config();

import fastify from 'fastify'
import { RecipeProps, getRecipe } from "./assistants/recipe.js";

const server = fastify()

server.post('/recipe', async (request, reply) => {
    console.log(request.body);
    const { ingridients, utensils, max_calories, language } = request.body as RecipeProps;
    const recipe = await getRecipe({ ingridients, utensils, max_calories, language });
    return recipe;
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})



// const request: RecipeProps = {
//     foods: ["Ovo", "tomate", "pimentao", "frango", "batata"],
//     tools: ["fogão", "AirFryer"],
//     max_calories: "unlimited",
//     language: "ptbr",
// }

// getRecipe(request).then((r) => {
//     console.log(r);
// });