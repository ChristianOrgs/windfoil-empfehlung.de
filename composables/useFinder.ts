import type { FinderInput } from '~/types'
import { getFinderRecommendation, matchProducts } from '~/data/finder-rules'

export function useFinder() {
  const step = ref(1)
  const totalSteps = 6

  const input = reactive<FinderInput>({
    level: null,
    weightKg: null,
    weightRange: '',
    previousExperience: [],
    windRange: '',
    transportPreference: 'any',
    budgetMax: null,
    budgetRange: ''
  })

  const recommendation = computed(() => {
    if (!input.level) return null
    return getFinderRecommendation(input)
  })

  const matchedProducts = computed(() => {
    if (!recommendation.value) return []
    return matchProducts(input, recommendation.value)
  })

  const progress = computed(() => Math.round((step.value / totalSteps) * 100))

  const nextStep = () => { if (step.value < totalSteps) step.value++ }
  const prevStep = () => { if (step.value > 1) step.value-- }
  const reset = () => {
    step.value = 1
    input.level = null
    input.weightKg = null
    input.weightRange = ''
    input.previousExperience = []
    input.windRange = ''
    input.transportPreference = 'any'
    input.budgetMax = null
    input.budgetRange = ''
  }

  return { step, totalSteps, input, recommendation, matchedProducts, progress, nextStep, prevStep, reset }
}
