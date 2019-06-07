<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(#262937, #212531);
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  padding-top: 100px;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Skranji', cursive;
}

.router-link {
  text-decoration: none;
}
</style>
