<script setup>
import NavBar from '../components/NavBar.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main class="pt-[calc(128px+60px)] pb-24 md:pt-[calc(160px+60px)] md:pb-32">
    <div class="mx-auto max-w-[640px] px-6">
      <h1 class="text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
        Datenschutz
      </h1>
      <div class="text-[var(--color-text-muted)] leading-relaxed space-y-4">
        <p>
          Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt und keine Tracking-Tools eingesetzt.
        </p>
        <p>
          Bei Nutzung des Kontaktformulars oder der Terminbuchung gelten die Datenschutzbestimmungen des jeweiligen Dienstanbieters (Calendly).
        </p>
        <p>
          <strong class="text-[var(--color-text-primary)]">Verantwortlich:</strong><br>
          Solytics GmbH, Karlstein am Main<br>
          jens.laufer@solytics.de
        </p>
      </div>
    </div>
  </main>
  <SiteFooter />
</template>
