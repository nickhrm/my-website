import MyUrls from "./urls";


export default class StrapiRepository {

    static headers = {
        'authorization': `Bearer ${process.env.STRAPI_TOKEN}`,
    }

    static async getProjects(): Promise<ProjectCardModel[]> {
        const response = await fetch(MyUrls.getProjectCards(), { headers: StrapiRepository.headers });
        const json: JSON[] = await response.json();
        console.log(json);
        const projects = json.map((project: any) => ProjectCardModel.fromJson(project.attributes.title));
        return projects;
    }
}