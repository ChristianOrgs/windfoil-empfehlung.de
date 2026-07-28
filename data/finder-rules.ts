import type { FinderInput, FinderRecommendation } from '~/types'
import { products } from './products'
import { getPublishedProducts } from '~/utils/products'

export function getFinderRecommendation(input: FinderInput): FinderRecommendation {
  const weight = input.weightKg ?? 80
  const level = input.level ?? 'beginner'

  let boardVolumeMin = 120
  let boardVolumeMax = 160
  let wingSizeMin = 4
  let wingSizeMax = 6
  let foilAreaMin = 1400
  let foilAreaMax = 2000
  let preferredConstruction: 'inflatable' | 'hardboard' | 'any' = 'inflatable'
  const explanation: string[] = []

  // Volume by weight
  if (weight < 70) { boardVolumeMin = 100; boardVolumeMax = 130 }
  else if (weight < 85) { boardVolumeMin = 120; boardVolumeMax = 150 }
  else if (weight < 100) { boardVolumeMin = 140; boardVolumeMax = 170 }
  else { boardVolumeMin = 160; boardVolumeMax = 200 }

  // Adjust by level
  if (level === 'beginner') {
    boardVolumeMin = Math.max(boardVolumeMin, 120)
    foilAreaMin = 1500
    foilAreaMax = 2000
    explanation.push('Als Anfänger empfehlen wir ein hohes Boardvolumen für mehr Stabilität beim Wasserstart.')
  } else if (level === 'intermediate') {
    foilAreaMin = 1200
    foilAreaMax = 1800
    explanation.push('Mit etwas Erfahrung kannst du ein kompakteres Board und ein agileres Foil wählen.')
  } else {
    boardVolumeMax = Math.min(boardVolumeMax, 130)
    foilAreaMin = 900
    foilAreaMax = 1500
    wingSizeMin = 3
    wingSizeMax = 5
    explanation.push('Performance-Fahrer profitieren von kleineren, agileren Setups mit kleinerem Foil.')
  }

  // Wing size by wind
  if (input.windRange === '10-15kn') { wingSizeMin = 5; wingSizeMax = 7 }
  else if (input.windRange === '15-20kn') { wingSizeMin = 4; wingSizeMax = 6 }
  else if (input.windRange === '20-25kn') { wingSizeMin = 3; wingSizeMax = 5 }

  // Transport
  if (input.transportPreference === 'inflatable') {
    preferredConstruction = 'inflatable'
    explanation.push('Ein aufblasbares Board lässt sich einfacher transportieren und lagern.')
  } else if (input.transportPreference === 'hardboard') {
    preferredConstruction = 'hardboard'
    explanation.push('Ein Hardboard bietet direkteres Fahrgefühl und bessere Performance.')
  }

  // Budget constraint note
  if (input.budgetMax && input.budgetMax < 1000) {
    explanation.push('Bei einem Budget unter 1.000 € empfehlen sich gebrauchte Sets oder einzelne Komponenten.')
  }

  explanation.push(`Für ${weight} kg Körpergewicht empfehlen wir ${boardVolumeMin}–${boardVolumeMax} Liter Boardvolumen.`)
  explanation.push(`Bei den genannten Windbedingungen passt ein Wing zwischen ${wingSizeMin} und ${wingSizeMax} m².`)

  return {
    boardVolumeMin,
    boardVolumeMax,
    preferredConstruction,
    wingSizeMin,
    wingSizeMax,
    foilAreaMin,
    foilAreaMax,
    explanation
  }
}

export function matchProducts(input: FinderInput, rec: FinderRecommendation) {
  const published = getPublishedProducts(products).filter(p =>
    ['complete-set', 'board-pack'].includes(p.productType)
  )

  return published.filter(p => {
    const vol = p.board?.volumeLitres
    if (!vol) return false
    if (vol < rec.boardVolumeMin - 20 || vol > rec.boardVolumeMax + 20) return false

    if (rec.preferredConstruction !== 'any' && p.board?.construction !== rec.preferredConstruction) return false

    if (input.level && !p.levels.includes(input.level)) return false

    const price = p.offers[0]?.currentPrice
    if (input.budgetMax && price && price > input.budgetMax) return false

    return true
  }).slice(0, 3)
}
