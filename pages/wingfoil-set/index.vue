<template>
  <div>
    <CategoryHero
      title="Wingfoil Sets im Vergleich"
      subtitle="Empfehlungen für Anfänger und Fortgeschrittene – redaktionell geprüft, mit aktuellen Preisen."
      badge="Alle Preise geprüft am 28.07.2026"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumbs :items="[{ label: 'Wingfoil Sets' }]" />

      <AffiliateDisclosure />

      <!-- Intro -->
      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Ein Wingfoil-Komplettset enthält alles, was du für den Einstieg brauchst: Board, Wing, Foil und oft Pumpe sowie Leash. Wir haben die wichtigsten aktuell verfügbaren Sets auf Decathlon verglichen und nach Fahrlevel sortiert.
        </p>
      </div>

      <!-- Beginner Section -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-ocean rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Anfänger-Sets</h2>
          <span class="text-sm text-muted bg-sky px-2 py-0.5 rounded-full">Empfohlen für Einsteiger</span>
        </div>
        <p class="text-muted mb-6 max-w-2xl">Sets mit großem Boardvolumen (ab 130 L), großem Foil (ab 1.500 cm²) und gutmütigem Wing für einen stabilen Einstieg.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in beginnerSets" :key="p.id" :product="p" />
          <div v-if="beginnerSets.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
            <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
          </div>
        </div>
      </section>

      <!-- Intermediate Section -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-blue rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Sets für Fortgeschrittene</h2>
          <span class="text-sm text-muted bg-sky px-2 py-0.5 rounded-full">Mit Vorerfahrung</span>
        </div>
        <p class="text-muted mb-6 max-w-2xl">Kompaktere Boards und agilere Foils für Fahrer, die die Grundlagen beherrschen und mehr Kontrolle und Agilität suchen.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in intermediateSets" :key="p.id" :product="p" />
          <div v-if="intermediateSets.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
            <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
          </div>
        </div>
      </section>

      <!-- Performance Section -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-cyan rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Performance-Sets</h2>
          <span class="text-sm text-muted bg-sky px-2 py-0.5 rounded-full">Erfahrene Fahrer</span>
        </div>
        <p class="text-muted mb-6 max-w-2xl">Agile Sets für Welle, Freestyle und Downwind – kleinere Boards und präzisere Foils für technisch versierte Fahrer.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in performanceSets" :key="p.id" :product="p" />
          <div v-if="performanceSets.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
            <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
          </div>
        </div>
      </section>

      <!-- Buying guide teaser -->
      <section class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-2xl mb-3">Was macht ein gutes Wingfoil-Set aus?</h2>
        <div class="grid md:grid-cols-3 gap-6 text-sm text-text leading-relaxed">
          <div>
            <h3 class="font-semibold text-navy mb-1">Boardvolumen</h3>
            <p>Als Faustregel gilt: Anfänger sollten mindestens das 1,5- bis 2-fache ihres Körpergewichts in Litern wählen. 80 kg = mindestens 120–140 L für einen stabilen Einstieg.</p>
          </div>
          <div>
            <h3 class="font-semibold text-navy mb-1">Foil-Fläche</h3>
            <p>Größere Frontwings (ab 1.500 cm²) steigen früher und sanfter auf. Für Einsteiger empfehlen wir 1.500–2.000 cm², für Fortgeschrittene 1.200–1.500 cm².</p>
          </div>
          <div>
            <h3 class="font-semibold text-navy mb-1">Wing-Größe</h3>
            <p>Die optimale Wing-Größe hängt von Wind und Gewicht ab. Bei 15–20 Knoten sind 4–5 m² für die meisten Einsteiger ideal. Bei leichterem Wind eher 5–6 m².</p>
          </div>
        </div>
        <NuxtLink to="/wingfoil-anfaenger/" class="mt-6 inline-block text-sm font-semibold text-ocean hover:underline">
          Vollständiger Anfänger-Guide →
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

useHead({
  title: 'Wingfoil Sets im Vergleich 2026: Empfehlungen für Anfänger & Fortgeschrittene',
  meta: [
    { name: 'description', content: 'Die besten Wingfoil-Komplettsets 2026 im Vergleich: F2, Talaia und HANA – sortiert nach Fahrlevel. Mit aktuellen Preisen von Decathlon.' }
  ]
})

const published = getPublishedProducts(products)
const sets = published.filter(p => p.productType === 'complete-set')

const beginnerSets = sets.filter(p => p.levels.includes('beginner'))

const intermediateSets = sets.filter(p => p.levels.includes('intermediate'))
const performanceSets = sets.filter(p => p.levels.includes('performance'))
</script>
