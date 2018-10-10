import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ShI18n from './plugins/ShI18n';

// app language
import PL from './lang/PL';
import EN from './lang/EN';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: {
    pl: PL,
    en: EN,
  },
});

ShI18n.i18n = i18n;

export {
  ShI18n, i18n,
}
