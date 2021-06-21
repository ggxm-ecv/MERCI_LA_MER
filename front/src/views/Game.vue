<template>
  <div class="game container-full">
    <h2 class="game__title heading h2">Partie jeu</h2>
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