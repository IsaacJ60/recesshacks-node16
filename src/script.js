import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
import fs from "fs"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const prompt = "You are a medical professional, what screenings would you recommend to a person who has answered the following medical survey?" + fs.readFileSync("src/form.txt", "utf-8") + "Make sure everything you recommend is a screening, and strictly appropriate given their answers. Give a quick description of what the screening does/is for as well, and phrase it as if you are talking directly to the patient. **Only recommend up to 5 screenings.** Do not write any pretext or post-text, only the list of screenings.";

(async () => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })
  console.log(response.data.choices[0].message.content)
})();