import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Project from "./ProjectModel";

export default function Projects(props: Project[]) {

  // if (props.length = 0) {
  //   return <div>Kein Projekt</div>

  // } else {
  const [pairs, setPairs] = useState<Array<Array<Project>>>([])


  //split the array into pairs of two
  for (let i = 0; i < props.length; i++) {
    if (i % 2 == 0) {
      console.log(props[i])
      setPairs([...pairs, [props[i]]])
    } else {
      pairs[Math.floor(i / 2)].push(props[i])
    }
  }
  console.log(pairs)

  return <div>
    {pairs.map((pair, index: number) => {
      return <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="odd:col-span-2">
          <ProjectCard  {...pair[0]} />
        </div>
        {pair[1] && <div className="even:col-span-2">
          <ProjectCard {...pair[1]} />
        </div>}

      </div>
    }

    )}

  </div>

}

