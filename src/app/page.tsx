import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import ProjectCard from "./project_card";
import StrapiRepository from "@/lib/strapi_repository";

export default function Home() {

  const projects = StrapiRepository.getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
        Software Developer und Produktentwickler
      </h2>

      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {[0, 1, 2, 3, 4, 5, 6,].map((index) => (
          <ProjectCard key={index} />
        ))}
      </div>

    </main>
  );
}
