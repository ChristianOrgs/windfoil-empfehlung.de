import type { MerchantPriceProvider, ProductOffer } from '~/types'

// Placeholder — implement with AWIN product feed when credentials available
export class DecathlonProvider implements MerchantPriceProvider {
  async getOffer(_productId: string): Promise<ProductOffer | null> {
    // TODO: Connect AWIN/Decathlon product feed
    // Requires: DECATHLON_AWIN_PUBLISHER_ID, DECATHLON_AWIN_ADVERTISER_ID
    return null
  }
}
