<script setup lang="ts">
import type { Collection, Collections } from '@nuxt/content'
import { withLeadingSlash, joinURL } from 'ufo'



const { params } = useRoute()
const title = computed(() => params.title as string)

const collection = 'posts' as keyof Collections
const path = computed(() => withLeadingSlash(joinURL(collection, title.value)))

console.log(path.value)

const { data, error } = await useAsyncData(path.value, async () => await queryCollection(collection).path(path.value).first() as Collections['posts'])

if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })


useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
}) 
</script>

<template>
  <UContainer class="py-10 flex flex-col">

    <div v-if="data" class="">
      <h1 class="text-2xl mb-6 whitespace-normal break-words">{{ data.title }}</h1>
      <div class="flex flex-row justify-start items-center text-neutral-600 dark:text-neutral-400  mb-3">
        <UIcon name="heroicons-calendar" class="mr-1" />
        <p>{{ new Date(data.date).toLocaleDateString() }}</p>

        <p class="mx-3"></p>
        <UIcon name="heroicons-clock" class="mr-1" />
        <p class="">{{ data.readingTime }}min read</p>
      </div>
      <div class="flex flex-wrap gap-4 mb-8">
        <div v-for="tag in data.tags">
          <UBadge variant="soft">#{{ tag }}</UBadge>
        </div>

      </div>


      <ContentRenderer :value="data" class="prose dark:prose-invert" />

    </div>

    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>Home not found</div>


  </UContainer>

</template>



<style scoped>
/* Beispielhafte Styles für Inhalte, die im ContentRenderer generiert werden */
.custom-content h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}

.custom-content p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

/* Weitere Anpassungen für Listen, Blockquotes etc. */
.custom-content ul {
  list-style: disc;
  margin-left: 1.5rem;
}

.custom-content blockquote {
  font-style: italic;
  border-left: 4px solid #ddd;
  padding-left: 1rem;
  color: #666;
}
</style>