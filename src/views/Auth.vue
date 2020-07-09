<template>
  <section class="column is-4 is-offset-4">

    <b-field label="Email">
      <b-input
        ref="email"
        v-model="form.email"
        type="email">
      </b-input>
    </b-field>

    <b-field label="Пароль">
      <b-input v-model="form.password" type="password"></b-input>
    </b-field>

    <footer>
      <router-link class="button is-pulled-left" to="/">
        Отменить
      </router-link>
      <b-button
        @click="onSubmit"
        type="submit"
        class="is-pulled-right">
        Принять
      </b-button>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
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
