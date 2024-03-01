<script setup>
import { curriculumInfo } from '../curriculumInfo';
import ResumeHeader from './components/ResumeHeader.vue';
import TimelineHeader from './components/TimelineHeader.vue';
import TimelineItem from './components/TimelineItem.vue';
import { getFormattedDate } from './getFormattedDate';
</script>

<template>
  <resume-header />
  <section class="main-section-wrapper">
    <main>
      <timeline-header icon="fa-solid fa-user" title="Profile" />
      <timeline-item :description="curriculumInfo.profile" />
      <timeline-header icon="fa-solid fa-graduation-cap" title="Education" />
      <timeline-item v-for="education in curriculumInfo?.educations"
        :title="`${education.degree} at ${education.school}, ${education.city}`"
        :subtitle="`${getFormattedDate(education.dateFrom)} - ${education.isDateUntilPresent ? 'Present' : getFormattedDate(education.dateUntil)}`"
        :description="education.description" />

      <timeline-header icon="fa-solid fa-briefcase" title="Employment History" />
      <timeline-item v-for="workExperience in curriculumInfo?.workExperiences"
        :title="`${workExperience.title} at ${workExperience.employer}, ${workExperience.city}`"
        :subtitle="`${getFormattedDate(workExperience.dateFrom)} - ${workExperience.isDateUntilPresent ? 'Present' : getFormattedDate(workExperience.dateUntil)}`"
        :description="workExperience.description" />
      <timeline-header icon="fa-solid fa-users" title="Internships" />
      <timeline-item v-for="internship in curriculumInfo?.internships"
        :title="`${internship.title} at ${internship.employer}, ${internship.city}`"
        :subtitle="`${getFormattedDate(internship.dateFrom)} - ${internship.isDateUntilPresent ? 'Present' : getFormattedDate(internship.dateUntil)}`"
        :description="internship.description" />
    </main>
    <aside>
    </aside>
  </section>
</template>

<style>
.main-section-wrapper {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
}
</style>
