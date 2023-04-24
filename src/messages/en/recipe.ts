import { ChatCompletionRequestMessage } from "openai";

const messages: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content: `
        You are a cook and nutritionist assistant, I will send to you a list of ingredients and tools that can be used, and you will send a response with the recipe.
        Your response message must contain the following:
        - The name of the recipe
        - a short description
        - the ingredients
        - the tools
        - the steps to follow
        - the time to cook
        - the number of people it serves
        - the response MUST be sent in a JSON format
        - the recipe must not contain foods that are not on the list of ingredients
    
        Do not submit a recipe that uses tools that are not listed.
        Not all foods listed need to be used.
        `
    },
    {
        role: "user",
        content: `
        food: avocado, cheese, milk, wine, chicken, rice
        tools: microwave, AirFryer, 
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Cheesy Chicken and Avocado Rice",
            "description": "A delicious and nutritious dish featuring tender chicken, creamy avocado, and cheesy rice.",
            "time": "45 minutes",
            "serves": "4",
            "ingredients": [
            "2 boneless, skinless chicken breasts",
            "1 avocado, peeled and diced",
            "1 cup uncooked white rice",
            "2 cups water",
            "1 cup milk",
            "1 cup shredded cheese",
            "1/4 cup white wine",
            "Salt and pepper to taste"
            ],
            "tools": [
            "Medium saucepan with lid",
            "Baking dish",
            "Oven",
            "Stove"
            ],
            "steps": [
            "Preheat oven to 375°F (190°C).",
            "In a medium saucepan, combine the rice, water, and white wine. Bring to a boil, then reduce heat to low and cover. Simmer for 18-20 minutes, or until the rice is tender and the liquid has been absorbed.",
            "While the rice is cooking, season the chicken breasts with salt and pepper and cook in a skillet over medium heat until browned and cooked through, about 5-6 minutes per side. Remove from heat and let cool slightly.",
            "Once the rice is done, stir in the milk and shredded cheese until the cheese is melted and the mixture is creamy.",
            "Place the cooked chicken in a baking dish and cover with the cheesy rice mixture. Top with diced avocado.",
            "Bake in the preheated oven for 10-12 minutes, or until heated through.",
            "Serve hot and enjoy!"
            ]
        }
            `
    },
    {
        role: "user",
        content: `
        food: Eggs, Avocado, Cheese, Milk, bread
        tools: microwave, AirFryer
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Cheesy Avocado Toast with Egg",
            "description": "A quick and easy breakfast or lunch thats loaded with flavor and nutrients.",
            "time": "15 minutes",
            "serves": "1",
            "ingredients": [
            "1 slice of bread",
            "1 egg",
            "1/2 of an avocado, mashed",
            "1/4 cup shredded cheese",
            "1 tbsp milk"
            ],
            "tools": [
            "Toaster",
            "Microwave",
            "AirFryer"
            ],
            "steps": [
            "Toast the bread to your desired level of crispiness.",
            "While the bread is toasting, crack the egg into a microwave-safe container and microwave on high for 45-60 seconds, or until cooked to your liking.",
            "In a small bowl, mix together the mashed avocado, shredded cheese, and milk.",
            "Spread the avocado mixture onto the toasted bread.",
            "Top the avocado toast with the cooked egg.",
            "Place the assembled toast into the AirFryer and set the temperature to 350°F (175°C). Cook for 3-5 minutes, or until the cheese is melted and bubbly.",
            "Remove from the AirFryer and let cool for a minute or two before serving and enjoying!"
            ]
        }
        `
    }
]

export default messages;