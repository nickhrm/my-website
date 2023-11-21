import Header from "@/components/ui/Header";
import Project from "@/components/projects/ProjectModel";

import Kontakt from "@/components/ui/Kontakt";
import NavBar from "@/components/ui/NavBar";
import ProjectsNew from "@/components/ui/Projects";
import MyUrl from "@/utils/Url";
import { useState } from "react";

export default function Home(props: { projects: any }) {

  const [projects, setProjects] = useState<Project[]>(Project.fromJSONList(props.projects))

  if (projects.length == 0) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-4xl">
        Loading...
      </div>
    </div>
  } else {
    return (
      <div >
        <NavBar></NavBar>

        <div id="scrollspy-1" className="mt-3 space-y-4 h-96">
          <div id="first">
            <Header setProjects={setProjects} projects={projects}></Header>
          </div>

          <div id="second">
            <ProjectsNew projects={projects}></ProjectsNew>
          </div>

          <div id="third">
            <Kontakt></Kontakt>
          </div>

        </div>

      </div>
    )
  }


}


export async function getStaticProps(constext: any) {
  const url = MyUrl.getProjects();
  const headers = {
    headers: {
      "Authorization": "Bearer " + process.env.STRAPI_KEY
    },
  }


  let data = null
  try {
    const response = await fetch(url, headers)

    data = await response.json()
    console.dir(data, { depth: null })

  }
  catch (error) {
  }

  return {
    props: {
      projects: data.data
    }
  }
}




