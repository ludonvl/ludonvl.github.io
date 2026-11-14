<template>
  <div>
    <!-- Études de cas dès qu'au moins une est publiée ; sinon, repli sur les expériences. -->
    <template v-if="studies && studies.length">
      <AppSectionTitle>Projets</AppSectionTitle>
      <div class="space-y-12">
        <AppCaseStudyCard v-for="study in studies" :key="study._path" :study="study" />
      </div>
    </template>
    <template v-else>
      <AppSectionTitle>Portfolio</AppSectionTitle>
      <div class="space-y-6">
        <AppProjectCard
          v-for="(project, id) in projects"
          :key="id"
          :project="project"
        />
      </div>
    </template>
    <div class="mt-6 flex items-center justify-center text-sm">
      <UButton
        label="Tout le portfolio &rarr;"
        to="/portfolio"
        variant="link"
        color="gray"
        size="lg"
        class="min-h-[44px]"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: studies } = await useCaseStudies("case-studies-home", 3);
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>
