import dotenv from "dotenv";
dotenv.config();

import { RecipeProps, requestRecipe } from "./assistants/recipe.js";

import fastify from 'fastify'
const server = fastify()

server.post('/recipe', async (request, reply) => {
    console.log(request.body);
    const { ingridients, utensils, calories, serves, time, language } = request.body as RecipeProps;
    const recipe = await requestRecipe({ ingridients, utensils, calories, serves, time, language });
    console.log(recipe);
    return recipe;
})

server.get('/test', async (request, reply) => {
    console.log('test request');
    const testRecipe: RecipeProps = {
        ingridients: ['avocado', 'tomato', 'onion', 'chicken', 'cheese'],
        serves: 2,
        time: 30,
        language: 'en'
    }
    const recipe = await requestRecipe(testRecipe);
    console.log(recipe);
    return recipe;
})

const port = parseInt(process.env.PORT || '3000', 10);
server.listen({ port }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

