import type { FinderInput } from '~/types'
import { getFinderRecommendation, matchProducts, matchWings } from '~/data/finder-rules'

export function useFinder() {
  const step = ref(1)

  const input = reactive<FinderInput>({
    productMode: null,
    level: null,
    weightKg: null,
    weightRange: '',
    previousExperience: [],
    windRange: '',
    transportPreference: 'any',
    budgetMax: null,
    budgetRange: ''
  })

  const totalSteps = computed(() => input.productMode === 'wing' ? 2 : 3)

  const recommendation = computed(() => {
    if (input.productMode !== 'set' || !input.level) return null
    return getFinderRecommendation(input)
  })

  const wingRecommendation = computed(() => {
    if (input.productMode !== 'wing') return null
    let wingSizeMin = 4
    let wingSizeMax = 6
    if (input.windRange === '10-15kn') { wingSizeMin = 5; wingSizeMax = 7 }
    else if (input.windRange === '15-20kn') { wingSizeMin = 4; wingSizeMax = 6 }
    else if (input.windRange === '20-25kn') { wingSizeMin = 3; wingSizeMax = 5 }
    return { wingSizeMin, wingSizeMax }
  })

  const matchedProducts = computed(() => {
    if (input.productMode === 'wing') return matchWings(input)
    if (!recommendation.value) return []
    return matchProducts(input, recommendation.value)
  })

  const progress = computed(() => Math.round((step.value / totalSteps.value) * 100))

  const nextStep = () => { if (step.value < totalSteps.value) step.value++ }
  const prevStep = () => { if (step.value > 1) step.value-- }
  const reset = () => {
    step.value = 1
    input.productMode = null
    input.level = null
    input.weightKg = null
    input.weightRange = ''
    input.previousExperience = []
    input.windRange = ''
    input.transportPreference = 'any'
    input.budgetMax = null
    input.budgetRange = ''
  }

  return { step, totalSteps, input, recommendation, wingRecommendation, matchedProducts, progress, nextStep, prevStep, reset }
}
