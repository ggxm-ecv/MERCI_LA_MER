<template>
  <div>
    <HeroBanner />
  </div>
</template>

<script>
  import HeroBanner from './sections/HeroBanner';

  export default {
    name: "Home",
    components: {
      HeroBanner
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