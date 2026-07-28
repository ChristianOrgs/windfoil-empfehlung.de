<template>
  <div>
    <CategoryHero
      title="Aufblasbare Wingfoil Boards"
      subtitle="Inflatable Boards für den einfachen Transport – mit Carbonplatte, Fusion-Stitch-Konstruktion und großem Volumen."
      badge="Inflatable Boards"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Boards', to: '/wingfoil-board/' }, { label: 'Aufblasbar' }]" />
      <AffiliateDisclosure />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Aufblasbare Wingfoil Boards sind die erste Wahl für Einsteiger und Reisende. Sie passen in einen Rucksack, sind robust gegen Bodenkontakt und lassen sich auch ohne Dachträger transportieren. Moderne Konstruktionen mit Carbonplatte kommen Hardboards in der Steifigkeit deutlich näher als ältere Generationen.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in inflatableBoards" :key="p.id" :product="p" />
        <div v-if="inflatableBoards.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
          <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
        </div>
      </div>

      <!-- Vorteile / Nachteile Inflatable -->
      <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-green-50 rounded-2xl p-6">
          <h3 class="font-heading font-bold text-positive text-lg mb-4">Vorteile aufblasbarer Boards</h3>
          <ul class="space-y-2 text-sm text-text">
            <li class="flex items-start gap-2"><span class="text-positive shrink-0">+</span> Einfacher Transport – passt in den Kofferraum</li>
            <li class="flex items-start gap-2"><span class="text-positive shrink-0">+</span> Robuster bei Bodenkontakt und Stürzen</li>
            <li class="flex items-start gap-2"><span class="text-positive shrink-0">+</span> Leiser auf dem Wasser</li>
            <li class="flex items-start gap-2"><span class="text-positive shrink-0">+</span> Günstiger in der Anschaffung</li>
            <li class="flex items-start gap-2"><span class="text-positive shrink-0">+</span> Einfachere Lagerung zuhause</li>
          </ul>
        </div>
        <div class="bg-orange-50 rounded-2xl p-6">
          <h3 class="font-heading font-bold text-warning text-lg mb-4">Nachteile aufblasbarer Boards</h3>
          <ul class="space-y-2 text-sm text-text">
            <li class="flex items-start gap-2"><span class="text-warning shrink-0">–</span> Weniger direktes Fahrgefühl als Hardboards</li>
            <li class="flex items-start gap-2"><span class="text-warning shrink-0">–</span> Aufpumpen dauert 5–10 Minuten</li>
            <li class="flex items-start gap-2"><span class="text-warning shrink-0">–</span> Etwas höhere Flex als ein Hardboard</li>
            <li class="flex items-start gap-2"><span class="text-warning shrink-0">–</span> Für Performance-Fahrer langfristig limitierend</li>
          </ul>
        </div>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-board/" class="text-sm font-semibold text-ocean hover:underline">← Alle Boards</NuxtLink>
        <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline">Komplettsets ansehen →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

useHead({
  title: 'Aufblasbare Wingfoil Boards 2026: HANA Premium 150L & 130L im Vergleich',
  meta: [
    { name: 'description', content: 'Die besten aufblasbaren Wingfoil Boards: HANA Premium 150L und 130L mit Carbonplatte und Leash. Für Einsteiger und Fortgeschrittene.' }
  ]
})

const inflatableBoards = getPublishedProducts(products).filter(p =>
  ['board', 'board-pack'].includes(p.productType) && p.board?.construction === 'inflatable'
)
</script>
