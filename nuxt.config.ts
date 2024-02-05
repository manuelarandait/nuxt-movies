import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify']
    },
    components: {
        dirs: ['components', 'composables']
    },
    devtools: {enabled: true},
    // @ts-ignore
    fontMetrics: {
        fonts: ['DM Sans']
    },
    googleFonts: {
        display: 'swap',
        download: true,
        families: {
            'DM+Sans': [400, 500, 600, 700]
        }
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-ignore
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@nuxt/image'
    ],
    nitro: {
        routeRules: {
            '/**': {isr: false},
        },
    },
    routeRules: {
        '/**': isDev ? {} : {cache: {swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true}},
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    }
})
