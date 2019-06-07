<template>
  <div id="app">
    <h1>Online Rune Reader</h1>
    <div class="glyph fs1">
      <div class="clearfix pbs">
        <svg :class="`icon ${currentImage}`"><use :xlink:href="`#${currentImage}`"></use></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { runeNames } from './runes';
import { setInterval } from 'timers';

export default {
  name: 'app',

  mounted: function() {
    this.startRotation();
  },

  data() {
    return {
      runeNames,
      current: 0
    }
  },

  methods: {
    startRotation: function() {
      setInterval(() => {
        this.current = this.current === this.runeNames.length - 1 ? 0 : this.current + 1;
      }, 3000);
    }
  },

  computed: {
    currentImage: function() {
      return `icon-${this.runeNames[this.current]}`
    }
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
  background: linear-gradient(#262937, #212531);
  height: 100vh;
  padding-top: 100px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Skranji', cursive;
  margin-top: 0;
}

.glyph {
  -webkit-animation: fadein 3s infinite;
  -moz-animation: fadein 3s infinite;
  -ms-animation: fadein 3s infinite;
  -o-animation: fadein 3s infinite;
  animation: fadein 3s infinite;
}

@keyframes fadein {
  0% { opacity: 0; }
  25%   { opacity: 1; }
  75% { opacity: 1; }
  100%   { opacity: 0; }
}

@-moz-keyframes fadein {
  0% { opacity: 0; }
  25%   { opacity: 1; }
  75% { opacity: 1; }
  100%   { opacity: 0; }
}

@-webkit-keyframes fadein {
  0% { opacity: 0; }
  25%   { opacity: 1; }
  75% { opacity: 1; }
  100%   { opacity: 0; }
}

@-ms-keyframes fadein {
  0% { opacity: 0; }
  25%   { opacity: 1; }
  75% { opacity: 1; }
  100%   { opacity: 0; }
}

@-o-keyframes fadein {
  0% { opacity: 0; }
  25%   { opacity: 1; }
  75% { opacity: 1; }
  100%   { opacity: 0; }
}
</style>
