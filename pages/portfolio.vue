<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Portfolio" :description="description" />
    <div class="space-y-24">
      <div class="space-y-8">
        <ul>
          <AppUsesHeader title="Expérience professionnelle" />
        </ul>
        <AppProjectCard
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
      <div class="space-y-8">
        <ul>
          <AppUsesHeader title="Expérimentation personnelle" />
        </ul>
        <p class="text-gray-400 text-sm">Work in progress</p>
      </div>
      <div class="space-y-8">
        <ul>
          <AppUsesHeader title="Projets d'étude" />
        </ul>
        <p class="text-gray-400 text-sm">Work in progress</p>
      </div>
    </div>
  </main>
</template>

<script setup>
const description =
  "Pendant mon cursus d'informatique à EPITECH, j'ai pu monter en compétence sur divers sujets technique. Ça a été une période riche afin de parfaire ma vision du développement et affiner ce que je vise sur le plan professionnel. Dans ce cadre & personnellement, j'ai pu mener à bien des projets qui m'ont passionné et dont je suis fier. Vous trouverez ci-dessous les expériences les plus précieuses & enrichissantes, celles qui m'ont fait grandir techniquement mais aussi humainement.";
useSeoMeta({
  title: "Porfolio | Ludovic Nouvel",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
