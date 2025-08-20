<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Un setup, mon setup"
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
  "J’accorde beaucoup d’importance à mon environnement de travail. Le choix du matériel et des logiciels doit être réfléchi, afin que mon setup reste <strong>hybride</strong> et réponde à deux besoins essentiels.<br /><br />D’un côté, la <strong>productivité</strong> : étant en 100% remote, il est indispensable de disposer des bons outils pour travailler efficacement.<br />De l’autre, le <strong>gaming</strong> : j’aime aussi profiter de mon temps libre pour jouer, en parallèle de mes projets tech.<br /><br />Voici la liste complète de mon setup, pensé pour répondre à cette double exigence.";
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
