import Vue from 'vue';
import Vuex from 'vuex';

import types from './mutations-type';

Vue.use(Vuex);

export default {
  state: {
    foods: [],
  },
  mutations: {
    [types.FOODS_INFO](state, data) {
      state.foods = data;
    },
  },
  actions: {
    saveFoods({commit}, data) {
      commit(types.FOODS_INFO, data);
    }
  },
  getters: {
    foods: state => state.foods,
  },
};
