<template>
  <component
    :is="project.url ? NuxtLink : 'div'"
    class="group -m-2 flex items-start gap-4 rounded-lg p-2 sm:items-end"
    v-bind="project.url ? { to: project.url, target: '_blank', external: true } : {}"
  >
    <UAvatar
      :src="project.thumbnail"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
      class="order-first shrink-0 sm:order-last"
    />
    <div class="min-w-0 flex-1 sm:max-w-md sm:flex-none">
      <h3
        class="text-sm font-medium text-gray-900 group-hover:text-primary-600 dark:text-gray-100"
      >
        {{ project.name }}
      </h3>
      <p class="text-sm text-muted">{{ project.description }}</p>
      <p class="text-sm text-muted">
        {{ project.poste }}<template v-if="project.periode"> · {{ project.periode }}</template>
      </p>
      <ul
        v-if="project.realisations && project.realisations.length"
        class="mt-1 list-disc space-y-0.5 pl-4 text-sm text-gray-700 dark:text-gray-300"
      >
        <li v-for="(realisation, index) in project.realisations" :key="index">
          {{ realisation }}
        </li>
      </ul>
      <ul
        v-if="project.stack && project.stack.length > 0"
        class="flex flex-wrap gap-1.5 pt-2"
        aria-label="Stack"
      >
        <li
          v-for="(stack, index) in project.stack"
          :key="index"
          class="whitespace-nowrap rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-muted dark:bg-gray-800"
        >
          {{ stack }}
        </li>
      </ul>
    </div>
    <div
      class="hidden flex-1 border-b border-dashed border-gray-300 group-hover:border-gray-700 sm:block dark:border-gray-800 dark:group-hover:border-gray-500"
      aria-hidden="true"
    ></div>
  </component>
</template>

<script setup>
import { NuxtLink } from "#components";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
