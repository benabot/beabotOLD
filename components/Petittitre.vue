<template>
  <div class="petit-titre" :class="gris ? 'text-gris2' : 'text-gris4'">
    <div class="h3 text-black chiffre-onum">
      {{ numero }}<span :style="{ color: couleur }">.</span>
    </div>
    <div class="ligne text-black" :style="{ color: couleur }"></div>
    <h3 class="h3 text-black">{{ titre }}</h3>
  </div>
</template>
<script>
export default {
  name: 'Petittitre',
  props: {
    numero: {
      type: Number,
      default: 1, // green, green--outline, white
      required: false,
    },

    titre: {
      type: String,
      default: 'titre',
      required: false,
    },
    couleur: {
      type: String,
      default: '#04d94f',
      required: false,
    },
    gris: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  //   data() {
  //     return {
  //       isgris: this.gris,
  //     }
  //   },
}
</script>
<style lang="scss" scoped>
.h3 {
  text-align: left;
}
.ligne {
  width: 4em;
  height: 0.1em;
  border-top: 2px solid;
}
</style>
