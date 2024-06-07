<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        GARDONS LE CONTACT
      </h2>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Soyez notifier dès que je publie quelque chose, et desinscriver vous quand vous le souhaitez.
    </p>
    <div class="flex items-center gap-3 mt-6">
      <UInput
        placeholder="Address email"
        icon="i-heroicons-envelope"
        class="flex-1"
        size="lg"
      />
      <UButton label="Join &rarr;" size="lg" color="black" />
    </div>
  </div>
</template>
