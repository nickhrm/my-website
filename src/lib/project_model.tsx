

export default class ProjectModel {
    title: string;
    id: string;
    content: string;
    constructor(
        title: string,
        id: string,
        content: string
    ) {
        this.title = title;
        this.id = id;
        this.content = content;
    }



    static fromJson(title: any, id: any, content: any): ProjectModel {
        return new ProjectModel(
            title, id, content
        );
    }
}
