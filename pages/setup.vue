<template>
  <main>
    <AppHeader class="mb-12" title="Setup" :description="description" />

    <NuxtImg
      v-if="deskPhoto"
      :src="deskPhoto"
      alt="Mon bureau"
      class="mb-16 aspect-video w-full rounded-xl object-cover ring-1 ring-gray-200 dark:ring-white/10"
    />

    <div class="mb-16">
      <iframe
        src="https://ohmydesk.ludovicnouvel.com/embed/mon-setup?autorotate=true"
        title="Mon setup en 3D (OhMyDesk)"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen
        loading="lazy"
        class="w-full rounded-xl ring-1 ring-gray-200 dark:ring-white/10"
      ></iframe>
      <p v-if="updatedAt" class="mt-3 text-sm text-muted">
        Mis à jour le
        <time :datetime="updatedAt">{{ formatDate(updatedAt) }}</time>
      </p>
    </div>

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
// Date de la dernière revue du setup (AAAA-MM-JJ), à changer à chaque mise à jour.
const updatedAt = "2026-11-15";
// TODO(ludo): photo du bureau, par ex. "/setup/bureau.jpg" dans public/ (affichée seulement si renseignée).
// Les vignettes par item se renseignent avec le champ « image » de chaque fichier content/uses/*.json.
const deskPhoto = null;

const description =
  "Un setup <strong>hybride</strong>, pensé pour la <strong>productivité</strong> en 100% remote et pour le <strong>gaming</strong> sur mon temps libre. Voici le matériel et les logiciels que j’utilise au quotidien.";
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
