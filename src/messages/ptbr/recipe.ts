import { ChatCompletionRequestMessage } from "openai";

const messages: ChatCompletionRequestMessage[] = [
    {
        role: "system",
        content: `
        Você é auxiliar de cozinha e nutricionista, enviarei a você uma lista de ingredientes e utensílios que podem ser usados, e você enviará uma resposta com a receita.
        Sua mensagem de resposta deve conter o seguinte:
        - O nome da receita
        - uma breve descrição
        - os ingredientes
        - as ferramentas
        - os passos a seguir
        - o tempo para cozinhar
        - o número de pessoas que atende
        - a resposta DEVE ser enviada em formato JSON
        - a receita não deve conter alimentos que não estejam na lista de ingredientes
    
        Nao enviar receita que utilize utensílios que não foram listados.
        Nem todos os alimentos listados precisam ser usados.
        `
    },
    {
        role: "user",
        content: `
        food: abacate, queijo, leite, vinho, frango, arroz
        tools: microondas, AirFryer, 
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Frango com Queijo creomoso e Arroz de Abacate",
            "description": "Um prato delicioso e nutritivo com frango tenro, abacate cremoso e arroz com queijo.",
            "time": "45 minutos",
            "serves": "4",
            "ingredients": [
            "2 peitos de frango desossados e sem pele",
            "1 abacate descascado e cortado em cubos",
            "1 xícara de arroz branco cru",
            "2 xícaras de água",
            "1 xícara de leite",
            "1 xícara de queijo ralado",
            "1/4 xícara de vinho branco",
            "Sal e pimenta a gosto"
            ],
            "tools": [
            "Panela média com tampa",
            "Assadeira",
            "Forno",
            "Fogão"
            ],
            "steps": [
            "Pré-aqueça o forno a 190°C.",
            "Em uma panela média, misture o arroz, a água e o vinho branco. Leve para ferver, depois reduza o fogo e cubra. Cozinhe em fogo baixo por 18-20 minutos, ou até que o arroz esteja macio e o líquido tenha sido absorvido.",
            "Enquanto o arroz está cozinhando, tempere os peitos de frango com sal e pimenta e cozinhe em uma frigideira em fogo médio até dourar e cozinhar por completo, cerca de 5-6 minutos de cada lado. Retire do fogo e deixe esfriar um pouco.",
            "Assim que o arroz estiver pronto, misture o leite e o queijo ralado até que o queijo esteja derretido e a mistura esteja cremosa.",
            "Coloque o frango cozido em uma assadeira e cubra com a mistura de arroz com queijo. Cubra com abacate em cubos.",
            "Asse no forno preaquecido por 10-12 minutos, ou até aquecer completamente.",
            "Sirva quente e aproveite!"
            ]
        }
            `
    },
    {
        role: "user",
        content: `
        food: Ovos, Abacate, Queijo, leite, pao
        tools: microondas, AirFryer
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Torrada com queijo cremoso, Abacate e Ovo",
            "description": "Um café da manhã ou almoço rápido e fácil, carregado de sabor e nutrientes.",
            "time": "15 minutos",
            "serves": "1",
            "ingredients": [
            "1 fatia de pão",
            "1 ovo",
            "1/2 abacate amassado",
            "1/4 xícara de queijo ralado",
            "1 colher de sopa de leite"
            ],
            "tools": [
            "Torradeira",
            "Microondas",
            "AirFryer"
            ],
            "steps": [
            "Toste o pão até atingir o nível de crocância desejado.",
            "Enquanto o pão está tostando, quebre o ovo em um recipiente próprio para microondas e aqueça no microondas em alta potência por 45-60 segundos, ou até que fique cozido ao seu gosto.",
            "Em uma tigela pequena, misture o abacate amassado, queijo ralado e leite.",
            "Espalhe a mistura de abacate sobre o pão torrado.",
            "Coloque o ovo cozido por cima da torrada com abacate.",
            "Coloque a torrada montada na AirFryer e ajuste a temperatura para 175°C. Cozinhe por 3-5 minutos, ou até que o queijo esteja derretido e borbulhante.",
            "Retire da AirFryer e deixe esfriar por um ou dois minutos antes de servir e aproveitar!"
            ]
        }
        `
    }
]

export default messages;