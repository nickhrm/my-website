

export default class ImageModel {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    url: string;

    constructor(thumbnail: string, small: string, medium: string, large: string, url: string) {
        this.thumbnail = thumbnail;
        this.small = small;
        this.medium = medium;
        this.large = large;
        this.url = url;
    }


    static fromJSON(json: any): ImageModel {
        const attributes = json.data.attributes
        return new ImageModel(attributes.formats?.thumbnail?.url ?? attributes.url, attributes.formats?.small?.url ?? attributes.url, attributes.formats?.medium?.url ?? attributes.url, attributes.formats?.large?.url ?? attributes.url, attributes.url);
    }

    static fromJSONList(json: any[]): ImageModel[] {
        let arr = [];
        for (let i = 0; i < json.length; i++) {
            arr[i] = ImageModel.fromJSON(json[i]);
        }
        return arr;
    }
}