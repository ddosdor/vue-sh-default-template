import store from '@/store';

/**
 * Decorator for Vuex action's. 
 */
export const togglePendingStoreActions = () =>
(target, key, descriptor) => {
  const _descriptor = descriptor;
  const orginalMethod = _descriptor.value;
  _descriptor.value = async function (...args) {
    const storeActionsName = key;
    store.commit('TOGGLE_PENDING_STORE_ACTIONS', storeActionsName);
    await orginalMethod.apply(this, args);
    store.commit('TOGGLE_PENDING_STORE_ACTIONS', storeActionsName);
  };
  return descriptor;
};
