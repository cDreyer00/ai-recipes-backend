import dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

import { httpError, error } from "../Error/Error.js";
import messages from "./messages.js";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function run(message: Content) {
    const { foods, tools } = message;
    
    const text = `
    food: ${foods.join(", ")}
    tools: ${tools.join(", ")}
    `;
    console.log(text);

    let ms = [...messages, { role: "user", content: text }]

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: ms,
    });

    // const res = JSON.parse(completion.data.choices[0].message as any);
    const res = completion.data.choices[0].message as any;
    return res;

}

export type Content = {
    foods: string[],
    tools: string[],
}