import { Configuration, OpenAIApi } from "openai";

// setup configuration
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

// create api interface
const openai = new OpenAIApi(configuration);

export async function createText(prompt, temperature) {
    // generate poem text
    let completion;
    try {
        completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a poem about ${prompt}`,
            temperature: temperature,
            max_tokens: 2048
        });
    }
    catch (error) {
        console.error(error);
    }
    return completion.data.choices[0].text;
}

export async function createTitle(prompt, temperature) {
    // generate poem title
    let completion;
    try {
        completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a title for a poem about ${prompt}`,
            temperature: temperature,
        });
    }
    catch (error) {
        console.error(error);
    }
    return completion.data.choices[0].text;
}
