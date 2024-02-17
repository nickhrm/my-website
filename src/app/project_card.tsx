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

import { Badge } from "@/components/ui/badge"

export default function ProjectCard(model: ProjectCardModel) {

    return (
        <Card className="flex justify-between flex-col">
            <CardHeader>
                <CardTitle>{model.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                <Badge variant="secondary">Badge</Badge>
            </CardContent>
            <CardFooter className="flex justify-end">
                < Link href={`/projects/${model.id}`}>
                    <Button variant="default" >mehr</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}