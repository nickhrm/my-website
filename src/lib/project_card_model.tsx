

export default class ProjectCardModel {
    title: string;
    id: string;
    tags: string;
    constructor(
        title: string,
        id: string,
        tags: string
    ) {
        this.title = title;
        this.id = id;
        this.tags = tags;
    }



    static fromJson(title: any, id: any, tags: any): ProjectCardModel {
        return new ProjectCardModel(
            title, id, tags
        );
    }
}
