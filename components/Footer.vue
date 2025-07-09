<script setup lang="ts">
    import type { Footer } from '~/types/global'
    import { GET_FOOTER } from '~/graphql/footer'

    const { data, pending, error } = await useAsyncQuery<Footer>(GET_FOOTER)
    const pages = computed(() => data.value?.footer?.pages || [])

</script>

<template>
    <footer class="flex flex-row justify-between items-center py-4 px-8 bg-secondary text-sm border-t border-black">
        <div class="text-gray-600">
            &copy; 2025 My Company
        </div>
        <nav class="flex flex-row gap-6" aria-label="Footer navigation">
            <template v-if="pending">
            <span aria-live="polite">Loading...</span>
            </template>
            <template v-else-if="error">
            <span class="text-red-500" role="alert">Failed to load menu</span>
            </template>
            <template v-else>
            <ul class="flex flex-row gap-6 m-0 p-0 list-none">
                <li v-for="page in pages" :key="page.slug">
                    <NuxtLink
                        :to="page.slug ? `/${page.slug}` : '/'"
                            class="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        {{ page.title }}
                    </NuxtLink>
                </li>
            </ul>
            </template>
        </nav>
    </footer>
</template>
