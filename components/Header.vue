<script setup lang="ts">
import type { Header} from '~/types/global'
import { GET_HEADER } from '~/graphql/header'

const { data, pending, error } = await useAsyncQuery<Header>(GET_HEADER)
const pages = computed(() => data.value?.header?.pages || [])

</script>

<template>
    <header class="bg-primary fixed w-full border-b border-black">
        <div class="mx-auto flex items-center justify-between py-4 px-20">
            <!-- Logo -->
            <div class="flex items-center h-8 min-w-16">
                <NuxtLink to="/" class="font-bold text-xl text-gray-800" aria-label="Go to homepage">
                    <span aria-hidden="true">Logo</span>
                </NuxtLink>
            </div>
            <!-- Navigation -->
            <nav>
                <ul class="flex space-x-6">
                    <li v-if="pending">
                        <span class="text-gray-400">Loading...</span>
                    </li>
                    <li v-else-if="error">
                        <span class="text-red-500">Error loading menu</span>
                    </li>
                    <li v-else v-for="page in pages" :key="page.slug">
                        <NuxtLink
                            :to="page.slug ? `/${page.slug}` : '/'"
                            class="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            {{ page.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>