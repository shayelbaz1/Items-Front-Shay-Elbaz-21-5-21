<template>
  <section>
      <b-navbar type="dark" variant="dark" class="px-3">

        <b-navbar-brand>BuyMe</b-navbar-brand>


        <b-collapse id="nav-collapse" class="justify-content-between" is-nav>

          <b-navbar-nav>
            <b-nav-item @click="routeTo('/items')">Items</b-nav-item>
            <b-nav-item @click="routeTo('/total')">Total</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
            
            <select v-model="coin" class="form-select" aria-label="Default select example">
              <option value="ils">₪</option>
              <option value="usd">$</option>
              <option value="eur">€</option>
            </select>

          </b-navbar-nav>

        </b-collapse>

      </b-navbar>
  </section>
</template>

<script>
export default {
  name: "nav-bar",
  computed:{
    coin:{
      get(){
        return this.$store.getters.coin;
      },
      set(newCoin) {
        this.$store.commit({type:"setCoin",coin:newCoin})
        this.$store.commit({type:"setRatio",rates:this.$store.getters.rates})
    } 
    }
  },
  methods: {
    routeTo(page) {
      window.scrollTo(0, 0)
      this.$router.push(page);
    },
  }
};
</script>
