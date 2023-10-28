import { fromJSON } from "postcss";
import ImageModel from "./ImageModel";



export default class TechnologyModel {

    name: string;
    image: ImageModel;

    constructor(name: string, image: ImageModel) {
        this.name = name;
        this.image = image;
    }

    static fromJSON(json: any): TechnologyModel {
        return new TechnologyModel(json.Name, ImageModel.fromJSON(json.Logo));

    }

    static fromJSONList(json: any[]): TechnologyModel[] {
        let arr = [];
        for (let i = 0; i < json.length; i++) {
            arr[i] = TechnologyModel.fromJSON(json[i]);
        }
        return arr;
    }

}