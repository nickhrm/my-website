export default function handler(req : any, res : any) {


    const openAiKey = process.env.OPENAI_KEY;

    console.log(req.body);
    res.status(200).json({ text: 'Hello' });
  }
  