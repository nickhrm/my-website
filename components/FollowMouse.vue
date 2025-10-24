<template>
  <div
    ref="follower"
    class="w-16 h-16 rounded-full bg-blue-500 fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center text-white font-medium"
  >
    <p class="m-0 text-center">Öffnen</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const follower = ref<HTMLElement | null>(null);

const handleMouseMove = (e: MouseEvent) => {
  if (!follower.value) return;
  const x = e.clientX;
  const y = e.clientY;
  follower.value.style.transform = `translate(${x - 32}px, ${y - 32}px)`; // -32, weil das Div 64px breit/hoch ist
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
/* Optional: sanfte Bewegung */
div {
  transition: transform 0.05s linear;
}
</style>
