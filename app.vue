<script setup lang="ts">
import { NuxtPage } from '#components';

</script>

<template>

<Navbar/>
  <div class="min-h-[80vh] w-screen overflow-x-clip">
    <NuxtPage></NuxtPage>


  </div>

  <div class=" w-screen overflow-x-clip">
    <MyFooter/>
  </div>


</template>
