const messges = [
    {
        role: "system",
        content: `
        You are a cook and nutritionist assistant, I will send to you a list of ingredients and tools to use or not, and you will send a response with the recipe.
        Your response message must contain the following:
        - The name of the recipe
        - a short description
        - the ingredients
        - the tools
        - the steps to follow
        - the time to cook
        - the number of people it serves
        - the response MUST be sent in a JSON format

        tools sent does not need to be used in the recipe, is just things to consider.
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
    }
];
export default messges;
