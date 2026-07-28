<template>
  <div>
    <template v-if="offer && !stale && offer.currentPrice">
      <div class="flex items-baseline gap-2 flex-wrap">
        <span class="text-2xl font-heading font-bold text-navy">{{ formatPrice(offer.currentPrice) }}</span>
        <template v-if="offer.originalPrice && offer.originalPrice > offer.currentPrice">
          <span class="text-sm line-through text-muted">{{ formatPrice(offer.originalPrice) }}</span>
          <span class="text-sm font-semibold text-positive bg-green-50 px-2 py-0.5 rounded-full">
            -{{ formatSavings(offer.currentPrice, offer.originalPrice).savingsPct }}%
          </span>
        </template>
      </div>
      <p class="text-xs text-muted mt-1">Preis geprüft am {{ formatCheckedDate(offer.lastChecked!) }}</p>
    </template>
    <template v-else-if="offer && stale && offer.currentPrice">
      <p class="text-sm text-muted">Zuletzt bekannter Preis: <span class="font-semibold text-text">{{ formatPrice(offer.currentPrice) }}</span></p>
      <p class="text-xs text-warning">Preis möglicherweise nicht mehr aktuell</p>
    </template>
    <template v-else>
      <p class="text-sm text-muted">Aktuellen Preis bei {{ merchantLabel }} prüfen</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ProductOffer } from '~/types'
import { formatPrice, formatSavings, formatCheckedDate, isPriceStale } from '~/utils/price'
import { getMerchantLabel } from '~/utils/affiliate'

const props = defineProps<{ offer: ProductOffer | undefined }>()

const stale = computed(() => isPriceStale(props.offer?.lastChecked))
const merchantLabel = computed(() => props.offer ? getMerchantLabel(props.offer.merchant) : 'Händler')
</script>
