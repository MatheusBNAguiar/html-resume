<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="description-container">
    <h3 class="description-header">{{ title }}</h3>
    <div class="description-items">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.description-container {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-bottom: 1rem;
}

.description-header {
  color: rgb(106, 105, 105);
}

.description-items {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding-left: 1rem;
}
</style>
