<template>
  <div class="user">
    <h2>Profile utilisateur</h2>
    <br>
    <img :src="user.picture" class="picture" alt="picture" />
    <h2>Nom : {{user.nickname}}</h2>
    <h2>Mail : {{user.email}}</h2>
  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        user: this.$auth0.user
      };
    },
    methods: {
      login() {
        this.$auth0.loginWithRedirect();
      },
      logout() {
        this.$auth0.logout({ returnTo: window.location.origin });
      }
    }
  };
</script>