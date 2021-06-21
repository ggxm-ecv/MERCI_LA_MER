<template>
  <div class="help-us container-full">
    <h2 class="help-us__title heading h2">Aidez-nous&nbsp;!</h2>
  </div>
</template>

<script>
  // TODO : import components

  export default {
    name: "HelpUs",
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