import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Project from "./ProjectModel";

export default function Projects(props: { projects: Project[] }) {


  //turn projects into pairs
  const pairs: Array<Array<Project>> = []

  for (let i = 0; i < props.projects.length; i += 2) {
    pairs.push([props.projects[i], props.projects[i + 1]])
  }

  return <div>

    {pairs.map((pair, index: number) => {
      return <div key={index} className="grid grid-cols-1 md:grid-cols-3">
        <div className={`${index % 2 == 0 ? "col-span-2" : ""}`}>
          < ProjectCard  {...pair[0]} />
        </div>
        {
          pair && <div className={`${index % 2 == 1 ? "col-span-2" : ""}`}>
            <ProjectCard {...pair[1]} />
          </div>
        }
      </div>
    })}
  </div >
}
