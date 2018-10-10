/* Vuex module - App */

import actions from './actions';
import mutations from './mutations';

const INITIAL_STATE = {
  pendingActions: [],
};

const getters = {
  pendingActions: state => state.pendingActions,
};

// VUEX MODULE /////////////////////////////////////////////////////////////////
export default {
  state: INITIAL_STATE,
  mutations,
  actions,
  getters,
};
