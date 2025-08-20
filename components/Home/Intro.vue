<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.jpg" alt="Ludovic Nouvel"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <hacker-title :labels="['Bonjour', 'Hello', 'Hola', 'Buongiorno', 'Halo', 'Hej']" />
    <p class="text-gray-900 dark:text-gray-400">
      Je m’appelle <strong>Ludo</strong>, développeur fullstack et récemment <strong>Lead développeur</strong>, basé en Normandie. Passionné par le web, j’ai un attrait particulier pour l’expérimentation autour de projets <strong>SaaS</strong>. Ce qui m’anime au quotidien : transformer des problématiques concrètes en applications utiles et pertinentes pour les utilisateurs.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      Ma stack de prédilection s’articule autour de <strong>JavaScript, Vue.js et Node.js</strong>, avec une solide expérience sur <strong>PHP & Laravel</strong>.
    </p>
    <p class="text-gray-900 dark:text-gray-400">
      En journée, j’occupe le poste de <strong>Lead développeur</strong> chez <a href="https://heyteam.com" target="_blank" class="underline">Heyteam</a>, où je contribue à l’amélioration continue du produit.
      En parallèle, j’aime profiter de mon temps libre pour expérimenter, bricoler et tester de nouvelles idées ou technologies qui éveillent ma curiosité.
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
