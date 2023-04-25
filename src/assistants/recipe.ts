import { ChatCompletionRequestMessage } from "openai";
import messagesEN from "../messages/en/recipe.js";
import messagesPTBR from "../messages/ptbr/recipe.js";
import gpt from "../gptHandler/gpt.js";

export async function getRecipe(request: RecipeRquest): Promise<RecipeResponse> {    
    const { foods, tools, max_calories ,language } = request;
    
    const text = `
    food: ${foods.join(", ")}
    tools: ${tools.join(", ")}
    max-calories: ${max_calories}
    `;
    console.log(text);

    const msgs = language === 'en' ? messagesEN : messagesPTBR;
    const m = [...msgs, { role: "user", content: text }] as ChatCompletionRequestMessage[]
    const res = await gpt(m);

    const recipe = JSON.parse(res.content) as RecipeResponse;
    return recipe;
}

export type RecipeRquest = {
    foods: string[],
    tools: string[],
    max_calories: number | 'unlimited',
    language: Language,
}

export type RecipeResponse = {
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