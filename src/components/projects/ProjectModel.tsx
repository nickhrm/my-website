import ImageModel from "../other/ImageModel";
import TechnologyModel from "../other/TechnologyModel";



export default class Project {

    title: string;
    thumbnail: ImageModel;
    technology: TechnologyModel[];
    description: string;

    constructor(title: string, thumbnailUrl: ImageModel, technology: TechnologyModel[], description: string) {
        this.title = title;
        this.thumbnail = thumbnailUrl;
        this.technology = technology;
        this.description = description;
    }


    static fromJSON(json: any): Project {
        const attributes = json.attributes
        return new Project(attributes.Title, ImageModel.fromJSON(attributes.Thumbnail), TechnologyModel.fromJSONList(attributes.Technologies), attributes.description);
    }

    static fromJSONList(json: any[]): Project[] {
        let arr = [];
        for (let i = 0; i < json.length; i++) {
            arr[i] = Project.fromJSON(json[i]);
        }
        return arr;
    }

    //returns a string that can be used in the gpt endpoint
    togptString(): string {
        return this.title + " " + this.description + " " + this.technology.map((item: TechnologyModel) => item.name).join(" ");
    }

}