<template>
    <NuxtPage :links="links" />
</template>

<script setup lang="ts">
const links: Array<object> = [
    { name: 'Home', url: '/' },
];
</script>