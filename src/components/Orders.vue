<template>
  <div>
    <div v-for="order in orders" :key="order">
      <ul>
        <li id="basketItems" v-for="food in order[1]" :key="food">
          <div v-for="singlefood in food" :key="singlefood">
            {{ singlefood.name }}: {{ singlefood.qty }} <br />
          </div>
        </li>
      </ul>
      <p>
        <button
          class="actionBtn"
          v-bind:id="order[0]"
          v-on:click="deleteOrder($event)"
        >
          Delete
        </button>
        <button
          class="actionBtn"
          v-bind:id="order[0]"
          v-on:click="route($event)"
        >
          Modify
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import database from "../firebase.js";

export default {
  data() {
    return { orders: [] };
  },
  created() {
    this.fetchItems();
  },
  components: {},
  methods: {
    fetchItems: function () {
      console.log("entered");
      database
        .collection("orders")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.orders.push([doc.id, doc.data()]);
          });
        });
    },
    deleteOrder: function (event) {
      console.log("CheckDelete----- ");
      let doc_id = event.target.getAttribute("id");
      console.log(doc_id);
      database
        .collection("orders")
        .doc(doc_id)
        .delete()
        .then(() => {
          location.reload();
        });
    },
    route: function (event) {
      console.log("CheckModify------ ");
      let doc_id = event.target.getAttribute("id");
      this.$router.push({ name: "modify", params: { id: doc_id } });
    },
  },
};
</script>

<style>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

.actionBtn {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>