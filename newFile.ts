// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    components: {
        dirs: [
            {
                path: '~/components',
                extensions: ['vue'],
                prefix: 'Lazy',
                chunkNamePrefix: 'component-'
            }
        ]
    },
});
