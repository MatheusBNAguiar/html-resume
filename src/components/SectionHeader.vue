<script setup>
defineProps({ title: { type: String, required: true } });
</script>

<template>
  <h2 class="section-header">{{ title }}</h2>
</template>