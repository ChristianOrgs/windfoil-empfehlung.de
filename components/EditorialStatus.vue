<template>
  <div class="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full" :class="statusClass">
    <span class="w-1.5 h-1.5 rounded-full" :class="dotClass"></span>
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import type { ReviewStatus } from '~/types'

const props = defineProps<{ status: ReviewStatus }>()

const config: Record<ReviewStatus, { label: string; statusClass: string; dotClass: string }> = {
  'self-tested': { label: 'Selbst getestet', statusClass: 'bg-green-50 text-positive', dotClass: 'bg-positive' },
  'expert-tested': { label: 'Experten-Test', statusClass: 'bg-green-50 text-positive', dotClass: 'bg-positive' },
  'editorial-data-review': { label: 'Redaktionell geprüft', statusClass: 'bg-sky text-ocean', dotClass: 'bg-ocean' },
  'not-reviewed': { label: 'Noch nicht geprüft', statusClass: 'bg-orange-50 text-warning', dotClass: 'bg-warning' }
}

const current = computed(() => config[props.status])
const label = computed(() => current.value.label)
const statusClass = computed(() => current.value.statusClass)
const dotClass = computed(() => current.value.dotClass)
</script>
