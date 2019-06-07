<template>
  <div id="spread">
    <div class="spread-diagram">
      <img :src="JSON.stringify({url: require('@/assets/five-lifetimes-spread.svg')})">
    </div>

    <div class="spread-info">
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
      <button class="button button--enabled">Choose this spread</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spread",

  props: {
    name: String,
    description: String,
    image: String
  },

  computed: {
    imageUrl() {
      return `@/assets/${this.image}`;
    }
  }
};
</script>

<style scoped>
@import "../styles/button.css";

#spread {
  display: flex;
}

.spread {
  display: flex;
}

.spread-diagram {
  max-height: 300px;
  width: 300px;
}

.spread-diagram img {
  max-height: 100%;
}

.spread-info {
  display: inline-block;
  padding-left: 25px;
  text-align: left;
}
</style>
