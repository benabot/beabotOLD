<template>
  <main>
    <section class="container--page">
      <h1 class="text-bold h3">Portfolio</h1>
      <div class="boite-article">
        <article class="article-resum">
          <OeufImage />
          <h2>titre</h2>
          <h3>sous titre</h3>
        </article>
      </div>
      <div class="boite-article">
        <article class="article-resum">
          <OeufImage />
          <h2>titre</h2>
          <h3>sous titre</h3>
        </article>
      </div>
      <div class="boite-article">
        <article class="article-resum">
          <OeufImage />
          <h2>titre</h2>
          <h3>sous titre</h3>
        </article>
      </div>
      <div class="boite-article">
        <article class="article-resum">
          <OeufImage />
          <h2>titre</h2>
          <h3>sous titre</h3>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  created() {
    // this.$store.commit('page/sethome', false)
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: $vert;
}

.boite-article {
  width: 80%;
  display: flex;
  justify-content: flex-start;
  &:nth-child(odd) {
    justify-content: flex-end;
  }
}
.article-resum {
  width: 40%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover .clip-svg {
    transform: scale(1.2);
  }
}
</style>
