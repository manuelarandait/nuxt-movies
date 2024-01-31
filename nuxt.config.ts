import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    components: {
        dirs: ['components', 'composables']
        },
    devtools: { enabled: true },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
            // @ts-ignore
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
        '@nuxtjs/eslint-module',
        '@nuxtjs/google-fonts'
    ],
    build: {
        transpile: ['vuetify']
        },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    fontMetrics: {
        fonts: ['DM Sans']
    },
    googleFonts: {
        display: 'swap',
        download: true,
        families: {
            'DM+Sans': [400, 500, 600, 700]
        }
    }
})
