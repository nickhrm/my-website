
import BlockRendererClient from "@/components/content_renderer"
import StrapiRepository from "@/lib/strapi_repository"



export default async function Page({ params }: { params: { slug: string } }) {

    const project = await StrapiRepository.getProject(params.slug)


    return <div className="max-w-s">
        <BlockRendererClient content={project.content} />
    </div>
}