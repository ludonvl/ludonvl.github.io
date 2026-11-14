<template>
  <nav aria-label="Réseaux">
    <ul class="-mx-3 flex flex-wrap items-center gap-x-2">
      <li v-for="link in links" :key="link.icon">
        <NuxtLink
          :to="link.url"
          target="_blank"
          external
          class="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-primary-400"
        >
          <Icon :name="link.icon" class="h-5 w-5" aria-hidden="true" />
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const links = [
  {
    name: "GitHub",
    url: "https://github.com/ludonvl",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ludovicnouvel/",
    icon: "mdi:linkedin",
  },
];
</script>
