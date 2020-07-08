<template>
  <!-- <form @submit.prevent="onSubmit" class="column is-4 is-offset-4"> -->
  <section class="column is-4 is-offset-4">
    <b-field label="Email">
      <b-input ref="email" v-model="form.email" type="email"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="form.password" type="password"></b-input>
    </b-field>
    <footer>
      <b-button @click="close" class="is-pulled-left">Отменить</b-button>
      <b-button @click="onSubmit" type="submit" class="is-pulled-right">Принять</b-button>
    </footer>
  </section>
  <!-- </form> -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      sending: false,
    };
  },
  computed: {

    ...mapGetters(['user']),
  },
  methods: {
    close() {
      this.$router.push('/');
    },
    onSubmit() {
      if (
        this.form.email
        && this.form.password
        && this.$refs.email.checkHtml5Validity()
      ) {
        this.onSend();
      } else {
        this.showSnackbar('Проверьте правильность ввода данных');
      }
    },
    async onSend() {
      const res = await this.$store.dispatch('login', this.form);
      if (Object.keys(res).length) {
        if (`${res[0].password}` === this.form.password) {
          this.$store.commit('setUser', res[0]);
          this.$router.push('/');
        } else {
          this.showSnackbar('Неверный пароль');
        }
      } else {
        this.showSnackbar('Пользователь не найден');
      }
    },
    showSnackbar(msg) {
      this.$buefy.snackbar.open({
        message: msg,
        position: 'is-bottom',
        type: 'is-danger',
      });
    },
  },
};
</script>
