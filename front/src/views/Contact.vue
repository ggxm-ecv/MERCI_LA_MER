<template>
  <div class="contact container-full">
    <h2 class="contact__title heading h2">Contact</h2>
  </div>
</template>

<script>
  // TODO : import components

  export default {
    name: "Contact",
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