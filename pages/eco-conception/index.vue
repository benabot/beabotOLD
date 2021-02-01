<template>
  <div class="container__page">
    <section>
      <h1 class="h3 text-fin">divers aspects de l'éco-conception web</h1>
      <ul class="selector text-gris3">
        <li
          :class="{ 'text-vert': selectedTag === 'Vue' }"
          @click="updateTag('Vue')"
        >
          JS
        </li>
        /
        <li
          :class="{ 'text-vert': selectedTag === 'WordPress' }"
          @click="updateTag('WordPress')"
        >
          WordPress
        </li>
        /
        <li
          :class="{ 'text-vert': selectedTag === 'wds' }"
          @click="updateTag('wds')"
        >
          WebDesign
        </li>
        /
        <li
          :class="{ 'text-vert': selectedTag === 'typo' }"
          @click="updateTag('typo')"
        >
          Typographie
        </li>
        <br />
        <li v-show="selectedTag" class="text-gris3" @click="selectedTag = ''">
          Tout voir
        </li>
      </ul>
      <AppSearchInput />
    </section>
    <section class="intro text-gris2">
      <div class="intro__img"></div>
      <p class="text-fin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
        fringilla nunc, vitae pellentesque diam. Quisque euismod, velit vel
        posuere porttitor, ex libero tristique augue, sit amet efficitur libero
        ligula sit amet nunc. Sed sit amet pretium turpis.
      </p>
      <p class="text-fin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
        fringilla nunc, vitae pellentesque diam. Quisque euismod, velit vel
        posuere porttitor, ex libero tristique augue, sit amet efficitur libero
        ligula sit amet nunc. Sed sit amet pretium turpis.
      </p>
    </section>
    <div class="border"></div>
    <section>
      <article v-for="article of articlesFilters" :key="article.slug">
        <!-- <img :src="article.img" /> -->
        <Petittitre gris :titre="article.title" :tags="article.tag" />
        <div class="resum">
          <p class="text-gris2">{{ article.description }}</p>
          <div class="boite-bouton">
            <NuxtLink
              :to="{
                name: 'eco-conception-slug',
                params: { slug: article.slug },
              }"
              ><button class="seepost seepost--vert">
                poursuivre la lecture
              </button>
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tag'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
      selectedTag: null,
    }
  },
  computed: {
    articlesFilters() {
      if (!this.selectedTag) {
        return this.articles
      } else {
        return this.articles.filter((el) => el.tag.includes(this.selectedTag))
      }
    },
  },
  methods: {
    updateTag(tag) {
      //   if (!this.selectedTag) {
      this.selectedTag = tag
      //   } else {
      //     this.selectedTag = null
      //   }
    },
  },
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
a {
  text-decoration: none;
  display: block;
  position: relative;
  z-index: 200;
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
      color: $vert;
    }
  }
}
.intro {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  // letter-spacing: 0.07rem;
  p {
    text-align: justify;
    margin-left: 1em;
    @media (max-width: $breakpoint-tablet) {
      margin-left: 1em;
    }
  }
  &__img {
    @media (min-width: $breakpoint-tablet) {
      background: url('/logoOrdi3.svg') no-repeat;
      background-size: contain;
      width: 33%;
      margin-right: 1rem;
      margin-top: -1rem;
      margin-left: -1rem;
    }
  }
}
.border {
  border-bottom: 1px solid $vert;
  height: 1rem;
  margin-left: 33%;
  width: 33%;
}
article {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .resum {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
    p {
      text-align: justify;
      width: 80%;
      @media (min-width: $breakpoint-tablet) {
        width: 50%;
      }
    }
    .boite-bouton {
      width: inherit;
      height: 55px;
      align-self: center;
      @media (min-width: $breakpoint-tablet) {
        width: 25%;
      }
    }
  }
}
</style>
