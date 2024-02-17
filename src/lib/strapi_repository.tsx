import ProjectCardModel from "./project_card_model";
import ProjectModel from "./project_model";
import MyUrls from "./strapi_urls";


export default class StrapiRepository {

    static headers = {
        headers: {
            'authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
        }
    }

    static async getProjectCards(): Promise<ProjectCardModel[]> {
        const response = await fetch(MyUrls.getProjectCards(), StrapiRepository.headers);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const json = await response.json();

        const projects = json.data.map((project: any) => ProjectCardModel.fromJson(project.attributes.Title, project.id));
        return projects;
    }

    static async getProject(id: string): Promise<ProjectModel> {
        const response = await fetch(MyUrls.getProject(id), StrapiRepository.headers);
        console.log(MyUrls.getProject(id));

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const json = await response.json();
        const json_project = json.data[0];
        const project = ProjectModel.fromJson(json_project.attributes.Title, json_project.id, json_project.attributes.Content);
        return project;
    }
}