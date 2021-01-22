<template>
  <div class="boite-article">
    <svg>
      <defs>
        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 v1 h1 V0 H0 m0.948,0.507 c-0.063,0.25,-0.207,0.466,-0.461,0.466 S0.026,0.765,0.026,0.507 S0.236,0.084,0.487,0.041 c0.486,-0.083,0.531,0.191,0.461,0.466"
          />
        </clipPath>
      </defs>
    </svg>

    <article class="article-resum">
      <div class="boite-image">
        <div class="boite-image__calque"></div>
        <div class="circle"></div>
        <div
          class="boite-image__image"
          :style="{ backgroundImage: `url(${backgroundUrl})` }"
        ></div>
      </div>
      <h2 class="h4 text-gris1">{{ titre }}</h2>
      <h3 class="h4 text-fin text-gris1">{{ sousTitre }}</h3>
      <a class="text-fin text-gris2" :href="lien" target="_blank"
        >voir le site</a
      >
    </article>
  </div>
</template>
<script>
export default {
  props: {
    titre: {
      type: String,
      default: 'titre',
    },
    sousTitre: {
      type: String,
      default: 'sous titre',
    },
    backgroundUrl: {
      type: String,
      default:
        'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg',
    },
    lien: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
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

  a {
    display: block;
    position: relative;
    z-index: 2000;
  }
  h2 {
    margin-right: -4rem;
  }
  &:hover .clip-svg {
    transform: scale(1.2);
  }
}
.boite-image {
  position: relative;
  width: 100%;
  height: 43vh;
  min-height: 100px;
  overflow: hidden;
  &:hover .boite-image__image {
    transform: scale(1);
  }
  &:hover .circle {
    background: radial-gradient(transparent 60%, rgb(167, 167, 167));
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url('https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.2);
    transition: all 0.3s;
    z-index: 10;
    // filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));
    // box-shadow: inset 0px 40% 40% 0 #000, inset 0 40% 40% 0px #ccc,
    //   inset 0 40% 40% 0px #fff;
    // border-radius: 50%;
  }
  &__calque {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $fondClair;
    z-index: 30;
    clip-path: url(#myClip);
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    transition: all 0.3s;
    background: radial-gradient(transparent 40%, transparent);
  }
}
svg {
  position: absolute;
  width: 0;
  height: 0;
}
</style>
