<template>
<div class="wrapper">
    <nav>
      <ul class="nav">
        <a href="/amongus">
        <img alt="MeteoOberj" class="logo" src="@/assets/meteoberj.png"/>
      </a>
        <li>
      <RouterLink class="routerlink" to="/">Accueil</RouterLink>
        </li>
        <li>
      <RouterLink v-if="user" class="routerlink" to="/user">{{user.nickname}}</RouterLink>
      </li>
      <li style="float:right">
      <button v-if="!user" class="button" @click="login">Connexion</button>
      </li>
      <li style="float:right">
      <button v-if="user" class="button" @click="logout">Déconnexion</button>
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