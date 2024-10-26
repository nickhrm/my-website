import {defineCollection, z } from "astro:content";
import {format} from "date-fns"


const linksCollection = defineCollection({
    schema:({image}) => z.object({
        url: z.string(),
        text: z.string(),
        icon: image(),
    }),
});

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
    }),

});

const vita = defineCollection({
    schema: z.object({
        title: z.string(),
        startDate: z
        .string()
        .transform(str => format(new Date(str), "dd.mm.yyyy")),
        endDate: z
        .string()
        .transform(str => format(new Date(str), "dd.mm.yyyy")),
    }),

});


export const collections = {
    links: linksCollection,
    projects: projectsCollection,
    vita: vita,
};