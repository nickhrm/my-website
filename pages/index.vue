<script lang="ts" setup>
import { NuxtLink } from '#components';

const { data: posts } = await useAsyncData('posts', () => queryCollection('posts').all())

const { isDark } = useMyDarkMode()



function handleMail() {
  window.open('mailto:kontakt@nickhrm.de')
}

function handleGitHub() {
  window.open('https://github.com/nickhrm')
}

</script>

<template>
  <UContainer class="py-10">
    <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
      <div>
        <h1 class="text-3xl font-bold mb-6">Nick Hermann</h1>
        <p class="text-pretty">I'm a <b>software developer</b> based in Hannover, studying Computer Science at Leibniz
          University. With three years of experience in app and web development, I specialize in building modern,
          high-performance applications.

          Beyond coding, I enjoy staying active and doing sports.</p>
        <div class="flex flex-row gap-6 mt-6">
          <UButton @click="handleMail" size="lg" leading-icon="material-symbols:mail-outline-rounded">Mail</UButton>
          <UButton @click="handleGitHub" :color="isDark ? 'primary' : 'black'" :variant="isDark ? 'solid' : 'ghost'"
            leading-icon="logos:github-icon">GitHub</UButton>

        </div>
      </div>
      <NuxtImg src="/profilbild.jpg" alt="Profilbild" class="rounded-full w-28 h-28 my-5" />
    </div>


    <div class="h-10"></div>

    <h2 class="text-2xl mt-12 mb-3">Latest Posts</h2>
    <UDivider />

    <div v-for="post in posts" :key="post.id" class="group">
      <NuxtLink :to="`${post.path}`">
        <div
          class="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md p-6 transition-colors duration-150 hover:cursor-pointer flex flex-col justify-center">
          <div>
            <p class="mb-3 text-pretty">{{ post.title }}</p>
            <div class="flex flex-row justify-start items-center text-neutral-600 dark:text-neutral-400  mb-3">
              <UIcon name="heroicons-calendar" class="mr-1" />
              <p>{{ new Date(post.date).toLocaleDateString() }}</p>
              <p class="mx-3"></p>
              <UIcon name="heroicons-clock" class="mr-1" />
              <p>{{ post.readingTime }}min read</p>
            </div>
            <div class="flex flex-wrap gap-4">
              <div v-for="tag in post.tags">
                <UBadge variant="soft">#{{ tag }}</UBadge>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <UDivider class="group-hover:invisible" />
    </div>


  </UContainer>
</template>
