/* Vuex store */
import Vue from 'vue';
import Vuex from 'vuex';

// MODULES /////////////////////////////////////////////////////////////////////
import App from './modules/App';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    App,
  },
  strict: !process.env.DEBUG_MODE,
});
