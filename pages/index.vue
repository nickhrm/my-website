<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())
</script>




<template>
  <UContainer class="py-10">
    <h1 class="text-3xl font-bold">Nick Hermann</h1>
    <p>Ich bin Software- und Produktentwickler aus Hannover</p>
    <h2 class="text-lg">Latest Posts</h2>
    <div class="hover:bg-gray-200 rounded p-5 transition-colors duration-150"  v-for="post in posts" :key="post.id">
      <div :to="`/post/${post.title}`">{{ post.title }}</div>
    </div>
  </UContainer>
</template>
