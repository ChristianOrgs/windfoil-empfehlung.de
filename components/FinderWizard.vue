<template>
  <div class="max-w-2xl mx-auto">
    <FinderProgress :current="step" :total="totalSteps" />

    <!-- Step 1: Level -->
    <div v-if="step === 1" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Wie ist dein Wingfoil-Level?</h2>
      <div class="grid gap-3">
        <button
          v-for="opt in levelOptions"
          :key="opt.value"
          class="flex items-start gap-4 p-4 rounded-xl border-2 transition-all text-left"
          :class="input.level === opt.value ? 'border-ocean bg-sky' : 'border-border hover:border-ocean/50'"
          @click="input.level = opt.value; nextStep()"
        >
          <span class="text-2xl">{{ opt.icon }}</span>
          <div>
            <div class="font-semibold text-navy">{{ opt.label }}</div>
            <div class="text-sm text-muted">{{ opt.desc }}</div>
          </div>
        </button>
      </div>
    </div>

    <!-- Step 2: Weight -->
    <div v-else-if="step === 2" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Wie viel wiegst du?</h2>
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="opt in weightOptions"
          :key="opt.range"
          class="p-4 rounded-xl border-2 transition-all text-left"
          :class="input.weightRange === opt.range ? 'border-ocean bg-sky' : 'border-border hover:border-ocean/50'"
          @click="selectWeight(opt)"
        >
          <div class="font-semibold text-navy">{{ opt.label }}</div>
        </button>
      </div>
      <div class="mt-4">
        <label class="text-sm text-muted block mb-1">Oder genaues Gewicht eingeben (optional)</label>
        <input
          v-model.number="input.weightKg"
          type="number"
          min="40"
          max="150"
          placeholder="z.B. 78"
          class="border border-border rounded-xl px-4 py-2 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-ocean"
        />
        <span class="text-sm text-muted ml-2">kg</span>
      </div>
    </div>

    <!-- Step 3: Experience -->
    <div v-else-if="step === 3" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Welche Vorerfahrung hast du?</h2>
      <p class="text-sm text-muted">Mehrfachauswahl möglich</p>
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="exp in experienceOptions"
          :key="exp.value"
          class="p-3 rounded-xl border-2 transition-all text-sm text-left font-medium"
          :class="input.previousExperience.includes(exp.value) ? 'border-ocean bg-sky text-navy' : 'border-border text-muted hover:border-ocean/50'"
          @click="toggleExperience(exp.value)"
        >
          {{ exp.label }}
        </button>
      </div>
    </div>

    <!-- Step 4: Wind -->
    <div v-else-if="step === 4" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Welche Windbedingungen hast du typischerweise?</h2>
      <div class="grid gap-3">
        <button
          v-for="opt in windOptions"
          :key="opt.value"
          class="p-4 rounded-xl border-2 transition-all text-left"
          :class="input.windRange === opt.value ? 'border-ocean bg-sky' : 'border-border hover:border-ocean/50'"
          @click="input.windRange = opt.value"
        >
          <div class="font-semibold text-navy">{{ opt.label }}</div>
          <div class="text-sm text-muted">{{ opt.desc }}</div>
        </button>
      </div>
    </div>

    <!-- Step 5: Transport -->
    <div v-else-if="step === 5" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Transport und Lagerung?</h2>
      <div class="grid gap-3">
        <button
          v-for="opt in transportOptions"
          :key="opt.value"
          class="p-4 rounded-xl border-2 transition-all text-left"
          :class="input.transportPreference === opt.value ? 'border-ocean bg-sky' : 'border-border hover:border-ocean/50'"
          @click="input.transportPreference = opt.value"
        >
          <div class="font-semibold text-navy">{{ opt.label }}</div>
          <div class="text-sm text-muted">{{ opt.desc }}</div>
        </button>
      </div>
    </div>

    <!-- Step 6: Budget -->
    <div v-else-if="step === 6" class="space-y-4">
      <h2 class="font-heading font-bold text-navy text-2xl">Welches Budget hast du?</h2>
      <div class="grid grid-cols-2 gap-3">
        <button
          v-for="opt in budgetOptions"
          :key="opt.range"
          class="p-4 rounded-xl border-2 transition-all text-left"
          :class="input.budgetRange === opt.range ? 'border-ocean bg-sky' : 'border-border hover:border-ocean/50'"
          @click="selectBudget(opt)"
        >
          <div class="font-semibold text-navy">{{ opt.label }}</div>
        </button>
      </div>
    </div>

    <!-- Navigation -->
    <div class="flex justify-between mt-8">
      <button
        v-if="step > 1"
        class="px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-muted hover:text-navy hover:bg-sky transition-colors"
        @click="prevStep"
      >
        Zurück
      </button>
      <div v-else></div>

      <button
        v-if="step < totalSteps"
        class="px-5 py-2.5 rounded-xl bg-ocean text-white text-sm font-semibold hover:bg-navy transition-colors disabled:opacity-50"
        :disabled="!canProceed"
        @click="nextStep"
      >
        Weiter
      </button>
      <button
        v-else
        class="px-5 py-2.5 rounded-xl bg-ocean text-white text-sm font-semibold hover:bg-navy transition-colors"
        @click="$emit('done')"
      >
        Empfehlung anzeigen
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceLevel } from '~/types'

