import Header from "@/components/Header";
import Project from "@/components/projects/ProjectModel";
import Projects from "@/components/projects/Projects";
import { use, useEffect, useState } from "react";


export default function Home() {


  const [projects, setProjects] = useState<Project[]>([])

  //call gpt endpoint

  useEffect(() => {

    async function initialFetch() {

      const url = "http://localhost:1337/api/projects?populate=deep"
      const headers = {
        headers: {
          "Authorization": "Bearer " + process.env.STRAPI_KEY
        },
      }
      let data = null
      try {
        const response = await fetch(url, headers)
        data = await response.json()
      }
      catch (error) {
        console.log(error)
      }

      setProjects(Project.fromJSONList(data.data))
    }
    initialFetch()


  }, [])



  if (projects.length == 0) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-4xl">
        Loading...
      </div>
    </div>
  } else {
    return (
      <main className=''>
        <Header></Header>
        <Projects {...projects}> </Projects>
      </main>
    )
  }


}





