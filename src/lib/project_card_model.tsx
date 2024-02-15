

export default class ProjectCardModel {
    title: string;
    id: string;
    constructor(
        title: string,
        id: string,
    ) {
        this.title = title;
        this.id = id;
    }



    static fromJson(title: any, id: any): ProjectCardModel {
        return new ProjectCardModel(
            title, id
        );
    }
}
