<script setup>
import NavBar from '../components/NavBar.vue'
import SiteFooter from '../components/SiteFooter.vue'

const proofStats = [
  { number: '12', label: 'Mittelständler betreut' },
  { number: '4–8 Wo.', label: 'Umsetzung bis Go-Live' },
  { number: '100%', label: 'DSGVO-konform' },
  { number: 'DE', label: 'Beratung & Hosting' },
]

const painPoints = [
  {
    title: 'Die Frist rückt näher.',
    text: 'Ab Januar 2027 müssen Unternehmen mit über 800.000 Euro Umsatz E-Rechnungen im B2B-Bereich versenden. Wer jetzt startet, hat 9 Monate. Wer wartet, steht im Stau — Berater und Implementierer sind dann ausgebucht.',
  },
  {
    title: 'Routinearbeit frisst Kapazität.',
    text: 'Rechnungen prüfen, Daten übertragen, Reports zusammenklicken: Ihre Leute verbringen Stunden mit Aufgaben, die eine KI in Minuten erledigt. Jede Woche, die Sie warten, kostet echtes Geld.',
  },
  {
    title: 'Fachkräfte fehlen überall.',
    text: 'Die Stelle in der Buchhaltung ist seit Monaten offen. Der Vertriebsinnendienst schafft die Nachfass-Anrufe nicht. KI-Agenten füllen diese Lücken — nicht als Ersatz, sondern als Verstärkung.',
  },
]

const socialProof = [
  {
    company: 'Metallbau Hoffmann',
    metric: '8h / Woche',
    label: 'eingespart',
    detail: 'E-Rechnung live in 5 Wochen',
  },
  {
    company: 'Autohaus Weber',
    metric: '3 FTE-Std.',
    label: 'pro Tag zurückgewonnen',
    detail: 'KI-Automatisierung im Rechnungseingang',
  },
]

const eRechnungPackages = [
  {
    name: 'Starter',
    price: '1.500 Euro',
    featured: false,
    features: [
      'Prozessanalyse & Formatwahl (XRechnung oder ZUGFeRD)',
      'Einrichtung in bestehender Buchhaltungssoftware',
      'Validierung & Testlauf mit echten Rechnungen',
      'Teamschulung (2 Stunden)',
      'Ideal für: Unternehmen mit Standardprozessen',
    ],
  },
  {
    name: 'Professional',
    price: '3.500 Euro',
    featured: true,
    features: [
      'Alles aus Starter',
      'API-Integration in ERP/Warenwirtschaft',
      'Automatischer Rechnungsversand & -empfang',
      'GoBD-konforme Archivierung einrichten',
      '3 Monate Support nach Go-Live',
      'Ideal für: Unternehmen mit ERP-System und hohem Rechnungsvolumen',
    ],
  },
  {
    name: 'Enterprise',
    price: 'ab 5.000 Euro',
    featured: false,
    features: [
      'Alles aus Professional',
      'Multi-System-Integration (mehrere ERPs, Standorte)',
      'Individuelle Validierungsregeln & Workflows',
      'Peppol-Anbindung bei Bedarf',
      'Dedizierter Projektleiter',
      'Ideal für: Unternehmen mit komplexer Systemlandschaft',
    ],
  },
]

const kiPackages = [
  {
    name: 'Pilot',
    price: '2.500 Euro',
    priceSuffix: '',
    featured: false,
    features: [
      'Ein KI-Agent für einen definierten Prozess',
      'Prozessanalyse & Use-Case-Definition',
      'Prototyp in 2-3 Wochen, Go-Live in 4-6 Wochen',
      'Integration in ein bestehendes System',
      'Ideal für: Erster KI-Einsatz, schneller Proof of Value',
    ],
  },
  {
    name: 'Scale',
    price: '5.000 Euro',
    priceSuffix: '+ 2.000 Euro/Monat',
    featured: true,
    features: [
      'Bis zu 3 KI-Agenten, vernetzt über Ihre Systeme',
      'Automatisierte Workflows (Buchhaltung, Vertrieb, Reporting)',
      'Multi-System-Integration (CRM, ERP, E-Mail)',
      'Laufende Optimierung & Monitoring',
      'Monatlicher Performance-Report',
      'Ideal für: Systematische Automatisierung mehrerer Prozesse',
    ],
  },
  {
    name: 'Custom',
    price: 'auf Anfrage',
    priceSuffix: '',
    featured: false,
    features: [
      'Individuelle KI-Strategie & Roadmap',
      'Unbegrenzte Agenten und Integrationen',
      'Dediziertes Team',
      'SLA & Priority-Support',
      'Ideal für: Unternehmen, die KI zum Wettbewerbsvorteil machen',
    ],
  },
]

