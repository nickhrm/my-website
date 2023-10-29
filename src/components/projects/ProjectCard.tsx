import MyUrl from "@/utils/Url";
import Project from "./ProjectModel";
import Image from "next/image";

export default function ProjectCard(props: Project) {
    console.log(MyUrl.getImageUrl(props.thumbnail.url))
    return (
        <div>
            <div className="relative">
                <Image className="" src={MyUrl.getImageUrl(props.thumbnail.url)} objectFit="cover" fill={true} alt="Thumbnail"></Image>

            </div>
            <h2>{props.title}</h2>
        </div>
    )
}   