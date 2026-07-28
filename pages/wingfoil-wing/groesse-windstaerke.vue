<template>
  <div>
    <CategoryHero
      title="Wing-Größe und Windstärke"
      subtitle="Welche Wing-Größe passt zu welchem Wind? Die komplette Übersichtstabelle für Anfänger und Fortgeschrittene."
      badge="Ratgeber"
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wings & Foils', to: '/wingfoil-wing/' }, { label: 'Größe & Windstärke' }]" />

      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Die richtige Wing-Größe hängt von drei Faktoren ab: Windstärke, Körpergewicht und Fahrlevel. Als Faustregel gilt: Mehr Wind = kleinerer Wing. Schwereres Gewicht = größerer Wing. Als Anfänger: lieber eine Nummer größer wählen.
        </p>
      </div>

      <!-- Main table -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-6">Übersichtstabelle: Wing-Größe nach Wind und Gewicht</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse">
            <thead>
              <tr class="bg-navy text-white">
                <th class="text-left p-3 rounded-tl-xl">Windstärke</th>
                <th class="text-left p-3">Unter 65 kg</th>
                <th class="text-left p-3">65–80 kg</th>
                <th class="text-left p-3">80–95 kg</th>
                <th class="text-left p-3 rounded-tr-xl">Über 95 kg</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr class="bg-white hover:bg-sky/50">
                <td class="p-3 font-semibold text-navy">8–12 kn (schwach)</td>
                <td class="p-3">5–6 m²</td>
                <td class="p-3">5–7 m²</td>
                <td class="p-3">6–7 m²</td>
                <td class="p-3">7 m²+</td>
              </tr>
              <tr class="bg-sky/30 hover:bg-sky/50">
                <td class="p-3 font-semibold text-navy">12–16 kn (leicht)</td>
                <td class="p-3">4–5 m²</td>
                <td class="p-3">5–6 m²</td>
                <td class="p-3">5–6 m²</td>
                <td class="p-3">6–7 m²</td>
              </tr>
              <tr class="bg-white hover:bg-sky/50">
                <td class="p-3 font-semibold text-navy">16–20 kn (mittel)</td>
                <td class="p-3">3–4 m²</td>
                <td class="p-3">4–5 m²</td>
                <td class="p-3">4–5 m²</td>
                <td class="p-3">5–6 m²</td>
              </tr>
              <tr class="bg-sky/30 hover:bg-sky/50">
                <td class="p-3 font-semibold text-navy">20–25 kn (stark)</td>
                <td class="p-3">2.5–3 m²</td>
                <td class="p-3">3–4 m²</td>
                <td class="p-3">3.5–4 m²</td>
                <td class="p-3">4–5 m²</td>
              </tr>
              <tr class="bg-white hover:bg-sky/50">
                <td class="p-3 font-semibold text-navy">25+ kn (sehr stark)</td>
                <td class="p-3">2–2.5 m²</td>
                <td class="p-3">2.5–3 m²</td>
                <td class="p-3">3 m²</td>
                <td class="p-3">3–3.5 m²</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-muted mt-3">Richtwerte. Erfahrenere Fahrer wählen oft einen halben Meter kleiner als Anfänger.</p>
      </section>

      <!-- Recommendations -->
      <section class="grid md:grid-cols-2 gap-6">
        <div class="bg-sky rounded-2xl p-6">
          <h3 class="font-heading font-bold text-navy text-lg mb-3">Empfehlung für Anfänger</h3>
          <p class="text-sm text-text leading-relaxed">
            Wähle als Anfänger eine Wing-Größe, die für deinen typischen Windbereich einen halben Meter größer ist als die Tabelle zeigt. Ein etwas größerer Wing ist verzeihender und gibt dir mehr Zeit zum Reagieren.
          </p>
          <p class="text-sm text-text leading-relaxed mt-3">
            <strong>Praxisbeispiel:</strong> 80 kg, 15–18 Knoten Wind typisch → Tabelle zeigt 4–5 m². Als Anfänger wählen: 5 m².
          </p>
        </div>
        <div class="bg-sky rounded-2xl p-6">
          <h3 class="font-heading font-bold text-navy text-lg mb-3">Demowings und Kurse</h3>
          <p class="text-sm text-text leading-relaxed">
            Bevor du dir einen Wing kaufst, empfehlen wir einen Kurs mit einem lokalen Wingfoil-Anbieter. Die meisten Schulen haben verschiedene Wing-Größen, sodass du herausfinden kannst, was zu deinem typischen Wind passt.
          </p>
        </div>
      </section>

      <section class="bg-white border border-border rounded-2xl p-6">
        <h2 class="font-heading font-bold text-navy text-xl mb-3">Was ist mit einer zweiten Wing-Größe?</h2>
        <p class="text-text text-sm leading-relaxed">
          Viele erfahrene Wingfoiler besitzen zwei Wings: einen für leichteren Wind (5–6 m²) und einen für stärkeren Wind (3–4 m²). Für Anfänger empfehlen wir zunächst eine einzige Allround-Größe – meist 5 m² bei typischen Bedingungen von 15–20 Knoten. Der zweite Wing kommt später, wenn du weißt, was du wirklich brauchst.
        </p>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline">Sets mit passendem Wing ansehen →</NuxtLink>
        <NuxtLink to="/wingfoil-setup-finder/" class="text-sm font-semibold text-ocean hover:underline">Setup-Finder für persönliche Empfehlung →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Wing-Größe und Windstärke: Die komplette Tabelle 2026',
  meta: [
    { name: 'description', content: 'Welche Wing-Größe für welchen Wind? Die komplette Übersichtstabelle nach Gewicht und Windstärke. Plus Tipps für Anfänger bei der Wing-Auswahl.' }
  ]
})
</script>
