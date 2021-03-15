<template>
  <div>
    <p>Menu:</p>
    <ul>
      <li id="basketItems" v-for="food in basketList" :key="food.name">
        {{ food[0] }} x {{ food[1] }}
      </li>
    </ul>
    <p>
      <button id="actionBtn" v-on:click="sendOrder">Add Order</button>
    </p>
  </div>
</template>
<template></template>
<script>
import database from "../firebase.js";

export default {
  props: {
    basketList: { type: Array },
  },
  data() {
    return {
      orderlist: [
        { name: "Cereal Prawn", qty: 0 },
        { name: "Prawn omelette", qty: 0 },
        { name: "Dry Beef Hor Fun", qty: 0 },
        { name: "Sambal KangKung", qty: 0 },
        { name: "Pork Fried Rice", qty: 0 },
        { name: "Mapo Tofu", qty: 0 },
      ],
    };
  },
  methods: {
    sendOrder: function () {
      console.log("List: " + this.basketList);

      for (let i = 0; i < this.basketList.length; i++) {
        const curr_item = this.basketList[i];
        const item_name = curr_item[0];
        const item_qty = curr_item[1];

        for (let j = 0; j < this.orderlist.length; j++) {
          const order_item = this.orderlist[j];
          const order_name = order_item.name;

          if (item_name === order_name) {
            order_item.qty += item_qty;
          }
        }
      }
      database
        .collection("orders")
        .add({
          order: this.orderlist,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
</script>

<style>
#basketItems {
  margin: 20px;
}
#actionBtn {
  background-color: pink;
  width: 100px;
  border-radius: 5px;
  font-size: 15px;
}
</style>
