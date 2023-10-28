import Header from "@/components/Header";
import Project from "@/components/projects/ProjectModel";
import Projects from "@/components/projects/Projects";
import { use } from "react";


export default function Home(props: any) {

  const projects: Project[] = Project.fromJSONList(props);

  //call gpt endpoint


  return (
    <main className=''>
    <Header></Header>
    <Projects {...projects}> </Projects>
    </main>
  )
}




export async function getStaticProps() {



    const url = "http://localhost:1337/api/projects?populate=deep"



    // Get external data from the file system, API, DB, etc.
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + process.env.STRAPI_KEY
      }
    })
  
    // The value of the `props` key will be
    //  passed to the `Home` component

    console.dir(data, {depth: null})
    return {
      props: data
    }
  }
