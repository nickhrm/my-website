import AiResponse from "@/components/models/ai/ResponseMOdel";
import Project from "@/components/projects/ProjectModel";
import OpenAI from "openai";




export default async function aiRequest(projects: Project[], query: string): Promise<AiResponse> {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY,
        dangerouslyAllowBrowser: true,
    }); 



    let systemMessage = "Du sollst die Folgende liste an Projekten, welche auf der Portfoliowebsite eines Entwicklers sichtbar ist danach sortieren, wie gut ein Projekt zur Anfrage einer Firma passt. Je mehr ein Projekt zeigt, dass ich Erfahrung mit dem habe was die Firma interessiert, desto besser passt das Projekt zur Anfrage der Firma. Als Antwort möchte ich ein JSON Objekt bekommen, welches die keys: 'projectOrder' und 'text' hat. 'projectOrder' soll eine Liste aus den Nummern der Projekte sein. Es sollen jedes mal alle Indizes vorhanden sein. 'text' ist ein String, welcher der Firma erklärt, welche Projekte von mir(der Entwickler) gut zu den anforderungen der Firma passen und ob ich die richtige Person für ihre Anfrage bin (es darf auch ein nein sein) Erwähne bei 'text' nicht die Namen 'Projekt X'. Die Projekte sind untereinader durch |-Symbole abgetrent Hier die Projekte: " + projects.map((project: Project, index: number) => "Projekt " + index + ": " + project.togptString()).join("| ")

    console.log(("SystemMessage:" + systemMessage))

    const gptResponse = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemMessage
            },
            {
                role: "user",
                content: query
            },
        ],
        model: "gpt-3.5-turbo",

    })

    console.dir(gptResponse, { depth: null })

    return (AiResponse.fromJSON(JSON.parse(gptResponse.choices[0].message.content ?? "FEHLER")))


}
