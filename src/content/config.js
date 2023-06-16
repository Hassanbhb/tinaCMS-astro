// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: reference('authors'),
    tags: z.array(z.string()),
  })
 });

const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  })
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'authors': authorsCollection,
};