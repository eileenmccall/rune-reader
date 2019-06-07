<template>
  <div id="app">
            <div class="glyph fs1">
            <div class="clearfix pbs">
                <svg class="icon icon-Algiz"><use xlink:href="#icon-Algiz"></use></svg>
            </div>
        </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #262937;
  height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Skranji', cursive;
}
</style>
