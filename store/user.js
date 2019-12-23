import Vue from 'vue';
import Vuex from 'vuex';

import types from './mutations-type';

Vue.use(Vuex);

export default {
  state: {
    user: null,
    address: null,
    city: null,
  },
  mutations: {
    [types.USER_INFO](state, data) {
      state.user = data;
    },
    [types.ADDRESS_INFO](state, data) {
      state.address = data;
    },
    [types.CITY_INFO](state, data) {
      state.city = data;
    },
  },
  actions: {
    saveUser({commit}, data) {
      console.log(data);
      commit(types.USER_INFO, data);
    },
    saveAddress({commit}, data) {
      console.log('dispatch addr data', data);
      commit(types.ADDRESS_INFO, data);
    },
    saveCity({commit}, data) {
      console.log('dispatch city data', data);
      commit(types.CITY_INFO, data);
    },
  },
  getters: {
      user: state => state.user,
      address: state => state.address,
      city: state => state.city,
  },
};
