import type { MerchantPriceProvider, ProductOffer } from '~/types'

// Placeholder — implement with Amazon Product Advertising API when credentials available
export class AmazonProvider implements MerchantPriceProvider {
  async getOffer(_asin: string): Promise<ProductOffer | null> {
    // TODO: Connect Amazon Product Advertising API
    // Requires: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AMAZON_AFFILIATE_TAG
    return null
  }
}
