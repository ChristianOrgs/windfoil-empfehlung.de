<template>
  <nav aria-label="Breadcrumb" class="text-sm text-muted mb-6">
    <ol class="flex items-center gap-2 flex-wrap" itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <NuxtLink to="/" itemprop="item" class="hover:text-ocean transition-colors">
          <span itemprop="name">Startseite</span>
        </NuxtLink>
        <meta itemprop="position" content="1" />
      </li>
      <template v-for="(item, i) in items" :key="i">
        <li class="text-border">/</li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <NuxtLink
            v-if="item.to"
            :to="item.to"
            itemprop="item"
            class="hover:text-ocean transition-colors"
          >
            <span itemprop="name">{{ item.label }}</span>
          </NuxtLink>
          <span v-else itemprop="name" class="text-text font-medium">{{ item.label }}</span>
          <meta itemprop="position" :content="String(i + 2)" />
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '~/types'
defineProps<{ items: BreadcrumbItem[] }>()
</script>
