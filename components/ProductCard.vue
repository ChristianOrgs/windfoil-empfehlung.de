<template>
  <article class="bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
    <!-- Image -->
    <div class="aspect-[4/3] bg-sky flex items-center justify-center relative">
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.imageAlt"
        class="w-full h-full object-cover"
        loading="lazy"
        width="400"
        height="300"
      />
      <div v-else class="flex flex-col items-center gap-2 text-muted p-6 text-center">
        <svg class="w-12 h-12 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        <span class="text-xs font-medium">{{ product.shortName }}</span>
      </div>
      <!-- Badge -->
      <div v-if="product.editorialRole" class="absolute top-3 left-3">
        <span class="bg-ocean text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {{ product.editorialRole }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1 gap-3">
      <div>
        <p class="text-xs font-semibold text-ocean uppercase tracking-wide">{{ product.brand }}</p>
        <h3 class="font-heading font-bold text-navy text-lg leading-tight mt-0.5">{{ product.shortName }}</h3>
        <div class="flex items-center gap-2 mt-1.5">
          <EditorialStatus :status="product.reviewStatus" />
        </div>
      </div>

      <p class="text-sm text-muted leading-relaxed line-clamp-3">{{ product.shortDescription }}</p>

      <!-- Key facts mini -->
      <div class="grid grid-cols-2 gap-1.5 text-xs">
        <div v-if="product.board?.volumeLitres" class="flex items-center gap-1 text-muted">
          <span class="font-semibold text-text">{{ product.board.volumeLitres }} L</span> Board
        </div>
        <div v-if="product.wing?.sizeSquareMetres" class="flex items-center gap-1 text-muted">
          <span class="font-semibold text-text">{{ product.wing.sizeSquareMetres }} m²</span> Wing
        </div>
        <div v-if="product.foil?.frontWingAreaCm2" class="flex items-center gap-1 text-muted">
          <span class="font-semibold text-text">{{ product.foil.frontWingAreaCm2 }} cm²</span> Foil
        </div>
        <div v-if="product.foil?.mastLengthCm" class="flex items-center gap-1 text-muted">
          <span class="font-semibold text-text">{{ product.foil.mastLengthCm }} cm</span> Mast
        </div>
      </div>

      <!-- Included tags -->
      <div class="flex flex-wrap gap-1.5">
        <span v-if="product.included.board" class="text-xs bg-sky text-ocean px-2 py-0.5 rounded-full">Board</span>
        <span v-if="product.included.wing" class="text-xs bg-sky text-ocean px-2 py-0.5 rounded-full">Wing</span>
        <span v-if="product.included.foil" class="text-xs bg-sky text-ocean px-2 py-0.5 rounded-full">Foil</span>
        <span v-if="product.included.pump" class="text-xs bg-sky text-ocean px-2 py-0.5 rounded-full">Pumpe</span>
        <span v-if="product.included.boardLeash || product.included.wingLeash" class="text-xs bg-sky text-ocean px-2 py-0.5 rounded-full">Leash</span>
      </div>

      <div class="mt-auto pt-3 border-t border-border space-y-3">
        <!-- Price -->
        <ProductPrice :offer="primaryOffer" />

        <!-- Marketplace notice -->
        <p v-if="primaryOffer?.marketplaceOffer" class="text-xs text-muted">
          Marketplace-Angebot von {{ primaryOffer.seller }}
        </p>

        <!-- CTAs -->
        <div class="flex flex-col gap-2">
          <MerchantButton
            v-if="primaryOffer"
            :url="affiliateUrl"
            :merchant="primaryOffer.merchant"
          />
          <NuxtLink
            :to="`/produkte/${product.slug}/`"
            class="text-center text-sm font-semibold text-ocean hover:text-navy border border-border rounded-xl py-2.5 px-4 hover:bg-sky transition-colors"
          >
            Produktdetails
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { WingfoilProduct } from '~/types'
import { getPrimaryOffer } from '~/utils/products'
import { buildAmazonAffiliateUrl, buildDecathlonAffiliateUrl } from '~/utils/affiliate'

const props = defineProps<{ product: WingfoilProduct }>()
const config = useRuntimeConfig()
const primaryOffer = computed(() => getPrimaryOffer(props.product))

const affiliateUrl = computed(() => {
  const offer = primaryOffer.value
  if (!offer) return '#'
  if (offer.merchant === 'amazon') {
    return buildAmazonAffiliateUrl(offer.productId, config.public.amazonAffiliateTag)
  }
  return buildDecathlonAffiliateUrl(offer.sourceUrl, config.decathlonAffiliateUrlTemplate as string)
})
</script>
