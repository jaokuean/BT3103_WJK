<template>
  <div>
    <div v-for="(food, index) in datapacket" :key="index">
      {{ food.name }}: {{ food.qty }} <br /><br />
      <input placeholder="0" :id="index" type="number" min="0" /><br /><br />
    </div>
    <p>
      <button id="updateBtn" v-on:click="updateOrder()">Update Order</button>
    </p>
  </div>
</template>

<script>
import database from "../firebase.js";
export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      datapacket: [],
      datapacketCopy: [],
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems: function () {
      console.log("entered:" + this.id);
      database
        .collection("orders")
        .doc(this.id)
        .get()
        .then((snapshot) => {
          this.datapacket = snapshot.data().order;
        });
    },
    updateOrder: function () {
      console.log("checkupdate----- ");
      for (let i = 0; i < this.datapacket.length; i++) {
        if (document.getElementById(i).value == "") {
          this.datapacketCopy.push({ name: this.datapacket[i].name, qty: 0 });
        } else {
          this.datapacketCopy.push({
            name: this.datapacket[i].name,
            qty: document.getElementById(i).value,
          });
        }
      }
      database
        .collection("orders")
        .doc(this.id)
        .set({
          order: this.datapacketCopy,
        })
        .then(() => {
          this.$router.push({ name: "orders" });
        });
    },
  },
};
</script>

<style>
#updateBtn {
  width: 165px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>
