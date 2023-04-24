import { ChatCompletionRequestMessage } from "openai";
import messagesEN from "../messages/en/recipe.js";
import messagesPTBR from "../messages/ptbr/recipe.js";
import gpt from "../gptHandler/gpt.js";

export async function getRecipe(request: RecipeRquest): Promise<RecipeResponse> {    
    const { foods, tools, language } = request;
    
    const text = `
    food: ${foods.join(", ")}
    tools: ${tools.join(", ")}
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
    language: Language,
}

export type RecipeResponse = {
    title: string,
    description: string,
    time: string,
    serves: string,
    ingredients: string[],
    tools: string[],
    steps: string[],
}

export type Language = 'en' | 'ptbr'