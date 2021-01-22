<template>
  <main>
    <h1 class="text-bold h3">Portfolio</h1>
    <ul class="selector text-bleu2">
      <li :class="{ 'text-bleu1': select === 'vjs' }" @click="change('vjs')">
        VueJs
      </li>
      <li :class="{ 'text-bleu1': select === 'wp' }" @click="change('wp')">
        / WordPress
      </li>
      <li :class="{ 'text-bleu1': select === 'eco' }" @click="change('eco')">
        / Éco-conçu
      </li>
      <li
        :class="{ 'text-bleu1': select === 'print' }"
        @click="change('print')"
      >
        / Print
      </li>
      <br />
      <li v-show="!tout" class="text-gris3" @click="tout = true">Tout voir</li>
    </ul>
    <section class="container--page">
      <BoiteArticle
        v-if="tout || select === ('vjs' || 'print')"
        titre="Guide RSE Banque Populaire"
        sous-titre="Carte interactive"
        background-url="guideBleu1.png"
        lien="https://www.guide-rse.banquepopulaire.fr/actions-rse"
      />
      <BoiteArticle
        v-if="tout || select === ('vjs' || 'wp')"
        titre="Guide RSE Banque Populaire"
        sous-titre="Interface de visualisation de données"
        background-url="guideBleu2.png"
        lien="https://www.guide-rse.banquepopulaire.fr/resultats-2019"
      />
      <BoiteArticle
        v-if="tout || select === ('eco' || 'wp')"
        titre="App noël"
        sous-titre="Application d'apprentissage à l'interface d'un ordinateur"
        background-url="appNoel.png"
      />
      <BoiteArticle />
    </section>
  </main>
</template>

<script>
export default {
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
  color: $bleu1;
  text-align: center;
  margin-top: 2rem;
}
.boite-article:not(:first-of-type) {
  margin-top: -100px;
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
  }
}
</style>
