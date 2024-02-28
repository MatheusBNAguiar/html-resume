<template>
  <header class="header-wrapper">
    <img class="header-profile-picture" src="../assets/personal-picture.jpeg" width="150" height="150" />
    <h1>Matheus Aguiar</h1>
    <div>
      <span>Software Developer</span>
      <span>Software Developer</span>
      <span>Software Developer</span>
    </div>
  </header>
</template>

<style>
.header-wrapper {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  text-transform: uppercase;
  align-items: center;
}

.header-profile-picture {
  border-radius: 2rem;
}
</style>
