<template>
  <main>
    <h1 class="text-bold h3">Portfolio</h1>
    <ul class="selector text-gris2">
      <li :class="{ 'text-bleu1': select === 'vjs' }" @click="change('vjs')">
        VueJs
      </li>
      /
      <li :class="{ 'text-bleu1': select === 'wp' }" @click="change('wp')">
        WordPress
      </li>
      /
      <li :class="{ 'text-bleu1': select === 'eco' }" @click="change('eco')">
        Éco-conçu
      </li>
      /
      <li
        :class="{ 'text-bleu1': select === 'print' }"
        @click="change('print')"
      >
        Print
      </li>
      <br />
      <li
        v-show="!tout"
        class="text-gris3"
        @click=";(tout = true), (select = '')"
      >
        Tout voir
      </li>
    </ul>
    <section class="container--page">
      <transition name="fade">
        <BoiteArticle
          v-if="tout || select === ('vjs' || 'print')"
          titre="Guide RSE Banque Populaire"
          sous-titre="Carte interactive"
          background-url="/guideBleu1.png"
          lien="https://www.guide-rse.banquepopulaire.fr/actions-rse"
      /></transition>
      <transition name="fade">
        <BoiteArticle
          v-if="tout || select === ('vjs' || 'wp')"
          titre="Guide RSE Banque Populaire"
          sous-titre="Interface de visualisation de données"
          background-url="/guideBleu2.png"
          lien="https://www.guide-rse.banquepopulaire.fr/resultats-2019"
      /></transition>
      <transition name="fade">
        <BoiteArticle
          v-if="tout || select === ('eco' || 'wp')"
          titre="App noël"
          sous-titre="Application d'apprentissage à l'interface d'un ordinateur"
          background-url="/appNoel.png"
      /></transition>
      <transition name="fade"> <BoiteArticle /></transition>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true,

  data() {
    return {
      select: '',
      tout: true,
    }
  },
  created() {
    // this.$store.commit('page/sethome', false)
  },
  methods: {
    change(valeur) {
      this.select = valeur
      this.tout = false
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: $bleu2;
  text-align: center;
  margin-top: 2rem;
}
.boite-article {
  @media (max-width: $breakpoint-tablet) {
    margin-bottom: 3.6rem;
  }
}
.boite-article:not(:first-of-type) {
  @media (min-width: $breakpoint-tablet) {
    margin-top: -60px;
  }
}
.selector {
  text-align: center;
  padding-left: 0;
  margin-top: -1rem;
  margin-bottom: 1rem;

  li {
    display: inline;
    list-style: none;
    // color: $bleu1;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $bleu1;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
