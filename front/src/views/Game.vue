<template>
  <div class="game container-lg">
    <h2 class="game__title heading h1">Tous les quiz</h2>
    <div class="game__types">
      <div class="game__type">
        <div>
          <h3 class="game__type-title">Histoire</h3>
          <p class="game__type-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div class="game__type-extra">
          <p class="game__type-extra-txt">Avancée</p>
          <div class="game__type-extra-wrap-progress">
            <div class="game__type-extra-progress">
              <div class="game__type-extra-progress-bar"></div>
            </div>
            <p class="game__type-extra-progress-percent">70%</p>
          </div>
          <div class="game__type-extra-wrap-cta">
            <router-link to="/game/history" class="btn btn-main">Continuer</router-link>
            <button class="btn btn-second">Réinitialiser</button>
          </div>
        </div>
      </div>
      <div class="game__type">
        <div>
          <h3 class="game__type-title">École</h3>
          <p class="game__type-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div class="game__type-extra">
          <p class="game__type-extra-txt">Quiz validés</p>
          <p class="game__type-extra-progress-nb">4</p>
          <div class="game__type-extra-wrap-cta full">
            <button class="btn btn-main">Tous les quiz</button>
          </div>
        </div>
      </div>
      <div class="game__type">
        <div>
          <h3 class="game__type-title">Certifications éco-délégué</h3>
          <p class="game__type-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div class="game__type-extra">
          <p class="game__type-extra-txt">Certifications validées</p>
          <ul class="game__type-extra-certifs">
            <li class="game__type-extra-certif">
              <img src="/img/game/certif_1.png" alt="">
            </li>
            <li class="game__type-extra-certif">
              <img src="/img/game/certif_2.png" alt="">
            </li>
            <li class="game__type-extra-certif">
              <img src="/img/game/certif_3.png" alt="">
            </li>
            <li class="game__type-extra-certif">
              <img src="/img/game/certif_4.png" alt="">
            </li>
            <li class="game__type-extra-certif">
              <img src="/img/game/certif_5.png" alt="">
            </li>
          </ul>
          <div class="game__type-extra-wrap-cta full">
            <button class="btn btn-main">Toutes les certififactions</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // TODO : import components

  export default {
    name: "Game",
    components: {
      // component name
    },
    data(){
      return {
        // toolCollection: undefined
      }
    },
    methods:{},

    created(){
      // Fetch tool from the API
      // this.$store.dispatch('fetchToolList');

      // Subscribe to store mutations
      // this.$store.subscribe((mutations) => {
        // Update tool list
        // if( mutations.type === "TOOLLIST" ){ this.toolCollection = mutations.payload.data }
      // })
    },
    mounted(){},
    destroyed(){}
  };
</script>