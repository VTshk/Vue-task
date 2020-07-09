<template>
  <section class="column mb-2">
    <b-collapse class="card">
      <div class="card-header">
        <p class="card-header-title">
          {{post.title}}
        </p>
      </div>

      <div class="card-content">
        <div class="content">
          <p style="text-align: left">
            {{post.description}}
          </p>
        </div>
      </div>
      <hr class="my-2" />

      <PostFooter :post="post" />
    </b-collapse>
  </section>
</template>

<script>
import PostFooter from './PostFooter.vue';

export default {
  components: {
    PostFooter,
  },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>
