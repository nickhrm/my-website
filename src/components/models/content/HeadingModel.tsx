

export default class HeadingModel{
    text: string; 

    constructor(text: string){
        this.text = text;
    }

    static fromJSON(json: any): HeadingModel {
        return new HeadingModel(json.text);
    }


}