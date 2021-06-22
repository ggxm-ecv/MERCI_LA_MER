<template>
  <section class="list-resource container-lg">

    <ul class="list-resource__items">

      <li class="list-resource__item" v-for="item of resourceCollection" :key="item._id">

        <div class="list-resource__item-wrap-img">
          <img class="list-resource__item-img" src="/img/test-1.jpg" alt="Illustration ressource">
        </div>

        <div class="list-resource__item-wrap-content">

          <h3 class="list-resource__item-title heading h3">{{item.name}}</h3>

          <div class="list-resource__item-wrap-categories" v-if="item.categories">
            <ul class="list-resource__item-categories">
              <li class="list-resource__item-category" v-for="itemCategory of item.categories" :key="itemCategory._id">{{itemCategory.name}}</li>
            </ul>
          </div>
          
          <div class="list-resource__item-wrap-tags" v-if="item.tags">
            <p class="list-resource__item-tags-title">Tags&nbsp;:</p>
            <ul class="list-resource__item-tags">
              <li class="list-resource__item-tag" v-for="itemTag of item.tags" :key="itemTag._id">{{itemTag.name}}</li>
            </ul>
          </div>

          <div class="list-resource__item-wrap-description" v-if="item.description">
            <p class="list-resource__item-description">{{item.description}}</p>
          </div>

          <a class="list-resource__item-url" :href="item.url" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="external-link"><rect width="24" height="24" opacity="0"/><path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"/><path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"/></g></g></svg>
          </a>

          <!-- <router-link :to="'/resource/'+ item._id" class="button">Voir plus</router-link> -->

        </div>

      </li>

    </ul>

  </section>
</template>

<script>
  export default {
    name: "ListResource",
    components: {},

    // Bind parent component data with properties
    props: ['resourceCollection'],
    
    data(){
      return {}
    },

    methods:{},

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>