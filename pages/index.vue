<script lang="ts" setup>
import { NuxtLink } from "#components";

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("posts").all()
);

const { isDark } = useMyDarkMode();

function handleMail() {
  window.open("mailto:kontakt@nickhrm.de");
}

function handleGitHub() {
  window.open("https://github.com/nickhrm");
}
</script>

<template>
  <UContainer class="py-10">
    <div
      class="flex flex-col-reverse md:flex-row justify-between items-center gap-10"
    >
      <div>
        <h1 class="text-3xl font-bold mb-6">Nick Hermann</h1>
        <p class="text-pretty">
          Ich bin Full-Stack-Softwareentwickler aus Hannover und bin begeistert
          davon, mit Code echte Probleme zu lösen. Von der Konzeption bis zur
          Umsetzung begleite ich den gesamten Entwicklungsprozess.
        </p>
        <div class="flex flex-row gap-6 mt-6">
          <UButton
            @click="handleMail"
            size="lg"
            leading-icon="material-symbols:mail-outline-rounded"
            >Mail</UButton
          >
          <UButton
            @click="handleGitHub"
            :variant="'outline'"
            leading-icon="lucide:github"
          >
            GitHub
          </UButton>
        </div>
      </div>
      <NuxtImg
        src="/profilbild.jpg"
        alt="Profilbild"
        class="rounded-xl w-32 h-32 my-5"
      />
    </div>

    <div class="h-10"></div>

    <h2 class="text-2xl mt-12 mb-3">Projekte, Artikel und Co...</h2>
    <UDivider />

    <div v-for="post in posts" :key="post.id" class="group">
      <!-- <FollowMouse class="hidden group-hover:block duration-150 transition-all"></FollowMouse> -->

      <NuxtLink :to="`${post.path}`">
        <div class="flex flex-row justify-between items-center">
          <div
            class="rounded-md py-6 transition-colors duration-150 hover:cursor-pointer flex flex-col justify-center"
          >
            <div>
              <p class="mb-2 text-pretty group-hover:underline">
                {{ post.title }}
              </p>
              <div
                class="flex flex-row justify-start items-center text-neutral-600 dark:text-neutral-400 mb-2"
              >
                <div class="flex flex-wrap gap-4">
            <div v-for="icon in post.icons">
              <UIcon :name="icon" class="w-8 h-8" />
            </div>
          </div>
                <p class="mx-3"></p>
              </div>
              <div class="flex flex-wrap gap-4">
                <div v-for="tag in post.tags">
                  <UBadge variant="soft">#{{ tag }}</UBadge>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="post.coverImage">
            {{ console.log(post.coverImage) }}
            <NuxtImg
              :src="`/${post.coverImage}`"
              alt="Cover Image"
              class="w-32 h-28 rounded-md ml-6 my-3 object-cover hidden md:block"
            />
          </div>
        </div>
      </NuxtLink>
      <UDivider class="" />
    </div>
  </UContainer>
</template>
