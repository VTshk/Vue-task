<template>
  <div class="home">
    <PostList/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  name: 'Home',
  components: {
    PostList,
  },
};
</script>
