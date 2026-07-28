import type { WingfoilProduct, ExperienceLevel, ProductType } from '~/types'

export function getPublishedProducts(products: WingfoilProduct[]): WingfoilProduct[] {
  return products.filter(p => p.published && p.researchStatus !== 'inactive')
}

export function getProductsByLevel(products: WingfoilProduct[], level: ExperienceLevel): WingfoilProduct[] {
  return getPublishedProducts(products).filter(p => p.levels.includes(level))
}

export function getProductsByType(products: WingfoilProduct[], type: ProductType): WingfoilProduct[] {
  return getPublishedProducts(products).filter(p => p.productType === type)
}

export function getLowestPrice(product: WingfoilProduct): number | undefined {
  const prices = product.offers
    .filter(o => o.available && o.currentPrice !== undefined)
    .map(o => o.currentPrice!)
  return prices.length ? Math.min(...prices) : undefined
}

export function getPrimaryOffer(product: WingfoilProduct) {
  return product.offers.find(o => o.available) ?? product.offers[0]
}

export function getLevelLabel(level: ExperienceLevel): string {
  const labels: Record<ExperienceLevel, string> = {
    beginner: 'Anfänger',
    intermediate: 'Fortgeschritten',
    performance: 'Performance'
  }
  return labels[level]
}

export function getReviewStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    'self-tested': 'Selbst getestet',
    'expert-tested': 'Von Experten getestet',
    'editorial-data-review': 'Redaktionell geprüft',
    'not-reviewed': 'Noch nicht geprüft'
  }
  return labels[status] ?? status
}

export function getConstructionLabel(c?: string): string {
  if (c === 'inflatable') return 'Aufblasbar'
  if (c === 'hardboard') return 'Hardboard'
  return '–'
}
