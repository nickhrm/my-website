import ImageModel from "../../other/ImageModel";
import HeadingModel from "./HeadingModel";
import ParagraphModel from "./ParagraphModel";


export default function getContentModel(json: any) {

    switch (json.type) {
        case "heading": return HeadingModel.fromJSON(json.children[0].text);

        case "paragraph": return ParagraphModel.fromJSON(json.children[0].text);

        case "image": return ImageModel.fromJSON(json.image.url);
        
        default: return null;
    }


}