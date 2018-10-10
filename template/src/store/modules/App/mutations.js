/* Vuex mutations types for module App */
import { hToggleArrayItem } from '@/utils/helpers';

import {
  TOGGLE_PENDING_STORE_ACTIONS,
} from './mutations-types';

export default {
  [TOGGLE_PENDING_STORE_ACTIONS](state, payload) {
    const _state = state;
    _state.pendingStoreActions = hToggleArrayItem(_state.pendingStoreActions, payload);
  },
};
