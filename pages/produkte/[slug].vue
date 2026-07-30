<template>
  <div v-if="product">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs :items="breadcrumbs" />

      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <!-- Left: Image -->
        <div>
          <div class="aspect-[4/3] bg-sky rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              v-if="product.image"
              :src="product.image"
              :alt="product.imageAlt"
              class="w-full h-full object-cover"
              width="600"
              height="450"
            />
            <div v-else class="flex flex-col items-center gap-3 text-muted p-12 text-center">
              <svg class="w-20 h-20 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span class="font-medium">Produktbild folgt</span>
            </div>
          </div>
        </div>

        <!-- Right: Core info -->
        <div class="space-y-6">
          <div>
            <p class="text-xs font-semibold text-ocean uppercase tracking-wide mb-1">{{ product.brand }}</p>
            <h1 class="font-heading font-bold text-navy text-3xl leading-tight mb-2">{{ product.name }}</h1>
            <div class="flex flex-wrap items-center gap-2">
              <EditorialStatus :status="product.reviewStatus" />
              <span v-if="product.editorialRole" class="text-xs bg-ocean/10 text-ocean px-2.5 py-1 rounded-full font-medium">
                {{ product.editorialRole }}
              </span>
            </div>
          </div>

          <p class="text-text leading-relaxed">{{ product.shortDescription }}</p>

          <!-- Price & CTA -->
          <div class="bg-sky rounded-2xl p-5 space-y-4">
            <ProductPrice :offer="primaryOffer" />
            <div v-if="primaryOffer?.marketplaceOffer" class="text-xs text-muted">
              Marketplace-Angebot von {{ primaryOffer.seller }}
            </div>
            <MerchantButton
              v-if="primaryOffer"
              :url="primaryOffer.sourceUrl"
              :merchant="primaryOffer.merchant"
              label="Jetzt Preis prüfen"
            />
            <AffiliateDisclosure />
          </div>

          <!-- Included -->
          <div>
            <h3 class="font-semibold text-navy mb-2 text-sm">Im Lieferumfang</h3>
            <div class="flex flex-wrap gap-2">
              <span v-if="product.included.board" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Board</span>
              <span v-if="product.included.wing" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Wing</span>
              <span v-if="product.included.foil" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Foil</span>
              <span v-if="product.included.pump" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Pumpe</span>
              <span v-if="product.included.boardLeash" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Board-Leash</span>
              <span v-if="product.included.wingLeash" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Wing-Leash</span>
              <span v-if="product.included.bag" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Tasche</span>
              <span v-if="product.included.repairKit" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Reparaturset</span>
              <span v-if="product.included.tools" class="text-xs bg-green-50 text-positive border border-green-200 px-2.5 py-1 rounded-full">Werkzeug</span>
              <span v-if="!product.included.boardLeash && !product.included.wingLeash" class="text-xs bg-orange-50 text-warning border border-orange-200 px-2.5 py-1 rounded-full">Keine Leash enthalten</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Facts -->
      <section class="mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Technische Details</h2>
        <ProductKeyFacts :product="product" />
      </section>

      <!-- Description -->
      <section class="mb-12 max-w-3xl">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Produktbeschreibung</h2>
        <p class="text-text leading-relaxed">{{ product.description }}</p>
      </section>

      <!-- Pros & Cons -->
      <section class="mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Vorteile & Nachteile</h2>
        <ProductProsCons :advantages="product.advantages" :disadvantages="product.disadvantages" />
      </section>

      <!-- Suitable for -->
      <section class="mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Für wen geeignet?</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 rounded-xl p-5">
            <h3 class="font-semibold text-positive mb-3">Geeignet für</h3>
            <ul class="space-y-2">
              <li v-for="s in product.suitableFor" :key="s" class="text-sm text-text flex items-start gap-2">
                <span class="text-positive shrink-0 mt-0.5">✓</span>{{ s }}
              </li>
            </ul>
          </div>
          <div class="bg-orange-50 rounded-xl p-5">
            <h3 class="font-semibold text-warning mb-3">Weniger geeignet für</h3>
            <ul class="space-y-2">
              <li v-for="n in product.notSuitableFor" :key="n" class="text-sm text-text flex items-start gap-2">
                <span class="text-warning shrink-0 mt-0.5">✗</span>{{ n }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Scores -->
      <section v-if="product.scores" class="mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Bewertungsübersicht</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="score in scoreEntries" :key="score.label" class="bg-white border border-border rounded-xl p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-muted">{{ score.label }}</span>
              <span class="font-heading font-bold text-navy">{{ score.value }}/10</span>
            </div>
            <div class="w-full bg-border rounded-full h-2">
              <div
                class="h-2 rounded-full transition-all"
                :class="score.value >= 8 ? 'bg-positive' : score.value >= 6 ? 'bg-ocean' : 'bg-warning'"
                :style="{ width: `${score.value * 10}%` }"
              ></div>
            </div>
          </div>
        </div>
        <p class="text-xs text-muted mt-3">Bewertung auf Basis redaktioneller Datenanalyse.</p>
      </section>

      <!-- Alle Angebote -->
      <section class="mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Verfügbare Angebote</h2>
        <div class="space-y-4 max-w-2xl">
          <div v-for="offer in product.offers" :key="offer.productId" class="bg-white border border-border rounded-2xl p-5">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-semibold text-navy text-sm">{{ getMerchantLabel(offer.merchant) }}</div>
                <div v-if="offer.seller" class="text-xs text-muted">Verkäufer: {{ offer.seller }}</div>
                <div v-if="offer.lastChecked" class="text-xs text-muted mt-0.5">Geprüft: {{ formatCheckedDate(offer.lastChecked) }}</div>
              </div>
              <div class="text-right">
                <div v-if="offer.currentPrice" class="font-heading font-bold text-navy text-xl">{{ formatPrice(offer.currentPrice) }}</div>
                <div v-if="offer.available === false" class="text-xs text-warning font-medium">Aktuell nicht verfügbar</div>
              </div>
            </div>
            <div v-if="offer.available !== false" class="mt-3">
              <MerchantButton :url="offer.sourceUrl" :merchant="offer.merchant" />
            </div>
          </div>
        </div>
      </section>

      <!-- Related products -->
      <section v-if="related.length" class="border-t border-border pt-12 mb-12">
        <h2 class="font-heading font-bold text-navy text-2xl mb-6">Weitere Empfehlungen</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in related" :key="p.id" :product="p" />
        </div>
      </section>

      <!-- Editorial info -->
      <section class="border-t border-border pt-8">
        <div class="flex flex-wrap gap-6 text-xs text-muted">
          <div v-if="product.lastEditorialReview">
            <span class="font-semibold text-text">Letzte redaktionelle Prüfung:</span> {{ formatCheckedDate(product.lastEditorialReview) }}
          </div>
          <div>
            <span class="font-semibold text-text">Prüfstatus:</span> {{ getReviewStatusLabel(product.reviewStatus) }}
          </div>
        </div>
      </section>
    </div>
  </div>

  <div v-else class="max-w-4xl mx-auto px-4 py-24 text-center">
    <h1 class="font-heading font-bold text-navy text-3xl mb-4">Produkt nicht gefunden</h1>
    <p class="text-muted mb-8">Das gesuchte Produkt existiert nicht oder ist nicht mehr verfügbar.</p>
    <NuxtLink to="/wingfoil-set/" class="bg-ocean text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy transition-colors">
      Alle Sets ansehen
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPrimaryOffer, getReviewStatusLabel } from '~/utils/products'
import { formatPrice, formatCheckedDate } from '~/utils/price'
import { getMerchantLabel } from '~/utils/affiliate'

