import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
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
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        '@nuxt/image'
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    pruneHtml: {
        enabled: true, // `true` in production
        hideGenericMessagesInConsole: false, // `false` in production
        hideErrorsInConsole: false, // deactivate the `console.error` method
        hookRenderRoute: true, // activate `hook:render:route`
        hookGeneratePage: true, // activate `hook:generate:page`
        selectors: [
            'link[rel="preload"][as="script"]',
            'script:not([type="application/ld+json"])',
        ],
        classesSelectorsToKeep: [], // disallow pruning of scripts with this classes, n.b.: each `classesSelectorsToKeep` is appended to every `selectors`, ex.: `link[rel="preload"][as="script"]:not(__classesSelectorsToKeep__)`
        link: [], // inject custom links, only if pruned
        script: [], // inject custom scripts, only if pruned
        htmlElementClass: null, // a string added as a class to the <html> element if pruned
        cheerio: {
            xmlMode: false,
        },
        types: [
            'default-detect',
        ],
        headerNameForDefaultDetection: 'user-agent', // The `header-key` base for `MobileDetection`, usage `request.headers[ headerNameForDefaultDetection ]`
        auditUserAgent: 'lighthouse', // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
        isAudit: true, // remove selectors if match with `auditUserAgent`
        isBot: true, // remove selectors if is a bot
        ignoreBotOrAudit: false, // remove selectors in any case, not depending on Bot or Audit
        matchUserAgent: null, // prune if `request.header[ headerNameForDefaultDetection ]` match, could be a string or an array of strings
        queryParametersToPrune: [
            {
                key: 'prune',
                value: 'true',
            },
        ],
        queryParametersToExcludePrune: [], // same as `queryParametersToPrune`, exclude the pruning if 'query-parameters' is present in `types` and at least one value is matched, this priority is over than `queryParametersToPrune`
        headersToPrune: [], // same as `queryParametersToPrune`, but it checks `request.headers`
        headersToExcludePrune: [], // same as `queryParamToExcludePrune`, but it checks `request.headers`, this priority is over than `headersToPrune`
        onBeforePrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
        onAfterPrune: null, // ({ result, [ req, res ] }) => {}, `req` and `res` are not available on `nuxt generate`
    },
})
