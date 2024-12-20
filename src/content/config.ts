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


const blogCollection = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        tags: z.array(z.string()),
        date: z
                .string()
                .transform(str => format(new Date(str), "MMMM d, yyyy")),
    }),

});

export const collections = {
    links: linksCollection,
    blog: blogCollection,
};