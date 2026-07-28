<template>
  <div class="min-h-screen flex flex-col font-body text-text bg-white">
    <!-- Header -->
    <header class="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="w-8 h-8 bg-ocean rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" class="w-5 h-5 text-white fill-current">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
            </div>
            <span class="font-heading font-bold text-navy text-lg">Wingfoil<span class="text-ocean">Empfehlung</span></span>
          </NuxtLink>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink to="/wingfoil-set/" class="text-sm font-medium text-muted hover:text-navy transition-colors">Wingfoil Sets</NuxtLink>
            <NuxtLink to="/wingfoil-board/" class="text-sm font-medium text-muted hover:text-navy transition-colors">Boards</NuxtLink>
            <NuxtLink to="/wingfoil-wing/" class="text-sm font-medium text-muted hover:text-navy transition-colors">Wings & Foils</NuxtLink>
            <NuxtLink to="/wingfoil-anfaenger/" class="text-sm font-medium text-muted hover:text-navy transition-colors">Anfänger-Guide</NuxtLink>
            <NuxtLink
              to="/wingfoil-setup-finder/"
              class="bg-ocean text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy transition-colors"
            >
              Setup-Finder
            </NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <button
            class="md:hidden p-2 rounded-lg text-muted hover:text-navy hover:bg-sky transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menü öffnen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Nav -->
        <div v-if="mobileOpen" class="md:hidden py-3 border-t border-border">
          <nav class="flex flex-col gap-1">
            <NuxtLink to="/wingfoil-set/" class="px-3 py-2 text-sm font-medium text-muted hover:text-navy hover:bg-sky rounded-lg" @click="mobileOpen = false">Wingfoil Sets</NuxtLink>
            <NuxtLink to="/wingfoil-board/" class="px-3 py-2 text-sm font-medium text-muted hover:text-navy hover:bg-sky rounded-lg" @click="mobileOpen = false">Boards</NuxtLink>
            <NuxtLink to="/wingfoil-wing/" class="px-3 py-2 text-sm font-medium text-muted hover:text-navy hover:bg-sky rounded-lg" @click="mobileOpen = false">Wings & Foils</NuxtLink>
            <NuxtLink to="/wingfoil-anfaenger/" class="px-3 py-2 text-sm font-medium text-muted hover:text-navy hover:bg-sky rounded-lg" @click="mobileOpen = false">Anfänger-Guide</NuxtLink>
            <NuxtLink to="/wingfoil-setup-finder/" class="mx-3 mt-2 bg-ocean text-white text-sm font-semibold px-4 py-2 rounded-lg text-center" @click="mobileOpen = false">Setup-Finder starten</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-navy text-white mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="font-heading font-bold text-lg mb-3">Wingfoil<span class="text-cyan">Empfehlung</span></div>
            <p class="text-sm text-slate-300 leading-relaxed">Unabhängige Empfehlungen für Wingfoil-Sets, Boards, Wings und Foils.</p>
          </div>
          <div>
            <h3 class="font-semibold text-sm mb-3 text-slate-200">Kategorien</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li><NuxtLink to="/wingfoil-set/" class="hover:text-cyan transition-colors">Wingfoil Sets</NuxtLink></li>
              <li><NuxtLink to="/wingfoil-set/anfaenger/" class="hover:text-cyan transition-colors">Anfänger-Sets</NuxtLink></li>
              <li><NuxtLink to="/wingfoil-board/aufblasbar/" class="hover:text-cyan transition-colors">Aufblasbare Boards</NuxtLink></li>
              <li><NuxtLink to="/wingfoil-wing/" class="hover:text-cyan transition-colors">Wings & Foils</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-sm mb-3 text-slate-200">Ratgeber</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li><NuxtLink to="/wingfoil-anfaenger/" class="hover:text-cyan transition-colors">Wingfoil für Anfänger</NuxtLink></li>
              <li><NuxtLink to="/wingfoil-wing/groesse-windstaerke/" class="hover:text-cyan transition-colors">Wing-Größe & Windstärke</NuxtLink></li>
              <li><NuxtLink to="/wingfoil-set/gebraucht/" class="hover:text-cyan transition-colors">Gebrauchte Sets</NuxtLink></li>
              <li><NuxtLink to="/ratgeber/" class="hover:text-cyan transition-colors">Alle Ratgeber</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-sm mb-3 text-slate-200">Rechtliches</h3>
            <ul class="space-y-2 text-sm text-slate-300">
              <li><NuxtLink to="/ueber-uns/" class="hover:text-cyan transition-colors">Über uns</NuxtLink></li>
              <li><NuxtLink to="/so-bewerten-wir/" class="hover:text-cyan transition-colors">So bewerten wir</NuxtLink></li>
              <li><NuxtLink to="/affiliate-hinweis/" class="hover:text-cyan transition-colors">Affiliate-Hinweis</NuxtLink></li>
              <li><NuxtLink to="/datenschutz/" class="hover:text-cyan transition-colors">Datenschutz</NuxtLink></li>
              <li><NuxtLink to="/impressum/" class="hover:text-cyan transition-colors">Impressum</NuxtLink></li>
            </ul>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {{ new Date().getFullYear() }} wingfoil-empfehlung.de – Unabhängige Affiliate-Vergleiche</p>
          <p>Mit * gekennzeichnete Links sind Affiliate-Links. Für dich entstehen keine Mehrkosten.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
</script>
