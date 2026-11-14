<template>
  <footer class="mx-auto max-w-2xl px-4 pb-8 text-center text-sm text-muted">
    <p>© {{ year }} Ludovic Nouvel. Tous droits réservés.</p>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
