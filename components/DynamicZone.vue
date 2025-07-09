<script setup lang="ts">
import type { ContentBlock } from '~/types/content'

// Import components
import ContentText from './content/ContentText.vue';
import ContentMedia from '~/components/content/ContentMedia.vue'

// Map __typename to components
const componentMap = {
  ComponentContentContentText: ContentText,
  ComponentContentContentMedia: ContentMedia,
} as const

// Props
const props = defineProps<{
  page: ContentBlock[]
}>()
</script>

<template>
  <div class="space-y-8">
     <component
      v-for="(block, idx) in page"
      :key="idx"
      :is="componentMap[block.__typename] || 'div'"
      v-bind="block"
    /> 
  </div>
</template>
