<template>
  <div class="space-y-8">
    <!-- Wing mode recommendation -->
    <div v-if="productMode === 'wing' && wingRecommendation" class="bg-sky rounded-2xl p-6">
      <h3 class="font-heading font-bold text-navy text-xl mb-4">Deine Wing-Empfehlung</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        <div class="bg-white rounded-xl p-3">
          <dt class="text-xs text-muted">Empfohlene Größe</dt>
          <dd class="font-bold text-navy">{{ wingRecommendation.wingSizeMin }}–{{ wingRecommendation.wingSizeMax }} m²</dd>
        </div>
      </div>
      <ul class="space-y-1.5">
        <li class="text-sm text-text flex items-start gap-2">
          <span class="text-ocean mt-0.5 shrink-0">→</span>
          Ein Wing zwischen {{ wingRecommendation.wingSizeMin }} und {{ wingRecommendation.wingSizeMax }} m² passt zu deinen Windbedingungen.
        </li>
        <li class="text-sm text-text flex items-start gap-2">
          <span class="text-ocean mt-0.5 shrink-0">→</span>
          Größere Wings erzeugen mehr Zug bei wenig Wind, kleinere sind bei starkem Wind einfacher zu kontrollieren.
        </li>
      </ul>
    </div>

    <!-- Set mode recommendation -->
    <div v-else-if="productMode === 'set' && recommendation" class="bg-sky rounded-2xl p-6">
      <h3 class="font-heading font-bold text-navy text-xl mb-4">Deine technische Empfehlung</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        <div class="bg-white rounded-xl p-3">
          <dt class="text-xs text-muted">Boardvolumen</dt>
          <dd class="font-bold text-navy">{{ recommendation.boardVolumeMin }}–{{ recommendation.boardVolumeMax }} L</dd>
        </div>
        <div class="bg-white rounded-xl p-3">
          <dt class="text-xs text-muted">Bauweise</dt>
          <dd class="font-bold text-navy">{{ constructionLabel }}</dd>
        </div>
        <div class="bg-white rounded-xl p-3">
          <dt class="text-xs text-muted">Wing-Größe</dt>
          <dd class="font-bold text-navy">{{ recommendation.wingSizeMin }}–{{ recommendation.wingSizeMax }} m²</dd>
        </div>
        <div class="bg-white rounded-xl p-3">
          <dt class="text-xs text-muted">Foil-Fläche</dt>
          <dd class="font-bold text-navy">{{ recommendation.foilAreaMin }}–{{ recommendation.foilAreaMax }} cm²</dd>
        </div>
      </div>
      <ul class="space-y-1.5">
        <li v-for="e in recommendation.explanation" :key="e" class="text-sm text-text flex items-start gap-2">
          <span class="text-ocean mt-0.5 shrink-0">→</span>
          {{ e }}
        </li>
      </ul>
    </div>

    <!-- Matched products -->
    <div v-if="matchedProducts.length">
      <h3 class="font-heading font-bold text-navy text-xl mb-4">
        {{ productMode === 'wing' ? 'Passende Wings für dich' : 'Passende Produkte für dich' }}
      </h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in matchedProducts" :key="p.id" :product="p" />
      </div>
    </div>
    <div v-else class="bg-white border border-border rounded-2xl p-6 text-center text-muted">
      <p>Für deine Anforderungen gibt es aktuell noch keine redaktionell geprüfte Empfehlung.</p>
      <NuxtLink
        :to="productMode === 'wing' ? '/wingfoil-wing/' : '/wingfoil-set/'"
        class="text-ocean font-semibold hover:underline mt-2 inline-block"
      >
        {{ productMode === 'wing' ? 'Alle Wings ansehen' : 'Alle Sets ansehen' }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FinderRecommendation, WingfoilProduct } from '~/types'

const props = defineProps<{
  productMode: 'set' | 'wing'
  recommendation: FinderRecommendation | null
  wingRecommendation: { wingSizeMin: number; wingSizeMax: number } | null
  matchedProducts: WingfoilProduct[]
}>()

const constructionLabel = computed(() => {
  if (props.recommendation?.preferredConstruction === 'inflatable') return 'Aufblasbar'
  if (props.recommendation?.preferredConstruction === 'hardboard') return 'Hardboard'
  return 'Beliebig'
})
</script>
