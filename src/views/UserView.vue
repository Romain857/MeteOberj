<template>
  <div>
    <h2>User Profile</h2>
    <button @click="login">Log in</button>
    <button @click="logout">Log out</button>
    <pre>
      <code>{{ user }}</code>
    </pre>
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
      login() {
        this.$auth0.loginWithRedirect();
      },
      logout() {
        this.$auth0.logout({ returnTo: window.location.origin });
      }
    }
  };
</script>