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
    const recipe = await requestRecipe(r1)
    console.log(recipe);
    return recipe;
})

server.listen({ port: 3001 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

const r1 = {
    ingridients: ['farinha', 'berinjela', 'tomate', 'queijo', 'leite', 'pao'],
    serves: 2,
    time: 60,
    language: "ptbr"
} as RecipeProps;

const r2 = {
    ingridients: ['eggs', 'avocado', 'cheese', 'milk', 'bread'],
    time: 20,
    language: "en"
} as RecipeProps;

const r3 = {
    ingridients: ['berinjela', 'tomate', 'cebola', 'pimentão', 'alho', 'azeite', 'pimenta', 'orégano', 'queijo'],
    time: 60,
    language: "ptbr",    
} as RecipeProps;
 
// requestRecipe(rInfo)
// .then((res) => console.log(res))
// .catch((err) => console.log(err));