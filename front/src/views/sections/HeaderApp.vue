<template>
  <header>
    <div class="header container-lg">
      <div class="header__left">
        <router-link to="/" class="header__title link">
          <img src="/img/logo.svg" alt="Logo">
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
              <router-link to="/help-us" class="header__nav-item-link link">Aidez-nous</router-link>
            </li>
            <li class="header__nav-item">
              <router-link to="/partners" class="header__nav-item-link link">Partenaires</router-link>
            </li>
            <li class="header__nav-item">
              <router-link to="/contact" class="header__nav-item-link link">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="header__right">
        <form action="" class="header__search-form">
          <input class="header__search-form-input" type="text" placeholder="Rechercher un article, une vidéo, ...">
          <button class="header__search-form-btn" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.64" height="16.56" viewBox="0 0 16.64 16.56"><path fill="#ffffff" d="M9.151,3a6.155,6.155,0,0,1,4.675,10.154l.255.255h.748l4.731,4.731L18.141,19.56l-4.731-4.731v-.748l-.255-.255A6.152,6.152,0,1,1,9.151,3m0,1.893a4.258,4.258,0,1,0,4.258,4.258A4.241,4.241,0,0,0,9.151,4.893Z" transform="translate(-3 -3)"/></svg>
          </button>
        </form>
        <nav class="header__nav align-right">
          <ul class="header__nav-items">
            <li class="header__nav-item">
              <router-link to="/game" class="header__nav-item-link link header__nav-item-quiz">Quiz</router-link>
            </li>
            <li class="header__nav-item">
              <router-link to="/login" class="header__nav-item-link link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#0e2e41" d="M14,4A5,5,0,1,1,9,9a5,5,0,0,1,5-5m0,12.5c5.525,0,10,2.237,10,5V24H4V21.5C4,18.737,8.475,16.5,14,16.5Z" transform="translate(-4 -4)"/></svg>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
