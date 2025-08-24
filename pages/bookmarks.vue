<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Favoris" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Quelques ressources autour de la <strong>TECH</strong> qui m'ont marqué, que j'explore ou que j'ai simplement envie de partager. <br /><br />À travers plusieurs formats : des <strong>vidéos pédagogiques</strong>, des <strong>articles inspirantes</strong>, des <strong>outils pratiques</strong> ou même des <strong>livres enrichissants</strong>.<br /><br />Cette liste est toujours en cours d'expansion. <br /><br />N'hésitez pas à me partager <a href='mailto:ludo.nvl@gmail.com?subject=Propose un favori' class='underline'>vos propres favoris</a>.";
useSeoMeta({
  title: "Favoris | Ludovic Nouvel",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
  },
  {
    id: 2,
    label: "Dicebear Awesome avatars",
    url: "https://www.dicebear.com/",
  },
  {
    id: 3,
    label: "Refactoring.guru",
    url: "https://refactoring.guru/",
  },
  {
    id: 4,
    label: "Coder Proprement - Roberet C. Martin",
    url: "https://www.amazon.com/CODER-PROPREMENT-Robert-C-MARTIN/dp/232600227X/ref=sr_1_1?crid=3CGRMR1586CZI&dib=eyJ2IjoiMSJ9.xdw5oTqj_5rWUf5k1FHpJNZZ1nFeALZoxWZME-D14yvshgATWsQtxSpKAYW6-Qnw.yob7vh7Htfh_-9OKXWBsdtm1GEslVhKwslalz2YJvxM&dib_tag=se&keywords=coder+proprement&qid=1756028809&sprefix=coder+proprement%2Caps%2C144&sr=8-1",
  },
  {
    id: 5,
    label: "Engenireeg Manager for the rest of us - Sarah Drasner",
    url: "https://www.amazon.com/Engineering-Management-Rest-Sarah-Drasner-ebook/dp/B0BGYVDX35/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.T-aUgnIxJ_hErxfAitbkXE7NelOkBqZuIxtg-WIXjuHi8PIOHzIrAkpDbBlKXoIdbGXPfaP5Y3DsdfL4ypOldF2e8X22tC0gh_58BHZUUd4vGys53p9gGOChIHG2Mx6PiUfoZcIlM31iiM-FkOKFOHrmP-iIApIGcJgzdcPFmMB0Irei2CWpFNgaQ_klnR_NexA5qFkXtZurulpn7l8o0aqzND_QweXqPcbnPttFbgU.MHe-6pjJHWleyLo0hKiLzuXY77qxJMSNQCXoHjAi4Bo&qid=1756028852&sr=8-1",
  },
  {
    id: 6,
    label: "Laravel boost",
    url: "https://github.com/laravel/boost",
  },
  {
    id: 7,
    label: "Franken PHP - Modern PHP server",
    url: "https://github.com/php/frankenphp",
  },
  {
    id: 8,
    label: "Hatica - Engenireeg Analytics to boost developer",
    url: "https://www.hatica.io/",
  },
  {
    id: 9,
    label: "Tines - Beautiful landing page",
    url: "https://www.tines.com/product",
  },
  {
    id: 10,
    label: "Netflix Tech Blog - Accelerating Video Quality Control",
    url: "https://netflixtechblog.com/accelerating-video-quality-control-at-netflix-with-pixel-error-detection-47ef7af7ca2e",
  },
  {
    id: 11,
    label: "Make",
    url: "https://www.make.com/en",
  },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
