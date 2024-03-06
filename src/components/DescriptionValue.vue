<script setup>
const props = defineProps(['link'])
</script>

<template>
  <a v-if="link" :href="link" class="description-value">
    <slot></slot>
  </a>
  <span v-else class="description-value">
    <slot></slot>
  </span>
</template>

<style>
.description-value:not(a) {
  color: rgb(142, 142, 142);
}
</style>
