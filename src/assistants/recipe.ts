import { ChatCompletionRequestMessage } from "openai";
import messagesEN from "../messages/en/recipe.js";
import messagesPTBR from "../messages/ptbr/recipe.js";
import gpt from "../gptHandler/gpt.js";

export async function getRecipe({ ingridients, utensils, max_calories, language }: RecipeProps): Promise<RecipeData> {
    const text = `
    food: ${ingridients.join(", ")}
    tools: ${utensils.join(", ")}
    max-calories: ${max_calories}
    `;
    console.log(text);

    const msgs = language === 'en' ? messagesEN : messagesPTBR;
    const m = [...msgs, { role: "user", content: text }] as ChatCompletionRequestMessage[]
    const res = await gpt(m);

    const recipe = JSON.parse(res.content) as RecipeData;
    return recipe;
}

export type RecipeProps = {
    ingridients: string[],
    utensils: string[],
    max_calories: number | 'unlimited',
    language: Language,
}

export type RecipeData = {
    title: string,
    description: string,
    time: string,
    serves: number,
    calories_per_serving: number,
    ingredients: string[],
    tools: string[],
    steps: string[],
}

export type Language = 'en' | 'ptbr'