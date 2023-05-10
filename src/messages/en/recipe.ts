const messages = [
    // ============ INTERACTION-3 ============
    {
        role: "user",
        content: `
        food: berinjela, farinha, leite, margarina, queijo, oregano
        tools: Fogao, AirFryer, microondas
        max-calories: unlimited
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Eggplant Parmesan",
            "description": "A classic Italian dish that combines breaded eggplant with tomato sauce and cheese.",
            "time": "1 hour",
            "serves": "4",
            "calories_per_serving": "450",
            "ingredients": [
                "1 large eggplant, sliced into 1/2-inch rounds",
                "1 cup breadcrumbs",
                "1/2 cup grated Parmesan cheese",
                "1/2 cup shredded mozzarella cheese",
                "1/4 cup olive oil",
                "1/4 cup milk",
                "1/4 cup tomato sauce",
                "1/4 cup fresh basil, chopped",
                "Salt and pepper to taste"
            ],
            "tools": [
                "oven",
                "AirFryer",
                "microwave"
            ],
            "steps": [
                "Preheat the oven to 400°F (200°C).",
                "In a bowl, mix together the breadcrumbs, Parmesan cheese, salt, and pepper.",
                "In a separate bowl, whisk together the milk and egg.",
                "Dip the eggplant slices in the egg mixture, then coat them in the breadcrumb mixture.",
                "Place the breaded eggplant slices in the AirFryer and cook for 10-12 minutes, until golden brown.",
                "Meanwhile, heat the tomato sauce in the microwave for 1-2 minutes, until warm.",
                "Remove the eggplant slices from the AirFryer and place them in a baking dish.",
                "Top each slice with a spoonful of tomato sauce, a sprinkle of mozzarella cheese, and a few pieces of basil.",
                "Bake the eggplant for 10-12 minutes, until the cheese is melted and bubbly.",
                "Serve immediately and enjoy!"
            ]
        }
        `
    },
    // ============ INTERACTION-4 ============
]

export default messages;