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
      <!-- Sections « Expérimentation personnelle » et « Projets d'étude » masquées
           tant qu'elles sont vides (audit 14/11/2026). -->
    </div>
  </main>
</template>

<script setup>
const description =
  "Au cours de mon cursus en informatique à <strong>EPITECH</strong>, j’ai eu l’opportunité d’explorer de nombreux sujets techniques et de renforcer mes compétences. Cette période a été particulièrement formatrice, autant pour <strong>affiner ma vision du développement</strong> que pour <strong>clarifier mes ambitions professionnelles</strong>. <br /><br />Que ce soit dans un cadre académique ou personnel, j’ai mené à bien plusieurs projets qui m’ont <strong>réellement passionné</strong> et dont je garde une grande fierté. Vous trouverez ci-dessous une sélection des expériences les plus marquantes : celles qui m’ont permis de <strong>grandir</strong>, non seulement sur le plan <strong>technique</strong>, mais aussi sur le plan <strong>humain</strong>.";
useSeoMeta({
  title: "Portfolio | Ludovic Nouvel",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
