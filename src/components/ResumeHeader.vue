<script setup>
defineProps({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  linkedin: { type: Object, required: true },
  github: { type: Object, required: true },
});
</script>

<template>
  <header class="resume-header">
    <h1 class="resume-name">{{ name }}</h1>
    <p class="resume-tagline">{{ tagline }}</p>
    <p class="resume-contact">
      {{ location }} <span class="sep">|</span>
      <a :href="`tel:${phone.replace(/[^+\d]/g, '')}`">{{ phone }}</a> <span class="sep">|</span>
      <a :href="`mailto:${email}`">{{ email }}</a>
    </p>
    <p class="resume-contact">
      <a :href="linkedin.url">{{ linkedin.label }}</a> <span class="sep">|</span>
      <a :href="github.url">{{ github.label }}</a>
    </p>
  </header>
</template>