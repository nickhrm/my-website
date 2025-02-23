<script lang="ts" setup>
import { NuxtLink } from '#components';

const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())




</script>




<template>
  <UContainer class="py-10 max-w-2xl">
    <div class="flex flex-col-reverse md:flex-row justify-between items-center">
      <div>
        <h1 class="text-3xl font-bold mb-2">Nick Hermann</h1>
        <p>I'm a software developer based in Hannover. I study computer science at Leibniz University and work as a
          developer since 3 Years. My Expertiese is mainly in app and web development.</p>

      </div>
      <div class="w-4 h-4"></div>
      <img src="~/assets/profilbild.jpg" alt="Profilbild" class="rounded-full w-28 h-28 my-5" />
    </div>

    <h2 class="text-lg font-bold mt-12 mb-3">Latest Posts</h2>


    <NuxtLink :to="`${post.path}`" v-for="post in posts" :key="post.id">
      <div class="hover:bg-gray-200 rounded-md mb-6 p-3 transition-colors duration-150 hover:cursor-pointer flex flex-col justify-center">
        <div>
          <p class="mb-3">{{ post.title }}</p>
          <div class="flex flex-row text-gray-500 gap-4">
            <p>{{ new Date(post.date).toLocaleDateString() }}</p>
            <p>|</p>
            <p class="mb-4 ">{{ post.readingTime }}min read</p>
          </div>

          <div class="flex flex-wrap gap-4">
            <div v-for="tag in post.tags">
              <UBadge>{{ tag }}</UBadge>
            </div>
          </div>
        </div>



      </div>
    </NuxtLink>
  </UContainer>
</template>
