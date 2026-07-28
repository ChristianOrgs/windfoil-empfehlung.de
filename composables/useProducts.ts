import { products } from '~/data/products'
import {
  getPublishedProducts,
  getProductsByLevel,
  getProductsByType,
  getPrimaryOffer
} from '~/utils/products'
import { isPriceStale } from '~/utils/price'

export function useProducts() {
  const published = computed(() => getPublishedProducts(products))
  const completeSets = computed(() => getProductsByType(products, 'complete-set'))
  const boards = computed(() => published.value.filter(p => ['board', 'board-pack'].includes(p.productType)))
  const beginnerSets = computed(() => getProductsByLevel(products, 'beginner').filter(p => p.productType === 'complete-set'))

  return { published, completeSets, boards, beginnerSets, all: products }
}

export function useProductOffer(product: ReturnType<typeof useProducts>['all'][0]) {
  const offer = getPrimaryOffer(product)
  const stale = offer?.lastChecked ? isPriceStale(offer.lastChecked) : true
  return { offer, stale }
}
