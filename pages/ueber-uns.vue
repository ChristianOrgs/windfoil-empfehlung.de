<template>
  <div>
    <CategoryHero
      title="Über wingfoil-empfehlung.de"
      subtitle="Wer wir sind, warum wir diese Seite betreiben und wie unsere Redaktion arbeitet."
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Breadcrumbs :items="[{ label: 'Über uns' }]" />

      <section class="prose prose-sm max-w-none text-text space-y-6">
        <h2 class="font-heading font-bold text-navy text-2xl">Unsere Mission</h2>
        <p class="leading-relaxed">
          wingfoil-empfehlung.de ist eine unabhängige Ratgeber- und Vergleichswebsite für Wingfoil-Equipment. Wir helfen Einsteigern und erfahrenen Fahrern dabei, das richtige Setup für ihr Gewicht, ihr Fahrlevel und ihr Budget zu finden – ohne Marketing-Sprache und ohne versteckte Interessen.
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl">Wie wir unsere Empfehlungen erstellen</h2>
        <p class="leading-relaxed">
          Jede Produktempfehlung auf dieser Seite durchläuft eine redaktionelle Prüfung. Wir analysieren technische Spezifikationen, werten verfügbare Testberichte und Erfahrungsberichte aus und prüfen Preise und Verfügbarkeit bei den jeweiligen Händlern. Produkte, die nicht unseren Mindeststandards für Datenqualität entsprechen, veröffentlichen wir nicht.
        </p>
        <p class="leading-relaxed">
          Alle veröffentlichten Produkte tragen einen Status-Badge, der transparent macht, wie intensiv die Prüfung war: von "Redaktionell geprüft" (Daten- und Spezifikationsanalyse) bis hin zu "Selbst getestet" (eigene Testfahrten).
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl">Affiliate-Links und Unabhängigkeit</h2>
        <p class="leading-relaxed">
          Diese Website enthält Affiliate-Links. Wenn du über einen unserer Links ein Produkt kaufst, erhalten wir eine Provision vom Händler – für dich ändert sich der Preis nicht. Diese Provision hilft uns, die Seite zu betreiben und weiterzuentwickeln.
        </p>
        <p class="leading-relaxed">
          Unsere Redaktion entscheidet unabhängig davon, welche Produkte empfohlen werden. Wir empfehlen kein Produkt, nur weil es eine höhere Provision generiert. Affiliate-Links sind stets mit einem Sternchen (*) gekennzeichnet.
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl">Kontakt</h2>
        <p class="leading-relaxed">
          Für Fragen, Korrekturen oder Produktvorschläge erreichst du uns über die Angaben im Impressum.
        </p>
      </section>

      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/so-bewerten-wir/" class="text-sm font-semibold text-ocean hover:underline">So bewerten wir →</NuxtLink>
        <NuxtLink to="/affiliate-hinweis/" class="text-sm font-semibold text-ocean hover:underline">Affiliate-Hinweis →</NuxtLink>
        <NuxtLink to="/impressum/" class="text-sm font-semibold text-ocean hover:underline">Impressum →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Über uns – wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Wer wir sind, wie wir Produkte prüfen und wie unsere redaktionelle Arbeit funktioniert. Über wingfoil-empfehlung.de.' }
  ]
})
</script>
