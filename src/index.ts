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
    // const recipe = await requestRecipe(r1)
    // console.log(recipe);
    // return recipe;
    return { hello: 'world' }
})

const port = parseInt(process.env.PORT || '3000', 10);
server.listen({ port }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})