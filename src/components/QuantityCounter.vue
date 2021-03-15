<template>
  <div>
    <button class="qtyCounterBtn" v-on:click="decrement">-</button>
    <span style="margin: 30px; font-size: 50px">{{ counter }}</span>
    <button class="qtyCounterBtn" v-on:click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
  },
  data() {
    return { counter: 0 };
  },
  methods: {
    increment: function () {
      if (this.counter >= 10) {
        alert("You cannot buy more than 10 items.");
      } else {
        this.counter += 1;
      }
      this.$emit("counter", this.item, this.counter);
    },
    decrement: function () {
      if (this.counter <= 0) {
        this.counter = 0;
      } else {
        this.counter -= 1;
      }
      this.$emit("counter", this.item, this.counter);
    },
  },
};
</script>

<style>
.qtyCounterBtn {
  height: 80px;
  width: 80px;
  background-color: pink;
  border-radius: 15px;
  font-size: 50px;
}
</style>
