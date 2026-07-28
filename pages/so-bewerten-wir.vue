<template>
  <div>
    <CategoryHero
      title="So bewerten wir"
      subtitle="Unser redaktioneller Prozess: Wie wir Produkte prüfen, bewerten und auswählen."
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Breadcrumbs :items="[{ label: 'So bewerten wir' }]" />

      <section class="space-y-8">
        <div>
          <h2 class="font-heading font-bold text-navy text-2xl mb-4">Unser Bewertungsprozess</h2>
          <p class="text-text leading-relaxed">
            Jedes Produkt auf wingfoil-empfehlung.de durchläuft einen strukturierten Bewertungsprozess. Wir unterscheiden zwischen verschiedenen Prüftiefen, die wir transparent kennzeichnen.
          </p>
        </div>

        <div class="space-y-4">
          <div class="bg-green-50 border border-green-200 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 bg-positive rounded-full"></span>
              <span class="font-semibold text-positive">Selbst getestet</span>
            </div>
            <p class="text-sm text-text leading-relaxed">Das Produkt wurde von unserem Redaktionsteam oder einem verifizierten Tester auf dem Wasser getestet. Wir geben persönliche Fahrerfahrungen weiter.</p>
          </div>

          <div class="bg-green-50 border border-green-200 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 bg-positive rounded-full"></span>
              <span class="font-semibold text-positive">Von Experten getestet</span>
            </div>
            <p class="text-sm text-text leading-relaxed">Das Produkt wurde von verifizierten Wingfoil-Experten oder zertifizierten Instruktoren getestet und bewertet.</p>
          </div>

          <div class="bg-sky border border-border rounded-xl p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 bg-ocean rounded-full"></span>
              <span class="font-semibold text-ocean">Redaktionell geprüft</span>
            </div>
            <p class="text-sm text-text leading-relaxed">Wir haben die technischen Spezifikationen, verfügbaren Testberichte, Herstellerinfos und Nutzerbewertungen analysiert. Kein persönlicher Fahrertest – aber eine sorgfältige Datenanalyse.</p>
          </div>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-2xl mb-4">Unsere Bewertungskriterien</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="c in criteria" :key="c.name" class="bg-white border border-border rounded-xl p-4">
              <div class="font-semibold text-navy text-sm mb-1">{{ c.name }}</div>
              <div class="text-xs text-muted leading-relaxed">{{ c.desc }}</div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-2xl mb-4">Was wir nicht bewerten</h2>
          <p class="text-text leading-relaxed">
            Wir veröffentlichen keine Produkte, die wir nicht ausreichend prüfen konnten. Produkte mit fehlenden Spezifikationen, unklarer Verfügbarkeit oder nicht verifizierten Herstellerangaben erscheinen nicht in unseren Empfehlungen. Der Prüfstatus jedes Produkts ist transparent auf der Produktseite angegeben.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'So bewerten wir – wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Unser Bewertungsprozess: Wie wir Wingfoil-Produkte prüfen, welche Kriterien wir anlegen und was unsere Bewertungs-Badges bedeuten.' }
  ]
})

const criteria = [
  { name: 'Anfängerfreundlichkeit', desc: 'Wie einfach ist der Einstieg? Wie verzeihend reagiert das Setup auf Fehler?' },
  { name: 'Stabilität', desc: 'Kippverhalten auf dem Board, Stabilität auf der Foil bei niedrigen Geschwindigkeiten.' },
  { name: 'Früher Lift', desc: 'Ab welcher Geschwindigkeit hebt das Foil ab? Großes Foil = früher Lift.' },
  { name: 'Kontrolle', desc: 'Wie präzise lässt sich das Setup steuern? Reagiert es gutmütig auf Inputs?' },
  { name: 'Agilität', desc: 'Wie wendig ist das Setup beim Wenden und Manövrieren?' },
  { name: 'Transport', desc: 'Wie einfach lässt sich das Equipment transportieren und lagern?' },
  { name: 'Vollständigkeit', desc: 'Was ist im Lieferumfang enthalten? Fehlt etwas Wichtiges?' },
  { name: 'Preis-Leistung', desc: 'Wie gut ist das Produkt im Verhältnis zum Preis?' }
]
</script>
