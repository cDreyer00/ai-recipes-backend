import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
import dotenv from "dotenv";
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function run(messages: ChatCompletionRequestMessage[]): Promise<ChatCompletionRequestMessage> {
    console.log('making request');
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
    });
    console.log('request done: ');
    console.log(completion.data);

    const res = completion.data.choices[0].message as ChatCompletionRequestMessage;
    return res;
}