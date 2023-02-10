// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from 'axios';

type GrammarStatus = {
  status: boolean;
  response: {
    errors: [
      {
        id: string;
        offset: number;
        length: number;
        bad: string;
        better: [];
        type: string;
      }
    ];
  };
};

const TEXTGEARS_API_KEY = process.env.TEXTGEARS_KEY_API;
const URL = "https://api.textgears.com";

async function checkGrammar(req: NextApiRequest, res: NextApiResponse) {

    await axios.get(`${URL}/grammar?key=${TEXTGEARS_API_KEY}&text=${req.query.text}&language=${req.query.lang}`).then((data:any)=>{
      res.status(200).json(data.data);
    }).catch(error=>{
      res.status(500).send(error.message);
    })




}

export default checkGrammar;
