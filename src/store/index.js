import { createStore } from 'vuex';
import auth from './auth';
import data from "./data";
import user from './user';

export default createStore({
  state: {
    isAuthenticated: true
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    user,
    data
  }
})
