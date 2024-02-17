import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ProjectCard from "./project_card";
import StrapiRepository from "@/lib/strapi_repository";
import ProjectCardModel from "@/lib/project_card_model";
import { use, useEffect } from "react";




export default async function Home() {

  const projects = await StrapiRepository.getProjectCards();

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      {/* <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Hi, Ich bin Softwareentwickler und Produktentwickler aus Hannover
        </h2>
        <img className="h-48 rounded-full" src="profile.webp"></img>

      </div>

      <div className="h-6"></div>

      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: ProjectCardModel, index: number) => (
          <ProjectCard key={project.id} title={project.title} id={project.id} />
        ))}
      </div>

    </main>
  );
}
