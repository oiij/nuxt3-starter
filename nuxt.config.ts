import { resolve } from 'node:path'
import process from 'node:process'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import VitePluginDebug from 'vite-plugin-debug'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WebfontDownload from 'vite-plugin-webfont-dl'

import { pwa, VitePluginAutoImport, VitePluginComponents } from './config'

const { VITE_APP_DESCRIPTION } = process.env

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    keepalive: true,
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: VITE_APP_DESCRIPTION },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],

    },
  },

  modules: [
    'nuxt-vitest', // https://github.com/danielroe/nuxt-vitest
    '@nuxt/icon', // https://nuxt.com/modules/icon
    'nuxt-viewport', // https://nuxt.com/modules/nuxt-viewport
    'nuxt-lazy-load', // https://gitlab.com/broj42/nuxt-lazy-load
    'nuxt-content-twoslash', // https://github.com/antfu/nuxt-content-twoslash
    '@nuxt/content', // https://nuxt.com/modules/content
    '@nuxt/devtools', // https://nuxt.com/modules/devtools
    '@nuxtjs/color-mode', // https://nuxt.com/modules/color-mode
    '@nuxtjs/i18n', // https://nuxt.com/modules/i18n
    '@pinia/nuxt', // https://nuxt.com/modules/pinia
    '@pinia-plugin-persistedstate/nuxt', // https://nuxt.com/modules/pinia-plugin-persistedstate
    '@unocss/nuxt', // https://nuxt.com/modules/unocss
    '@vueuse/nuxt', // https://nuxt.com/modules/vueuse
    ['unplugin-icons/nuxt', { compiler: 'vue3' }], // https://github.com/antfu/unplugin-icons#configuration
    '@vite-pwa/nuxt', // https://nuxt.com/modules/vite-pwa-nuxt
    'notivue/nuxt',
    '@nuxt/eslint',
    ['vite-plugin-version-mark/nuxt', {
      // name: 'test-app',
      // version: '0.0.1',
      // command: 'git describe --tags',
      // ifGitSHA: true,
      ifShortSHA: true,
      ifMeta: true,
      ifLog: true,
      ifGlobal: true,
    }], // https://github.com/ZhongxuYang/vite-plugin-version-mark
    'unplugin-info/nuxt', // https://github.com/yjl9903/unplugin-info
    'unplugin-turbo-console/nuxt', // https://github.com/unplugin/unplugin-turbo-console
    'nuxtjs-naive-ui',
  ],
  icon: {
    customCollections: [
      {
        prefix: 'svg',
        dir: './app/assets/icons',
      },
    ],
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/', '/about'],
    },
  },

  colorMode: {
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    vueI18n: './config/i18n.config.ts',
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,

  build: {

  },

  css: [
    './app/assets/style/index.less',
    '@unocss/reset/tailwind.css',
    'notivue/notification.css', // Only needed if using built-in notifications
    'notivue/animations.css', // Only needed if using built-in animations
  ],

  postcss: {
    plugins: {
      'postcss-preset-env': {},
    },
  },

  devServer: {
    port: Number(process.env.VITE_DEV_PORT),
  },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      webUpdateNotice({
        logVersion: true,
      }), // https://github.com/GreatAuk/plugin-web-update-notification
      WebfontDownload(), // https://github.com/feat-agency/vite-plugin-webfont-dl
      // viteVueCSSVars({
      //   include: [/.vue/],
      //   includeCompile: ['**/**.scss'],
      //   server: false,
      // }), // https://github.com/baiwusanyu-c/unplugin-vue-cssvars
      VitePluginDebug(), // https://github.com/hu3dao/vite-plugin-debug/blob/master/README.zh-CN.md
      VitePluginAutoImport(),
      VitePluginComponents(),
    ],
  },

  compatibilityDate: '2025-03-02',
})
