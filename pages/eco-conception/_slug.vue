<template>
  <section>
    <article class="container">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="require(`~/assets/img/${article.img}`)" :alt="article.alt" />
      <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
      <nuxt-content :document="article" />
    </article>

    <prev-next :prev="prev" :next="next" />
    <div class="prefooter">
      <div>
        <ul>
          <li v-for="link of article.toc" :key="link.id">
            <NuxtLink
              :to="`#${link.id}`"
              :class="{
                'pl-2': link.depth === 2,
                'pl-3': link.depth === 3,
              }"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <AppSearchInput />
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  methods: {
    formatDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  },
}
</script>
<style lang="scss">
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.icon.icon-link {
  background-image: url('~assets/img/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.pl-2 {
  padding-left: 2rem;
}
.pl-3 {
  padding-left: 3rem;
}

.prefooter {
  width: 100%;
  display: flex;
}
</style>
