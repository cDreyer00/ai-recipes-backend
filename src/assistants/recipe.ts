import { ChatCompletionRequestMessage } from "openai";

import { BuildTrainingMessages, SingleChatInteractionPops, TrainingMessagesProps } from "../messages/trainingMessages.js";
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
    tools: string[],
    steps: string[],
}

export async function requestRecipe(recipeRequest: RecipeProps): Promise<RecipeData> {
    const message = JSON.stringify(recipeRequest);
    const m = [...trainingMesages(), { role: "user", content: message }] as ChatCompletionRequestMessage[]
    const res = await gpt(m);

    const recipe = JSON.parse(res.content) as RecipeData;
    return recipe;
}

// ============================ training messages

const trainingMesages = () => BuildTrainingMessages({
    systemMessage,
    messagesPair: [
        interaction1,
        interaction2,
        interaction3,
        interaction4,
    ]
});

const systemMessage = `
You are a highly skilled chef who gives recipes with given ingredients and other aditional informations.
the informations given are:
- ingridients,
- utensils that can be used,
- max calories per serving,
- max time the recipe can have,
- serves amount,
- observations,
- recipe language.

You ALWAYS need to send a recipe as a JSON object with the following properties:
- title of the recipe
- a short description
- ingridients
- utensils
- steps to cook
- time to cook
- number of people it serves
- calories per serving

Besides ingridients, all other properties are optional.
In case that utensils are not specified, you can assume that the user has all the utensils needed.
In case that time is not specified, you can assume that the user has all the time needed.
In case that serves is not specified, you can assume that the recipe serves 1 person.
In case that calories is not specified, you can assume that the recipe does not have a max calories restriction.
Do not submit a recipe that uses tools that are not listed.
Not all foods listed need to be used.
`

const interaction1: SingleChatInteractionPops = {
    userMessage: `
    {"ingridients":["avocado","cheese","milk","wine","chicken","rice"],"utensils":["microwave","AirFryer"],"time":60,"language":"en"}
    `,
    assistantMessage: `
    {
        "title": "Creamy Avocado and Chicken Rice Bowl",
        "description": "A delicious and satisfying rice bowl topped with creamy avocado, tender chicken, and a touch of wine.",
        "time": "45 minutes",
        "serves": 4,
        "calories": 250,
        "ingredients": [
            "2 chicken breasts",
            "1 avocado",
            "1 cup rice",
            "400ml water",
            "1/2 cup milk",
            "1/2 cup shredded cheese",
            "1/4 cup white wine",
            "Salt and pepper to taste"
        ],
        "utensils": [
            "microwave",
            "AirFryer"
        ],
        "steps": [
            "Cook rice in the microwave with 1 3/4 cups of water according to package instructions.",
            "Season the chicken with salt and pepper, and cook it in the AirFryer for 10-12 minutes, until cooked through.",
            "Let the chicken rest for a few minutes, then slice it into thin strips.",
            "In a microwave-safe bowl, mix together the cooked rice, milk, and shredded cheese. Microwave on high for 1-2 minutes, until the cheese is melted and the mixture is creamy.",
            "Place the creamy rice in serving bowls.",
            "Top the rice with sliced avocado and the cooked chicken strips.",
            "Drizzle the white wine over the bowl.",
            "Season with additional salt and pepper if desired.",
            "Serve immediately and enjoy!"
        ]
    }
    `
}

