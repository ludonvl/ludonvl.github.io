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
    </div>
    <!-- TODO(ludo): valider le texte du hero (proposition issue de l'audit). -->
    <p class="text-lg text-gray-700 dark:text-gray-300">
      Lead developer chez Heyteam. Je conçois et je livre des produits web, du
      besoin à la mise en prod. Vue.js et Laravel au quotidien, et quelques
      projets perso sur le côté.
    </p>
    <div class="flex flex-wrap gap-3 pt-2">
      <UButton
        to="/portfolio"
        label="Voir mes projets"
        color="black"
        size="lg"
        class="min-h-[44px]"
      />
      <UButton
        to="mailto:contact@ludovicnouvel.com"
        external
        label="Écrivez-moi"
        color="gray"
        size="lg"
        icon="i-heroicons-envelope"
        class="min-h-[44px]"
      />
    </div>
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
