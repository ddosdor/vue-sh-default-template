/* eslint-disable */
export default {
  install(Vue, options) {
    const loadedLanguages = [this.i18n.locale];
    const i18n = this.i18n;

    Vue.prototype.$lang = {
      getCurrentLang() {
        return i18n.locale;
      },
      setLang(lang) {
        if (i18n.locale !== lang) {
          if (!loadedLanguages.includes(lang)) {
            return import(`@/lang/${lang.toUpperCase()}`).then(msgs => {
              i18n.setLocaleMessage(lang, msgs.default);
              loadedLanguages.push(lang);
              setI18nLanguage(lang);
            });
          }
          return Promise.resolve(setI18nLanguage(lang))
        }
        return Promise.resolve(lang);
      }
    }

    function setI18nLanguage(lang) {
      i18n.locale = lang;
    }
  }
}
