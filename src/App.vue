<template>
  <div id="app">
    <router-view></router-view>
    <footer>Built by <a class="link" href="http://github.com/sophiemccall">Sophie McCall</a></footer>
  </div>
</template>

<script>


export default {
  name: 'app',
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

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 25px;
}

.link {
  text-decoration: none;
  color: white;
}
</style>
