<script setup lang="ts">
import type { Collection, Collections } from "@nuxt/content";
import { withLeadingSlash, joinURL } from "ufo";

const { params } = useRoute();
const title = computed(() => params.title as string);

const collection = "posts" as keyof Collections;
const path = computed(() => withLeadingSlash(joinURL(collection, title.value)));

console.log(path.value);

const { data, error } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection)
      .path(path.value)
      .first()) as Collections["posts"]
);

if (!data.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
});
</script>

<template>
  <UContainer class=" flex flex-col" v-if="data">
    <h1 class="text-2xl mb-6 whitespace-normal break-words">
      {{ data.title }}
    </h1>
  </UContainer>

  <div class="w-full flex justify-center mb-3 px-4" v-if="data && data.images && data.images.length > 0">
    <UCarousel
      v-slot="{ image }"
      fade
      arrows
      dots
      :items="data.images"
      class="max-w-7xl mx-auto mb-4 align-center"
    >
      <NuxtLink :to="`/${data.coverImage}`" class="block mx-auto">
        <NuxtImg
          :src="`/${data.coverImage}`"
          class="max-h-96 rounded-lg mr-3"
        ></NuxtImg>
      </NuxtLink>
    </UCarousel>
  </div>

  <UContainer class="py-10 flex flex-col" v-if="data">
    <div class="flex flex-wrap gap-4 mb-8">
      <div v-for="icon in data.icons" v-if="data.icons && data.icons.length > 0">
        <UIcon :name="icon" class="w-8 h-8" />
      </div>
    </div>
    <div class="flex flex-wrap gap-4 mb-8">
      <div v-for="tag in data.tags">
        <UBadge variant="soft">#{{ tag }}</UBadge>
      </div>
    </div>

    <ContentRenderer :value="data" class="prose dark:prose-invert" />
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
