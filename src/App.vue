<script setup>
import { curriculumInfo } from '../curriculumInfo';
import ResumeHeader from './components/ResumeHeader.vue';
import TimelineItem from './components/TimelineItem.vue';
</script>

<template>
  <resume-header />
  <section class="main-section-wrapper">
    <aside>

    </aside>
    <main>
      <timeline-item v-for="workExperience in curriculumInfo?.workExperiences" :title="workExperience.title"
        :description="workExperience.description" />
    </main>
  </section>
</template>

<style>
.main-section-wrapper {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
