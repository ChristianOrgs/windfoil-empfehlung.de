<template>
  <div>
    <CategoryHero
      title="Wingfoil Ratgeber"
      subtitle="Alle Guides und Kauftipps für Wingfoil-Equipment – von der Einsteiger-Ausrüstung bis zur Foil-Auswahl."
      badge="Redaktionelle Guides"
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Ratgeber' }]" />

      <div class="grid md:grid-cols-2 gap-6">
        <NuxtLink
          v-for="guide in guides"
          :key="guide.to"
          :to="guide.to"
          class="group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover:border-ocean/30"
        >
          <div class="text-2xl mb-3">{{ guide.icon }}</div>
          <h2 class="font-heading font-bold text-navy text-lg mb-2 group-hover:text-ocean transition-colors">{{ guide.title }}</h2>
          <p class="text-sm text-muted leading-relaxed">{{ guide.desc }}</p>
          <div class="mt-4 text-xs font-semibold text-ocean">Guide lesen →</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Wingfoil Ratgeber: Guides für Einsteiger und Fortgeschrittene',
  meta: [
    { name: 'description', content: 'Alle Wingfoil-Ratgeber im Überblick: Einstieg, Equipment-Auswahl, Wing-Größen, Foil-Tipps und mehr.' }
  ]
})

const guides = [
  {
    to: '/wingfoil-anfaenger/',
    icon: '🌊',
    title: 'Wingfoil für Anfänger',
    desc: 'Der komplette Einstiegs-Guide: Lernkurve, Equipment, Kursempfehlung und erste Schritte auf dem Wasser.'
  },
  {
    to: '/wingfoil-wing/groesse-windstaerke/',
    icon: '💨',
    title: 'Wing-Größe & Windstärke',
    desc: 'Welche Wing-Größe passt zu welchem Wind? Die komplette Tabelle nach Gewicht und Windstärke.'
  },
  {
    to: '/wingfoil-set/gebraucht/',
    icon: '♻️',
    title: 'Gebrauchte Sets kaufen',
    desc: 'Checkliste und Tipps für den Kauf eines gebrauchten Wingfoil-Sets. Was du prüfen musst und wo du suchst.'
  },
  {
    to: '/wingfoil-foil/',
    icon: '⬆️',
    title: 'Foil-Guide',
    desc: 'Frontwing-Fläche, Mastmaterial, Aspect Ratio – alles, was du über Hydrofoils für Wingfoilen wissen musst.'
  },
  {
    to: '/wingfoil-board/',
    icon: '🏄',
    title: 'Board-Guide',
    desc: 'Aufblasbar oder Hardboard? Wie viel Volumen brauchst du? Unser Board-Ratgeber für alle Fahrlevel.'
  },
  {
    to: '/wingfoil-setup-finder/',
    icon: '🔍',
    title: 'Setup-Finder',
    desc: 'In 6 Schritten zu deinem persönlichen Setup: Mit Gewicht, Level, Wind und Budget zu konkreten Empfehlungen.'
  }
]
</script>
