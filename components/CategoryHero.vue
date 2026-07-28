<template>
  <section class="relative text-white py-14 px-4 overflow-hidden" :class="image ? 'min-h-[380px] flex items-center' : 'bg-gradient-to-br from-navy to-ocean'">
    <!-- Background image (optional) -->
    <template v-if="image">
      <img
        :src="image"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center"
        width="1920"
        height="1280"
        fetchpriority="high"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/65 to-navy/80"></div>
    </template>

    <div class="relative z-10 max-w-4xl mx-auto text-center w-full">
      <div v-if="badge" class="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
        {{ badge }}
      </div>
      <h1 class="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
      <div v-if="$slots.default" class="mt-6">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  badge?: string
  image?: string
}>()
</script>
