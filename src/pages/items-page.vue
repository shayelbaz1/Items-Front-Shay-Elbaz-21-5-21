<template>
  <section class="items-page">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Delivery" active>
          <tab-body
            type="Delivery"
            v-if="items"
            :items="deliveryItems"
            class="container-xxl"
          />
        </b-tab>

        <b-tab title="Archive">
          <tab-body
            type="Archive"
            v-if="items"
            :items="archivedItems"
            class="container-xxl"
          />
        </b-tab>
      </b-tabs>
    </b-card>
  </section>
</template>

<script>
import tabBody from "../components/tab-body.vue";

export default {
  name: "items-page",
  components: {
    tabBody,
  },
  computed: {
    items() {
      return this.$store.getters.items;
    },
    archivedItems() {
      return this.items.filter((i) => i.isArchived);
    },
    deliveryItems() {
      return this.items.filter((i) => !i.isArchived);
    },
  },
};
</script>

<style lanf="scss">
.card-body {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>