<template>
  <div class="mb-6">
    <div class="flex justify-between text-xs text-muted mb-2">
      <span>Schritt {{ current }} von {{ total }}</span>
      <span>{{ progress }}%</span>
    </div>
    <div class="w-full bg-border rounded-full h-2">
      <div
        class="bg-ocean h-2 rounded-full transition-all duration-300"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ current: number; total: number }>()
const progress = computed(() => Math.round((props.current / props.total) * 100))
</script>
