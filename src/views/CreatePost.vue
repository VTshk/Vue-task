<template>
  <div class="column">
    <div class="column is-offset-one-quarter">
      <h1 class="is-pulled-left title mb-2">Создать пост</h1>
    </div>
    <PostForm :action="newPost => createPost(newPost)" />
  </div>
</template>

<script>
import PostForm from '../components/Posts/PostForm.vue';

export default {
  components: {
    PostForm,
  },
  methods: {
    async createPost(newPost) {
      await this.$store.dispatch('createPost', newPost);
      this.$router.push('/');
    },
  },
};
</script>
