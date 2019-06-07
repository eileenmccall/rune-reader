<template>
  <div id="spreads">
    <h1>Spreads</h1>
    <Spread
      v-for="spread in spreads"
      :key="spread.name"
      :name="spread.name"
      :image="spread.image"
      :description="spread.description"
    />
  </div>
</template>

<script>
import Spread from "./Spread.vue";
import { spreads } from "../spreads";

export default {
  name: "Spreads",

  components: {
    Spread
  },

  data() {
    return {
      spreads
    };
  }
};
</script>

<style scoped>
@import "../styles/button.css";

#spreads {
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
}
</style>
