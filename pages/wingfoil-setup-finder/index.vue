<template>
  <div>
    <CategoryHero
      title="Wingfoil Setup-Finder"
      subtitle="Beantworte ein paar kurze Fragen und finde das passende Setup oder den passenden Wing für dich."
      badge="Kostenlos & ohne Registrierung"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumbs :items="[{ label: 'Setup-Finder' }]" />

      <!-- Mode selection -->
      <div v-if="input.productMode === null" class="max-w-2xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="font-heading font-bold text-navy text-3xl mb-3">Was suchst du?</h2>
          <p class="text-muted">Wähle aus, was du kaufen möchtest – dann passen wir die Fragen an.</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-5">
          <button
            class="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border hover:border-ocean hover:bg-sky transition-all text-center group"
            @click="selectMode('set')"
          >
            <span class="text-5xl">🏄</span>
            <div>
              <div class="font-heading font-bold text-navy text-xl mb-1">Komplettset</div>
              <div class="text-sm text-muted">Board, Wing und Foil als komplettes Einstiegspaket</div>
            </div>
          </button>
          <button
            class="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border hover:border-ocean hover:bg-sky transition-all text-center group"
            @click="selectMode('wing')"
          >
            <span class="text-5xl">💨</span>
            <div>
              <div class="font-heading font-bold text-navy text-xl mb-1">Einzelner Wing</div>
              <div class="text-sm text-muted">Nur einen Wing kaufen – du hast Board und Foil bereits</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Wizard -->
      <div v-else-if="!showResult">
        <FinderWizard
          :step="step"
          :total-steps="totalSteps"
          :product-mode="input.productMode"
          :input="input"
          @next="nextStep"
          @prev="handlePrev"
          @done="showResult = true"
        />
      </div>

      <!-- Result -->
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
          :product-mode="finderMode"
          :recommendation="recommendation"
          :wing-recommendation="wingRecommendation"
          :matched-products="matchedProducts"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFinder } from '~/composables/useFinder'

useHead({
  title: 'Wingfoil Setup-Finder – Finde dein passendes Set oder Wing | wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Finde in wenigen Schritten das passende Wingfoil-Setup oder den richtigen Wing für dein Fahrlevel, Wind und Budget. Kostenlos, ohne Registrierung.' }
  ]
})

const { step, totalSteps, input, recommendation, matchedProducts, nextStep, prevStep, reset } = useFinder()
const showResult = ref(false)

const finderMode = computed(() => input.productMode ?? 'set')

const wingRecommendation = computed(() => {
  if (input.productMode !== 'wing') return null
  let wingSizeMin = 4, wingSizeMax = 6
  if (input.windRange === '10-15kn') { wingSizeMin = 5; wingSizeMax = 7 }
  else if (input.windRange === '20-25kn') { wingSizeMin = 3; wingSizeMax = 5 }
  return { wingSizeMin, wingSizeMax }
})

const selectMode = (mode: 'set' | 'wing') => {
  input.productMode = mode
}

const handlePrev = () => {
  if (step.value === 1) {
    input.productMode = null
  } else {
    prevStep()
  }
}

const resetFinder = () => {
  showResult.value = false
  reset()
}
</script>
