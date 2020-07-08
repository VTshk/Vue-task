<template>
  <section class="column mb-2">
    <b-collapse class="card">
      <div class="card-header">
        <p class="card-header-title">{{post.title}}</p>
      </div>
      <div class="card-content">
        <div class="content">
          <p style="text-align: left">{{post.description}}</p>
        </div>
      </div>
      <hr class="my-2">
      <footer class="columns px-2 mb-0">
        <div class="column pb-0"></div>
        <div class="column is-narrow pb-0" v-if="user.role === 'reader'">
            <b-button class="is-light " @click="editPost(post.id)">
              <b-icon class="fa fa-pencil-square-o"></b-icon>
              <span>Изменить</span>
            </b-button>
            <b-button class="is-light ml-2 " @click="deletePost(post.id)">
              <b-icon class="fa fa-trash"></b-icon>
              <span>Удалить</span>
            </b-button>
        </div>
        <div v-if="user.role === 'writer'" class="column">
          <b-button type="is-light is-pulled-right" @click="addClap(post)">
            <b-icon class="fa fa-sign-language"></b-icon><span>{{post.claps}}</span> </b-button>
        </div>
      </footer>
      <div class="datePost column pt-0">
          <p>{{calcDate(post.createdAt)}} назад</p>
        </div>
    </b-collapse>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { formatDistanceToNowStrict } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    deletePost(id) {
      this.$store.dispatch('deletePost', id);
    },
    editPost(id) {
      this.$store.commit('setEditablePost', null);
      this.$router.push(`edit/${id}`);
    },
    addClap(post) {
      this.$set(post, 'claps', post.claps + 1);
      this.$store.dispatch('editPost', post);
    },
    calcDate(date) {
      return formatDistanceToNowStrict(new Date(date), { locale: ruLocale });
    },
  },
};
</script>

<style lang="sass" scoped>
.datePost
  color: grey
  font-size: 15px
  width: 180px
  display: flex
  align-items: flex-end
</style>
