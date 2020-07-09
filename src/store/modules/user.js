/* eslint-disable consistent-return */
import axios from '@/axios';

export default {
  state: {
    user: JSON.parse(localStorage.getItem('user')) || {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
  },
  actions: {
    async login(_, { email }) {
      try {
        const res = await axios.get(`/users?login=${email}`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
    logout({ commit }) {
      commit('setUser', {});
    },
  },
  getters: {
    user: (s) => s.user,
  },

};
