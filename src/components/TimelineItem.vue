<script setup>
const props = defineProps(['title', 'subtitle', 'description'])
</script>
<template>
  <section class="timeline-item-container">
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <div v-html="description" />
  </section>
</template>

<style>
.timeline-item-container {
  position: relative;
  border-left: 2px solid black;
  padding-left: 1rem;
  padding-bottom: .5rem;

}

.timeline-item-container::before {
  width: 4px;
  height: 4px;
  border: 2px solid black;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: -5px;
  top: 0px;
  background-color: white;
}
</style>

