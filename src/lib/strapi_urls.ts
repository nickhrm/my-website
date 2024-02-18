export default class MyUrls {

    static privateStrapiUrl = "https://strapi.nickhrm.de/api";


    static getProjectCards() {
        return this.privateStrapiUrl + "/projects?fields[0]=Title&fields[1]=Tags";
    }

    static getProject(id: string) {
        return this.privateStrapiUrl + "/projects?filters[id][$eqi]=" + id;
    }
}