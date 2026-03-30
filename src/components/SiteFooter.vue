<template>
  <footer class="border-t border-[var(--color-border)] py-12">
    <div class="mx-auto max-w-[1240px] px-6 flex flex-wrap justify-between items-center gap-4">
      <div class="text-sm text-[var(--color-text-muted)]">
        Solytics GmbH &middot; Karlstein am Main &middot; jens.laufer@solytics.de
      </div>
      <ul class="flex gap-6 list-none">
        <li>
          <router-link
            to="/impressum"
            class="text-sm text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            style="transition-timing-function: var(--ease-out-expo)"
          >
            Impressum
          </router-link>
        </li>
        <li>
          <router-link
            to="/datenschutz"
            class="text-sm text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-text-primary)]"
            style="transition-timing-function: var(--ease-out-expo)"
          >
            Datenschutz
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
