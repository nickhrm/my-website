<script lang="ts" setup>
import { NuxtLink } from '#components';

const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>




<template>
  <UContainer class="py-10">
    <h1 class="text-3xl font-bold">Nick Hermann</h1>
    <p>Ich bin Software- und Produktentwickler aus Hannover</p>
    <h2 class="text-lg">Latest Posts</h2>

    <NuxtLink :to="`${post.path}`" v-for="post in posts" :key="post.id">
      <div class="hover:bg-gray-200 rounded p-5 transition-colors duration-150 hover:cursor-pointer">
        <p>{{ post.title }}</p>
      </div>
    </NuxtLink>
  </UContainer>
</template>
