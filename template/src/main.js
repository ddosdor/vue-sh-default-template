{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue';
{{#vueMq}}
import VueMQ from 'vue-mq';
{{/vueMq}}
{{#elementUi}}
import ElementUI from 'element-ui'
{{/elementUi}}
import { ShI18n, i18n } from './translate';
import App from './App';
import store from './store';
{{#router}}
import router from './router';
{{/router}}

Vue.config.productionTip = false;

{{#elementUi}}
Vue.use(ElementUI)
{{/elementUi}}
{{#vueMq}}
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
})
{{/vueMq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App),
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  i18n,
  store,
  template: '<App/>',
  components: { App },
  {{/if_eq}}
});
