import Project from "../projects/ProjectModel";
import ProjectCardNew from "./ProjectCard";


export default function ProjectsNew(props: { projects: Project[] }) {



    return <>
        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* <!-- Title --> */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Meine Projekte</h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Grid --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* <!-- Card --> */}

                {props.projects.map((project, index) =>
                    //@ts-ignore
                    <ProjectCardNew {...project} key={index}></ProjectCardNew>
                )}
            </div>
            {/* <!-- End Card Blog --> */}
        </div>
    </>
}