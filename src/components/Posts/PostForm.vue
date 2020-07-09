<template>
  <section class="column is-6 is-offset-one-quarter">
    <b-field>
      <b-input
        v-model="title"
        :has-counter="false"
        maxlength="50"
        placeholder="Название">
      </b-input>
    </b-field>

    <b-field>
      <b-input
        v-model="description"
        type="textarea"
        placeholder="Описание">
    </b-input>
    </b-field>

    <footer>
      <router-link class="button is-pulled-left" to="/">
        Отменить
      </router-link>
      <b-button @click="accept" class="is-pulled-right">
        Принять
      </b-button>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
    },
    post: {
      type: Object,
    },
  },
  data() {
    return {
      title: '',
      description: '',
      sending: false,
    };
  },
  methods: {
    close() {
      this.$router.push('/');
    },
    async accept() {
      let newPost = {};
      if (!this.loading) {
        if (this.post) {
          newPost = { ...this.post };
          newPost.title = this.title || 'Без названия';
          newPost.description = this.description || 'Описание отсутствует';
          newPost.updateAt = new Date();
        } else {
          newPost = {
            id: Date.now(),
            title: this.title || 'Без названия',
            description: this.description || 'Описание отсутствует',
            claps: 0,
            createdAt: new Date(),
            updateAt: new Date(),
            userId: 1,
          };
        }
        this.sending = true;
        await this.action(newPost);
        this.sending = false;
      }
    },
    selectedPost() {
      if (this.post) {
        this.title = this.post.title || '';
        this.description = this.post.description || '';
      }
    },
  },
  created() {
    this.selectedPost();
  },
};
</script>
