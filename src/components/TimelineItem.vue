<script setup>
const props = defineProps(['title', 'subtitle', 'description'])
</script>
<template>
  <section class="timeline-item-container">
    <h3 v-if="Boolean(title)">{{ title }}</h3>
    <h4 v-if="Boolean(subtitle)">{{ subtitle }}</h4>
    <div v-if="Boolean(description)" v-html="description" />
  </section>
</template>

<style scoped>
.timeline-item-container {
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: .5rem;
}

h4 {
  color: #5f5f60;
}

.timeline-item-container::before {
  width: 0;
  border: 1px solid black;
  height: 100%;
  content: "";
  position: absolute;
  left: 8px;
  top: 0;
}

.timeline-item-container::after {
  width: 4px;
  height: 4px;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 5px;
  top: 8px;
  background-color: white;
}
</style>