const kiUseCases = [
  'Eingangsrechnungen automatisch prüfen & verbuchen',
  'Angebote & Follow-ups im Vertrieb automatisieren',
  'Monats-Reportings auf Knopfdruck generieren',
  'Kundendaten in CRM & ERP synchron halten',
  'E-Mail-Postfächer automatisch kategorisieren & beantworten',
]

const processSteps = [
  {
    title: 'Analyse',
    text: '30-minütiges Erstgespräch. Wir verstehen Ihre Systeme, Prozesse und Engpässe. Sie erhalten eine ehrliche Einschätzung, ob und wo Automatisierung Sinn macht.',
  },
  {
    title: 'Konzept',
    text: 'Schriftliches Angebot mit konkretem Scope, Zeitplan und Festpreis. Keine versteckten Kosten. Sie wissen vorher, was Sie bekommen.',
  },
  {
    title: 'Umsetzung',
    text: 'Integration in Ihre bestehenden Systeme. Prototyp nach 2-3 Wochen, damit Sie früh sehen, ob die Richtung stimmt. Iterativ, nicht Wasserfall.',
  },
  {
    title: 'Go-Live & Support',
    text: 'Teamschulung, Dokumentation, Übergabe. Bei KI-Agenten: laufendes Monitoring und Optimierung. Sie stehen nicht allein da.',
  },
]

const trustItems = [
  {
    title: 'DSGVO & GoBD',
    text: 'Deutsche Server. Deutsche Rechtslage. Keine Daten in US-Clouds.',
    icon: 'shield',
  },
  {
    title: 'Festpreise',
    text: 'Sie kennen die Kosten, bevor Sie unterschreiben. Keine Stundensatz-Überraschungen.',
    icon: 'target',
  },
  {
    title: 'Entwickler, keine Folienakrobaten',
    text: 'Wir integrieren selbst. Kein Subcontracting, kein Offshore. Code aus einer Hand.',
    icon: 'code',
  },
  {
    title: 'Keine Abhängigkeit',
    text: 'Offene Standards. Dokumentierter Code. Sie können jederzeit wechseln oder selbst weiterentwickeln.',
    icon: 'unlock',
  },
]
</script>

<template>
  <NavBar />

  <!-- ===================== HERO ===================== -->
  <section class="relative overflow-hidden pt-[calc(128px+60px)] pb-24 md:pt-[calc(160px+60px)] md:pb-32">
    <!-- Ambient glow — top right, semantic: signals brand presence -->
    <div
      class="pointer-events-none absolute -top-[200px] -right-[200px] w-[600px] h-[600px]"
      style="background: radial-gradient(circle, var(--color-brand-glow) 0%, transparent 70%)"
    />

    <div class="relative mx-auto max-w-[1240px] px-6">
      <div class="max-w-[820px]">
        <!-- Label -->
        <p
          class="mb-6 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]"
        >
          E-Rechnung & KI-Automatisierung
        </p>

        <!-- Headline -->
        <h1
          class="mb-6 text-[clamp(2.5rem,1.8rem+3vw,4rem)] font-bold leading-[1.08] tracking-[-0.03em]"
        >
          E-Rechnung und KI-Automatisierung für den Mittelstand
          <em class="not-italic text-[var(--color-brand)]">— in 4–8 Wochen live.</em>
        </h1>

        <!-- Sub -->
        <p
          class="mb-12 max-w-[600px] text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] leading-[1.5] text-[var(--color-text-muted)]"
        >
          Sie wissen, dass die E-Rechnungspflicht kommt und dass KI Routinearbeit übernehmen kann.
          Wir setzen beides um: compliant bis zur Frist, Prozesse automatisiert ab Tag eins.
          12 Mittelständler vertrauen uns bereits.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4">
          <a
            href="https://calendly.com/solytics"
            class="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-brand)] text-white font-semibold rounded-md no-underline transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--color-brand-hover)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] active:translate-y-0"
            style="transition-timing-function: var(--ease-out-expo)"
          >
            Kostenloses Erstgespräch buchen
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>

        <!-- Proof bar -->
        <div class="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-wrap gap-8 md:gap-10">
          <div v-for="stat in proofStats" :key="stat.label" class="flex flex-col gap-1">
            <span class="text-[clamp(1.5rem,1.2rem+1.2vw,2rem)] font-bold tracking-[-0.02em]">
              {{ stat.number }}
            </span>
            <span class="text-sm text-[var(--color-text-muted)]">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PROBLEM ===================== -->
  <section class="bg-[var(--color-surface-raised)] py-24 md:py-32">
    <div class="mx-auto max-w-[1240px] px-6">
      <p class="mb-6 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
        Die Realität im Mittelstand
      </p>
      <h2 class="max-w-[640px] mb-12 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
        Drei Probleme, die nicht von allein verschwinden
      </h2>

      <!-- Pain points — asymmetric: first card is wide, two stack beside -->
      <div class="grid gap-6 md:grid-cols-12">
        <div
          v-for="(pain, i) in painPoints"
          :key="pain.title"
          :class="[
            'pl-6 border-l-2 border-[var(--color-border)] py-6 transition-colors duration-250 hover:border-[var(--color-brand)]',
            i === 0 ? 'md:col-span-5' : 'md:col-span-7',
            i === 0 ? 'md:row-span-2' : '',
          ]"
          style="transition-timing-function: var(--ease-out-expo)"
        >
          <h3 class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] font-semibold mb-2">{{ pain.title }}</h3>
          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ pain.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== SOCIAL PROOF ===================== -->
  <section class="py-20 md:py-24 border-y border-[var(--color-border)]">
    <div class="mx-auto max-w-[1240px] px-6">
      <p class="mb-10 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
        Ergebnisse unserer Kunden
      </p>

      <div class="grid gap-8 md:grid-cols-12">
        <div
          v-for="proof in socialProof"
          :key="proof.company"
          class="md:col-span-5 p-8 bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-lg transition-[border-color,transform] duration-250 hover:border-[var(--color-brand)] hover:translate-y-[-2px]"
          style="transition-timing-function: var(--ease-out-expo)"
        >
          <p class="text-sm font-semibold tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-4">
            {{ proof.company }}
          </p>
          <p class="text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold tracking-[-0.03em] leading-none mb-1">
            {{ proof.metric }}
          </p>
          <p class="text-[var(--color-text-muted)] mb-4">{{ proof.label }}</p>
          <p class="text-sm text-[var(--color-brand)]">{{ proof.detail }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== E-RECHNUNG ===================== -->
  <section id="e-rechnung" class="py-24 md:py-32 border-b border-[var(--color-border)]">
    <div class="mx-auto max-w-[1240px] px-6">
      <div class="grid gap-16 md:grid-cols-12">
        <!-- Left: 5-col intro -->
        <div class="md:col-span-5 md:sticky md:top-[calc(96px+60px)] md:self-start">
          <!-- Deadline badge -->
          <div
            class="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm font-semibold rounded bg-[rgba(239,68,68,0.12)] text-[var(--color-danger)]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-danger)] animate-pulse-dot" />
            Frist: 1. Januar 2027
          </div>

          <p class="mb-4 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
            E-Rechnung
          </p>

          <h2 class="mb-4 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            XRechnung & ZUGFeRD — compliant, bevor es eng wird
          </h2>

          <p class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-[480px]">
            Sie müssen elektronische Rechnungen versenden und empfangen können. Das Format heißt XRechnung oder ZUGFeRD.
            Der Aufwand wird oft überschätzt — mit dem richtigen Partner ist die Umstellung in 4-8 Wochen erledigt.
          </p>

          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-[480px]">
            Wir analysieren Ihren Rechnungsprozess, wählen das passende Format, integrieren es in Ihre bestehende Software und schulen Ihr Team.
            Keine Insellösung, keine Abhängigkeit.
          </p>

          <!-- Track record -->
          <div class="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-lg">
            <p class="text-sm font-semibold text-[var(--color-brand)]">
              Bisher haben wir 12 Mittelständler compliant gemacht — keiner hat die Frist verpasst.
            </p>
          </div>
        </div>

        <!-- Right: 7-col packages -->
        <div class="md:col-span-7 flex flex-col gap-6">
          <div
            v-for="pkg in eRechnungPackages"
            :key="pkg.name"
            :class="[
              'relative p-8 bg-[var(--color-surface-raised)] border rounded-lg transition-[border-color,transform] duration-250 hover:translate-y-[-2px]',
              pkg.featured
                ? 'border-[var(--color-brand)] hover:border-[var(--color-brand)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-brand)]',
            ]"
            style="transition-timing-function: var(--ease-out-expo)"
          >
            <!-- Featured badge -->
            <span
              v-if="pkg.featured"
              class="absolute -top-2.5 right-6 px-2 py-0.5 bg-[var(--color-brand)] text-white text-[0.7rem] font-semibold tracking-[0.05em] rounded-sm"
            >
              Meistgebucht
            </span>

            <div class="flex justify-between items-baseline mb-4">
              <span class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] font-semibold">{{ pkg.name }}</span>
              <span class="text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)] font-bold text-[var(--color-brand)]">
                {{ pkg.price }}
              </span>
            </div>

            <ul class="flex flex-col gap-2">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="text-sm text-[var(--color-text-muted)] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[5px] before:h-[5px] before:bg-[var(--color-success)] before:rounded-full"
              >
                {{ f }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== KI-AUTOMATISIERUNG ===================== -->
  <section id="ki-automatisierung" class="py-24 md:py-32 border-b border-[var(--color-border)]">
    <div class="mx-auto max-w-[1240px] px-6">
      <div class="grid gap-16 md:grid-cols-12">
        <!-- Left: 7-col packages (reversed layout) -->
        <div class="md:col-span-7 md:order-1 flex flex-col gap-6">
          <div
            v-for="pkg in kiPackages"
            :key="pkg.name"
            :class="[
              'relative p-8 bg-[var(--color-surface-raised)] border rounded-lg transition-[border-color,transform] duration-250 hover:translate-y-[-2px]',
              pkg.featured
                ? 'border-[var(--color-brand)] hover:border-[var(--color-brand)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-brand)]',
            ]"
            style="transition-timing-function: var(--ease-out-expo)"
          >
            <span
              v-if="pkg.featured"
              class="absolute -top-2.5 right-6 px-2 py-0.5 bg-[var(--color-brand)] text-white text-[0.7rem] font-semibold tracking-[0.05em] rounded-sm"
            >
              Meistgebucht
            </span>

            <div class="flex justify-between items-baseline mb-4">
              <span class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] font-semibold">{{ pkg.name }}</span>
              <span class="text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)] font-bold text-[var(--color-brand)]">
                {{ pkg.price }}
                <span v-if="pkg.priceSuffix" class="text-sm font-normal text-[var(--color-text-muted)]">
                  {{ pkg.priceSuffix }}
                </span>
              </span>
            </div>

            <ul class="flex flex-col gap-2">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="text-sm text-[var(--color-text-muted)] pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-[5px] before:h-[5px] before:bg-[var(--color-success)] before:rounded-full"
              >
                {{ f }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Right: 5-col intro (reversed layout) -->
        <div class="md:col-span-5 md:order-2 md:sticky md:top-[calc(96px+60px)] md:self-start">
          <p class="mb-4 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
            KI-Automatisierung
          </p>

          <h2 class="mb-4 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            KI-Agenten, die Ihre Prozesse übernehmen — nicht Ihre Mitarbeiter
          </h2>

          <p class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-[480px]">
            Ein KI-Agent ist keine Chatbox auf Ihrer Website. Er liest Eingangsrechnungen, schreibt Angebote, pflegt Ihr CRM und erstellt Reports — autonom, rund um die Uhr, ohne Krankheitstage.
          </p>

          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-[480px]">
            Wir starten mit einem konkreten Prozess und beweisen den Nutzen in Wochen, nicht Monaten. Danach skalieren Sie — einen Agenten nach dem anderen.
          </p>

          <!-- Volume proof -->
          <div class="p-4 bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-lg mb-6">
            <p class="text-sm font-semibold text-[var(--color-brand)]">
              Unsere Agenten verarbeiten heute über 2.000 Belege pro Monat für unsere Kunden.
            </p>
          </div>

          <!-- Use cases -->
          <div class="p-6 bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-lg">
            <p class="mb-3 text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
              Typische Einsatzfelder
            </p>
            <ul class="flex flex-col gap-2">
              <li
                v-for="uc in kiUseCases"
                :key="uc"
                class="text-sm text-[var(--color-text-muted)] pl-4 relative"
              >
                <span class="absolute left-0 text-[var(--color-brand)]">+</span>
                {{ uc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== PROCESS ===================== -->
  <section class="bg-[var(--color-surface-raised)] py-24 md:py-32">
    <div class="mx-auto max-w-[1240px] px-6">
      <p class="mb-6 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
        So läuft die Zusammenarbeit
      </p>
      <h2 class="max-w-[640px] mb-16 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
        Von Erstgespräch bis Go-Live in 4-8 Wochen
      </h2>

      <!-- Asymmetric process layout: 3/9 split with counter -->
      <div class="process-counter grid gap-8 md:grid-cols-4">
        <div
          v-for="step in processSteps"
          :key="step.title"
          class="relative p-8 before:block before:text-[clamp(2rem,1.5rem+2vw,2.75rem)] before:font-bold before:text-[var(--color-surface-overlay)] before:leading-none before:tracking-[-0.03em] before:mb-4"
        >
          <h3 class="text-base font-semibold mb-2">{{ step.title }}</h3>
          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== TRUST ===================== -->
  <section class="py-24 md:py-32">
    <div class="mx-auto max-w-[1240px] px-6">
      <div class="text-center mb-4">
        <p class="mb-6 text-[clamp(0.75rem,0.7rem+0.25vw,0.8rem)] font-semibold tracking-[0.12em] uppercase text-[var(--color-brand)]">
          Warum Solytics
        </p>
        <h2 class="mb-4 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
          Beratung, die umsetzt. Nicht nur berät.
        </h2>
        <p class="text-[var(--color-text-muted)] max-w-[560px] mx-auto">
          Keine PowerPoint-Schlachten. Kein Berater-Deutsch. Wir kommen aus der Softwareentwicklung und sprechen die Sprache Ihrer Systeme.
        </p>
      </div>

      <!-- Trust grid — offset layout, not 4 equal columns -->
      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in trustItems"
          :key="item.title"
          class="text-center p-8"
        >
          <!-- Icon container -->
          <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-[var(--color-brand-glow)] rounded-[10px] text-[var(--color-brand)]">
            <!-- Shield -->
            <svg v-if="item.icon === 'shield'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <!-- Target (crosshair) -->
            <svg v-if="item.icon === 'target'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/>
            </svg>
            <!-- Code (monitor) -->
            <svg v-if="item.icon === 'code'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
            </svg>
            <!-- Unlock (checkmark) -->
            <svg v-if="item.icon === 'unlock'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h3 class="text-base font-semibold mb-2">{{ item.title }}</h3>
          <p class="text-sm text-[var(--color-text-muted)] leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================== FINAL CTA ===================== -->
  <section class="bg-[var(--color-surface-raised)] border-y border-[var(--color-border)] py-24 md:py-32">
    <div class="mx-auto max-w-[1240px] px-6 text-center">
      <h2 class="mb-4 text-[clamp(2rem,1.5rem+2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.02em]">
        Die beste Zeit zu starten war gestern.<br>Die zweitbeste ist jetzt.
      </h2>
      <p class="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-[var(--color-text-muted)] max-w-[560px] mx-auto mb-6">
        30 Minuten. Kein Verkaufsgespräch, sondern eine ehrliche Einschätzung: Was ist bei Ihnen sinnvoll, was nicht, und was kostet es.
      </p>
      <!-- Risk reversal -->
      <p class="text-sm text-[var(--color-text-muted)] max-w-[520px] mx-auto mb-10 italic">
        Kein Vertrag, keine Verpflichtung — wenn wir keinen konkreten Ansatz finden, sagen wir Ihnen das ehrlich.
      </p>
      <a
        href="https://calendly.com/solytics"
        class="inline-flex items-center gap-2 px-10 py-4 bg-[var(--color-brand)] text-white text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] font-semibold rounded-md no-underline transition-[background-color,transform,box-shadow] duration-200 hover:bg-[var(--color-brand-hover)] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(37,99,235,0.25)] active:translate-y-0"
        style="transition-timing-function: var(--ease-out-expo)"
      >
        Kostenloses Erstgespräch buchen
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </a>
    </div>
  </section>

  <SiteFooter />
</template>
