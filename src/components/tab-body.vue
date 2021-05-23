<template>
  <section class="tab-body">

      <add-item-modal v-if="type==='Delivery'" />
    
      <div  class="flex justify-content-between mb-3">
        <h1 id="tab-body-title">{{type}} List</h1>
         <b-icon key="1" title="Add item" icon="bag-plus" v-if="type==='Delivery'" class="icon-btn rounded-circle bg-secondary p-2 mt-1 mx-2" variant="light" font-scale="2.2"  @click="$bvModal.show('add-item-modal')"></b-icon>
      </div>

      <item-list v-if="items" :items="items" :type="type" />
      
  </section>
</template>

<script>
import itemList from "../components/item-list";
import addItemModal from "./add-item-modal.vue"

export default {
  name: "tab-body-app",
  props:["items","type"],
  components: {
    itemList,
    addItemModal
  },
};
</script>

<style lang="scss">
  h1#tab-body-title{
    margin-bottom: 20px;
    font-size: 21px;
  }
</style>