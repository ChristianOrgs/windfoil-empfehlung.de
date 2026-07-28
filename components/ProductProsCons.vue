<template>
  <div class="grid sm:grid-cols-2 gap-4">
    <div>
      <h4 class="font-semibold text-sm text-positive mb-2 flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
        </svg>
        Vorteile
      </h4>
      <ul class="space-y-1.5">
        <li v-for="a in advantages" :key="a" class="text-sm text-text flex items-start gap-2">
          <span class="text-positive mt-0.5 shrink-0">+</span>
          {{ a }}
        </li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold text-sm text-warning mb-2 flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/>
        </svg>
        Nachteile
      </h4>
      <ul class="space-y-1.5">
        <li v-for="d in disadvantages" :key="d" class="text-sm text-text flex items-start gap-2">
          <span class="text-warning mt-0.5 shrink-0">–</span>
          {{ d }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ advantages: string[]; disadvantages: string[] }>()
</script>
