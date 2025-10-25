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

const items = ref([
  {
    label: "Startseite",
    icon: "i-lucide-book-open",
    to: "/",
  },

]);
</script>

<template>
  <UContainer class="flex flex-col justify-start" v-if="data">
    <ULink :to="`/`" class="hover:underline pb-4 text-neutral-500"> zurück zur Startseite </ULink>
    <h1 class="text-4xl mb-6 whitespace-normal break-words">
      {{ data.title }}
    </h1>
  </UContainer>

 

  <UContainer class="py-10 flex flex-col" v-if="data">
    <div class="flex flex-wrap gap-4 mb-8">
      <div
        v-for="icon in data.icons"
        v-if="data.icons && data.icons.length > 0"
      >
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

   <div
    class="w-full flex justify-center mb-3  overflow-visible"
    v-if="data && data.images && data.images.length > 0"
  >

    <UCarousel
      v-slot="{ item }"
      arrows
      :items="data.images"
      class=" mx-auto mb-4 align-center overflow-visible rounded-lg"
    >
      {{ console.log("test: ", data.images) }}
        <div class="relative pb-10 pr-3">
          <div class="shadow-xl rounded-lg overflow-visible">
            <NuxtImg :src="`/${item}`" class="max-h-4xl rounded-lg block" />
          </div>
        </div>
    </UCarousel>
  </div>
  <div class="h-28"></div>
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
