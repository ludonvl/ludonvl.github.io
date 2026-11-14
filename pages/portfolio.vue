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
// TODO(ludo): remplacer « Plusieurs années » par le nombre exact (« X ans à construire… »).
const description =
  "Plusieurs années à construire des produits web, de l'ESN au SaaS. Voici les équipes avec qui j'ai travaillé et ce que j'y ai livré.";
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
