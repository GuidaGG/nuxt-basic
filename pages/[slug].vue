<script setup lang="ts">
    import type { PageResponse } from '~/types/page'   
    import { GET_PAGE_BY_SLUG } from '~/graphql/page'

    const route = useRoute();
    const slug = route.params.slug as string;
    
    const { data, pending, error } = await useAsyncQuery<PageResponse>(GET_PAGE_BY_SLUG, {
    slug,
    })

    // Extract the first page (if any)
    const page = computed(() => data.value?.pages?.[0])
</script>

<template>
    <Container>
    <div class="min-h-screen w-full bg-primary">
        <div v-if="page">
            <pre>{{  JSON.stringify(page, null, 2) }}</pre>
        </div>
        <div v-else-if="error">Failed to load page</div>
        <div v-else>Loading...</div>
     </div>

    </Container>
</template>