import { fromJSON } from "postcss";
import Project from "../projects/ProjectModel";


export default class AiResponse{
    project: Project[];
    text: string;

    constructor(project: Project[], text: string){
        this.project = project;
        this.text = text;
    }

    static fromJSON(json: any): AiResponse{
        return new AiResponse(json.project, json.text);
    }
}