<template>
  <div id="app">
    <h1>My Zi Char</h1>

    <nav>
      <ul id="navBar">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Order</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
#navBar {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
</style>
