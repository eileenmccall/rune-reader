<template>
    <div id="singleRune">
        <h1>Your rune is...</h1>
        <div class="glyph fs1">
            <svg :class="`icon icon-${selectedRune}`"><use :xlink:href="`#icon-${selectedRune}`"></use></svg>
            <h3 class="rune-name">{{ selectedRune }}</h3>
        </div>
        <button class="button" v-on:click="selectRune">Select New</button>
        <router-link class="router-link back-button" to="/">Go Back</router-link>
    </div>
</template>

<script>
import {runeNames} from '../runes';

export default {
    name: 'SingleRune',

    mounted() {
        this.selectRune()
    },

    data() {
        return {
            runeNames,
            selectedRune: ''
        }
    },

    methods: {
        selectRune() {
            const num = Math.floor(Math.random() * 25);
            this.selectedRune = this.runeNames[num];
        }
    }
}
</script>

<style scoped>

.glyph {
    margin-top: 50px;
    margin-bottom: 50px;
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
