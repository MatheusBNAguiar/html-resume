<script setup>
defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, default: '' },
  period: { type: String, required: true },
  bullets: { type: Array, default: () => [] },
});
</script>

<template>
  <article class="entry">
    <div class="entry-row">
      <h3 class="entry-title">
        {{ role }} — {{ company }}<template v-if="location"> · {{ location }}</template>
      </h3>
      <span class="entry-dates">{{ period }}</span>
    </div>
    <ul v-if="bullets.length" class="entry-bullets">
      <li v-for="bullet in bullets" :key="bullet">{{ bullet }}</li>
    </ul>
  </article>
</template>