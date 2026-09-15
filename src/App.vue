<script setup>
import { curriculumInfo as cv } from '../curriculumInfo';
import ResumeHeader from './components/ResumeHeader.vue';
import SectionHeader from './components/SectionHeader.vue';
import ExperienceEntry from './components/ExperienceEntry.vue';
</script>

<template>
  <div class="resume">
    <resume-header
      :name="cv.name"
      :tagline="cv.tagline"
      :location="cv.location"
      :phone="cv.phone"
      :email="cv.email"
      :linkedin="cv.linkedin"
      :github="cv.github"
    />

    <section class="section">
      <section-header title="Profile" />
      <p class="profile-text">{{ cv.profile }}</p>
    </section>

    <section class="section">
      <section-header title="Core Skills" />
      <div v-for="group in cv.coreSkills" :key="group.category" class="skill-row">
        <span class="skill-category">{{ group.category }}:</span>
        <span class="skill-list">{{ group.skills.join(' · ') }}</span>
      </div>
    </section>

    <section class="section">
      <section-header title="Experience" />
      <experience-entry v-for="job in cv.experience" :key="job.company + job.role" v-bind="job" />
    </section>

    <section class="section">
      <section-header title="Additional Experience" />
      <experience-entry v-for="job in cv.additionalExperience" :key="job.role" v-bind="job" />
    </section>

    <section class="section">
      <section-header title="Education" />
      <div class="entry">
        <div class="entry-row">
          <h3 class="entry-title">
            {{ cv.education.degree }} — {{ cv.education.school }}, {{ cv.education.location }}
          </h3>
          <span class="entry-dates">{{ cv.education.period }}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <section-header title="Languages" />
      <p>{{ cv.languages.map((language) => `${language.language} (${language.level})`).join(' · ') }}</p>
    </section>
  </div>
</template>