import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
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
        '@nuxtjs/google-fonts',
        'nuxt-delay-hydration',
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
    },
    delayHydration: {
        mode: 'mount'
    }
})
