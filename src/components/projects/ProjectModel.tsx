


export default class Project{

    title: string;
    thumbnailUrl: string;
    logos: string[];

    description: string;

    constructor(title: string, thumbnailUrl: string, logos: string[], description: string){
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.logos = logos;
        this.description = description;
    }


    static fromJSON(json: any): Project{
        return new Project(json.title, json.thumbnailUrl, json.logos, json.description);
    }

    static fromJSONList(json: any[]): Project[]{
        for(let i = 0; i < json.length; i++){
            json[i] = Project.fromJSON(json[i]);
        }
        return json;
    }

}