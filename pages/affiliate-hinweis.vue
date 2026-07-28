<template>
  <div>
    <CategoryHero
      title="Affiliate-Hinweis"
      subtitle="Transparenz über unsere Partnerschaftsprogramme und wie wir Provisionen einsetzen."
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs :items="[{ label: 'Affiliate-Hinweis' }]" />

      <section class="space-y-6 text-text leading-relaxed">
        <div class="bg-sky border border-border rounded-xl p-5">
          <p class="font-semibold text-navy mb-1">Kurzversion</p>
          <p class="text-sm">Mit einem Sternchen (*) gekennzeichnete Links sind Affiliate-Links. Wenn du über einen solchen Link kaufst, erhalten wir eine Provision. Für dich ändert sich nichts – kein höherer Preis, keine versteckten Kosten.</p>
        </div>

        <h2 class="font-heading font-bold text-navy text-2xl">Was sind Affiliate-Links?</h2>
        <p>
          Affiliate-Links sind spezielle Tracking-Links, durch die der Händler erkennt, dass du über unsere Website zu ihm gelangt bist. Wenn du dann innerhalb eines bestimmten Zeitraums (typischerweise 30 Tage) einen Kauf tätigst, erhalten wir eine prozentuale Provision auf den Kaufpreis.
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl">Welche Partnerprogramme nutzen wir?</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-ocean font-semibold shrink-0">→</span>
            <div><strong>Decathlon Affiliate (AWIN):</strong> Wir nehmen am Affiliate-Programm von Decathlon über das AWIN-Netzwerk teil. Alle Links zu Decathlon-Produkten auf dieser Seite sind oder werden zu Affiliate-Links.</div>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-ocean font-semibold shrink-0">→</span>
            <div><strong>Amazon PartnerNet:</strong> Für Amazon-Produkte nehmen wir am Amazon PartnerNet teil. Das bedeutet, dass Links zu Amazon mit unserem Affiliate-Tag versehen werden.</div>
          </li>
        </ul>

        <h2 class="font-heading font-bold text-navy text-2xl">Beeinflusst das unsere Empfehlungen?</h2>
        <p>
          Nein. Unsere redaktionellen Entscheidungen – welche Produkte wir empfehlen, wie wir sie bewerten und in welcher Reihenfolge wir sie präsentieren – treffen wir unabhängig von Provisionsstrukturen. Wir empfehlen Produkte, die wir für ihre Zielgruppe als geeignet erachten, nicht Produkte, die die höchste Provision generieren.
        </p>
        <p>
          Die Provisionen helfen uns, diese Website zu betreiben und weiterhin unabhängige Ratgeber und Vergleiche zu erstellen.
        </p>

        <h2 class="font-heading font-bold text-navy text-2xl">Kennzeichnung</h2>
        <p>
          Alle Affiliate-Links auf dieser Website sind mit einem Sternchen (*) direkt am Link oder am Button gekennzeichnet. Zusätzlich weisen wir auf Kategorie- und Produktseiten im Affiliate-Hinweis-Banner explizit auf diese Praxis hin.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Affiliate-Hinweis – wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Transparenz über Affiliate-Links auf wingfoil-empfehlung.de: Welche Partnerprogramme wir nutzen und wie das unsere Empfehlungen beeinflusst.' }
  ]
})
</script>
