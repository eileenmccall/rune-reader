<template>
  <div id="spread">
    <div class="diagram">
      <img class="diagram__image" :src="imageUrl">
    </div>
    <div class="info">
      <h2 class="info__title">{{ name }}</h2>
      <p class="info__description">{{ description }}</p>
      <button class="button button--enabled info__button">Choose this spread</button>
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
    imageUrl: function() {
      return require(`../assets/${this.image}`);
    }
  }
};
</script>

<style scoped>
@import "../styles/button.css";

#spread {
  display: flex;
  margin-bottom: 75px;
  align-items: center;
}

.spread {
  display: flex;
}

.diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  max-width: 250px;
  flex-shrink: 0;
}

.diagram__image {
  max-height: 100%;
  max-width: 100%;
}

.info {
  display: inline-block;
  padding-left: 25px;
  text-align: left;
}

.info__title {
  margin-top: 0;
}
</style>
