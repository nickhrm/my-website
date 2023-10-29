import MyUrl from "@/utils/Url";
import Project from "./ProjectModel";
import Image from "next/image";
import TechnologyModel from "../other/TechnologyModel";

export default function ProjectCard(props: Project) {
    console.log(MyUrl.getImageUrl(props.thumbnail.url))
    return (
        <div className="overflow-hidden">
            <div className="w-full h-[500px] relative shadow-inner hover:scale-125 duration-150	">
                <img className="w-full h-full " style={{ objectFit: "cover" }} src={MyUrl.getImageUrl(props.thumbnail.url)} alt="Thumbnail"></img>
                <div className="text-2xl font-bold absolute top-0 left-0 w-full h-full">
                    <div className="flex flex-col justify-center  bg-black bg-opacity-50 p-4 text-white text-center w-full h-full">
                        {props.title}
                        <div className="h-5"></div>
                        <div className="h-14 flex flex-row justify-around">{props.technology.map((item: TechnologyModel) =>
                            <img className="" style={{ objectFit: "contain" }} src={MyUrl.getImageUrl(item.image.medium)}></img>
                        )}</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
