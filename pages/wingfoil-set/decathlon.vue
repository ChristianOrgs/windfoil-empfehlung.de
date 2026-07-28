<template>
  <div>
    <CategoryHero
      title="Wingfoil Sets von Decathlon"
      subtitle="Alle verfügbaren Wingfoil-Komplettsets von Decathlon – geprüfte Preise, transparente Produktinformationen."
      badge="Decathlon Marketplace"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wingfoil Sets', to: '/wingfoil-set/' }, { label: 'Decathlon' }]" />

      <AffiliateDisclosure />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed">
          Decathlon bietet Wingfoil-Sets von verschiedenen Marken auf seinem Marketplace an – darunter F2, Talaia/RRD und HANA Outdoors. Die Produkte werden von externen Verkäufern angeboten, der Versand und die Abwicklung erfolgt über Decathlon.
        </p>
        <div class="mt-4 p-4 bg-sky rounded-xl text-sm text-muted border border-border">
          <strong class="text-text">Hinweis zu Marketplace-Angeboten:</strong> Die auf dieser Seite gelisteten Produkte sind Marketplace-Angebote von Dritthändlern auf Decathlon.de. Prüfe vor dem Kauf den aktuellen Verkäufer und die Versandbedingungen.
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in decathlonSets" :key="p.id" :product="p" />
      </div>

      <section class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-2xl mb-3">Warum Decathlon für Wingfoil-Sets?</h2>
        <div class="grid md:grid-cols-2 gap-6 text-sm text-text leading-relaxed">
          <div>
            <h3 class="font-semibold mb-1">Breite Auswahl</h3>
            <p>Decathlon bietet auf seinem Marketplace Sets verschiedener Marken an – von etablierten Herstellern wie F2 bis hin zu spezialisierten Newcomern wie Talaia/RRD.</p>
          </div>
          <div>
            <h3 class="font-semibold mb-1">Rückgaberecht</h3>
            <p>Für Marketplace-Angebote gelten die jeweiligen Rückgabebedingungen des Händlers. Prüfe diese vor dem Kauf in den Angebotsbedingungen.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

useHead({
  title: 'Wingfoil Sets von Decathlon 2026: F2, Talaia & Co. im Vergleich',
  meta: [
    { name: 'description', content: 'Alle Wingfoil-Komplettsets von Decathlon im Überblick: F2 Glide, Talaia Notos und mehr. Redaktionell geprüfte Preise und Produktdaten.' }
  ]
})

const decathlonSets = getPublishedProducts(products).filter(p =>
  p.productType === 'complete-set' &&
  p.offers.some(o => o.merchant === 'decathlon')
)
</script>
