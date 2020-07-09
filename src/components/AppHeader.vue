<template>
  <b-navbar :fixed-top="true" class="is-primary">

    <template slot="start">
      <b-navbar-item tag="div" style="font-size: 25px">
        {{user.role}}
      </b-navbar-item>
    </template>
    <template slot="end">

      <b-navbar-item tag="div">
        <router-link
          v-if="!Object.keys(user).length"
          class="button is-light"
          to="/auth">
          Войти
        </router-link>
        <b-button v-else @click="logout">
          Выйти
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
