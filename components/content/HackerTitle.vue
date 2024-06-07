<template>
  <div>
    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
          @mouseenter="startScrambling"
>
      {{ displayText }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
});

const displayText = ref(props.labels[0]);
const charset = "abcdefghijklmnopqrstuvwxyz";
let indexLabel = 0;

function randomChars(length) {
  return Array.from(
    { length },
    () => charset[Math.floor(Math.random() * charset.length)]
  ).join("");
}

async function scramble(input) {
  let prefix = "";
  for (let index = 0; index < input.length; index++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    prefix += input.charAt(index);
    displayText.value = prefix + randomChars(input.length - prefix.length);
  }
}

function startScrambling() {
  ++indexLabel;

  if  (indexLabel > props.labels.length - 1) {
      indexLabel = 0;
  }

  scramble(props.labels[indexLabel]);
}
</script>
