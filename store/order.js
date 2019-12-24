import Vue from 'vue';
import Vuex from 'vuex';

import types from './mutations-type';

Vue.use(Vuex);

const state = () => ({
  foods: [],
});
const mutations = {
  [types.FOODS_INFO](state, data) {
    state.foods = data;
  },
};

const actions = {
  saveFoods({commit}, data) {
    commit(types.FOODS_INFO, data);
  }
};
const getters = {
  foods: state => state.foods,
};

export default { state, mutations: actions, getters}
