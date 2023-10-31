import AiResponse from "@/components/ai/ResponseMOdel";
import Project from "@/components/projects/ProjectModel";
import OpenAI from "openai";




export default async function aiRequest(projects: Project[], query: string): Promise<AiResponse> {

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY,
        dangerouslyAllowBrowser: true,
    });


    let systemMessage = "Du sollst die Folgende liste an Projekten danach sortieren, wie gut sie zu der Anfrage des Users passen. Ds ein Projekt wichtig ist bedeutet, dass es zeigt, dass ich das wonach der Nutzer fragt kann/schonmal gemacht habe. Als Antwort möchte ich ein JSON Objekt bekommen,welches die keys: 'projectOrder' und 'text' hat. 'projectOrder' soll eine Liste an Zahlen sein, welche die passende reihenfolge als eine liste von indizes darstellt(beginnent bei 0, bis n-1, n = anzahl an Projekten, in der liste müssen immer genuaso viele zahlen sein, wie es Projekte gibt,  am Besten passend als erstes in die Liste). Es müssen immer alle Projekte in der Liste sein. 'text' soll ein String sein, indem du dem User erklärst, das du eine entscheidung getroffen hast und wie du diese gefällt hast Hier kommen die Projekte: " + projects.map((project: Project) => project.togptString()).join(", ")

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
