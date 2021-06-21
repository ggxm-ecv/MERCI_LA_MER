<template>
  <section class="hero-banner">
    <div class="container-sm">
      <h2 class="hero-banner__title heading h1">Merci la Mer</h2>
      <p class="hero-banner__description">Les meilleures ressources pour la sensibilisation des jeunes sur les océans.</p>
      <div class="hero-banner__search">
        <input class="hero-banner__search-input" type="text" placeholder="Recherchez une ressource ou un tips">
        <div class="hero-banner__search-wrap-suggestion">
          <p class="hero-banner__search-suggestion-title underline">Suggestion&nbsp;:</p>
          <ul class="hero-banner__search-suggestion-items">
            <li class="hero-banner__search-suggestion-item">Framework,</li>
            <li class="hero-banner__search-suggestion-item">Couleur,</li>
            <li class="hero-banner__search-suggestion-item">JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "HeroBanner",
    components: {},
    data(){
      return {}
    },
    methods:{},
    
    created(){},
    mounted(){},
    destroyed(){}
  };
</script>