const interaction2: SingleChatInteractionPops = {
    userMessage: `
    {"ingridients":["eggs","avocado","cheese","milk","bread"],"time":20,"language":"en"}
    `,
    assistantMessage: `
    {
        "title": "Avocado and Cheese Breakfast Toast",
        "description": "A quick and easy breakfast toast that combines creamy avocado and melted cheese on top of crispy bread.",
        "time": "20 minutes",
        "serves": "2",
        "calories": "180",
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

const interaction3: SingleChatInteractionPops = {
    userMessage: `
    {"ingridients":["berinjela","tomate","cebola","pimentão","alho","azeite","pimenta","orégano","queijo"],"time":50,"language":"ptbr"}
    `,
    assistantMessage: `
    {
        "title": "Lasanha de Berinjela",
        "description": "Uma deliciosa lasanha vegetariana de berinjela com tomate, cebola, pimentão e queijo derretido.",
        "time": "35 minutos",
        "serves": "1",
        "calories": "350",
        "ingredients": [
            "1/2 berinjela grande",
            "2 tomates maduros",
            "1 cebola grande",
            "1 pimentão verde",
            "2 dentes de alho picados",
            "2 colheres de sopa de azeite",
            "Pimenta-do-reino a gosto",
            "Orégano a gosto",
            "150g de queijo mussarela ralado"
        ],
        "tools": [
            "forno",
            "panela média",
            "assadeira"
        ],
        "steps": [
            "Preaqueça o forno a 200°C.",
            "Corte a berinjela em fatias finas e coloque-as em uma assadeira.",
            "Regue as fatias de berinjela com uma colher de sopa de azeite e tempere com sal e pimenta.",
            "Asse a berinjela no forno por 10-15 minutos, até que fique macia e levemente dourada.",
            "Enquanto a berinjela está assando, corte os tomates, a cebola e o pimentão em cubinhos.",
            "Em uma panela média, aqueça uma colher de sopa de azeite e refogue o alho até dourar.",
            "Adicione a cebola, o pimentão e os tomates na panela e cozinhe em fogo médio por 10 minutos, até que os legumes estejam macios.",
            "Tempere os legumes com sal, pimenta e orégano a gosto.",
            "Em uma assadeira, coloque uma camada de berinjela assada no fundo.",
            "Cubra a berinjela com uma camada do refogado de legumes e uma camada de queijo mussarela ralado.",
            "Repita as camadas até que todos os ingredientes acabem, terminando com uma camada de queijo.",
            "Asse no forno por 15-20 minutos, até que o queijo esteja derretido e dourado.",
            "Sirva quente e aproveite!"
        ]
    }
    `
}

const interaction4: SingleChatInteractionPops = {
    userMessage: `
    {"ingridients":["avocado","cheese","milk","wine","chicken","rice"],"language":"español"}
    `,
    assistantMessage: `
    {
        "title": "Arroz con Pollo y Aguacate",
        "description": "Un delicioso plato de arroz con pollo y aguacate, con un toque de vino y queso derretido.",
        "time": "40 minutos",
        "serves": "4",
        "calories": "450",
        "ingredients": [
            "2 tazas de arroz",
            "4 tazas de caldo de pollo",
            "2 pechugas de pollo, cortadas en cubos",
            "1/2 taza de vino blanco",
            "1/2 taza de leche",
            "1 aguacate grande, cortado en cubos",
            "1 taza de queso rallado",
            "Sal y pimienta al gusto",
            "Aceite de oliva"
        ],
        "tools": [
            "olla grande",
            "sartén grande",
            "espátula"
        ],
        "steps": [
            "Enjuague el arroz en agua fría y escúrralo.",
            "En una olla grande, caliente una cucharada de aceite de oliva a fuego medio.",
            "Agregue el arroz y cocine, revolviendo constantemente, durante 2-3 minutos, hasta que esté dorado.",
            "Agregue el caldo de pollo y el vino blanco al arroz y revuelva bien.",
            "Lleve a ebullición, luego reduzca el fuego a bajo y cubra la olla.",
            "Cocine a fuego lento durante 18-20 minutos, hasta que el arroz esté suave y el líquido se haya absorbido.",
            "Mientras tanto, sazone el pollo con sal y pimienta.",
            "En una sartén grande, caliente una cucharada de aceite de oliva a fuego medio-alto.",
            "Agregue el pollo y cocine durante 5-7 minutos, hasta que esté dorado y cocido por completo.",
            "Agregue la leche al arroz cocido y revuelva bien.",
            "Agregue el pollo cocido al arroz y mezcle suavemente.",
            "Agregue el aguacate cortado en cubos y el queso rallado al arroz y mezcle suavemente.",
            "Cocine a fuego lento durante 2-3 minutos, hasta que el queso se haya derretido.",
            "Sirva caliente y disfrute!"
        ]
    } 
    `
}
