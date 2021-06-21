<template>
  <header class="header">
    <router-link to="/" class="header__title link">
      <h1 class="heading h2">Merci la Mer</h1>
    </router-link>

    <nav class="header__nav">
      <ul class="header__nav-items">
        <li class="header__nav-item">
          <router-link to="/" class="header__nav-item-link link">Accueil</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/resources" class="header__nav-item-link link">Ressources</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/game" class="header__nav-item-link link">Jeu</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/help-us" class="header__nav-item-link link">Aidez-nous&nbsp;!</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/partners" class="header__nav-item-link link">Partenaires</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/contact" class="header__nav-item-link link">Contact</router-link>
        </li>
      </ul>
    </nav>

    <nav class="header__nav align-right">
      <ul class="header__nav-items">
        <li class="header__nav-item" v-if="!isAuth">
          <router-link to="/login" class="header__nav-item-link link">Connexion</router-link>
        </li>
        <li class="header__nav-item" v-if="!isAuth">
          <router-link to="/register" class="header__nav-item-link link">Inscription</router-link>
        </li>
        <li class="header__nav-item" v-if="isAuth">
          <router-link to="/account" class="header__nav-item-link link">Mon compte</router-link>
        </li>
      </ul>
    </nav>
		
    <!-- <nav>
      <router-link to="/" class="button"
        ><i class="fas fa-list"></i
      ></router-link>
      <button
        v-if="isAuth"
        type="button"
        class="button"
        v-on:click="logoutUser"
      >
        <i class="fas fa-sign-out-alt"></i>
      </button>
    </nav> -->

  </header>
</template>

<script>
  export default {
    name: "HeaderApp",
    components: {},
    data() {
      return {
        isAuth: this.$store.getters.isAuthenticated,
        subTitle: undefined,
      };
    },
    methods: {
      // Method to logout user with store action
      logoutUser() {
        this.$store.dispatch("logoutUser");
      }
    },
    watch: {
      // Watch route value changes to display the header sub-title
      $route(to, from) {
        // Switch route name
        switch (to.name) {
          case "NotFound":
            this.subTitle = "Page introuvable";
            break;

          case "Home":
            this.subTitle = `Page d'accueil : privée`;
            break;

          case "Login":
            this.subTitle = `Page login : public`;
            break;

          case "Post":
            this.subTitle = `Page Article : public`;
            break;

          default:
            this.subTitle = undefined;
            break;
        }
      },
    },
    created() {

      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Check mutations
        if (mutations.type === "USER") {
          // Set Auth navigation
          this.isAuth = this.$store.getters.isAuthenticated;

          // Redirect user when connected
          this.$router.push("/login").catch(() => {});
        }
      });
      
    },
    mounted() {},
  };
</script>
