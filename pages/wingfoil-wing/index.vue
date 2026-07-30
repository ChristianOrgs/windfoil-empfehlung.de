<template>
  <div>
    <CategoryHero
      title="Wingfoil Wings & Foils"
      subtitle="Ratgeber zu Wing-Größen, Foil-Auswahl und was du beim Kauf einzelner Komponenten beachten musst."
      badge="Ratgeber & Übersicht"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wings & Foils' }]" />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Wing und Foil sind die beiden zentralen Elemente im Wingfoilen: Der Wing erzeugt den Vortrieb, das Foil hebt dich aus dem Wasser. Beide müssen aufeinander und auf dein Board abgestimmt sein.
        </p>
      </div>

      <!-- Wing section -->
      <section class="bg-sky rounded-2xl p-8 max-w-4xl">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Wings: Größe und Auswahl</h2>
        <p class="text-text leading-relaxed mb-6">
          Die Wing-Größe bestimmt, bei welchen Windstärken du fahren kannst. Ein größerer Wing erzeugt mehr Zug bei wenig Wind, ist aber bei starkem Wind schwerer zu kontrollieren. Für Einsteiger empfehlen wir eine Größe, die für ihren typischen Windbereich passt – und idealerweise ein Wing, der auch für leichteren Wind ausreicht.
        </p>
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="bg-white rounded-xl p-4">
            <div class="font-semibold text-navy mb-1">3–4 m²</div>
            <div class="text-sm text-muted">Starker Wind, 20–28 kn. Für erfahrene Fahrer.</div>
          </div>
          <div class="bg-white rounded-xl p-4">
            <div class="font-semibold text-navy mb-1">4–5 m²</div>
            <div class="text-sm text-muted">Mittlerer Wind, 15–22 kn. Allround-Größe für Einsteiger und Pros.</div>
          </div>
          <div class="bg-white rounded-xl p-4">
            <div class="font-semibold text-navy mb-1">5–7 m²</div>
            <div class="text-sm text-muted">Leichter Wind, 10–18 kn. Für große Fahrer oder leichte Winde.</div>
          </div>
        </div>
        <NuxtLink to="/wingfoil-wing/groesse-windstaerke/" class="mt-4 inline-block text-sm font-semibold text-ocean hover:underline">
          Detaillierte Wing-Größen-Tabelle →
        </NuxtLink>
      </section>

      <!-- Foil section -->
      <section class="max-w-4xl">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Foils: Was du wissen musst</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">Frontwing-Fläche</h3>
            <p class="text-sm text-muted leading-relaxed">
              Größere Frontwings (ab 1.500 cm²) steigen früher auf und sind verzeihender. Kleinere Frontwings (unter 1.300 cm²) sind agiler und schneller – für Fortgeschrittene.
            </p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">Mastmaterial</h3>
            <p class="text-sm text-muted leading-relaxed">
              Aluminium-Masten sind günstiger und robuster bei Bodenkontakt. Carbon-Masten sind leichter und steifer – für Performance-Fahrer. Einsteiger sind mit Aluminium gut bedient.
            </p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">Mastlänge</h3>
            <p class="text-sm text-muted leading-relaxed">
              Kürzere Masten (65–70 cm) sind stabiler beim Lernen und in flachem Wasser. Längere Masten (80–90 cm) ermöglichen höheres Fahren auf der Foil.
            </p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">Aspect Ratio</h3>
            <p class="text-sm text-muted leading-relaxed">
              Low-Aspect-Foils sind stabiler und verzeihender. High-Aspect-Foils sind schneller und gleiten weiter – aber anspruchsvoller in der Steuerung.
            </p>
          </div>
        </div>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline">Komplettsets mit Wing & Foil →</NuxtLink>
        <NuxtLink to="/wingfoil-wing/groesse-windstaerke/" class="text-sm font-semibold text-ocean hover:underline">Wing-Größen-Guide →</NuxtLink>
      </div>

      <AffiliateDisclosure />

      <!-- Beginner Wings -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-ocean rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Einsteiger-Wings</h2>
          <span class="text-sm text-muted bg-sky px-2 py-0.5 rounded-full">Günstig & einfach</span>
        </div>
        <p class="text-muted mb-6 max-w-2xl">Robuste, unkomplizierte Wings für Lernende – gutes Preis-Leistungs-Verhältnis und einfaches Handling.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in beginnerWings" :key="p.id" :product="p" />
        </div>
      </section>

      <!-- Intermediate & Performance Wings -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-blue rounded-full"></div>
          <h2 class="font-heading font-bold text-navy text-2xl">Fortgeschrittene & Allround</h2>
          <span class="text-sm text-muted bg-sky px-2 py-0.5 rounded-full">Mehr Performance</span>
        </div>
        <p class="text-muted mb-6 max-w-2xl">Reaktionsfreudigere Wings für Fahrer mit Vorerfahrung – von Allround bis spezialisierten Konzepten wie dem Parawing.</p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in advancedWings" :key="p.id" :product="p" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

useHead({
  title: 'Wingfoil Wings & Foils: Ratgeber und Kauftipps 2026',
  meta: [
    { name: 'description', content: 'Wings und Foils für Wingfoilen: Welche Größe passt zu mir? Was ist der Unterschied zwischen Low- und High-Aspect? Unser Ratgeber erklärt es.' }
  ]
})

const published = getPublishedProducts(products)
const wings = published.filter(p => p.productType === 'wing')

const beginnerWings = wings.filter(p => p.levels.includes('beginner') && !p.levels.includes('performance'))
const advancedWings = wings.filter(p => p.levels.includes('intermediate') || p.levels.includes('performance'))
</script>
