import { fromJSON } from "postcss";
import Project from "../projects/ProjectModel";


export default class AiResponse {
    projectOrder: number[];
    text: string;

    constructor(projectOrder: number[], text: string) {
        this.projectOrder = projectOrder;
        this.text = text;
    }

    static fromJSON(json: any): AiResponse {
        return new AiResponse(json.projectOrder, json.text);
    }
}