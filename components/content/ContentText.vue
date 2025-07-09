<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    description: {
        type: Array,
        required: true
    }
})
</script>


<template>
    <section class="content-text">
        <h2 class="text-3xl">{{ title }}</h2>
        <h3 v-if="subtitle" class="text-xl">{{ subtitle }}</h3>
        <div v-for="(block, i) in description" :key="i">
            <p v-if="block.type === 'paragraph'" class="mb-4">
                <span
                    v-for="(child, j) in block.children"
                    :key="j"
                    :class="child.code ? '' : ''"
                >
                    {{ child.text }}
                </span>
            </p>
        </div>
    </section>
</template>

