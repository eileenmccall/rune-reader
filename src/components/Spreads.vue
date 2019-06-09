<template>
  <div id="spreads">
    <router-link to="/" class="link">
      <h3>&lt;- Back</h3>
    </router-link>
    <main class="main">
      <h1>Spreads</h1>
      <Spread
        v-for="spread in spreads"
        :key="spread.name"
        :name="spread.name"
        :image="spread.image"
        :description="spread.description"
      />
    </main>
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

h3 {
  text-align: left;
}

.link {
  color: white;
}
</style>
