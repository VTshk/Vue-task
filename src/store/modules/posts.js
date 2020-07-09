/* eslint-disable consistent-return */
import axios from '@/axios';

export default {
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const res = await axios.get('/posts');
        commit('setPosts', res.data.reverse());
      } catch (err) {
        console.log(err);
      }
    },
    async getEditablePost(_, id) {
      try {
        const res = await axios.get(`/posts/${id}`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async createPost(_, newPost) {
      try {
        await axios.post('/posts', newPost);
      } catch (err) {
        console.log(err);
      }
    },
    async deletePost({ dispatch }, id) {
      try {
        await axios.delete(`/posts/${id}`);
        dispatch('getPosts');
      } catch (err) {
        console.log(err);
      }
    },
    async editPost(_, newPost) {
      try {
        await axios.put(`/posts/${newPost.id}`, newPost);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    posts: (s) => s.posts,
  },

};
