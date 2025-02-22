import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date(),
      })
    })
  }
})