const route = useRoute()
const slug = route.params.slug as string

const product = computed(() =>
  products.find(p => p.slug === slug && p.published && p.researchStatus !== 'inactive') ?? null
)

const primaryOffer = computed(() => product.value ? getPrimaryOffer(product.value) : undefined)

const related = computed(() => {
  if (!product.value) return []
  return products
    .filter(p => p.published && p.researchStatus !== 'inactive' && p.productType === product.value!.productType && p.id !== product.value!.id)
    .slice(0, 3)
})

const breadcrumbs = computed(() => {
  if (!product.value) return []
  const typeLabel = {
    'complete-set': 'Wingfoil Sets',
    'board-pack': 'Boards',
    'board': 'Boards',
    'wing': 'Wings & Foils',
    'foil': 'Wings & Foils'
  }[product.value.productType] ?? 'Produkte'
  const typeTo = {
    'complete-set': '/wingfoil-set/',
    'board-pack': '/wingfoil-board/',
    'board': '/wingfoil-board/',
    'wing': '/wingfoil-wing/',
    'foil': '/wingfoil-foil/'
  }[product.value.productType] ?? '/wingfoil-set/'
  return [
    { label: typeLabel, to: typeTo },
    { label: product.value.shortName }
  ]
})

const scoreLabels: Record<string, string> = {
  beginnerFriendliness: 'Anfängerfreundlich',
  stability: 'Stabilität',
  earlyLift: 'Früher Lift',
  control: 'Kontrolle',
  agility: 'Agilität',
  transport: 'Transport',
  completeness: 'Vollständigkeit',
  upgradePotential: 'Upgrade-Potenzial',
  valueForMoney: 'Preis-Leistung'
}

const scoreEntries = computed(() => {
  if (!product.value?.scores) return []
  return Object.entries(product.value.scores)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => ({ label: scoreLabels[k] ?? k, value: v as number }))
})

// SEO
useHead(computed(() => {
  const p = product.value
  if (!p) {
    return { title: 'Produkt nicht gefunden | wingfoil-empfehlung.de' }
  }
  return {
    title: `${p.name} – Test & Bewertung | wingfoil-empfehlung.de`,
    meta: [
      { name: 'description', content: p.shortDescription },
      { property: 'og:title', content: p.name },
      { property: 'og:description', content: p.shortDescription }
    ],
    script: [{
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.name,
        description: p.description,
        brand: { '@type': 'Brand', name: p.brand },
        offers: p.offers.filter(o => o.available && o.currentPrice).map(o => ({
          '@type': 'Offer',
          price: o.currentPrice,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: o.sourceUrl,
          priceValidUntil: new Date(new Date().getFullYear() + 1, 0, 1).toISOString().split('T')[0]
        }))
      })
    }]
  }
}))
</script>
