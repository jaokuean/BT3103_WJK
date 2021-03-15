<template>
  <div id="itemsList">
    <ul id="menu">
      <li id="menuItems" v-for="(item, index) in itemsList" :key="index">
        <p id="itemName">{{ item.name }}</p>
        <p><img v-bind:src="item.imageURL" alt="Image" /></p>
        <p id="price">${{ item.price }}</p>
        <qtyCounter v-on:counter="onCounter" v-bind:item="item"></qtyCounter>
      </li>
    </ul>
    <basket id="shoppingBasket" v-bind:basketList="itemsSelected"></basket>
  </div>
</template>

<script>
import QuantityCounter from "./QuantityCounter.vue";
import Basket from "./Basket.vue";
import database from "../firebase.js";

export default {
  data() {
    return {
      itemsList: [],
      itemsSelected: [],
    };
  },
  components: {
    qtyCounter: QuantityCounter,
    basket: Basket,
  },
  methods: {
    onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
        // Loop through everything to check what is not in the basket

        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          var found = false;

          if (item_name === item.name && count > 0) {
            // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
            this.itemsSelected.splice(i, 1, [
              curr_item[0],
              count,
              curr_item[2],
            ]);
            found = true;
          }
          if (item_name === item.name && count === 0) {
            // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.
            this.itemsSelected.splice(this.itemsSelected.indexOf(curr_item), 1);
            found = true;
          }
        }

        // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
        if (!found) {
          this.itemsSelected.push([item.name, count, item.price]);
        }
      }
    },
    fetchItems: function () {
      database
        .collection("menu")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            item.show = false;
            this.itemsList.push(item);
          });
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style>
h1 {
  width: 100%;
  padding: 10px;
  background-color: lightsalmon;
}
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
#menu {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#menuItems {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 30px;
}

#itemName {
  font-size: 30px;
}

#shoppingBasket {
  position: absolute;
  top: 23%;
  left: 78%;
}
</style>

