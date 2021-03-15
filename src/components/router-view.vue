
<template>
  <div class="navbar">
    <nav>
      <h1>{{ title }}</h1>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/shop" exact>Shop</router-link></li>
        <li><router-link to="/login" exact>Login</router-link></li>
      </ul>
    </nav>
  </div>
</template>