const props = defineProps<{
  step: number
  totalSteps: number
  input: any
}>()

const emit = defineEmits<{
  (e: 'done'): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const nextStep = () => emit('next')
const prevStep = () => emit('prev')

const levelOptions = [
  { value: 'beginner' as ExperienceLevel, icon: '🌊', label: 'Kompletter Anfänger', desc: 'Ich bin neu im Wingfoilen' },
  { value: 'intermediate' as ExperienceLevel, icon: '🏄', label: 'Erste Erfahrung', desc: 'Ich habe schon erste Fahrten gemacht' },
  { value: 'performance' as ExperienceLevel, icon: '🚀', label: 'Sicher und erfahren', desc: 'Ich suche mehr Performance' }
]

const weightOptions = [
  { range: 'lt70', label: 'Unter 70 kg', min: null as number | null, max: 70 as number | null },
  { range: '70-84', label: '70–84 kg', min: 70 as number | null, max: 84 as number | null },
  { range: '85-99', label: '85–99 kg', min: 85 as number | null, max: 99 as number | null },
  { range: 'gt100', label: 'Ab 100 kg', min: 100 as number | null, max: null as number | null }
]

const experienceOptions = [
  { value: 'none', label: 'Kein Wassersport' },
  { value: 'sup', label: 'Stand-up-Paddling' },
  { value: 'windsurf', label: 'Windsurfen' },
  { value: 'kite', label: 'Kitesurfen' },
  { value: 'surf', label: 'Surfen' },
  { value: 'pumpfoil', label: 'Pump Foiling' }
]

const windOptions = [
  { value: '10-15kn', label: '10–15 Knoten', desc: 'Leicht – du brauchst einen großen Wing' },
  { value: '15-20kn', label: '15–20 Knoten', desc: 'Mittel – idealer Windbereich für Einsteiger' },
  { value: '20-25kn', label: '20–25 Knoten', desc: 'Stark – kleinerer Wing ausreichend' },
  { value: 'mixed', label: 'Wechselnde Bedingungen', desc: 'Unterschiedlich je nach Tag' },
  { value: 'unknown', label: 'Weiß ich noch nicht', desc: 'Ich bin noch nicht sicher' }
]

const transportOptions = [
  { value: 'inflatable' as const, label: 'Kleines Packmaß', desc: 'Aufblasbares Board – einfacher Transport im Auto oder Flieger' },
  { value: 'hardboard' as const, label: 'Hardboard möglich', desc: 'Ich habe Platz für ein Hardboard' },
  { value: 'any' as const, label: 'Keine Präferenz', desc: 'Transport ist kein Entscheidungskriterium' }
]

const budgetOptions = [
  { range: 'lt1000', label: 'Unter 1.000 €', max: 999 as number | null },
  { range: '1000-1400', label: '1.000–1.400 €', max: 1400 as number | null },
  { range: '1400-2000', label: '1.400–2.000 €', max: 2000 as number | null },
  { range: 'gt2000', label: 'Über 2.000 €', max: null as number | null },
  { range: 'open', label: 'Noch offen', max: null as number | null }
]

const selectWeight = (opt: typeof weightOptions[0]) => {
  props.input.weightRange = opt.range
  if (opt.min) props.input.weightKg = opt.min + 7
  nextStep()
}

const selectBudget = (opt: typeof budgetOptions[0]) => {
  props.input.budgetRange = opt.range
  props.input.budgetMax = opt.max
}

const toggleExperience = (val: string) => {
  const idx = props.input.previousExperience.indexOf(val)
  if (idx === -1) props.input.previousExperience.push(val)
  else props.input.previousExperience.splice(idx, 1)
}

const canProceed = computed(() => {
  if (props.step === 2) return !!props.input.weightRange
  if (props.step === 4) return !!props.input.windRange
  if (props.step === 5) return !!props.input.transportPreference
  return true
})
</script>
