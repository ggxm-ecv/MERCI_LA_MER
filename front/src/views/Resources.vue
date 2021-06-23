<template>
  <div class="ressources container-lg">
    <h2 class="ressources__title heading h1">Ressources</h2>
    <p class="ressources__subtitle">Les mers et océans dans tous leurs états</p>
    <ListResource :resourceCollection="resourceCollection" />
  </div>
</template>

<script>
  import ListResource from './sections/ListResource';

  export default {
    name: "Resourcebox",
    components: {
      ListResource
    },
    data(){
      return {
        resourceCollection: undefined
      }
    },
    methods:{},

    created(){
      // Fetch resource from the API
      this.$store.dispatch('fetchResourceList');

      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
        // Update resource list
        if( mutations.type === "RESOURCELIST" ){ this.resourceCollection = mutations.payload.data }
      })
    },
    mounted(){},
    destroyed(){}
  };
</script>