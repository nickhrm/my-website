import MyUrl from "@/utils/Url";
import Project from "../projects/ProjectModel";


export default function ProjectCardNew(props: Project) {
    return <a className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        <div className="aspect-w-16 aspect-h-11">
            <img className="w-full object-cover rounded-xl h-64" src={MyUrl.getImageUrl(props.thumbnail.url)} alt="Image Description" />
        </div>
        <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                {props.title}
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
                {props.description}
            </p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
            {props.technology.map((tech, index) =>
                <img key={index} className="w-12 h-12 rounded-sm object-contain" src={MyUrl.getImageUrl(tech.image.url)} alt="Image Description" />
            )}

        </div>
    </a>
}