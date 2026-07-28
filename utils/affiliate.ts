export function buildAmazonAffiliateUrl(asin: string, tag: string): string {
  return `https://www.amazon.de/dp/${asin}?tag=${encodeURIComponent(tag)}`
}

export function buildDecathlonAffiliateUrl(sourceUrl: string, template: string): string {
  if (!template || template.includes('PLACEHOLDER')) {
    return sourceUrl
  }
  return template.replace('{url}', encodeURIComponent(sourceUrl))
}

export function getMerchantLabel(merchant: string): string {
  const labels: Record<string, string> = {
    amazon: 'Amazon',
    decathlon: 'Decathlon'
  }
  return labels[merchant] ?? merchant
}
