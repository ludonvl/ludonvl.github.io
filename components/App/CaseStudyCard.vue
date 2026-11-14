<template>
  <article class="space-y-4">
    <NuxtImg
      v-if="study.capture"
      :src="study.capture"
      :alt="`Capture d'écran de ${study.titre}`"
      class="aspect-video w-full rounded-xl border border-gray-200 bg-gray-100 object-cover dark:border-white/10 dark:bg-gray-900"
      loading="lazy"
    />
    <div>
      <h3 class="text-base font-semibold text-gray-900 dark:text-gray-100">
        {{ study.titre }}
      </h3>
      <ul
        v-if="study.stack && study.stack.length"
        class="flex flex-wrap gap-1.5 pt-2"
        aria-label="Stack"
      >
        <li
          v-for="tech in study.stack"
          :key="tech"
          class="whitespace-nowrap rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-muted dark:bg-gray-800"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
    <dl class="space-y-3 text-sm">
      <div v-for="row in rows" :key="row.label">
        <dt class="font-medium text-gray-900 dark:text-gray-100">{{ row.label }}</dt>
        <dd class="text-muted">{{ row.value }}</dd>
      </div>
    </dl>
    <NuxtLink
      v-if="study.lien"
      :to="study.lien"
      target="_blank"
      external
      class="inline-flex min-h-[44px] items-center text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-primary-600 dark:text-gray-100 dark:hover:text-primary-400"
    >
      Voir le projet &rarr;
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  study: {
    type: Object,
    required: true,
  },
});

const rows = computed(() =>
  [
    { label: "Le problème", value: props.study.probleme },
    { label: "Ce que j'ai construit", value: props.study.construit },
    { label: "Le résultat", value: props.study.resultat },
  ].filter((row) => row.value),
);
</script>
