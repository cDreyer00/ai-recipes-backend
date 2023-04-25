import { ChatCompletionRequestMessage } from "openai";

const messages: ChatCompletionRequestMessage[] = [
    // ============ SYSTEM ============
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
        Voce deve mandar todas as respostas em portugues.
        `
    },
    // ============ INTERACTION-1 ============
    {
        role: "user",
        content: `
        food: abacate, queijo, leite, vinho, frango, arroz
        tools: microondas, AirFryer
        max-calories: unlimited
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Torrada de Abacate com Ovo",
            "description": "Uma opção saudável e saborosa para o café da manhã que combina abacate cremoso e ovos ricos em proteínas em cima de uma torrada crocante",
            "time": "45 minutos",
            "serves": "2",
            "calories_per_serving": "650",
            "ingredients": [
            "2 peitos de frango sem pele e sem osso",
            "1 abacate descascado e cortado em cubos",
            "1 xícara de arroz branco cru",
            "1 3/4 xícaras de água",
            "1/2 xícara de leite",
            "1/2 xícara de queijo ralado",
            "1/4 xícara de vinho branco",
            "Sal e pimenta a gosto"
            ],
            "tools": [
            "microondas",
            "AirFryer"
            ],
            "steps": [
            "Cozinhe o arroz no microondas com 1 3/4 xícaras de água de acordo com as instruções da embalagem.",
            "Tempere o frango com sal e pimenta e cozinhe na AirFryer por 10-12 minutos, até que esteja cozido por completo.",
            "Desfie o frango cozido com um garfo.",
            "Em uma tigela própria para microondas, misture o arroz cozido, o leite e o queijo. Leve ao microondas em alta por 1-2 minutos, até que o queijo esteja derretido e a mistura fique cremosa.",
            "Cubra a mistura de arroz e queijo com o frango desfiado, o abacate cortado em fatias e um fio de vinho.",
            "Leve a tigela ao microondas por mais 1-2 minutos, até que tudo esteja aquecido por completo.",
            "Sirva imediatamente e aproveite!"
            ]
        }
            `
    },
    // ============ INTERACTION-2 ============
    {
        role: "user",
        content: `
        food: Ovos, Abacate, Queijo, leite, pao
        tools: microondas, AirFryer, forno
        max-calories: 200
        `
    },
    {
        role: "assistant",
        content: `
        {
            "title": "Torrada de Abacate e Queijo no Café da Manhã",
            "description": "Uma torrada de café da manhã rápida e fácil que combina abacate cremoso e queijo derretido em cima de pão crocante.",
            "time": "20 minutos",
            "serves": "2",
            "calories_per_serving": "180",
            "ingredients": [
            "4 fatias de pão",
            "2 ovos",
            "1/2 abacate amassado",
            "1/2 xícara de queijo ralado",
            "1/4 xícara de leite",
            "Sal e pimenta a gosto"
            ],
            "tools": [
            "forno",
            "AirFryer"
            ],
            "steps": [
            "Pré-aqueça o forno a 175°C.",
            "Em uma tigela, misture os ovos, o leite, o sal e a pimenta.",
            "Unte uma pequena assadeira com spray de cozinha e despeje a mistura de ovos.",
            "Asse os ovos por 10-12 minutos, até que estejam firmes.",
            "Enquanto isso, coloque as fatias de pão no AirFryer e cozinhe por 4-5 minutos, até ficarem crocantes e douradas.",
            "Espalhe o abacate amassado em cima das fatias de pão.",
            "Polvilhe o queijo ralado em cima do abacate.",
            "Coloque as torradas no forno e asse por 2-3 minutos, até que o queijo esteja derretido e borbulhando.",
            "Sirva imediatamente e aproveite!"
            ]
        }
        `
    }
]

export default messages;