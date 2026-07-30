<template>
  <div>
    <CategoryHero
      title="Wingfoil Boards für Anfänger"
      subtitle="Stabile, voluminöse Boards für den Einstieg – aufblasbar, robust und einfach zu transportieren."
      badge="Anfänger-Boards"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Boards', to: '/wingfoil-board/' }, { label: 'Anfänger' }]" />
      <AffiliateDisclosure />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed">
          Für Anfänger empfehlen wir aufblasbare Boards mit mindestens 130 Litern Volumen. Ein großes Board gibt dir beim Wasserstart und beim ersten Aufsteigen die nötige Stabilität. Außerdem sind aufblasbare Boards deutlich verzeihender, wenn du bei einem Sturz das Board touchierst.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="p in beginnerBoards" :key="p.id" :product="p" />
        <div v-if="beginnerBoards.length < 3" class="bg-sky border-2 border-dashed border-border rounded-2xl flex items-center justify-center p-8 text-center text-muted">
          <p class="text-sm">Weitere Empfehlung folgt nach redaktioneller Prüfung.</p>
        </div>
      </div>

      <div class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-xl mb-3">Brauche ich auch Wing und Foil separat?</h2>
        <p class="text-text text-sm leading-relaxed mb-4">
          Ein Board allein reicht nicht – du brauchst auch ein Foil und einen Wing. Wir empfehlen für Einsteiger entweder ein Komplettset, das alles enthält, oder die separate Auswahl von Board, Foil und Wing, wenn du einzelne Teile bereits besitzt.
        </p>
        <div class="flex gap-4 flex-wrap">
          <NuxtLink to="/wingfoil-set/anfaenger/" class="text-sm font-semibold text-ocean hover:underline">Anfänger-Komplettsets ansehen →</NuxtLink>
          <NuxtLink to="/wingfoil-setup-finder/" class="text-sm font-semibold text-ocean hover:underline">Setup-Finder starten →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getProductsByLevel } from '~/utils/products'

useHead({
  title: 'Wingfoil Boards für Anfänger 2026: Stabile Einsteiger-Boards',
  meta: [
    { name: 'description', content: 'Die besten aufblasbaren Wingfoil Boards für Anfänger: HANA Premium 150L und 130L im Vergleich. Stabil, robust, einfacher Transport.' }
  ]
})

const beginnerBoards = getProductsByLevel(products, 'beginner').filter(p =>
  p.productType === 'board' || p.productType === 'board-pack'
)
</script>
