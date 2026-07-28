<template>
  <div>
    <CategoryHero
      title="Wingfoil Sets für Anfänger"
      subtitle="Stabile, gutmütige Komplettsets für den Einstieg ins Wingfoilen – mit großem Board, großem Foil und allem, was du zum Starten brauchst."
      badge="Anfänger-Empfehlungen"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wingfoil Sets', to: '/wingfoil-set/' }, { label: 'Anfänger' }]" />

      <AffiliateDisclosure />

      <div class="max-w-3xl">
        <h2 class="font-heading font-bold text-navy text-2xl mb-3">Was brauche ich als Anfänger?</h2>
        <p class="text-text leading-relaxed">
          Als Einsteiger im Wingfoilen solltest du auf drei Dinge besonders achten: ein großes, stabiles Board (mindestens dein 1,5-faches Körpergewicht in Litern), ein gutmütiges Foil mit großer Fläche für frühen Lift und einen Wing, der zu deinen lokalen Windbedingungen passt. Aufblasbare Boards erleichtern Transport und Einstieg.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in beginnerSets" :key="p.id" :product="p" />
        <div v-if="beginnerSets.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
          <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
        </div>
      </div>

      <section class="bg-sky rounded-2xl p-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 class="font-semibold text-navy mb-2">Boardvolumen</h3>
          <p class="text-sm text-text leading-relaxed">Mindestens 1,5× Körpergewicht in Litern. Bei 80 kg: 120–140 L. Für sehr Schwere oder Unsichere: 150–160 L.</p>
        </div>
        <div>
          <h3 class="font-semibold text-navy mb-2">Foil-Fläche</h3>
          <p class="text-sm text-text leading-relaxed">Ab 1.500 cm² Frontwing-Fläche. Größere Wings steigen früher auf und sind verzeihender bei Fahrfehlern.</p>
        </div>
        <div>
          <h3 class="font-semibold text-navy mb-2">Wing-Größe</h3>
          <p class="text-sm text-text leading-relaxed">5 m² sind für Einsteiger bei 15–20 Knoten oft ideal. Schwere Fahrer oder leichte Winde: 5–6 m².</p>
        </div>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-anfaenger/" class="text-sm font-semibold text-ocean hover:underline">
          Anfänger-Guide lesen →
        </NuxtLink>
        <NuxtLink to="/wingfoil-setup-finder/" class="text-sm font-semibold text-ocean hover:underline">
          Setup-Finder starten →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getProductsByLevel } from '~/utils/products'

useHead({
  title: 'Wingfoil Sets für Anfänger 2026: Die besten Einsteiger-Komplettsets',
  meta: [
    { name: 'description', content: 'Die besten Wingfoil-Komplettsets für Anfänger: stabiles Board, großes Foil, alles inklusive. Redaktionell geprüfte Empfehlungen mit Preisen von Decathlon.' }
  ]
})

const beginnerSets = getProductsByLevel(products, 'beginner').filter(p => p.productType === 'complete-set')
</script>
