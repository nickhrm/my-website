import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'


const postsSchema = z.object({
  title: z.string().nonempty(),
  tags: z.array(z.string()),
  date: z.date(),
  readingTime: z.number().gt(0),
})



export default defineContentConfig({
  collections: {
    posts: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'posts/*.md',
        schema: postsSchema,
      })
    ),
  }
}
)