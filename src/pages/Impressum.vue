<script setup>
import NavBar from '../components/NavBar.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main class="pt-[calc(128px+60px)] pb-24 md:pt-[calc(160px+60px)] md:pb-32">
    <div class="mx-auto max-w-[640px] px-6">
      <h1 class="text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-8">
        Impressum
      </h1>
      <div class="text-[var(--color-text-muted)] leading-relaxed space-y-4">
        <p><strong class="text-[var(--color-text-primary)]">Solytics GmbH</strong></p>
        <p>Karlstein am Main</p>
        <p>Geschäftsführer: Jens Laufer</p>
        <p>E-Mail: jens.laufer@solytics.de</p>
      </div>
    </div>
  </main>
  <SiteFooter />
</template>
