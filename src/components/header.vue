<template>
<div class="wrapper">
    <nav>
      <ul>
        <img alt="MeteoOberj" class="logo" src="@/assets/meteoberj.png"/>
        <li>
      <RouterLink class="routerlink" to="/">Home</RouterLink>
        </li>
        <li>
      <RouterLink class="routerlink" to="/user">User</RouterLink>
      </li>
      <li style="float:right">
      <button v-if="!user" class="button" @click="login">Log in</button>
      </li>
      <li style="float:right">
      <button v-if="user" class="button" @click="logout">Log out</button>
      </li>
    </ul>
    </nav>
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