<template>
  <div id="singleRune">
    <h1>Your rune is...</h1>

    <div class="rune">
      <svg :class="`icon icon-${rune.name}`"><use :xlink:href="`#icon-${rune.name}`"></use></svg>
      <h3 class="rune__name">{{ rune.name }}</h3>
      <p class="rune__meaning"><span class="rune__meaning__title">Meaning: </span>{{ rune.meaning }}</p>
      <p class="rune__ipa"><span class="rune__ipa__title">Pronunciation: </span>{{ rune.ipa }}</p>
    </div>

    <button class="button" v-on:click="selectRune">Select New</button>

    <router-link class="router-link back-button" to="/">Go Back</router-link>
  </div>
</template>

<script>
import {runes} from '../runes';

export default {
    name: 'SingleRune',

    mounted() {
        this.selectRune()
    },

    data() {
        return {
          rune: {}
        }
    },

    methods: {
        selectRune() {
            const id = Math.floor(Math.random() * 25);
            this.rune = runes[id];
        }
    }
}
</script>

<style scoped>

.rune {
  margin-top: 50px;
  margin-bottom: 50px;
}

.rune__meaning__title,
.rune__ipa__title {
  font-weight: bold;
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

.router-link {
  color: white;
}

.button:hover .router-link {
  color: #262937;
}

.back-button {
  font-family: 'Skranji', cursive;
  display: block;
  margin-top: 25px;
}
</style>
