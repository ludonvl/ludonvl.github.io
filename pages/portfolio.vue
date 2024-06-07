<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Portfolio" :description="description" />
    <div class="space-y-4">
      <ul>
        <AppUsesHeader title="Expérience professionnelle" />
      </ul>
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "Voici l'exhaustivité des expériences professionnelles que j'ai.";
useSeoMeta({
  title: "Porfolio | Ludovic Nouvel",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
