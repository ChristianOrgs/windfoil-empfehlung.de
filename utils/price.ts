export const formatPrice = (price: number): string =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)

export const formatSavings = (current: number, original: number) => {
  const savingsEur = original - current
  const savingsPct = Math.round((savingsEur / original) * 100)
  return { savingsEur, savingsPct }
}

export const isPriceStale = (lastChecked?: string): boolean => {
  if (!lastChecked) return true
  const checked = new Date(lastChecked)
  const now = new Date()
  const diffDays = (now.getTime() - checked.getTime()) / (1000 * 60 * 60 * 24)
  return diffDays > 7
}

export const formatCheckedDate = (lastChecked: string): string => {
  return new Date(lastChecked).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
