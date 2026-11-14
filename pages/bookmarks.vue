<template>
  <main>
    <AppHeader class="mb-12" title="Favoris" :description="description" />
    <div class="space-y-12">
      <section v-for="group in groups" :key="group.type" class="space-y-4">
        <ul>
          <AppUsesHeader :title="group.label" />
        </ul>
        <ul class="space-y-2">
          <li v-for="bookmark in group.items" :key="bookmark.id">
            <a
              :href="bookmark.url"
              target="_blank"
              rel="noopener"
              class="-mx-2 flex min-w-0 items-start gap-3 rounded-lg p-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                aria-hidden="true"
              >
                <Icon :name="types[bookmark.type].icon" class="h-4 w-4" />
              </span>
              <span class="min-w-0 flex-1 pt-1.5">
                <span class="flex items-baseline gap-3">
                  <span class="truncate text-gray-800 dark:text-gray-200">
                    {{ bookmark.label }}
                  </span>
                  <span class="flex-1"></span>
                  <span class="shrink-0 text-xs font-medium text-muted">
                    {{ getHost(bookmark.url) }}
                  </span>
                </span>
                <span v-if="bookmark.pourquoi" class="mt-0.5 block text-muted">
                  {{ bookmark.pourquoi }}
                </span>
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script setup>
const description =
  "Quelques ressources autour de la tech qui m'ont marqué, que j'explore ou que j'ai simplement envie de partager. <br /><br />À travers plusieurs formats : des <strong>vidéos pédagogiques</strong>, des <strong>articles inspirants</strong>, des <strong>outils pratiques</strong> ou même des <strong>livres enrichissants</strong>.<br /><br />Cette liste est toujours en cours d'expansion. <br /><br />N'hésitez pas à me partager <a href='mailto:ludo.nvl@gmail.com?subject=Proposition de favori' class='underline'>vos propres favoris</a>.";
usePageSeo({
  title: "Favoris | Ludovic Nouvel",
  description:
    "Vidéos, livres, articles et outils tech qui m'ont marqué et que je recommande : Tailwind CSS, Laravel, clean code, management d'équipe et plus encore.",
  path: "/bookmarks",
});

const types = {
  video: { label: "Vidéos", icon: "lucide:play-circle" },
  livre: { label: "Livres", icon: "lucide:book-open" },
  article: { label: "Articles et inspirations", icon: "lucide:file-text" },
  outil: { label: "Outils", icon: "lucide:wrench" },
};

// TODO(ludo): pour chaque favori, renseigner « pourquoi » (une ligne) et « ajouteLe » (AAAA-MM-JJ).
const bookmarks = [
  {
    id: 1,
    type: "video",
    label: "Adam Wathan — Tailwind CSS Best Practice Patterns",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 2,
    type: "outil",
    label: "DiceBear — générateur d'avatars",
    url: "https://www.dicebear.com/",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 3,
    type: "article",
    label: "Refactoring.guru",
    url: "https://refactoring.guru/",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 4,
    type: "livre",
    label: "Coder proprement — Robert C. Martin",
    url: "https://www.amazon.fr/dp/232600227X",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 5,
    type: "livre",
    label: "Engineering Management for the Rest of Us — Sarah Drasner",
    url: "https://www.amazon.fr/dp/B0BGYVDX35",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 6,
    type: "outil",
    label: "Laravel Boost",
    url: "https://github.com/laravel/boost",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 7,
    type: "outil",
    label: "FrankenPHP — serveur PHP moderne",
    url: "https://github.com/php/frankenphp",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 8,
    type: "outil",
    label: "Hatica — Engineering analytics for developer productivity",
    url: "https://www.hatica.io/",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 9,
    type: "article",
    label: "Tines — exemple de landing page",
    url: "https://www.tines.com/product",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 10,
    type: "article",
    label: "Netflix Tech Blog — Accelerating Video Quality Control",
    url: "https://netflixtechblog.com/accelerating-video-quality-control-at-netflix-with-pixel-error-detection-47ef7af7ca2e",
    pourquoi: "",
    ajouteLe: null,
  },
  {
    id: 11,
    type: "outil",
    label: "Make",
    url: "https://www.make.com/",
    pourquoi: "",
    ajouteLe: null,
  },
];

// Groupes dans l'ordre de `types` ; au sein d'un groupe, les plus récents d'abord quand `ajouteLe` est renseigné.
const groups = Object.entries(types)
  .map(([type, { label }]) => ({
    type,
    label,
    items: bookmarks
      .filter((bookmark) => bookmark.type === type)
      .sort((a, b) => (b.ajouteLe || "").localeCompare(a.ajouteLe || "")),
  }))
  .filter((group) => group.items.length);

function getHost(url) {
  const host = new URL(url).host;
  return host.startsWith("www.") ? host.substring(4) : host;
}
</script>
