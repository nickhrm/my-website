

export default class MyUrl {

    strapiBaseUrl: string = "http://localhost:1337";

    static getImageUrl(imageUrl: string) {
        return `http://localhost:1337${imageUrl}`;
    }

}