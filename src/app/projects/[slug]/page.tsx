
import BlockRendererClient from "@/components/content_renderer"
import StrapiRepository from "@/lib/strapi_repository"
import { BlocksContent } from "@strapi/blocks-react-renderer"



export default async function Page({ params }: { params: { slug: string } }) {

    const project = await StrapiRepository.getProject(params.slug)

    console.dir(project, { depth: null })


    return <div>
        <BlockRendererClient content={project.content} />
    </div>
}