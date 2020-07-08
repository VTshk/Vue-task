<template>
  <div class="column is-6-desktop is-offset-3-desktop ">
    <div v-if="posts.length" class="mt-2 columns is-multiple">
      <div class="column ">
      <b-pagination
        v-if="posts.length > PostPerPage"
        :total="posts.length"
        :current.sync="currentPage"
        :simple="true"
        :per-page="PostPerPage"
        :icon-pack="'fa'"
      ></b-pagination>
      </div>
      <div class="column is-narrow">
      <router-link
        v-if="user.role === 'reader'"
        class="button" to="/create">
        Создать пост
      </router-link>
      </div>
    </div>
    <Post v-for="post in postsOnCurrentPage" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'PostList',
  components: {
    Post,
  },
  data() {
    return {
      currentPage: 1,
      PostPerPage: 10,
    };
  },
  computed: {
    postsOnCurrentPage() {
      return this.posts.slice(
        this.idxPostCurentPage,
        this.idxPostCurentPage + this.PostPerPage,
      );
    },
    idxPostCurentPage() {
      return this.currentPage * this.PostPerPage - this.PostPerPage;
    },
    ...mapGetters(['posts', 'user']),
  },
  created() {
    this.$store.dispatch('getPosts');
  },
};
</script>
