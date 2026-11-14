<template>
  <div class="space-y-4">
    <NuxtImg src="/avatar.jpg" alt=""
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <div>
      <hacker-title
        tag="p"
        text-class="text-sm font-medium text-muted"
        :labels="['Bonjour', 'Hello', 'Hola', 'Buongiorno', 'Halo', 'Hej']"
      />
      <h1 class="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Ludovic Nouvel
      </h1>
      <p class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
        Lead developer & product builder
      </p>
    </div>
    <p class="text-gray-700 dark:text-gray-400">
      Je construis des produits web utiles, j'expérimente des idées et je les mets en ligne.
      Aujourd'hui lead developer chez Heyteam (Vue.js / Laravel).
    </p>
  </div>
</template>

<script setup>
usePageSeo({
  title: "Ludovic Nouvel",
  description:
    "Ludovic Nouvel, lead developer chez Heyteam. Je conçois et livre des produits web avec Vue.js et Laravel. Portfolio, setup et ressources tech à découvrir.",
  path: "/",
});
</script>
