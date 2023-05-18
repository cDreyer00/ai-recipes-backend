import { ChatCompletionRequestMessage } from "openai";

import { trainingMesages } from "./baseMessages.js";
import gpt from "../gptHandler/gpt.js";

export type RecipeProps = {
    ingridients: string[],
    utensils?: string[],
    calories?: number,
    time?: number,
    serves?: number,
    observations?: string,
    language: string,
}

export type RecipeData = {
    title: string,
    description: string,
    time: string,
    serves: number,
    calories: number,
    ingredients: string[],
    utensils: string[],
    steps: string[],
    emoji: string,
}

export async function requestRecipe(recipeRequest: RecipeProps): Promise<RecipeData> {
    const message = JSON.stringify(recipeRequest);
    const m = [...trainingMesages(), { role: "user", content: message }] as ChatCompletionRequestMessage[]
    const res = await gpt(m);
    console.log(res);
    const recipe = JSON.parse(res.content) as RecipeData;
    return recipe;
}


