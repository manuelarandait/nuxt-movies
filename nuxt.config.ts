import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
    build: {
        transpile: ['vuetify']
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    components: {
        dirs: ['components', 'composables']
    },
    devtools: {enabled: true},
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
            '/**': {isr: true},
        },
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    }
})
