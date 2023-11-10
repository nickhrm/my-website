

export default class ParagraphModel {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    static fromJSON(json: any): ParagraphModel {
        return new ParagraphModel(json.text);
    }


}