<template>
  <div class="rune">
    <div class="image">
      <svg :class="`image__svg icon icon-${runeName}`">
        <use :xlink:href="`#icon-${runeName}`"></use>
      </svg>
    </div>
    <h3>{{name}}</h3>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "Rune",

  props: {
    image: String,
    name: String,
    description: String
  },

  computed: {
    imageUrl: function() {
      return require(`../assets/${this.iamge}`);
    },

    runeName: function() {
      const name = this.name;
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
};
</script>

<style scoped>
.rune {
  text-align: center;
  width: 100px;
}

.image {
  height: 100px;
  width: 100px;
}

.image__svg {
  max-width: 100%;
  max-height: 100%;
}
</style>
