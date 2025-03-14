import enUS from '../app/locales/en-US.json'
import zhCN from '../app/locales/zh-CN.json'

export default defineI18nConfig(() => ({
  locale: 'zh-CN',
  legacy: false,
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
}))
