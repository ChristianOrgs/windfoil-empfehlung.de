<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden min-h-[560px] lg:min-h-[680px] flex items-center">
      <!-- Background image -->
      <div class="absolute inset-0">
        <img
          :src="heroImg"
          alt="Wingfoiler springt hoch über das türkisblaue Mittelmeer"
          class="w-full h-full object-cover object-center"
          width="1920"
          height="1280"
          fetchpriority="high"
        />
        <!-- Dark overlay for text legibility -->
        <div class="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div class="max-w-xl">
          <div class="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
            Unabhängige Wingfoil-Empfehlungen
          </div>
          <h1 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-white">
            Das richtige Wingfoil-Set finden
          </h1>
          <p class="text-lg text-slate-200 mb-8 leading-relaxed">
            Wir vergleichen Wingfoil-Sets, Boards und Wings – redaktionell geprüft, mit echten Preisen von Decathlon. Für Anfänger und Fortgeschrittene.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/wingfoil-setup-finder/"
              class="bg-white text-navy font-bold px-6 py-3 rounded-xl hover:bg-sky transition-colors text-center shadow-lg"
            >
              Setup-Finder starten
            </NuxtLink>
            <NuxtLink
              to="/wingfoil-set/"
              class="border border-white/50 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/15 backdrop-blur-sm transition-colors text-center"
            >
              Alle Sets ansehen
            </NuxtLink>
          </div>
        </div>
      </div>

      
    </section>

    <!-- Trust elements -->
    <section class="bg-sky py-8 border-b border-border">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="font-heading font-bold text-2xl text-navy">{{ publishedCount }}+</div>
            <div class="text-sm text-muted">Geprüfte Produkte</div>
          </div>
          <div>
            <div class="font-heading font-bold text-2xl text-navy">100%</div>
            <div class="text-sm text-muted">Unabhängige Redaktion</div>
          </div>
          <div>
            <div class="font-heading font-bold text-2xl text-navy">Täglich</div>
            <div class="text-sm text-muted">Preise geprüft</div>
          </div>
          <div>
            <div class="font-heading font-bold text-2xl text-navy">0 €</div>
            <div class="text-sm text-muted">Für dich kostenlos</div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

      <!-- Setup-Finder Teaser -->
      <section class="bg-gradient-to-r from-navy to-ocean rounded-2xl p-8 md:p-12 text-white">
        <div class="max-w-3xl">
          <div class="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Neu: Setup-Finder
          </div>
          <h2 class="font-heading font-bold text-3xl md:text-4xl mb-4">
            Welches Setup passt zu dir?
          </h2>
          <p class="text-slate-200 text-lg mb-6 leading-relaxed">
            In 6 kurzen Fragen zu deiner persönlichen Wingfoil-Empfehlung. Basierend auf Gewicht, Level, Wind und Budget.
          </p>
          <NuxtLink
            to="/wingfoil-setup-finder/"
            class="inline-block bg-white text-navy font-bold px-6 py-3 rounded-xl hover:bg-sky transition-colors"
          >
            Jetzt starten – kostenlos
          </NuxtLink>
        </div>
      </section>

      <!-- Category cards -->
      <section>
        <h2 class="font-heading font-bold text-navy text-3xl mb-2">Nach Kategorie stöbern</h2>
        <p class="text-muted mb-8">Alle geprüften Produkte nach Typ sortiert.</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink to="/wingfoil-set/" class="group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover:border-ocean/30">
            <div class="w-12 h-12 bg-sky rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean/10 transition-colors">
              <svg class="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-1">Wingfoil Sets</h3>
            <p class="text-sm text-muted">Komplettsets für Einsteiger & Pros</p>
            <div class="mt-3 text-xs font-semibold text-ocean">{{ setCount }} Empfehlungen →</div>
          </NuxtLink>

          <NuxtLink to="/wingfoil-board/" class="group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover:border-ocean/30">
            <div class="w-12 h-12 bg-sky rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean/10 transition-colors">
              <svg class="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-1">Boards</h3>
            <p class="text-sm text-muted">Aufblasbar & Hardboard</p>
            <div class="mt-3 text-xs font-semibold text-ocean">{{ boardCount }} Empfehlungen →</div>
          </NuxtLink>

          <NuxtLink to="/wingfoil-wing/" class="group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover:border-ocean/30">
            <div class="w-12 h-12 bg-sky rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean/10 transition-colors">
              <svg class="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-1">Wings & Foils</h3>
            <p class="text-sm text-muted">Einzelne Komponenten</p>
            <div class="mt-3 text-xs font-semibold text-ocean">Ratgeber & Tipps →</div>
          </NuxtLink>

          <NuxtLink to="/wingfoil-anfaenger/" class="group bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover:border-ocean/30">
            <div class="w-12 h-12 bg-sky rounded-xl flex items-center justify-center mb-4 group-hover:bg-ocean/10 transition-colors">
              <svg class="w-6 h-6 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-1">Anfänger-Guide</h3>
            <p class="text-sm text-muted">Alles über den Einstieg</p>
            <div class="mt-3 text-xs font-semibold text-ocean">Guide lesen →</div>
          </NuxtLink>
        </div>
      </section>

      <!-- Top Recommendations -->
      <section>
        <div class="flex items-end justify-between mb-8">
          <div>
            <h2 class="font-heading font-bold text-navy text-3xl mb-2">Unsere Top-Empfehlungen</h2>
            <p class="text-muted">Redaktionell geprüfte Produkte – drei Highlights für verschiedene Fahrer.</p>
          </div>
          <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline hidden md:block">Alle Sets →</NuxtLink>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <ProductCard v-if="beginnerPick" :product="beginnerPick" />
          <ProductCard v-if="valuePick" :product="valuePick" />
          <ProductCard v-if="performancePick" :product="performancePick" />
        </div>
        <div class="mt-4 text-center md:hidden">
          <NuxtLink to="/wingfoil-set/" class="text-sm font-semibold text-ocean hover:underline">Alle Sets ansehen →</NuxtLink>
        </div>
      </section>

      <!-- Beginner section -->
      <section class="bg-sky rounded-2xl p-8 md:p-12">
        <div class="max-w-3xl">
          <div class="inline-block bg-ocean/10 text-ocean text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Für Einsteiger
          </div>
          <h2 class="font-heading font-bold text-navy text-3xl mb-4">
            Neu im Wingfoilen? So findest du dein erstes Setup.
          </h2>
          <p class="text-text leading-relaxed mb-6">
            Das Wichtigste für Anfänger: ein großes, stabiles Board (mindestens 130 Liter), ein gutmütiges Foil mit großer Frontwing-Fläche (ab 1.500 cm²) und ein Wing zwischen 4 und 6 m², der zu deinen lokalen Windbedingungen passt. Aufblasbare Boards erleichtern den Einstieg und Transport.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/wingfoil-set/anfaenger/"
              class="bg-ocean text-white font-bold px-6 py-3 rounded-xl hover:bg-navy transition-colors text-center"
            >
              Anfänger-Sets ansehen
            </NuxtLink>
            <NuxtLink
              to="/wingfoil-anfaenger/"
              class="border border-ocean text-ocean font-semibold px-6 py-3 rounded-xl hover:bg-ocean/10 transition-colors text-center"
            >
              Anfänger-Guide lesen
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Transparency section -->
      <section>
        <h2 class="font-heading font-bold text-navy text-3xl mb-8">Wie wir arbeiten</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white border border-border rounded-2xl p-6">
            <div class="w-10 h-10 bg-sky rounded-xl flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-2">Redaktionelle Prüfung</h3>
            <p class="text-sm text-muted leading-relaxed">Jedes Produkt wird nach Spezifikationen, Kundenbewertungen und verfügbaren Testberichten geprüft, bevor es erscheint.</p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <div class="w-10 h-10 bg-sky rounded-xl flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-2">Preise mit Datum</h3>
            <p class="text-sm text-muted leading-relaxed">Alle Preise sind mit Prüfdatum versehen. Wir weisen transparent aus, wenn ein Preis möglicherweise nicht mehr aktuell ist.</p>
          </div>
          <div class="bg-white border border-border rounded-2xl p-6">
            <div class="w-10 h-10 bg-sky rounded-xl flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-heading font-bold text-navy mb-2">Affiliate-Transparenz</h3>
            <p class="text-sm text-muted leading-relaxed">Wir kennzeichnen alle Affiliate-Links mit einem Sternchen (*). Unsere Empfehlungen richten sich nach redaktionellen Kriterien, nicht nach Provisionen.</p>
          </div>
        </div>
        <div class="mt-6">
          <AffiliateDisclosure />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { getPublishedProducts } from '~/utils/products'

