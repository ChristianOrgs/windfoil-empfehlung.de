<template>
  <div>
    <CategoryHero
      title="Wingfoil Setup-Finder"
      subtitle="Beantworte 6 kurze Fragen und finde das passende Setup für dein Gewicht, Können und Budget."
      badge="Kostenlos & ohne Registrierung"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs :items="[{ label: 'Setup-Finder' }]" />

      <div v-if="!showResult">
        <FinderWizard
          :step="step"
          :total-steps="totalSteps"
          :input="input"
          @next="nextStep"
          @prev="prevStep"
          @done="showResult = true"
        />
      </div>

      <div v-else>
        <div class="flex items-center justify-between mb-8">
          <h2 class="font-heading font-bold text-navy text-2xl">Dein Ergebnis</h2>
          <button
            class="text-sm text-ocean hover:underline font-semibold"
            @click="resetFinder"
          >
            Neu starten
          </button>
        </div>
        <FinderResult
          :recommendation="recommendation"
          :matched-products="matchedProducts"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFinder } from '~/composables/useFinder'

useHead({
  title: 'Wingfoil Setup-Finder – Finde dein passendes Set | wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Finde in 6 Schritten das passende Wingfoil-Setup für dein Gewicht, Fahrlevel und Budget. Kostenlos, ohne Registrierung.' }
  ]
})

const { step, totalSteps, input, recommendation, matchedProducts, nextStep, prevStep, reset } = useFinder()
const showResult = ref(false)

const resetFinder = () => {
  showResult.value = false
  reset()
}
</script>
