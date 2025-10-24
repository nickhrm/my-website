import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'


const postsSchema = z.object({
  title: z.string().nonempty(),
  tags: z.array(z.string()),
  icons: z.array(z.string()),
  coverImage: z.string().optional(),
  images: z.array(z.string()).optional(),
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