const heroImg = '/images/hero/wingfoil-hero.webp'

useHead({
  title: 'Wingfoil-Empfehlung: Sets, Boards & Wings im Vergleich | wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Unabhängige Wingfoil-Empfehlungen für Sets, Boards, Wings und Foils. Redaktionell geprüfte Produkte mit aktuellen Preisen von Decathlon. Setup-Finder für Einsteiger und Fortgeschrittene.' },
    { property: 'og:title', content: 'wingfoil-empfehlung.de – Unabhängige Wingfoil-Vergleiche' },
    { property: 'og:description', content: 'Sets, Boards und Wings redaktionell geprüft. Mit Setup-Finder für dein passendes Setup.' },
    { property: 'og:type', content: 'website' }
  ],
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'wingfoil-empfehlung.de',
      url: 'https://wingfoil-empfehlung.de',
      description: 'Unabhängige Wingfoil-Empfehlungen und Ratgeber für Einsteiger und Fortgeschrittene',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://wingfoil-empfehlung.de/wingfoil-setup-finder/',
        'query-input': 'required name=search_term_string'
      }
    })
  }]
})

const published = getPublishedProducts(products)
const publishedCount = published.length
const sets = published.filter(p => p.productType === 'complete-set')
const setCount = sets.length
const boardCount = published.filter(p => ['board', 'board-pack'].includes(p.productType)).length

// Featured picks
const beginnerPick = published.find(p => p.id === 'f2-glide-cross-air-160-set')
const valuePick = published.find(p => p.id === 'hana-premium-150-board-pack')
const performancePick = published.find(p => p.id === 'f2-glide-surf-air-120-set')
</script>
