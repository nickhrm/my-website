<template>
  <div class="py-1 px-2 rounded-lg bg-primary-200 inline-flex flex-row items-center gap-[1px]">
    <p class="m-0">
      <slot name="what" mdc-unwrap="p" />
    </p>
    <p>@</p>
    <div v-if="$slots.zone">
      <p class="m-0">
        Zone <slot name="zone" mdc-unwrap="p" />
      </p>
    </div>
    <div v-else-if="$slots.rpe">
      <p class="m-0">
        <slot name="rpe" mdc-unwrap="p" />
      </p>
    </div>

  
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
div p {
   margin: 0;
}
</style>
