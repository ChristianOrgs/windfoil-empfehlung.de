<template>
  <div>
    <CategoryHero
      title="Gebrauchtes Wingfoil-Set kaufen"
      subtitle="Tipps und Checkliste für den Kauf eines gebrauchten Wingfoil-Sets – worauf du achten musst, wo du suchst und was ein faires Setup kostet."
      badge="Ratgeber"
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Wingfoil Sets', to: '/wingfoil-set/' }, { label: 'Gebraucht kaufen' }]" />

      <div class="prose prose-sm max-w-none text-text">
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Lohnt sich ein gebrauchtes Wingfoil-Set?</h2>
        <p class="leading-relaxed mb-4">
          Ein gebrauchtes Wingfoil-Set kann erheblich günstiger sein als ein Neugerät. Gerade für Einsteiger, die noch unsicher sind, ob Wingfoilen das Richtige für sie ist, kann ein gebrauchtes Set das Risiko mindern. Allerdings gibt es einige wichtige Punkte zu beachten.
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl mb-4 mt-8">Worauf du beim Kauf achten musst</h2>
        <div class="grid sm:grid-cols-2 gap-6 mb-8">
          <div class="bg-sky rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-3">Board prüfen</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Aufblasbares Board: auf Nahtschäden, Blasenbildung und Druckverlust testen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Hardboard: auf Delaminierungen, Risse und Wassereinschlüsse prüfen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Foil-Box und Insert auf Schäden und festen Sitz prüfen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Strapleinsätze auf Festigkeit kontrollieren</li>
            </ul>
          </div>
          <div class="bg-sky rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-3">Foil prüfen</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Mast auf Verbiegungen und Risse untersuchen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Fuselage auf Beschädigungen und feste Verbindungen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Front- und Rearwing auf Delaminierungen und Risse</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Alle Schrauben und Hardware auf Korrosion</li>
            </ul>
          </div>
          <div class="bg-sky rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-3">Wing prüfen</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Bladder auf Luftverlust prüfen (aufpumpen und warten)</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Außenhülle auf Risse und Reibschäden</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Griffe und Straps auf Befestigung und Zustand</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Fenster auf Risse und Trübung</li>
            </ul>
          </div>
          <div class="bg-sky rounded-xl p-5">
            <h3 class="font-semibold text-navy mb-3">Dokumentation</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Kaufbeleg oder Rechnung vorhanden?</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Originale Taschen und Zubehör dabei?</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Garantierestzeit noch übertragbar?</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Wie intensiv wurde das Set genutzt?</li>
            </ul>
          </div>
        </div>

        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Wo gebrauchte Sets finden?</h2>
        <ul class="space-y-3 mb-8">
          <li class="flex items-start gap-3">
            <span class="font-semibold text-ocean shrink-0 mt-0.5">→</span>
            <div><strong>Spezialisierte Kite- und Windsurfläden</strong> – Händler nehmen oft gebrauchte Sets in Zahlung und bieten sie geprüft weiter an</div>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-semibold text-ocean shrink-0 mt-0.5">→</span>
            <div><strong>Lokale Wassersportclubs</strong> – Clubmitglieder verkaufen oft Sets an Bekannte; frag direkt am Revier nach</div>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-semibold text-ocean shrink-0 mt-0.5">→</span>
            <div><strong>eBay Kleinanzeigen / Kleinanzeigen.de</strong> – große Auswahl, aber kein Schutz bei Mängeln; persönliche Begutachtung ist Pflicht</div>
          </li>
          <li class="flex items-start gap-3">
            <span class="font-semibold text-ocean shrink-0 mt-0.5">→</span>
            <div><strong>Facebook-Gruppen</strong> – z.B. „Wingfoil Deutschland" – aktive Community mit vielen Privatkäufen</div>
          </li>
        </ul>

        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Was kostet ein gebrauchtes Set?</h2>
        <p class="leading-relaxed mb-4">
          Ein gebrauchtes Einsteiger-Komplettset in gutem Zustand liegt je nach Marke und Alter meist zwischen 600 und 1.000 Euro. Gut erhaltene Sets etablierter Marken können auch höher gehandelt werden. Als Faustregel: Nach einem Jahr Nutzung verliert ein Set ca. 30–40% des Neupreises.
        </p>

        <div class="bg-sky rounded-2xl p-6 mt-8">
          <p class="text-sm text-muted">
            <strong class="text-text">Tipp:</strong> Aktuell haben wir keine redaktionell geprüften gebrauchten Sets in unserem Vergleich. Wir empfehlen für den Einstieg geprüfte Neugeräte von Decathlon – besonders das
            <NuxtLink to="/produkte/f2-glide-cross-air-160-wingfoil-set/" class="text-ocean hover:underline">F2 Glide Cross Air 160L Set</NuxtLink>
            oder das
            <NuxtLink to="/produkte/hana-premium-150-wingfoil-board/" class="text-ocean hover:underline">HANA Premium 150L Board</NuxtLink>
            mit einer separaten Wing- und Foil-Auswahl.
          </p>
        </div>
      </div>

      <NuxtLink to="/wingfoil-set/" class="inline-block text-sm font-semibold text-ocean hover:underline">
        ← Alle Wingfoil-Sets ansehen
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Gebrauchtes Wingfoil-Set kaufen: Checkliste & Tipps 2026',
  meta: [
    { name: 'description', content: 'Gebrauchte Wingfoil-Sets kaufen: Worauf du achten musst, wo du suchst und was ein faires Setup kostet. Mit Checkliste für Board, Foil und Wing.' }
  ]
})
</script>
