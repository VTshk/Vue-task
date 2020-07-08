import axios from '@/axios';

export default {
  state: {
    posts: [],
    editablePost: null,
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setEditablePost(state, payload) {
      state.editablePost = payload;
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
    async getEditablePost({ commit }, id) {
      try {
        const res = await axios.get(`/posts/${id}`);
        commit('setEditablePost', res.data);
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
    editablePost: (s) => s.editablePost,
  },

};
