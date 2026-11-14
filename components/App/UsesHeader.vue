<template>
  <li>
    <div
      class="relative after:absolute after:left-0 after:right-0 after:top-1/2 after:-z-10 after:block after:h-px after:w-full after:bg-gray-200 dark:after:bg-white/10"
    >
      <h2
        class="inline bg-gray-50 pr-4 text-xs font-semibold uppercase tracking-wider text-heading dark:bg-black"
      >
        {{ title }}
      </h2>
    </div>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
});
</script>
