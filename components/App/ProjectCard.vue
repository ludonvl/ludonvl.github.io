<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-md">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ project.name }}
      </h3>
      <p class="text-gray-400 text-sm">{{ project.description }}</p>
      <p class="text-gray-400 text-sm">{{ project.poste }}</p>
      <div v-if="project.stack && project.stack.length > 0" class="flex gap-2 pt-1">
        <div v-for="(stack, index) in project.stack" 
          :key="index" 
          class="flex dark:bg-gray-800 bg-gray-100 text-gray-400 text-xs p-1 rounded-lg"
        >
          {{ stack }}
        </div>
      </div>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    ></div>
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
