<template>
  <section class="add-item-modal">

    <b-modal id="add-item-modal" hide-footer>
        <template #modal-title>
        Add Item
        </template>

        <div class="d-block">
            <item-form></item-form>
        </div>
        
    </b-modal>

  </section>
</template>

<script>
import itemForm from "./item-form"
export default {
name: "add-item-modal",
components:{
    itemForm
}
}
</script>

<style lang="scss" scope>
.close{
    position: absolute;
    background: none;
    border: none;
    font-size: 30px;
    padding: 0px;
    top: 0;
    right: 0;
    margin-right: 12px;
    font-family: 'Poppins';
    color: darkslategrey;
}
</style>