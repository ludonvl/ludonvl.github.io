<template>
  <li>
    <NuxtLink :to="item.url" class="group block" target="_blank" external>
      <p
        class="text-base font-semibold text-gray-700 group-hover:text-primary-600 dark:text-gray-300"
      >
        {{ item.name }}
      </p>
      <p class="text-sm text-muted">{{ item.description }}</p>
    </NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  item: Object,
  required: true,
});
</script>
