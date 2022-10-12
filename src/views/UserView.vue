<template>
  <div>
    <h2>User Profile</h2>
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
      logout() {
        this.$auth0.logout({ returnTo: window.location.origin });
      }
    }
  };
</script>