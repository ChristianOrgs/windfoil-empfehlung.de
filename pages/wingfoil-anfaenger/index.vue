<template>
  <div>
    <CategoryHero
      title="Wingfoil für Anfänger: Der komplette Einstiegs-Guide"
      subtitle="Vom Erstkontakt bis zur ersten Fahrt auf der Foil – was du wissen musst, bevor du kaufst."
      badge="Anfänger-Guide 2026"
      :image="heroImg"
    />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Breadcrumbs :items="[{ label: 'Anfänger-Guide' }]" />

      <!-- Intro -->
      <div class="max-w-3xl">
        <p class="text-text leading-relaxed text-lg">
          Wingfoilen ist eine der faszinierendsten Wassersportarten der letzten Jahre – und der Einstieg ist heute einfacher als je zuvor. Mit dem richtigen Equipment und ein paar Stunden Kursunterricht können die meisten Menschen in einem Wochenende ihre ersten kontrollierten Fahrten auf der Foil machen.
        </p>
      </div>

      <!-- Was ist Wingfoilen? -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Was ist Wingfoilen?</h2>
        <p class="text-text leading-relaxed mb-4">
          Beim Wingfoilen hältst du einen aufblasbaren Wing in der Hand, der – ähnlich wie ein Drachen beim Kitesurfen – durch den Wind Zug erzeugt. Dieser Zug bewegt dich auf einem Board vorwärts, das mit einem Hydrofoil ausgestattet ist. Ab einer bestimmten Geschwindigkeit hebt der Auftrieb des Foils das Board aus dem Wasser – und du gleitest nahezu reibungslos über die Oberfläche.
        </p>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-sky rounded-xl p-4 text-center">
            <div class="text-2xl mb-2">🌬️</div>
            <div class="font-semibold text-navy text-sm">Wing</div>
            <div class="text-xs text-muted mt-1">Erzeugt Vortrieb durch Wind</div>
          </div>
          <div class="bg-sky rounded-xl p-4 text-center">
            <div class="text-2xl mb-2">🏄</div>
            <div class="font-semibold text-navy text-sm">Board</div>
            <div class="text-xs text-muted mt-1">Startplattform, aufblasbar oder Hardboard</div>
          </div>
          <div class="bg-sky rounded-xl p-4 text-center">
            <div class="text-2xl mb-2">⬆️</div>
            <div class="font-semibold text-navy text-sm">Foil</div>
            <div class="text-xs text-muted mt-1">Hebt dich aus dem Wasser</div>
          </div>
        </div>
      </section>

      <!-- Lernkurve -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Wie steil ist die Lernkurve?</h2>
        <p class="text-text leading-relaxed mb-4">
          Wingfoilen hat im Vergleich zu Kitesurfen eine deutlich flachere Lernkurve – aber sie ist steiler als beim SUP oder Surfen. Realistisch einplanen solltest du:
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-4 bg-white border border-border rounded-xl p-4">
            <div class="w-8 h-8 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
            <div>
              <div class="font-semibold text-navy">Erster Kurs (2–4 Stunden)</div>
              <div class="text-sm text-muted mt-0.5">Wing-Handhabung am Boden, Bodygliden im Wasser, erste Versuche auf dem Board ohne Foil</div>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white border border-border rounded-xl p-4">
            <div class="w-8 h-8 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
            <div>
              <div class="font-semibold text-navy">Erste Sessions (5–15 Stunden)</div>
              <div class="text-sm text-muted mt-0.5">Kontrolle auf dem Board, erste kurze Foil-Momente, stabile Richtungsänderungen</div>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white border border-border rounded-xl p-4">
            <div class="w-8 h-8 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</div>
            <div>
              <div class="font-semibold text-navy">Regelmäßige Fahrten (15–30 Stunden)</div>
              <div class="text-sm text-muted mt-0.5">Stabiles Foilen, erste Wenden auf der Foil, längere Strecken</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Equipment -->
      <section>
        <h2 class="font-heading font-bold text-navy text-2xl mb-4">Das richtige Equipment für Einsteiger</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="font-semibold text-navy mb-3">Was du brauchst</h3>
            <ul class="space-y-2 text-sm text-text">
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Board: 130–160 L, aufblasbar für Einsteiger</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Wing: 4–6 m² passend zu deinen Windbedingungen</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Foil: Frontwing ab 1.500 cm², Alu-Mast</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Neoprenanzug passend zur Wassertemperatur</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Helm (beim Lernen dringend empfohlen)</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Impact Vest</li>
              <li class="flex items-start gap-2"><span class="text-positive shrink-0 mt-0.5">✓</span> Board-Leash und Wing-Leash</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-navy mb-3">Voraussetzungen</h3>
            <ul class="space-y-2 text-sm text-text">
              <li class="flex items-start gap-2"><span class="text-ocean shrink-0 mt-0.5">→</span> Schwimmer (sicherer Schwimmer, auch bei Wellen)</li>
              <li class="flex items-start gap-2"><span class="text-ocean shrink-0 mt-0.5">→</span> Körperliche Fitness (Ausdauer, Gleichgewicht)</li>
              <li class="flex items-start gap-2"><span class="text-ocean shrink-0 mt-0.5">→</span> Grundverständnis für Windrichtung und -stärke</li>
              <li class="flex items-start gap-2"><span class="text-ocean shrink-0 mt-0.5">→</span> Respekt vor anderen Wasserportlern</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Kurs -->
      <section class="bg-sky rounded-2xl p-8">
        <h2 class="font-heading font-bold text-navy text-2xl mb-3">Kurs oder Selbststudium?</h2>
        <p class="text-text leading-relaxed mb-4">
          Wir empfehlen dringend, mit einem Kurs zu beginnen. Ein Wingfoil-Kurs bei einer zertifizierten Schule kostet typischerweise 150–300 Euro für einen Einsteigertag und spart dir viele frustrierende Stunden. Du lernst sicheres Handling, bekommst Feedback und kannst verschiedene Equipment-Größen ausprobieren.
        </p>
        <p class="text-sm text-muted">
          Suche nach IKO- oder VDWS-zertifizierten Wingfoil-Schulen in deiner Nähe.
        </p>
      </section>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4">
        <NuxtLink
          to="/wingfoil-set/anfaenger/"
          class="bg-ocean text-white font-bold px-6 py-3 rounded-xl hover:bg-navy transition-colors text-center"
        >
          Anfänger-Sets ansehen
        </NuxtLink>
        <NuxtLink
          to="/wingfoil-setup-finder/"
          class="border border-ocean text-ocean font-semibold px-6 py-3 rounded-xl hover:bg-sky transition-colors text-center"
        >
          Setup-Finder starten
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroImg = '/images/hero/wingfoil-dusk.webp'

useHead({
  title: 'Wingfoil für Anfänger 2026: Der komplette Einstiegs-Guide',
  meta: [
    { name: 'description', content: 'Alles über Wingfoilen als Anfänger: Was du brauchst, wie steil die Lernkurve ist, ob du einen Kurs brauchst. Plus Equipment-Empfehlungen für Einsteiger.' }
  ]
})
</script>
