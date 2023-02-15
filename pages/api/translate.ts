import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function translateText(req: NextApiRequest, res: NextApiResponse) {
    try {
        const translate = await openai.createCompletion({
            model:'text-davinci-003',
            prompt:`Translate this into ${req.query.language} : ${req.query.text}`,
            temperature:0.3,
            max_tokens: 100,
        })
        res.status(200).json(translate.data)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error:error.message});
    }
}

export default translateText;