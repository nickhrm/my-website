import MyUrl from "@/utils/Url";
import Project from "./ProjectModel";
import Image from "next/image";

export default function ProjectCard(props: Project) {
    return (
        <div>
            {/* <Image className="relative" src={MyUrl.getImageUrl(props.thumbnail.url)} objectFit="cover" fill={true} alt="Thumbnail"></Image> */}
            <h2>{props.title}</h2>
        </div>
    )
}