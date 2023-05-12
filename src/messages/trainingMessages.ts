import { ChatCompletionRequestMessage } from "openai";

export type TrainingMessagesProps = {
    systemMessage: string,
    messagesPair: SingleChatInteractionPops[],
}

export type SingleChatInteractionPops = {
    userMessage: string,
    assistantMessage: string,
}

export function BuildTrainingMessages({ systemMessage, messagesPair }: TrainingMessagesProps): ChatCompletionRequestMessage[] {
    const messages: ChatCompletionRequestMessage[] = [];
    
    // load system instructions
    messages.push({ role: 'system', content: systemMessage });

    // load example messages
    messagesPair.forEach(({ userMessage, assistantMessage }) => {
        messages.push({ role: 'user', content: userMessage });
        messages.push({ role: 'assistant', content: assistantMessage });
    })

    return messages;
}