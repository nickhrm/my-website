import Header from "@/components/Header";
import AiResponse from "@/components/ai/ResponseMOdel";
import Project from "@/components/projects/ProjectModel";
import Projects from "@/components/projects/Projects";
import aiRequest from "@/utils/ai";
import { cp } from "fs";
import { get } from "http";
import { use, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { json } from "stream/consumers";


export default function Home(props: { projects: any }) {




  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [projects, setProjects] = useState<Project[]>(Project.fromJSONList(props.projects))
  const [responseText, setResponseText] = useState<string>("")


  useEffect(() => { console.dir(projects, { depth: null }) }, [projects])

  async function onSubmit(data: any) {

    const text: string = data.text

    const aiResponse: AiResponse = await aiRequest(projects, "Ich suche jemanden der sich mit strapi auskennt")

    console.log("AiResponse:")
    console.dir(aiResponse, { depth: null })
    //sort projects by array of numbers included in AiResponse
    const sortedProjects: Project[] = []
    aiResponse.projectOrder.forEach((index: number) => {
      sortedProjects.push(projects[index])
    })
    sortedProjects.reverse()
    setProjects(sortedProjects)
    setResponseText(aiResponse.text)
  }



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
        <form className="w-full max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input {...register("text")} type="text" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Abschicken</button>

          </div>
        </form>
        <p className="my-6 text-black z-30">{responseText}</p>
        <Projects projects={projects} />


      </main>
    )
  }


}


export async function getStaticProps(constext: any) {
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
  }

  return {
    props: {
      projects: data.data
    }
  }
}




