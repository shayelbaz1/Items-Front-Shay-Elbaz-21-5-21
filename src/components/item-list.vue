<template>
  <section class="items-list">
    <div class="items-table">
      <ul class="headers">
        <li id="image">Image</li>
        <li id="name">Name</li>
        <li id="store">Store</li>
        <li id="price">Price</li>
        <li id="est">Delivery EST</li>
        <li id="action">Action</li>
      </ul>

      <item-preview
        v-for="item in items"
        :item="item"
        :key="item._id"
        :type="type"
      />
    </div>
  </section>
</template>

<script>
import itemPreview from "./item-preview";

export default {
  name: "items-list",
  props: ["items", "type"],
  components: {
    itemPreview,
  },
};
</script>

<style lang="scss">
div.items-table {
  box-shadow: 0px 0px 10px 0px #0000001a;
  border-radius: 10px;
  ul {
    list-style: none;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 0 10px;
    // height: 80px;
    border-bottom: 1px solid lightgray;
    &.headers {
      background-color: lightgray;
      font-weight: 600;
      border-radius: 10px 10px 0px 0px;
      padding: 15px 10px;
      li#action {
        justify-content: center;
      }
    }
    li {
      background: none;
      display: flex;
      align-items: center;
      &#name {
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: auto 10px;
      }
      img {
        // width: 85%;
        width: auto;
        height: 70px;
        padding: 10px 0px;
        margin: auto;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    ul {
      display: flex;
      flex-wrap: wrap;
      &.headers li {
        width: 25%;
        margin-bottom: 0px;
        &#image {
          display: none;
        }
        &#name {
          display: none;
        }
      }
      li {
        width: 25%;
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        &#img {
          width: 20%;
          margin-bottom: 0px;
          img {
            width: 100%;
            height: auto;
          }
        }
        &#name {
          width: 70%;
          margin: auto;
        }
      }
    }
  }
}
</style>