<script setup>
const props = defineProps(['icon', 'title'])
</script>
<template>
  <h2 class="timeline-header"><i :class="icon" /> {{ title }}</h2>
</template>

<style>
.timeline-header {
  display: flex;
  gap: .5rem;
  align-items: center;
  text-transform: uppercase;
}
</style>

