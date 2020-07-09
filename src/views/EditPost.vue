<template>
  <div v-if="editablePost" class="column">
    <div class="column is-offset-one-quarter">
      <h1 class="is-pulled-left title mb-2">
        Редактировать пост
      </h1>
    </div>
    <PostForm
      :post="editablePost"
      :action="newPost => editPost(newPost)" />
  </div>
</template>

<script>
import PostForm from '../components/Posts/PostForm.vue';

export default {
  components: {
    PostForm,
  },
  data() {
    return {
      editablePost: null,
    };
  },
  methods: {
    async editPost(newPost) {
      await this.$store.dispatch('editPost', newPost);
      this.$router.push('/');
    },
  },
  async created() {
    this.editablePost = await this.$store.dispatch('getEditablePost', this.$route.params.id);
  },
};
</script>
