import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ProjectCard from "./project_card";
import StrapiRepository from "@/lib/strapi_repository";
import ProjectCardModel from "@/lib/project_card_model";
import { use, useEffect } from "react";
import Link from "next/link";




export default async function Home() {

  const projects = await StrapiRepository.getProjectCards();

  return (
    <main className="flex flex-col items-center">
      {/* <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}

      <div className="flex flex-col  items-center mx-auto pb-12 md:py-20">
        <div className="flex flex-col justify-center">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 text-center">
            Softwaredeveloper und Produktentwickler aus Hannover
          </h2>
          <div className="h-6 w-6"></div>

        </div>

        <img className="h-48 rounded-full" src="profile.webp"></img>

      </div>

      <div className="h-6"></div>


      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full">
        Projekte
      </h2>

      <div className="h-6"></div>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: ProjectCardModel, index: number) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="h-12"></div>

      <div id="conact" className="w-full">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 w-full">
          Kontakt
        </h2>
        <div className="h-6"></div>
        <p>nickhrm2308@gmail.com</p>
      </div>
      <div className="h-6"></div>

      <Link href="https://github.com/nickhrm" className="mr-auto">
        <Avatar>
          <img src="/github_logo.svg" />
        </Avatar>
      </Link>
    </main>
  );
}
