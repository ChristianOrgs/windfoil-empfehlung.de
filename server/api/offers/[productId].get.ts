import { StaticOfferProvider } from '~/server/services/static-offer-provider'

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, 'productId')
  if (!productId) throw createError({ statusCode: 400, message: 'productId required' })

  const provider = new StaticOfferProvider()
  const offer = await provider.getOffer(productId)

  if (!offer) throw createError({ statusCode: 404, message: 'Offer not found' })

  return offer
})
