<template>
  <a
    :href="url"
    rel="sponsored nofollow noopener"
    target="_blank"
    class="flex flex-col items-center gap-0.5 w-full"
  >
    <span class="w-full text-center bg-ocean hover:bg-navy text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
      {{ buttonLabel }}*
    </span>
    <span class="text-xs text-muted">bei {{ merchantLabel }}</span>
  </a>
</template>

<script setup lang="ts">
import { getMerchantLabel } from '~/utils/affiliate'

const props = defineProps<{
  url: string
  merchant: string
  label?: string
}>()

const merchantLabel = computed(() => getMerchantLabel(props.merchant))
const buttonLabel = computed(() => props.label ?? `Preis bei ${merchantLabel.value} prüfen`)
</script>
