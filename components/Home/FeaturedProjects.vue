<template>
  <div>
    <AppSectionTitle>Portfolio</AppSectionTitle>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
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
const { data: projects } = await useAsyncData("projects-home", () =>
  queryContent("/projects").limit(3).find()
);
</script>
