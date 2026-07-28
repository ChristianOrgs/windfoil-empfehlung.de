<template>
  <dl class="grid grid-cols-2 sm:grid-cols-3 gap-3">
    <div v-for="fact in facts" :key="fact.label" class="bg-sky rounded-xl p-3">
      <dt class="text-xs text-muted mb-0.5">{{ fact.label }}</dt>
      <dd class="font-semibold text-sm text-navy">{{ fact.value }}</dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import type { WingfoilProduct } from '~/types'
import { getConstructionLabel, getLevelLabel } from '~/utils/products'

const props = defineProps<{ product: WingfoilProduct }>()

const facts = computed(() => {
  const f: Array<{ label: string; value: string }> = []
  if (props.product.board?.volumeLitres) f.push({ label: 'Boardvolumen', value: `${props.product.board.volumeLitres} L` })
  if (props.product.board?.construction) f.push({ label: 'Bauweise', value: getConstructionLabel(props.product.board.construction) })
  if (props.product.board?.length) f.push({ label: 'Länge', value: props.product.board.length })
  if (props.product.wing?.sizeSquareMetres) f.push({ label: 'Wing-Größe', value: `${props.product.wing.sizeSquareMetres} m²` })
  if (props.product.foil?.frontWingAreaCm2) f.push({ label: 'Frontwing', value: `${props.product.foil.frontWingAreaCm2} cm²` })
  if (props.product.foil?.mastLengthCm) f.push({ label: 'Mastlänge', value: `${props.product.foil.mastLengthCm} cm` })
  if (props.product.foil?.mastMaterial) f.push({ label: 'Mast', value: props.product.foil.mastMaterial })
  if (props.product.levels.length) f.push({ label: 'Fahrlevel', value: props.product.levels.map(getLevelLabel).join(', ') })
  return f
})
</script>
