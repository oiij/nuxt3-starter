type Locale = 'zh-CN' | 'en-US'
type Language = 'auto' | Locale
const language = useLocalStorage<Language>('__LANGUAGE__PERSIST__', 'auto')
const { language: navigatorLanguage } = useNavigatorLanguage()
const _locale = computed(() => language.value === 'auto' ? navigatorLanguage.value : language.value)

export function useLanguage() {
  const { locale } = useNuxtApp().$i18n
  locale.value = _locale.value as Locale
  watch(language, (v) => {
    locale.value = v === 'auto' ? navigatorLanguage.value as Locale : v
  })
  watch(navigatorLanguage, (v) => {
    if (language.value === 'auto') {
      locale.value = v as Locale
    }
  })
  function toggle() {
    locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  }
  function setLocale(lang: Locale) {
    locale.value = lang
  }
  function setLanguage(lang: Language) {
    language.value = lang
  }
  return {
    locale: locale as ComputedRef<Locale>,
    language,
    navigatorLanguage,
    toggle,
    setLocale,
    setLanguage,
  }
}
