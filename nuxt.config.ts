// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    ssr: true,
    modules: [
        "@nuxt/image-edge",
    ],
    image:{},
    css: [
        '@/assets/styles/main.scss'
    ],
});