import { useForm } from "react-hook-form";
import Search from "./Search";
import Image from 'next/image'
import Project from "../projects/ProjectModel";
import aiRequest from "@/utils/ai";
import { useState } from "react";
import AiResponse from "../models/ai/ResponseMOdel";

interface HeaderProps {
    setProjects: Function
    projects: Project[]
}


export default function Header(props: HeaderProps) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [responseText, setResponseText] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    async function onSubmit(data: any) {
        setLoading(true)
        const text: string = data.text

        try {
            const aiResponse: AiResponse = await aiRequest(props.projects, text)
            console.log(aiResponse)
            //sort projects by array of numbers included in AiResponse
            const sortedProjects: Project[] = []
            aiResponse.projectOrder.forEach((index: number) => {
                sortedProjects.push(props.projects[index])
            })
            props.setProjects(sortedProjects)
            setResponseText(aiResponse.text)
        } catch (error) {
            console.error(error)
            setResponseText("Es ist ein Fehler aufgetreten")
        } finally {
            setLoading(false)
        }


    }

    return (
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
                <div className="w-full flex  justify-center pb-10">
                    <Image alt="Bild von mir" src="/portrait.jpg" className="rounded-full" width={100} height={100}></Image>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 ">
                        Nick Hermann
                    </h1>

                    <p className="mt-3 text-gray-600 ">
                        Ich bin Software Entwickler aus Hannover
                    </p>

                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                        {loading && <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full " role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {!loading && <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                            <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100  ">
                                <div className="flex-[1_0_0%]">
                                    <label htmlFor="hs-search-article-1" className="block text-sm text-gray-700 font-medium "><span className="sr-only">Projekt- oder Jobbeschreibung einfügen</span></label>
                                    <input {...register("text")} className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 " placeholder="Projekt- oder Jobbeschreibung einfügen" />
                                </div>
                                <div className="flex-[0_0_auto]">
                                    <button className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>}
                        <p className="mt-6">
                            {responseText}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}