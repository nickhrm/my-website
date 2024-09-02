// 1. Import utilities from `astro:content`
import {z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const workoutsCollection = defineCollection({

    type: 'content',
    schema: z.object({
        type: z.string(),
        
    }),

});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'workouts': workoutsCollection,
};