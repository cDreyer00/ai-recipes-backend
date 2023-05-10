import dotenv from "dotenv";
dotenv.config();

import { RecipeProps, getRecipe } from "./assistants/recipe.js";

import fastify from 'fastify'
const server = fastify()

server.post('/recipe', async (request, reply) => {
    console.log(request.body);
    const { ingridients, utensils, max_calories, language } = request.body as RecipeProps;
    const recipe = await getRecipe({ ingridients, utensils, max_calories, language });
    console.log(recipe);
    return recipe;
})

server.get('/ping', async (request, reply) => { 
    console.log(request.body);
    return 'pong\n';
})

server.listen({ port: 3001 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})