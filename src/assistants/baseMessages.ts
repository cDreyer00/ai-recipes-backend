import { BuildTrainingMessages, SingleChatInteractionPops, TrainingMessagesProps } from "../messages/trainingMessages.js";

export const trainingMesages = () => BuildTrainingMessages({
    systemMessage,
    messagesPair: interactions
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
- an emoji that represents the recipe

Besides ingridients, all other properties are optional.
In case that utensils are not specified, you can assume that the user has all the utensils needed.
In case that time is not specified, you can assume that the user has all the time needed.
In case that serves is not specified, you can assume that the recipe serves 1 person.
In case that calories is not specified, you can assume that the recipe does not have a max calories restriction.
Do not submit a recipe that uses utensils that are not listed.
Not all foods listed need to be used.
you CAN NOT send messages that are not a recipe or in the exact json format. In case that the request does not have enough information, you can add extra information to the recipe.
`

const interactions: SingleChatInteractionPops[] = [
    {
        userMessage: `
        {"ingridients":["avocado","cheese","milk","wine","chicken","rice"],"utensils":["microwave","AirFryer"],"time":60,"language":"en"}
        `,
        assistantMessage: `
        {
            "title": "Creamy Avocado and Chicken Rice Bowl",
            "description": "A delicious and satisfying rice bowl topped with creamy avocado, tender chicken, and a touch of wine.",
            "time": "45",
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
    },
    {
        userMessage: `
        {"ingridients":["eggs","avocado","cheese","milk","bread"],"time":20,"language":"en"}
        `,

        assistantMessage: `
        {
            "title": "Ultimate Avocado Egg Melt",
            "description": "A delicious sandwich made with creamy eggs, ripe avocado, melted cheese, and toasted bread.",
            "time": 15,
            "serves": 2,
            "calories": 400,
            "ingredients": [
                "4 eggs",
                "1 ripe avocado",
                "100g cheese",
                "4 slices of bread",
                "2 tablespoons of milk",
                "Salt and pepper to taste"
            ],
            "utensils": [
                "Frying pan",
          "Bowl",
          "Knife"
        ],
        "steps": [
            "In a bowl, beat the eggs with milk. Season with salt and pepper.",
            "Heat a frying pan over medium heat and add the beaten eggs. Stir gently until creamy and cooked to your liking. Set aside.",
            "Cut the avocado in half, remove the pit, and slice the flesh.",
            "Toast the bread slices in a toaster or in a frying pan.",
            "Assemble the sandwich by layering creamy eggs, avocado slices, and cheese. Top with another slice of bread.",
            "Repeat the process for the second sandwich.",
            "Heat the frying pan over medium-low heat and place the sandwiches in the pan. Cook for a few minutes on each side until the cheese melts and the bread turns golden brown.",
            "Remove from the pan, cut in half, and serve hot."
        ],
        "emoji": "🥪",
        }
        `
    },
    {
        userMessage: `
        {"ingridients":["berinjela","tomate","cebola","pimentão","alho","azeite","pimenta","orégano","queijo"],"time":50,"language":"ptbr"}
        `,
        assistantMessage: `
        {
            "title": "Lasanha de Berinjela",
            "description": "Uma deliciosa lasanha vegetariana de berinjela com tomate, cebola, pimentão e queijo derretido.",
            "time": "35",
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
            "utensils": [
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
            ],
            "emoji": "🍆"
        }
        `
    },
    {
        userMessage: `
        {"ingridients":["avocado","cheese","milk","wine","chicken","rice"],"language":"español"}
        `,
        assistantMessage: `
        {
            "title": "Arroz con Pollo y Aguacate",
            "description": "Un delicioso plato de arroz con pollo y aguacate, con un toque de vino y queso derretido.",
            "time": "40",
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
            "utensils": [
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
            ],
            "emoji": "🥑"
        } 
        `
    },
    {
        userMessage: `
        {"ingridients":["avocado","cheese","potato","pasta","rice"],"language":"brazil","utensils":[],"kcal":0,"serves":0,"time":0}
        `,
        assistantMessage: `
        {
            "title": "Arroz com Batata, Abacate e Queijo",
            "description": "Um prato delicioso e fácil de arroz com batata, abacate cremoso e queijo derretido.",
            "time": "25",
            "serves": "1",
            "calories": "300",
            "ingredients": [
                "1 xícara de arroz",
                "2 xícaras de água",
                "1 batata média, cortada em cubos",
                "1 abacate maduro, descascado e cortado em pedaços",
                "1/2 xícara de queijo ralado",
                "Sal e pimenta a gosto"
            ],
            "utensils": [
                "panela média",
                "escorredor",
                "tigela"
            ],
            "steps": [
                "Lave o arroz em água fria e escorra.",
                "Em uma panela média, adicione o arroz e a água, e leve para ferver em fogo médio-alto.",
                "Reduza o fogo para baixo, cubra a panela e cozinhe por 18-20 minutos, ou até que a água tenha sido absorvida e o arroz esteja macio.",
                "Enquanto o arroz está cozinhando, cozinhe a batata em água fervente com sal por cerca de 10 minutos, ou até que esteja macia.",
                "Escorra a batata e misture com o arroz cozido em uma tigela grande.",
                "Adicione o abacate cortado em cubos e o queijo ralado ao arroz e misture delicadamente.",
                "Tempere com sal e pimenta a gosto.",
                "Sirva quente e aproveite!"
            ],
            "emoji": "🥑"
        }
        `
    },
    {
        userMessage: `
        {
            ingridients: [
                'Ovos',
                'feijão',
                'arroz',
                'sabão',
                'tomate',
                'cebola',
                'alho',
                'sal',
                'carne vermelha'
            ],
            utensils: [],
            serves: 0,
            time: 0,
            kcal: 0,
            language: 'Pt'
        }
        `,
        assistantMessage: `
        {
            "title": "Feijão com Arroz e Carne",
            "description": "Um prato tradicional brasileiro feito com feijão, arroz e carne vermelha.",
            "time": "60",
            "serves": "4",
            "calories": "400",
            "ingredients": [
                "2 xícaras de arroz",
                "2 xícaras de feijão cozido",
                "500g de carne vermelha cortada em cubos",
                "2 tomates picados",
                "1 cebola picada",
                "2 dentes de alho picados",
                "Sal a gosto"
            ],
            "utensils": [
                "panela média",
                "frigideira",
                "espátula"
            ],
            "steps": [
                "Cozinhe o arroz em uma panela média com água e sal a gosto.",
                "Enquanto o arroz cozinha, aqueça uma frigideira em fogo médio.",
                "Adicione a carne vermelha à frigideira e cozinhe por 5-7 minutos, até dourar.",
                "Adicione a cebola e o alho picados à frigideira e refogue por mais 2-3 minutos.",
                "Adicione os tomates picados e cozinhe por mais 5 minutos, até que os tomates estejam macios.",
                "Adicione o feijão cozido à frigideira e misture bem.",
                "Tempere com sal a gosto e cozinhe por mais alguns minutos, até que todos os ingredientes estejam bem combinados.",
                "Sirva o feijão com arroz e a carne vermelha por cima.",
                "Acompanhe com uma salada verde, se desejar.",
                "Bom apetite!"
            ],
            "emoji": "🍛"
        }
        `,
    },
    // {
    //     userMessage: `
    //     {
    //         ingridients: [
    //           'Carne',
    //           'batata',
    //           'arroz',
    //           'cenoura',
    //           'alvejante',
    //           'sabão',
    //           'cebola'
    //         ],
    //         utensils: [],
    //         serves: 0,
    //         time: 0,
    //         kcal: 0,
    //         language: 'Pt'
    //       }
    //     `,
    //     assistantMessage: `
    //     {
    //         "title": "Carne com Legumes",
    //         "description": "Um prato saudável e saboroso feito com carne e legumes variados.",
    //         "time": "60 minutos",
    //         "serves": "4",
    //         "calories": "400",
    //         "ingredients": [
    //           "500g de carne em cubos",
    //           "2 batatas grandes, descascadas e cortadas em cubos",
    //           "1 xícara de arroz",
    //           "2 cenouras médias, descascadas e cortadas em rodelas",
    //           "1 cebola grande, picada",
    //           "Sal e pimenta a gosto"
    //         ],
    //         "utensils": [
    //           "panela grande",
    //           "frigideira",
    //           "colher de pau"
    //         ],
    //         "steps": [
    //           "Cozinhe o arroz em uma panela grande com água e sal a gosto.",
    //           "Enquanto o arroz cozinha, aqueça uma frigideira em fogo médio.",
    //           "Adicione a carne em cubos à frigideira e cozinhe por 5-7 minutos, até que esteja dourada e cozida por completo.",
    //           "Retire a carne da frigideira e reserve.",
    //           "Na mesma frigideira, adicione as batatas e as cenouras cortadas em cubos e refogue por alguns minutos, até que estejam macias e douradas.",
    //           "Adicione a cebola picada à frigideira e refogue por mais alguns minutos.",
    //           "Adicione a carne de volta à frigideira e misture tudo muito bem.",
    //           "Tempere com sal e pimenta a gosto e cozinhe por mais alguns minutos para que todos os ingredientes estejam bem combinados.",
    //           "Sirva a carne com legumes por cima do arroz cozido.",
    //           "Bom apetite!"
    //         ],
    //         "emoji": "🥩"
    //       }
    //     `,
    // },
    // {
    //     userMessage: `
    //     {
    //         ingridients: [
    //           'Carne',
    //           'batata',
    //           'arroz',
    //           'cenoura',
    //           'alvejante',
    //           'sabão',
    //           'cebola'
    //         ],
    //         utensils: [],
    //         serves: 0,
    //         time: 0,
    //         kcal: 0,
    //         language: 'Pt'
    //       }
    //     `,
    //     assistantMessage: `
    //     {
    //         "title": "Arroz com Legumes",
    //         "description": "Um prato vegetariano delicioso e saudável, feito com arroz e uma variedade de legumes.",
    //         "time": "40 minutos",
    //         "serves": "4",
    //         "calories": "300",
    //         "ingredients": [
    //             "2 xícaras de arroz",
    //             "4 xícaras de água",
    //             "1 cenoura média, descascada e cortada em cubinhos",
    //             "1/2 pimentão vermelho, cortado em cubinhos",
    //             "1/2 pimentão amarelo, cortado em cubinhos",
    //             "1 cebola média, picada",
    //             "3 dentes de alho picados",
    //             "1 colher de sopa de azeite",
    //             "Sal e pimenta a gosto"
    //         ],
    //         "utensils": [
    //             "panela grande",
    //             "colher",
    //             "faca",
    //             "tábua de corte"
    //         ],
    //         "steps": [
    //             "Lave o arroz em água corrente e deixe-o de molho por pelo menos 10 minutos.",
    //             "Em uma panela grande, aqueça o azeite em fogo médio.",
    //             "Adicione a cebola picada e o alho picado à panela e refogue por alguns minutos, até que estejam macios e perfumados.",
    //             "Adicione a cenoura cortada em cubinhos e os pimentões cortados em cubinhos à panela e refogue por mais alguns minutos.",
    //             "Adicione o arroz escorrido à panela e refogue por mais alguns minutos, mexendo sempre.",
    //             "Adicione as quatro xícaras de água à panela e misture bem.",
    //             "Tempere com sal e pimenta a gosto e deixe ferver.",
    //             "Reduza o fogo para baixo e cubra a panela com uma tampa.",
    //             "Cozinhe por 15-20 minutos, até que o arroz esteja macio e a água tenha sido absorvida.",
    //             "Sirva o arroz com legumes quente.",
    //             "Bom apetite!"
    //         ],
    //         "emoji": "🍚"
    //     }
    //     `,
    // },
]