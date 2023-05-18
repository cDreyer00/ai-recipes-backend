import dotenv from "dotenv";
dotenv.config();

import { RecipeData, RecipeProps, requestRecipe } from "./assistants/recipe.js";

import express from 'express';
const server = express();
server.use(express.json());


server.post('/recipe', async (request, reply) => {
    console.log('========== NEW REQUEST ==========');
    console.log(request.body);
    let recipeRequest = request.body as RecipeProps;
    const recipe = await requestRecipe(recipeRequest);
    console.log(recipe);
    
    return reply.send(recipe);
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
    return reply.send(recipe);
})

const port = parseInt(process.env.PORT || '3000', 10);
server.listen(port, () => console.log(`Server listening on port ${port}`));