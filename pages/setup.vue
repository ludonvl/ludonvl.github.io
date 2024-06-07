<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Quelle est la compo de mon setup ?"
      :description="description"
    />
    <div class="space-y-24">
      <ul class="space-y-8">
        <AppUsesHeader title="Équipements" />
        <AppUsesItem v-for="(item, id) in hardware" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Logiciels" />
        <AppUsesItem v-for="(item, id) in software" :key="id" :item="item" />
      </ul>
      <ul class="space-y-8">
        <AppUsesHeader title="Bureau" />
        <AppUsesItem v-for="(item, id) in desk" :key="id" :item="item" />
      </ul>
    </div>
  </main>
</template>

<script setup>
const description =
  "J'aime développer dans de bonnes conditions. Le choix du matériel et des logiciels se doit d'être judicieux. Surtout l'idée très précise que j'ai pour mon setup. Je veux qu'il soit le plus hybride possible. Il répond à mes deux besoins. D'une part pour de la productivité; étant en 100% remote il est important d'avoir les bons outils pour augmenter son efficacité. D'autre part pour du gaming; j'aime passé du temps aussi sur des jeux vidéos en plus des projets tech. Voici une liste exhaustive de ce que je possède afin d'aboutir à cette dualité.";
useSeoMeta({
  title: "Mon setup | Ludovic Nouvel",
  description,
});
const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const hardware = items.value.filter((item) => item.category === "hardware");
const software = items.value.filter((item) => item.category === "software");
const desk = items.value.filter((item) => item.category === "desk");
</script>
