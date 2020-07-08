<template>
  <div class="home">
    <PostList/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    PostList,
  },
  data() {
    return {
      // posts: [],
    };
  },
  computed: {
    ...mapState(['posts']),
  },

};
</script>
