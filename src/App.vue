<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import navBar from "./components/nav-bar.vue";
export default {
  name: "App",
  components: {
    navBar, 
  },  
  async created() {
    await this.$store.dispatch({type:"loadItems"});
    await this.$store.dispatch({type:"loadProducts"});
    await this.$store.dispatch({type:"loadRates"});
  },
};
</script>