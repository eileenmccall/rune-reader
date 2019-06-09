<template>
  <div id="about">
    <h1>Runes</h1>
    <p
      class="about__text"
    >Runes are the letters in a set of related alphabets known as runic alphabets, which were used to write various Germanic languages before the adoption of the Latin alphabet and for specialised purposes thereafter. The Scandinavian variants are also known as futhark or fuþark (derived from their first six letters of the alphabet: F, U, Þ, A, R, and K); the Anglo-Saxon variant is futhorc or fuþorc (due to sound-changes undergone in Old English by the names of those six letters).</p>
    <div class="runes">
      <Rune
        class="runes__rune"
        v-for="rune in runes"
        :key="rune.name"
        :name="rune.name"
        :image="rune.image"
        :description="rune.meaning"
      />
    </div>
  </div>
</template>

<script>
import { runes } from "../runes";
import Rune from "./Rune";

export default {
  name: "About",

  components: {
    Rune
  },

  data() {
    return {
      runes
    };
  }
};
</script>

<style>
.about__text {
  line-height: 32px;
  margin-bottom: 50px;
  max-width: 700px;
}

.runes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.runes__rune {
  margin-bottom: 50px;
}
</style>
