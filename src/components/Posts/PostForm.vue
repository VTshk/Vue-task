<template>
  <section class="column is-6 is-offset-one-quarter">
    <b-field>
      <b-input v-model="title" :has-counter="false" maxlength="50" placeholder="Название"></b-input>
    </b-field>

    <b-field>
      <b-input v-model="description" type="textarea" placeholder="Описание"></b-input>
    </b-field>
    <footer>
      <b-button @click="close" class="is-pulled-left">Отменить</b-button>
      <b-button @click="accept" class="is-pulled-right">Принять</b-button>
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
      loading: false,
    };
  },
  methods: {
    close() {
      this.$router.push('/');
    },
    async accept() {
      if (!this.loading) {
        let newPost = {};
        if (this.post) {
          newPost = { ...this.post };
          this.$set(newPost, 'title', this.title || 'Без названия');
          this.$set(newPost, 'description', this.description || 'Описание отсутствует');
          this.$set(newPost, 'updateAt', new Date());
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
        this.loading = true;
        await this.action(newPost);
        this.loading = false;
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
