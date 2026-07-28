<template>
  <div>
    <CategoryHero
      title="Datenschutzerklärung"
      subtitle="Informationen zur Verarbeitung personenbezogener Daten auf wingfoil-empfehlung.de."
    />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Breadcrumbs :items="[{ label: 'Datenschutz' }]" />

      <section class="space-y-6 text-text leading-relaxed text-sm">
        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">1. Verantwortlicher</h2>
          <p>Verantwortlicher im Sinne der DSGVO ist der Betreiber dieser Website. Die vollständigen Kontaktdaten findest du im Impressum.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">2. Allgemeine Hinweise</h2>
          <p>Wir nehmen den Schutz deiner persönlichen Daten ernst. Diese Datenschutzerklärung informiert dich darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte du hast.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">3. Server-Log-Dateien</h2>
          <p>Beim Aufruf dieser Website werden automatisch Informationen in Server-Logfiles gespeichert. Dazu gehören: Browser-Typ, Betriebssystem, Referrer-URL, IP-Adresse (anonymisiert) und Datum/Uhrzeit des Zugriffs. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und dienen ausschließlich der technischen Analyse.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">4. Google Fonts</h2>
          <p>Wir laden Schriftarten von Google Fonts (fonts.googleapis.com). Dabei wird beim Laden der Seite eine Verbindung zu Google-Servern hergestellt und deine IP-Adresse übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einheitlicher Darstellung). Weitere Informationen: <a href="https://policies.google.com/privacy" class="text-ocean hover:underline" target="_blank" rel="noopener">Google Datenschutzrichtlinie</a>.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">5. Affiliate-Links</h2>
          <p>Diese Website enthält Affiliate-Links zu Amazon und Decathlon. Wenn du auf einen solchen Link klickst, wird in der Regel ein Cookie gesetzt, das dem Händler die Herkunft deines Besuchs mitteilt. Die Datenschutzhinweise dieser Händler findest du auf deren Websites.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">6. Deine Rechte</h2>
          <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zur Ausübung dieser Rechte wende dich an die im Impressum genannte Kontaktadresse. Du hast außerdem das Recht, Beschwerde bei einer Datenschutzbehörde einzulegen.</p>
        </div>

        <div>
          <h2 class="font-heading font-bold text-navy text-xl mb-3">7. Aktualität</h2>
          <p>Diese Datenschutzerklärung hat den Stand Juli 2026. Wir behalten uns vor, sie bei Bedarf anzupassen.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Datenschutzerklärung – wingfoil-empfehlung.de',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung für wingfoil-empfehlung.de – Informationen zur Verarbeitung personenbezogener Daten.' },
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
