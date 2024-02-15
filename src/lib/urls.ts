export default class MyUrls {

    static privateStrapiUrl = "http://strapi.nickhrm.de/api";


    static getProjectCards() {
        return this.privateStrapiUrl + "/projects?fields[0]=Title";
    }
} 