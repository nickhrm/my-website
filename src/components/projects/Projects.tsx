import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Project from "./ProjectModel";

export default function Projects(props: { projects: Project[] }) {


  console.log(props)
  return <div>

    {props.projects.map((pair, index: number) => {
      return <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="odd:col-span-2">
          <ProjectCard  {...pair} />
        </div>
        {pair && <div className="even:col-span-2">
          <ProjectCard {...pair} />
        </div>}
      </div>
    })}
  </div>
}
