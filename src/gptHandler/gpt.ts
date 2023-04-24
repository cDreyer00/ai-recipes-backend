import dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

import { httpError, error } from "../error/Error.js";
import messages from "./messages.js";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getRecipe(request: RecipeRquest) {
    const { foods, tools } = request;
    
    const text = `
    food: ${foods.join(", ")}
    tools: ${tools.join(", ")}
    `;
    console.log(text);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [...messages, { role: "user", content: text }]
    });

    // const res = JSON.parse(completion.data.choices[0].message as any);
    const res = completion.data.choices[0].message as ChatCompletionRequestMessage;
    
    return JSON.parse(res.content);
}

export type RecipeRquest = {
    foods: string[],
    tools: string[],
    language?: Language,
}

export type Language = 'en' | 'ptbr'