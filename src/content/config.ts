import {defineCollection, z } from "astro:content";
import {format} from "date-fns"


const linksCollection = defineCollection({
    schema:({image}) => z.object({
        url: z.string(),
        text: z.string(),
        icon: image(),
        order: z.number(),
    }),
});

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        links: z.array(z.object({
            text: z.string(),
            url: z.string(),
          })),
    }),

});

const vita = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        image: image(),
    }),

});


export const collections = {
    links: linksCollection,
    projects: projectsCollection,
    vita: vita,
};