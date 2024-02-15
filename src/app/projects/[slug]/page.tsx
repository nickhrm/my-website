'use client'


import ContentRenderer from "@/components/content_renderer"
import StrapiRepository from "@/lib/strapi_repository"




export default async function Page({ params }: { params: { slug: string } }) {

    const project = await StrapiRepository.getProject(params.slug)

    console.dir(project, { depth: null })

    return <div>
        <ContentRenderer content={project.content} />
    </div>
}