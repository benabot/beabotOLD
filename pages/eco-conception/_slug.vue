<template>
  <section>
    <aside>
      <div class="breadcrumb">
        <ul class="selector text-gris1">
          <li class="svg-baseline svg-icon">
            <NuxtLink to="/">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                /></svg
            ></NuxtLink>
          </li>
          |
          <li><NuxtLink to="/eco-conception" exact>Blog</NuxtLink></li>
          |
          <li class="text-gris3">{{ article.title }}</li>
        </ul>
        <hr />
        <span v-for="tag in article.tag" :key="tag" class="petit-text"
          ><span class="text-vert"> #</span>{{ tag }}</span
        >
      </div>
      <div class="chapitres text-gris1">
        <div class="svg-baseline svg-icon">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
            />
          </svg>
          &ensp;Chapitres
        </div>
        <hr />
        <ul class="text-fin petit-text2">
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
      <div class="prevnext text-gris1">
        <div class="svg-baseline svg-icon">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z"
            />
          </svg>
          &ensp;À voir également
        </div>
        <hr />
        <prev-next class="petit-text2" :prev="prev" :next="next" />
      </div>
    </aside>
    <article>
      <h1 class="text-bold h3 text-gris1">
        {{ article.title }}
      </h1>
      <hr />
      <p class="petit-text text-gris3">
        Publié le : {{ formatDate(article.updatedAt) }}
      </p>

      <p class="text-gris1">{{ article.description }}</p>
      <img :src="require(`~/assets/img/${article.img}`)" :alt="article.alt" />

      <nuxt-content class="text-gris2" :document="article" />
    </article>
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
<style lang="scss" scoped>
// .nuxt-content h2 {
//   font-weight: bold;
//   font-size: 28px;
// }
// .nuxt-content h3 {
//   font-weight: bold;
//   font-size: 22px;
// }
// .nuxt-content p {
//   margin-bottom: 20px;
// }

section {
  display: flex;
  flex-direction: column;
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
  aside {
    width: 100%;
    order: 2;
    margin-top: 3rem;
    border-top: 1px solid $gris3;
    padding-top: 2rem;
    @media (min-width: $breakpoint-tablet) {
      width: 25%;
      position: sticky;
      top: 5rem;
      align-self: flex-start;
      order: 1;
      margin-top: 0;
      border-top: none;
      padding-top: 0;
    }
    .svg-icon {
      display: inline-flex;
      align-self: center;
    }
    .svg-icon svg {
      height: 1em;
      width: 1em;
    }
    .svg-icon.svg-baseline svg {
      top: 0.125em;
      position: relative;
    }
    hr {
      border: 0.8px solid $gris4;
      width: 66%;
    }
    .breadcrumb {
      hr {
        margin-bottom: -0.5rem;
      }
      .selector {
        text-align: left;
        padding-left: 0;
        margin-top: -1rem;
        opacity: 0.9;

        li {
          display: inline;
          list-style: none;
          // color: $bleu1;
          text-align: center;
          &:not(:last-child):hover {
            color: $vert !important;
            cursor: pointer;
          }
        }
      }
    }
    .chapitres {
      margin-top: 2rem;
      ul {
        padding-left: 5px;
        li {
          list-style: none;
          a {
            text-decoration: none;
            color: $gris2;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .pl-2 {
        padding-left: 3px;
      }
      .pl-3 {
        padding-left: 10px;
        color: $gris3;
      }
    }
    .prevnext {
      margin-top: 1rem;
    }

    .chapitres,
    .prevnext {
      @media (min-width: $breakpoint-tablet) {
        opacity: 0.68;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  article {
    width: 100%;
    order: 1;
    @media (min-width: $breakpoint-tablet) {
      width: 55%;
      order: 2;
    }
    hr {
      border: 0.5px solid $gris4;
      width: 66%;
      margin-top: -0.5rem;
    }
    img {
      max-width: 90%;
      height: auto;
    }
  }
}
.icon.icon-link {
  background-image: url('~assets/img/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

// .prefooter {
//   width: 100%;
//   display: flex;
// }
</style>
