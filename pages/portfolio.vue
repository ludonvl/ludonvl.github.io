<template>
  <main>
    <AppHeader class="mb-12" title="Portfolio" :description="description" />
    <div class="space-y-16">
      <!-- Section Projets : masquée tant qu'aucune étude de cas n'est publiée. -->
      <div v-if="studies && studies.length" class="space-y-8">
        <ul>
          <AppUsesHeader title="Projets" />
        </ul>
        <AppCaseStudyCard v-for="study in studies" :key="study._path" :study="study" />
      </div>
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
  "Formé à <strong>EPITECH</strong>, j'y ai affiné ma <strong>vision du développement</strong> et clarifié ce que je voulais construire.<br /><br />Voici les expériences qui m'ont le plus marqué, entre projets dont je suis <strong>fier</strong> et équipes qui m'ont fait <strong>grandir</strong>, <strong>techniquement</strong> comme <strong>humainement</strong>.";
usePageSeo({
  title: "Portfolio | Ludovic Nouvel",
  description:
    "Les équipes avec qui j'ai travaillé et les produits que j'y ai construits : Heyteam, Witco, Idées Clics & Solutions, R-PUR et WebEngineering.",
  path: "/portfolio",
});

const { data: studies } = await useCaseStudies("case-studies-all");
const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>
