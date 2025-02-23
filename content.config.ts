import { defineContentConfig, defineCollection, z } from '@nuxt/content'



const postsSchema = z.object({
  title: z.string().nonempty(),
  tags: z.array(z.string()),
  date: z.string().date(),
  readingTime: z.number().gt(0),
})



export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: postsSchema,
    })
  }
})