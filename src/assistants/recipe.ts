import { ChatCompletionRequestMessage } from "openai";

import { BuildTrainingMessages, SingleChatInteractionPops, TrainingMessagesProps } from "src/messages/trainingMessages.js";
import gpt from "../gptHandler/gpt.js";

export async function getRecipe({ ingridients, utensils, max_calories, language }: RecipeProps): Promise<RecipeData> {
    const text = `
    food: ${ingridients.join(", ")}
    tools: ${utensils.join(", ")}
    max-calories: ${max_calories}
    `;

    const m = [...trainingMesages, { role: "user", content: text }] as ChatCompletionRequestMessage[]
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



// ============================ training messages

const systemMessage = `
You are a cook and nutritionist assistant, I will send to you a list of ingredients and tools that can be used, and you will send a response with the recipe.
Your response message must contain the following:
- The name of the recipe
- a short description
- the ingredients
- the tools
- the steps to follow
- the time to cook
- the number of people it serves
- the calories per serving
- the response MUST be sent in a JSON format
- the recipe must not contain foods that are not on the list of ingredients

Do not submit a recipe that uses tools that are not listed.
Not all foods listed need to be used.
YOU **MUST** SEND ALL RESPONSES IN >ENGLISH<.
`

const interaction1: SingleChatInteractionPops = {
    userMessage: `
    food: avocado, cheese, milk, wine, chicken, rice
    tools: microwave, AirFryer, 
    max-calories: unlimited
    `,
    assistantMessage: `
    {
        "title": "Avocado and Egg Toast",
        "description": "A healthy and tasty breakfast option that combines creamy avocado and protein-packed eggs on top of crispy toast",
        "time": "45 minutes",
        "serves": "2",
        "calories_per_serving": "650",
        "ingredients": [
            "2 boneless, skinless chicken breasts",
            "1 avocado, peeled and diced",
            "1 cup uncooked white rice",
            "1 3/4 cups water",
            "1/2 cup milk",
            "1/2 cup shredded cheese",
            "1/4 cup white wine",
            "Salt and pepper to taste"
        ],
        "tools": [
            "microwave",
            "AirFryer"
        ],
        "steps": [
            "Cook rice in the microwave with 1 3/4 cups of water according to package instructions.",
            "Season the chicken with salt and pepper, and cook it in the AirFryer for 10-12 minutes, until cooked through.",
            "Shred the cooked chicken with a fork.",
            "In a microwave-safe bowl, mix together the cooked rice, milk, and cheese. Microwave on high for 1-2 minutes, until the cheese is melted and the mixture is creamy.",
            "Top the rice and cheese mixture with the shredded chicken, sliced avocado, and a drizzle of wine.",
            "Microwave the bowl for another 1-2 minutes, until everything is heated through.",
            "Serve immediately and enjoy!"
        ]
    }
    `
}

const interaction2: SingleChatInteractionPops = {
    userMessage: `
    food: Eggs, Avocado, Cheese, Milk, bread
    tools: microwave, AirFryer
    max-calories: unlimited
    `,
    assistantMessage: `
    {
        "title": "Avocado and Cheese Breakfast Toast",
        "description": "A quick and easy breakfast toast that combines creamy avocado and melted cheese on top of crispy bread.",
        ""time": "20 minutes",
        "serves": "2",
        "calories_per_serving": "180",
        "ingredients": [
            "4 slices of bread",
            "2 eggs",
            "1/2 avocado, mashed",
            "1/2 cup shredded cheese",
            "1/4 cup milk",
            "Salt and pepper to taste"
        ],
        "tools": [
            "oven",
            "AirFryer"
        ],
        "steps": [
            "Preheat the oven to 350°F (175°C).",
            "In a bowl, whisk together the eggs, milk, salt, and pepper.",
            "Grease a small baking dish with cooking spray and pour in the egg mixture.",
            "Bake the eggs for 10-12 minutes, until set.",
            "Meanwhile, place the bread slices in the AirFryer and cook for 4-5 minutes, until crispy and golden brown.",
            "Spread the mashed avocado on top of the bread slices.",
            "Sprinkle the shredded cheese on top of the avocado.",
            "Place the toast in the oven and bake for 2-3 minutes, until the cheese is melted and bubbly.",
            "Serve immediately and enjoy!"
        ]
    }
    `
}

const trainingProps: TrainingMessagesProps = {
    systemMessage,
    messagesPair: [interaction1, interaction2]
}
const trainingMesages = BuildTrainingMessages(trainingProps);
