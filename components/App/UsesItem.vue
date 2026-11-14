<template>
  <li>
    <component
      :is="item.url ? NuxtLink : 'div'"
      v-bind="item.url ? { to: item.url, target: '_blank', external: true } : {}"
      class="group flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 transition hover:ring-gray-300 dark:bg-white/5 dark:ring-white/10 dark:hover:ring-white/20"
    >
      <!-- Vignette optionnelle : champ « image » dans content/uses/*.json -->
      <NuxtImg
        v-if="item.image"
        :src="item.image"
        :alt="item.name"
        class="aspect-[4/3] w-full bg-gray-100 object-cover dark:bg-gray-900"
        loading="lazy"
      />
      <div class="p-4">
        <p
          class="text-base font-semibold text-gray-800 dark:text-gray-200"
          :class="item.url ? 'group-hover:text-primary-600 dark:group-hover:text-primary-400' : ''"
        >
          {{ item.name }}
        </p>
        <p class="mt-1 text-sm text-muted">{{ item.description }}</p>
      </div>
    </component>
  </li>
</template>

<script setup>
import { NuxtLink } from "#components";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
