<template>
  <ul>
    <li id="img"><img :src="item.imgURL" alt="" /></li>
    <li id="name">{{ item.name }}</li>
    <li id="store">{{ item.store }}</li>
    <li id="store">{{ price | fixed(2) }}{{ coinSymbol }}</li>
    <li id="store">{{ date }}</li>
    <li id="actions" class="justify-content-around">
      <b-icon
        title="Archive"
        v-if="type === 'Delivery'"
        @click="toggleIsArchived(item)"
        icon="archive"
        class="icon-btn bg-warning rounded-circle p-2"
        font-scale="2.3"
        variant="dark"
      />

      <b-iconstack
        title="Unarchive"
        v-if="type === 'Archive'"
        @click="toggleIsArchived(item)"
        class="icon-btn bg-warning rounded-circle p-2"
        font-scale="2.3"
      >
        <b-icon stacked icon="archive" variant="dark"></b-icon>
        <b-icon stacked icon="slash" variant="danger" scale="2.3"></b-icon>
      </b-iconstack>

      <b-icon
        title="Remove"
        @click="deleteItem(item._id)"
        class="icon-btn bg-danger rounded-circle p-2"
        font-scale="2.3"
        variant="light"
        icon="trash"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "item-preview",
  props: ["item", "type"],
  methods: {
    deleteItem(itemId) {
      this.$store.dispatch({ type: "deleteItem", itemId });
    },
    toggleIsArchived(item) {
      item.isArchived = !item.isArchived;
      this.$store.dispatch({ type: "saveItem", item });
    },
  },
  computed: {
    date() {
      // let d = new Date(Date.parse(this.item.deliveryEST)+1000*60*60*24*3)
      const d = new Date(this.item.deliveryEST);
      return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    },
    coinSymbol() {
      return this.$store.getters.coinSymbol;
    },
    ratio(){
      return this.$store.getters.ratio;
    },
    price() {
      return this.item.price * this.ratio;
    },
  },
};
</script>