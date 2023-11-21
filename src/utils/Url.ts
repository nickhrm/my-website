

export default class MyUrl {

    static strapiBaseUrl: string = "http://localhost:1337";

    static getImageUrl(imageUrl: string) {
        return `http://localhost:1337${imageUrl}`;
    }

    static getProjects(): string {
        return MyUrl.strapiBaseUrl + "/api/projects?populate=deep";
    }

} 