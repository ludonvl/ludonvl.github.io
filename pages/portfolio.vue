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
  "Au cours de mon cursus en informatique à EPITECH, j’ai eu l’opportunité d’explorer de nombreux sujets techniques et de renforcer mes compétences. Cette période a été particulièrement formatrice, autant pour affiner ma vision du développement que pour clarifier mes ambitions professionnelles. Que ce soit dans un cadre académique ou personnel, j’ai mené à bien plusieurs projets qui m’ont réellement passionné et dont je garde une grande fierté. Vous trouverez ci-dessous une sélection des expériences les plus marquantes : celles qui m’ont permis de grandir, non seulement sur le plan technique, mais aussi sur le plan humain.";
useSeoMeta({
  title: "Porfolio | Ludovic Nouvel",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
