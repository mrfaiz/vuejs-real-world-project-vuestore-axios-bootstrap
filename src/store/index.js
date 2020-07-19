import Vue from 'vue';
import Vuex from 'vuex';

import status_store from './modules/status_store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    status_store,
  },
});