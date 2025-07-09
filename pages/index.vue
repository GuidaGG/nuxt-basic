<template>
    <Container>
        <h1 class="text-3xl font-bold mb-4">Hi!</h1>
        <p class="text-lg">Welcome to the nuxt start.</p>
        <ul class="list-disc">
            Things to do:
            <li>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" checked disabled />
                    <span>create a tailwind config</span>
                </label>
            </li>
            <li>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" disabled />
                    <span>create basic seo</span>
                </label>
            </li>
            <li>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" checked disabled />
                    <span>fetch pages content by slug</span>
                </label>
            </li>
            <li>
                <label class="flex items-center space-x-2">
                    <input type="checkbox" checked disabled />
                    <span>fetch menu content</span>
                </label>
            </li>
        </ul>
    </Container>
</template>

<script setup>
// No script logic needed for this simple template
</script>
