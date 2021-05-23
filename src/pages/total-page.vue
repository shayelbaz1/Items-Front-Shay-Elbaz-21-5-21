<template>
  <section class="total-page">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Total" active>
          <tab-body
            type="Total"
            v-if="items"
            :items="items"
            class="container"
          />

          <div class="total-price container flex justify-content-end my-3">
            <p>Total Price: {{ totalPrice | fixed(2) }}{{$store.getters.coinSymbol}}</p>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import tabBody from "../components/tab-body.vue";

export default {
  name: "total-page",
  components: {
    tabBody,
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      this.items.forEach((item) => (totalPrice += item.price));
      return totalPrice * this.$store.getters.ratio;
    },
    items() {
      return this.$store.getters.items;
    },
  },
};
</script>

<style lang="scss">
.total-price {
  font-size: 20px;
  font-weight: 700;
}
</style>