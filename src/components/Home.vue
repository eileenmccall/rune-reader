<template>
    <div id="home">
        <h1>Online Rune Reader</h1>
        <div class="glyph fs1">
            <svg :class="`icon icon-${currentImage}`"><use :xlink:href="`#icon-${currentImage}`"></use></svg>
            <h3 class="rune-name">{{ currentImage }}</h3>
        </div>
        <div class="button-container">
            <button class="button">Draw a rune</button>
            <span class="button-text">OR</span>
            <button class="button">Choose a spread</button>
        </div>
    </div>
    
</template>

<script>
import { runeNames } from '../runes';
import { setInterval } from 'timers';

export default {
    name: 'Home',

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
      return `${this.runeNames[this.current]}`
    }
  }
}
</script>

<style>
.rune-name {
  margin-top: 16px;
}

.button-container {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  display: inline-block;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  font-family: 'Skranji', cursive;
  font-size: 18px;
  background: transparent;
  padding: 15px;
  width: 180px;
}

.button:hover {
  background-color: white;
  color: #262937;
  cursor: pointer;
}

.button:not(:first-child) {
  margin-left: 15px;
}

.button-text {
  font-family: 'Skranji', cursive;
  color: white;
  margin-left: 15px;
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
