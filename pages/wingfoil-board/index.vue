<template>
  <div>
    <CategoryHero
      title="Wingfoil Boards im Vergleich"
      subtitle="Aufblasbare Boards und Hardboards für alle Fahrlevel – mit Volumen-Guide und aktuellen Preisen."
      badge="Board-Empfehlungen 2026"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Boards' }]" />
      <AffiliateDisclosure />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Das richtige Board ist entscheidend für einen erfolgreichen Einstieg ins Wingfoilen. Wir empfehlen für Anfänger aufblasbare Boards ab 130 Litern – sie sind stabiler beim Wasserstart, einfacher zu transportieren und robuster gegen Bodenkontakt.
        </p>
      </div>

      <!-- Inflatable section -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-ocean rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Aufblasbare Boards</h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in inflatable" :key="p.id" :product="p" />
          <div v-if="inflatable.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
            <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
          </div>
        </div>
      </section>

      <!-- Volume guide -->
      <section class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-2xl mb-6">Boardvolumen: Welches passt zu mir?</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-4 text-navy font-semibold">Körpergewicht</th>
                <th class="text-left py-2 pr-4 text-navy font-semibold">Anfänger</th>
                <th class="text-left py-2 text-navy font-semibold">Fortgeschritten</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr><td class="py-2 pr-4 text-muted">Unter 65 kg</td><td class="py-2 pr-4">100–130 L</td><td class="py-2">80–110 L</td></tr>
              <tr><td class="py-2 pr-4 text-muted">65–80 kg</td><td class="py-2 pr-4">120–140 L</td><td class="py-2">90–120 L</td></tr>
              <tr><td class="py-2 pr-4 text-muted">80–95 kg</td><td class="py-2 pr-4">140–160 L</td><td class="py-2">110–130 L</td></tr>
              <tr><td class="py-2 pr-4 text-muted">Über 95 kg</td><td class="py-2 pr-4">160–200 L</td><td class="py-2">120–150 L</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-muted mt-4">Richtwerte. Die optimale Größe hängt auch von Windstärke, Foil und persönlicher Präferenz ab.</p>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-board/aufblasbar/" class="text-sm font-semibold text-ocean hover:underline">Aufblasbare Boards im Detail →</NuxtLink>
        <NuxtLink to="/wingfoil-setup-finder/" class="text-sm font-semibold text-ocean hover:underline">Setup-Finder starten →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

useHead({
  title: 'Wingfoil Boards 2026: Aufblasbar & Hardboard im Vergleich',
  meta: [
    { name: 'description', content: 'Wingfoil Boards im Vergleich 2026: aufblasbare Boards und Hardboards für Anfänger und Fortgeschrittene. Mit Volumen-Tabelle und aktuellen Preisen.' }
  ]
})

const published = getPublishedProducts(products)
const inflatable = published.filter(p =>
  ['board', 'board-pack'].includes(p.productType) && p.board?.construction === 'inflatable'
)
</script>
