<template>
  <div id="spreads">
    <main class="main">
      <div class="top-row">
        <router-link to="/" class="link">
          <h3 class="link__text">&lt;- Back</h3>
        </router-link>
        <h1 class="title">Spreads</h1>
      </div>
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

.top-row {
  display: flex;
  padding: 15px 0;
  align-items: center;
  margin-bottom: 50px;
}

.link {
  color: white;
}

.link__text {
  display: inline-block;
  margin: 0;
}

.title {
  flex-grow: 1;
  text-align: center;
  margin: 0;
}
</style>
