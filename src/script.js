import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import fs from "fs"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const prompt = fs.readFileSync("src/form.txt", "utf-8");

(async () => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })
  console.log(response.data.choices[0].message.content)
})();