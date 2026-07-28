<template>
  <div>
    <CategoryHero
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs :items="[{ label: 'Impressum' }]" />

      <section class="space-y-6 text-text leading-relaxed text-sm">
        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">Angaben gemäß § 5 TMG</h2>
          <div class="bg-sky rounded-xl p-5 space-y-1">
            <p class="font-semibold text-navy">wingfoil-empfehlung.de</p>
            <p>[Betreiber – Angaben folgen]</p>
            <p>[Adresse – Angaben folgen]</p>
            <p>[PLZ, Ort – Angaben folgen]</p>
          </div>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">Kontakt</h2>
          <p>E-Mail: [kontakt@wingfoil-empfehlung.de – Angaben folgen]</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>[Name und Adresse des Verantwortlichen – Angaben folgen]</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">Haftungsausschluss</h2>
          <h3 class="font-semibold text-navy mb-2">Haftung für Inhalte</h3>
          <p class="mb-3">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

          <h3 class="font-semibold text-navy mb-2">Haftung für Links</h3>
          <p class="mb-3">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

          <h3 class="font-semibold text-navy mb-2">Urheberrecht</h3>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">Affiliate-Hinweis</h2>
          <p>Diese Website enthält Affiliate-Links. Weitere Informationen findest du in unserem <NuxtLink to="/affiliate-hinweis/" class="text-ocean hover:underline">Affiliate-Hinweis</NuxtLink>.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Impressum – wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Impressum von wingfoil-empfehlung.de – Angaben gemäß § 5 TMG.' },
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
