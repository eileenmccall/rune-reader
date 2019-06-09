<template>
  <header id="header">
    <nav class="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/spreads">Spreads</router-link>
      <router-link class="nav__link" to="/about">About the Runes</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
#header {
  margin-bottom: 50px;
  padding: 15px;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav__link {
  font-family: "Skranji", cursive;
  color: white;
  font-size: 18px;
  text-decoration: none;
}

.nav__link:not(:first-child) {
  margin-left: 50px;
}
</style>
