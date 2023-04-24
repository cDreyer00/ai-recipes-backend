import dotenv from "dotenv";
dotenv.config();

import { Content, run } from "./gptHandler/gpt.js";

const m: Content = {
    foods: ["cheese", "flour", "milk", "butter", "cream cheese", "dry tomato"],
    tools: ["Stove", "AirFryer"],
}

// run(m).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })