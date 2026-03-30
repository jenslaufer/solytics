<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 32
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-2xl transition-[background-color,border-color] duration-200"
    :class="scrolled
      ? 'bg-[var(--color-surface-base)]/85 border-b border-[var(--color-border)]'
      : 'bg-transparent border-b border-transparent'"
    style="transition-timing-function: var(--ease-out-expo)"
    role="navigation"
  >
    <div class="mx-auto max-w-[1240px] px-6 flex items-center justify-between">
      <a href="/" class="text-[clamp(1.25rem,1.1rem+0.6vw,1.5rem)] font-bold tracking-tight text-[var(--color-text-primary)] no-underline">
        sol<span class="text-[var(--color-brand)]">y</span>tics
      </a>
      <a
        href="https://calendly.com/solytics"
        class="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-brand)] text-white text-sm font-semibold rounded-md no-underline transition-[background-color,transform] duration-150 hover:bg-[var(--color-brand-hover)] hover:translate-y-[-1px] active:translate-y-0"
        style="transition-timing-function: var(--ease-out-expo)"
      >
        Gespraech buchen
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 8h10M9 4l4 4-4 4"/>
        </svg>
      </a>
    </div>
  </nav>
</template>
