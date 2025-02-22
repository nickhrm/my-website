<script setup lang="ts">


const { params } = useRoute()
const title = computed(() => params.title as string)

console.log('title', title.value)

const { data: home } = await useAsyncData(() => queryCollection('posts').path(title.value).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>