

class ProjectCardModel {
    constructor(
        public title: string,

    ) { }


    static fromJson(json: any): ProjectCardModel {
        return new ProjectCardModel(
            json.title,
        );
    }
}
