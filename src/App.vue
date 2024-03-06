<script setup>
import { curriculumInfo } from '../curriculumInfo';
import ResumeHeader from './components/ResumeHeader.vue';
import TimelineHeader from './components/TimelineHeader.vue';
import DescriptionWrapper from './components/DescriptionWrapper.vue';
import DescriptionValue from './components/DescriptionValue.vue';
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
      <description-wrapper title="Details">
        <description-value>{{ curriculumInfo?.city }}</description-value>
        <description-value>{{ curriculumInfo?.countryName }}</description-value>
        <description-value :link="`tel:${curriculumInfo?.phoneNumber}`">
          {{ curriculumInfo?.phoneNumber }}
        </description-value>
        <description-value :link="`mailto:${curriculumInfo?.email}`">{{ curriculumInfo?.email }}</description-value>

      </description-wrapper>
      <description-wrapper title="Links">
        <description-value v-for="profile in curriculumInfo?.socialProfiles" :link="profile.link">{{ profile.label
        }}</description-value>
      </description-wrapper>
      <description-wrapper title="Skills">
        <description-value v-for="skill in curriculumInfo?.skills">{{ skill.skill }}</description-value>
      </description-wrapper>
      <description-wrapper title="Hobbies">
        <description-value v-for="hobby in curriculumInfo?.hobbies?.[0]?.hobby.split('\n')">
          {{ hobby }}
        </description-value>
      </description-wrapper>
      <description-wrapper title="Languages">
        <description-value v-for="language in curriculumInfo?.languages">
          {{ language.language }} - {{ language.level }}
        </description-value>
      </description-wrapper>
    </aside>
  </section>
</template>

<style>
.main-section-wrapper {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 2rem;
}
</style>
