import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,
    routeRules: {
        '/**':  { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
    },
    css: ['~/assets/css/main.scss'],
    build: {
        transpile: ['vuetify']
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
        'nuxt-swiper',
        '@nuxt/image',
        'nuxt-rating',
        '@nuxtjs/google-fonts'
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        }
    },
    googleFonts: {
        families: {
            'Lato': true
        }
    }
})
