<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpg" alt="Ludovic Nouvel"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <hacker-title :labels="['Bonjour', 'Hello', 'Hola', 'Buongiorno', 'Halo', 'Hej']" />
    <p class="text-gray-900 dark:text-gray-400">
      Ludo, humble développeur fullstack et plus récemment Lead développeur, je vis dans la région de Normandie en France.
      Je porte une attirance particulière au domaine du web et plus précisément à l'expérimentation de projet Saas.
      Résoudre des problématiques concrètes, par la construction d'applications utiles et pertinentes pour les utilisateurs, fait entièrement sens pour moi.
      Ma stack de prédilection est la suivante : Javascript, Vuejs &amp; Node en passant par PHP &amp; Laravel.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      De jour, je prends le rôle de Lead dev chez
      <a href="https://heyteam.com" target="_blank" class="underline">Heyteam</a> afin de contribuer à l'amélioration continue du produit.<br />
      À mes heures perdues, je bricole et expérimente quelques apps & nouvelles technos qui me passe par la tête.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Ludovic Nouvel",
  description:
    "Ludo, votre humble développeur Fullstack French-Touch. Javascript, Vue & Node en passant par PHP & Laravel lover, j'aime matérialiser ce qui cogite dans ma tête.",
});
</script>
