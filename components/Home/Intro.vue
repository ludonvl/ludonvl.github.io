<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpg" alt="Ludovic Nouvel"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <hacker-title :labels="['Bonjour', 'Hello', 'Hola', 'Buongiorno', 'Halo', 'Hej']" />
    <p class="text-gray-900 dark:text-gray-400">
      <strong>Ludovic Nouvel</strong>
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Lead Developer & Product Builder
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      I build useful web products, experiment with ideas and ship things on the internet.  
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Today Lead developer @ Heyteam - VueJs / Laravel.
    </p>    
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Ludovic Nouvel",
  description:
    "Ludo, développeur fullstack french touch. JavaScript, Vue, Node, PHP & Laravel lover — j’aime transformer mes idées en produits concrets.",
});
</script>
