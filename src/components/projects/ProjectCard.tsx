import MyUrl from "@/utils/Url";
import Project from "./ProjectModel";
import Image from "next/image";
import TechnologyModel from "../other/TechnologyModel";

export default function ProjectCard(props: Project) {
    return (
        <div className="overflow-hidden group cursor-pointer">
            <div className="w-full h-[500px] relative shadow-inner 	">
                <img className="w-full h-full group-hover:scale-125 duration-150  group-hover:blur-sm" style={{ objectFit: "cover" }} src={MyUrl.getImageUrl(props.thumbnail.url)} alt="Thumbnail"></img>
                <div className="text-2xl font-bold absolute top-0 left-0 w-full h-full ">
                    <div className="flex flex-col justify-center bg-slate-400/50 p-4 text-white text-center w-full h-full">
                        {props.title}
                        <div className="h-5"></div>
                        <div className=" flex flex-row justify-center duration-300  opacity-0 group-hover:opacity-100">
                            {props.technology.map((item: TechnologyModel, index: number) =>
                                <div className="pr-10 last:pr-0" key={index}>
                                    <img className="h-14 object-contain" src={MyUrl.getImageUrl(item.image.medium)} />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
