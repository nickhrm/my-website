
import BlockRendererClient from "@/components/content_renderer"
import StrapiRepository from "@/lib/strapi_repository"
import { BlocksContent } from "@strapi/blocks-react-renderer"



export default async function Page({ params }: { params: { slug: string } }) {

    const project = await StrapiRepository.getProject(params.slug)


    return <div>
        <BlockRendererClient content={project.content} />
    </div>
}