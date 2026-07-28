import type { MerchantPriceProvider, ProductOffer } from '~/types'
import { products } from '~/data/products'

export class StaticOfferProvider implements MerchantPriceProvider {
  async getOffer(productId: string): Promise<ProductOffer | null> {
    for (const product of products) {
      const offer = product.offers.find(o => o.productId === productId)
      if (offer) return offer
    }
    return null
  }
}
