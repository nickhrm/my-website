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
  description: data.value?.description
})
</script>

<template>
  <UContainer class="py-10 flex flex-col items-center">

    <div v-if="data">
      <h1 class="text-4xl font-bold mb-6">{{ data.title }}</h1>
      <div class="flex flex-row gap-4 mb-4">
        <p>{{ data.date }}</p>
        <p>|</p>
        <p>{{ data.readingTime }}min read</p>
      </div>
      <div class="flex flex-wrap gap-4 mb-8">
        <div v-for="tag in data.tags">
          <UBadge>#{{ tag }}</UBadge>
        </div>

      </div>


      <ContentRenderer :value="data" class="prose" />

    </div>

    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>Home not found</div>


  </UContainer>

</template>