import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import ProjectCardModel from "@/lib/project_card_model"
import { useRouter } from "next/navigation"
import Link from "next/link"


export default function ProjectCard(model: ProjectCardModel) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{model.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter className="flex justify-end">
                < Link href={`/projects/${model.id}`}>
                    <Button variant="outline" >Button</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}