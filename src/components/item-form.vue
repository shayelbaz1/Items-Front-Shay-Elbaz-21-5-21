<template>
  <section>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-name" label="Name:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          type="text"
          placeholder="Enter item name"
          list="produts"
          @input="setItem()"
          required
        >
        </b-form-input>

        <datalist id="produts">
          <option v-for="p in products" :key="p.id" >{{ p.title }}</option>
        </datalist>

      </b-form-group>

      <b-form-group
        id="input-group-store"
        label="Store:"
        label-for="input-store"
      >
        <b-form-input
          id="input-store"
          v-model="form.store"
          placeholder="Enter store"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-price"
        label="Price:"
        label-for="input-price"
      >
        <b-form-input
          id="input-price"
          v-model="form.price"
          type="number"
          step="0.01"
          placeholder="Enter price"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-est"
        label="Receive date estimation:"
        label-for="input-est"
      >
        <b-form-datepicker
          id="input-est"
          v-model="form.deliveryEST"
        ></b-form-datepicker>
      </b-form-group>

      <b-form-group
        id="input-group-img"
        label="Insert image URL:"
        label-for="input-img"
      >
        <b-form-input
          id="input-img"
          v-model="form.imgURL"
          type="text"
        ></b-form-input>
      </b-form-group>

      <div class="flex justify-content-between mt-3">
        <div>
          <b-button block @click="$bvModal.hide('add-item-modal')">
            <b-icon icon="x-circle"></b-icon>
            Cancel</b-button
          >

          <b-button class="mx-2" type="reset" variant="danger">Reset</b-button>
        </div>

        <b-button variant="success" type="submit">
          <b-icon icon="bag-plus"></b-icon>
          Add Item
        </b-button>
      </div>
    </b-form>
  </section>
</template>

<script>
export default {
  name: "item-form",
  data() {
    return {
      form: {
        name: "",
        store: "Amazon",
        price: 0,
        deliveryEST: "2021-05-22",
        isArchived: false,
        createdAt: "",
        imgURL: "",
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    setItem() {

        const product = this.products.find(p=>p.title===this.form.name || p.title===this.form.name+" ")
        if(product){
            this.form.price = product.price;
            this.form.imgURL = product.image;
        }else{
            this.form.price = 0;
            this.form.imgURL = "";

        }
    },
    addItem() {
      const newItem = this.form;
      if (
        !newItem.name ||
        !newItem.store ||
        !newItem.price ||
        !newItem.deliveryEST
      )
        return;
      if (!newItem.imgURL)
        newItem.imgURL =
          "https://cdn.iconscout.com/icon/free/png-256/no-image-1771002-1505134.png";
      newItem.deliveryEST = new Date(newItem.deliveryEST);

      this.$store.dispatch({ type: "saveItem", item: newItem });

      this.form = {
        name: "",
        store: "",
        price: 0,
        deliveryEST: "",
        isArchived: false,
        createdAt: "",
      };
    },
    onSubmit(event) {
      event.preventDefault();
      //   alert(JSON.stringify(this.form));
      this.addItem();
      this.$bvModal.hide("add-item-modal");
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.store = "";
      this.form.price = 0;
      this.form.deliveryEST = "";
    },
  },
};
</script>