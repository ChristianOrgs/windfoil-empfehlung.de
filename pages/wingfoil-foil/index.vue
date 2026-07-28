<template>
  <div>
    <CategoryHero
      title="Wingfoil Foils: Ratgeber & Übersicht"
      subtitle="Frontwing-Fläche, Mastmaterial, Aspect Ratio – alles, was du über Hydrofoils fürs Wingfoilen wissen musst."
      badge="Foil-Ratgeber"
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wings & Foils', to: '/wingfoil-wing/' }, { label: 'Foils' }]" />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Das Foil entscheidet darüber, ab wann du abhebst, wie stabil du auf der Foil fährst und wie agil du manövrieren kannst. Für Einsteiger ist ein großes, stabiles Foil mit niedrigem Aspect Ratio der beste Einstieg.
        </p>
      </div>

      <!-- Components -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-6">Teile eines Wingfoil-Foils</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-white border border-border rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-1">Mast</h3>
            <p class="text-sm text-muted leading-relaxed">Verbindet das Board mit dem Fuselage. Erhältlich in Aluminium (günstig, robust) oder Carbon (leicht, steif). Länge typisch 75–95 cm.</p>
          </div>
          <div class="bg-white border border-border rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-1">Fuselage</h3>
            <p class="text-sm text-muted leading-relaxed">Verbindet Mast mit Front- und Rearwing. Länge beeinflusst Stabilität und Pumpen-Effizienz.</p>
          </div>
          <div class="bg-white border border-border rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-1">Frontwing</h3>
            <p class="text-sm text-muted leading-relaxed">Erzeugt den Auftrieb. Größere Fläche = früher abheben, mehr Stabilität. Für Einsteiger: 1.500–2.000 cm².</p>
          </div>
          <div class="bg-white border border-border rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-1">Rearwing (Stabilizer)</h3>
            <p class="text-sm text-muted leading-relaxed">Sorgt für Stabilität. Größerer Rearwing = stabiler, kleinerer = agiler und höhere Endgeschwindigkeit.</p>
          </div>
        </div>
      </section>

      <!-- Foil size guide -->
      <section class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Frontwing-Fläche: Was passt zu mir?</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-4 text-navy font-semibold">Frontwing-Fläche</th>
                <th class="text-left py-2 pr-4 text-navy font-semibold">Fahrlevel</th>
                <th class="text-left py-2 text-navy font-semibold">Eigenschaften</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="py-2 pr-4 font-semibold">1.800–2.200 cm²</td>
                <td class="py-2 pr-4">Anfänger</td>
                <td class="py-2 text-muted">Früher Lift, maximal stabil, sehr verzeihend</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 font-semibold">1.400–1.800 cm²</td>
                <td class="py-2 pr-4">Anfänger–Intermediate</td>
                <td class="py-2 text-muted">Guter Lift, stabil, Allround</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 font-semibold">1.000–1.400 cm²</td>
                <td class="py-2 pr-4">Intermediate</td>
                <td class="py-2 text-muted">Agiler, höhere Geschwindigkeit</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 font-semibold">700–1.000 cm²</td>
                <td class="py-2 pr-4">Performance</td>
                <td class="py-2 text-muted">Sehr schnell, hoher Anspruch an Steuerung</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Aspect Ratio -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Aspect Ratio: Low vs. High</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">Low Aspect</h3>
            <p class="text-sm text-muted leading-relaxed">Breite, kurze Wings. Stabiler, verzeihender, gutes Glide. Ideal für Anfänger und Wellen. Geringere Endgeschwindigkeit.</p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <h3 class="font-semibold text-navy mb-2">High Aspect</h3>
            <p class="text-sm text-muted leading-relaxed">Schmale, lange Wings. Schneller, effizienter, besser für Pumping und Downwind. Anspruchsvoller in der Steuerung.</p>
          </div>
        </div>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline">Sets mit passendem Foil ansehen →</NuxtLink>
        <NuxtLink to="/wingfoil-setup-finder/" class="text-sm font-semibold text-ocean hover:underline">Setup-Finder starten →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Wingfoil Foils: Ratgeber für Frontwing, Mast & Aspect Ratio 2026',
  meta: [
    { name: 'description', content: 'Alles über Wingfoil Foils: Frontwing-Fläche, Mastmaterial, Aspect Ratio und was für Anfänger geeignet ist. Unabhängiger Ratgeber.' }
  ]
})
</script>
