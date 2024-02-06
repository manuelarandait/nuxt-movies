import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: true,
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
    routeRules: {
        '/**': {prerender: true},
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    }
})
