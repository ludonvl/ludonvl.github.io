<template>
  <main>
    <AppHeader class="mb-6" title="Setup" :description="description" />
    <p v-if="updatedAt" class="mb-12 text-sm text-muted">
      Mis à jour le
      <time :datetime="updatedAt">{{ formatDate(updatedAt) }}</time>
    </p>
    <div v-else class="mb-12"></div>

    <NuxtImg
      v-if="deskPhoto"
      :src="deskPhoto"
      alt="Mon bureau"
      class="mb-16 aspect-video w-full rounded-xl object-cover ring-1 ring-gray-200 dark:ring-white/10"
    />

    <div class="space-y-16">
      <section v-for="group in groups" :key="group.title" class="space-y-6">
        <ul>
          <AppUsesHeader :title="group.title" />
        </ul>
        <ul class="grid gap-4 sm:grid-cols-2">
          <AppUsesItem v-for="item in group.items" :key="item._path" :item="item" />
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
// TODO(ludo): date de dernière mise à jour réelle au format AAAA-MM-JJ (affichée seulement si renseignée),
// à fixer une fois les éléments datés revus (iPhone 15 Pro, Arc, MacBook Pro 2016).
const updatedAt = null;
// TODO(ludo): photo du bureau, par ex. "/setup/bureau.jpg" dans public/ (affichée seulement si renseignée).
// Les vignettes par item se renseignent avec le champ « image » de chaque fichier content/uses/*.json.
const deskPhoto = null;

const description =
  "J’accorde beaucoup d’importance à mon environnement de travail. Le choix du matériel et des logiciels doit être réfléchi, afin que mon setup reste <strong>hybride</strong> et réponde à deux besoins essentiels.<br /><br />D’un côté, la <strong>productivité</strong> : étant en 100% remote, il est indispensable de disposer des bons outils pour travailler efficacement.<br />De l’autre, le <strong>gaming</strong> : j’aime aussi profiter de mon temps libre pour jouer, en parallèle de mes projets tech.<br /><br />Voici la liste complète de mon setup, pensé pour répondre à cette double exigence.";
usePageSeo({
  title: "Setup | Ludovic Nouvel",
  description:
    "Le matériel et les logiciels que j'utilise au quotidien pour travailler en remote et jouer : écrans, claviers, souris, micro, bureau et applications.",
  path: "/setup",
});

const { data: items } = await useAsyncData("uses", () =>
  queryContent("/uses").find()
);
const groups = computed(() =>
  [
    { title: "Équipements", category: "hardware" },
    { title: "Logiciels", category: "software" },
    { title: "Bureau", category: "desk" },
  ].map((group) => ({
    ...group,
    items: (items.value || []).filter((item) => item.category === group.category),
  })),
);

function formatDate(value) {
  return new Date(value).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
</script>
