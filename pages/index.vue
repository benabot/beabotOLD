<template>
  <main>
    <section class="container container-1">
      <!-- <Oeuf fill="pink" width="5%" transform="rotate(15)" /> -->
      <h1 class="title titre2">beAbot</h1>
      <div id="boite-logo">
        <Oeuf width="40%" class="fixe oeuf-intro" />
      </div>
      <div class="links">
        <h2 class="text-gris2 text-normal titre3">Éco-conception web</h2>
      </div>
    </section>
    <section class="container container-2 fond-gris">
      <!-- <OeufImage /> -->
      <p class="text-gris4 h4">
        Lorem ipsum dolor sit amet,
        <span class="text-black">consetetur</span> sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et
        <span class="text-black">justo duo</span> dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      </p>
    </section>
    <section class="container container-3">
      <div class="container-3__titre">
        <Oeuf
          class="container-3__titre__oeuf-1"
          width="40%"
          transform="rotate(-115)"
          fill="#04d94f"
        />
        <Oeuf
          class="container-3__titre__oeuf-2"
          width="40%"
          transform="rotate(45)"
          fill=" #0439d9"
        />
        <Oeuf
          class="container-3__titre__oeuf-3"
          width="40%"
          transform="rotate(-65)"
          fill=" #0439d9"
        />
        <Oeuf
          class="container-3__titre__oeuf-4"
          width="40%"
          transform=""
          fill="#f2a81d"
        />
        <h2 class="titre2 text-gris2 text-black">
          Lorem ipsum dolor sit amet, consetetur
        </h2>
        <div class="container-3__titre__sub">
          <div></div>
          <div class="lettre-smcp">Lorem ipsum</div>
        </div>
      </div>
      <div class="boite-para">
        <div class="boite-para--para">
          <Petittitre gris numero="1" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
        <div class="boite-para--para">
          <Petittitre gris numero="2" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
      </div>
    </section>
    <section class="container container-4 fond-gris">
      <Oeuf
        class="oeuf container-4__oeuf-1"
        width="30%"
        transform=""
        fill="url(#Gradient2)"
      />
      <Oeuf
        class="oeuf container-4__oeuf-2"
        width="24%"
        transform="rotate(-45)"
        fill="url(#Gradient4)"
      />
      <Oeuf
        class="oeuf container-4__oeuf-3"
        width="27%"
        transform="rotate(-85)"
        fill="url(#Gradient1)"
      />
      <Oeuf
        class="oeuf container-4__oeuf-4"
        width="21%"
        transform="rotate(-95)"
        fill="url(#Gradient3)"
      />
      <div class="container-4__boite-para">
        <div class="container-4__boite-para--para">
          <Petittitre couleur="white" numero="3" />
          <p class="text-gris4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
        <div class="container-4__boite-para--para">
          <Petittitre couleur="white" numero="4" />
          <p class="text-gris4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
      </div>
    </section>
    <section class="container container-5">
      <div class="container-5__boite-titre">
        <div class="container-5__boite-titre__titre">
          <div>
            <h3 class="text-black h2">
              Lorem ipsum dolor sit amet, consetetur
            </h3>
          </div>
          <div>
            <Oeuf
              class="oeuf"
              width="100%"
              transform="rotate(-125)"
              fill="url(#Gradient4)"
            />
          </div>
        </div>
        <div class="container-5__boite-titre__oeuf">
          <Oeuf class="oeuf" width="60%" transform="rotate(5)" fill="#f2a81d" />
        </div>
      </div>
      <div class="boite-para">
        <div class="boite-para--para">
          <div class="boite-para--titre">
            <div>
              <Oeuf
                class="oeuf"
                width="60%"
                transform="rotate(5)"
                fill="#f2a81d"
              />
            </div>
            <div><Petittitre gris /></div>
          </div>

          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            deserunt expedita. Quibusdam perferendis in minus repellat fugiat
            maxime, deserunt consequatur ipsa excepturi sunt, esse et itaque
            impedit dicta sit? Praesentium.
          </p>
        </div>
        <div class="boite-para--para">
          <div class="boite-para--titre">
            <div>
              <Oeuf
                class="oeuf"
                width="30%"
                transform="rotate(-95)"
                fill="#2561d9"
              />
            </div>
            <div><Petittitre gris /></div>
          </div>

          <p class="text-gris2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            <span class="chiffre-onum">12345678</span>
            <span class="chiffre-lnum">12345678</span>
            deserunt expedita. Quibusdam perferendis in minus repellat fugiat
            maxime, deserunt consequatur ipsa excepturi sunt, esse et itaque
            impedit dicta sit? Praesentium.
          </p>
        </div>
      </div>
      <!-- <div class="container-5__content">
        <div class="container-5__content__in">
          <div class="container-5__content__titre">
            <div>
              <Oeuf
                class="oeuf"
                width="100%"
                transform="rotate(-125)"
                fill="#0439d9"
              />
            </div>
            <div><Petittitre gris /></div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              deserunt expedita. Quibusdam perferendis in minus repellat fugiat
              maxime, deserunt consequatur ipsa excepturi sunt, esse et itaque
              impedit dicta sit? Praesentium.
            </p>
          </div>
        </div>
        <div class="container-5__content__in">
          <div class="container-5__content__titre">
            <div>
              <Oeuf
                class="oeuf"
                width="100%"
                transform="rotate(-125)"
                fill="#0439d9"
              />
            </div>
            <div><Petittitre /></div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              deserunt expedita. Quibusdam perferendis in minus repellat fugiat
              maxime, deserunt consequatur ipsa excepturi sunt, esse et itaque
              impedit dicta sit? Praesentium.
            </p>
          </div>
        </div>
      </div> -->
    </section>
    <section class="container container-blog container-blog--bleu">
      <h3 class="h2 text-gris2 text-black">
        portfolio <span>:</span>
        <br />
        <span class="text-fin">dernières créations</span>
      </h3>
      <div class="container-blog__box">
        <div class="boite-para--para a">
          <Petittitre gris couleur="#2561d9" stitre="dev" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat,
          </p>
        </div>
        <div class="oeuf b">
          <NuxtLink to="/portfolio"
            ><svg class="lien" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
              /></svg></NuxtLink
          ><Oeuf
            class="fond"
            width="80%"
            transform="rotate(-95)"
            fill="#2561d9"
          />
        </div>
        <div class="boite-para--para c">
          <Petittitre gris couleur="#2561d9" stitre="webdesign" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
      </div>
    </section>
    <section class="container container-blog">
      <h3 class="h2 text-gris2 text-black">
        éco-conception <span>:</span>
        <br />
        <span class="text-fin">derniers articles</span>
      </h3>
      <div class="container-blog__box">
        <div class="boite-para--para a">
          <Petittitre gris stitre="VueJS" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat,
          </p>
        </div>
        <div class="oeuf b">
          <NuxtLink to="/eco-conception"
            ><svg class="lien" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
              /></svg></NuxtLink
          ><Oeuf
            class="fond"
            width="80%"
            transform="rotate(-95)"
            fill="#04d94f"
          />
        </div>
        <div class="boite-para--para c">
          <Petittitre gris stitre="WordPress" />
          <p class="text-gris2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  created() {
    // this.$store.commit('page/sethome', true)
  },
}
</script>

<style lang="scss" scoped>
section {
  position: relative;
  z-index: 3;
  &:first-child {
    z-index: 1;
  }
}

.container-1 {
}
.container-2 {
  p {
    width: 50vw;
    line-height: 1.618;
  }
}
.container-3 {
  display: flex;
  padding-top: 10rem;
  padding-bottom: 5rem;
  &__titre {
    width: 90%;
    margin-left: 10%;
    min-height: 45vh;
    position: relative;
    @media (min-width: $breakpoint-tablet) {
      width: 60%;
      margin-left: 40%;
    }

    h2 {
      position: relative;
      text-align: left;
      z-index: 2;
    }
    &__oeuf-1 {
      position: absolute;
      z-index: 1;
      top: -45%;
      left: -2%;
    }
    &__oeuf-2 {
      position: absolute;
      z-index: 1;
      top: -43%;
      right: -18%;
    }
    &__oeuf-3 {
      position: absolute;
      z-index: 1;
      top: 24%;
      left: -35%;
    }
    &__oeuf-4 {
      position: absolute;
      z-index: 1;
      top: 52%;
    }
    &__sub {
      color: $vert;
      text-align: center;
      width: 60%;
      position: relative;
      z-index: 2;
      @media (min-width: $breakpoint-tablet) {
        width: 20%;
        text-align: left;
      }
      div {
        &:first-child {
          width: 50%;
          height: 0.5em;
          border-top: 2px solid $vert;
        }
      }
    }
  }
}
.container-4 {
  position: relative;
  &__boite-para {
    width: 100%;
    min-height: 50vh;
    position: relative;
    z-index: 3;
    display: flex;
    @media (min-width: $breakpoint-tablet) {
      width: 60%;
    }
    &--para {
      width: 50%;
      align-self: flex-end;
      &:first-child {
        align-self: flex-start;
      }
      p {
        text-align: justify;
        margin-right: 2rem;
      }
    }
  }
  .oeuf {
    position: absolute;
    z-index: 2;
  }
  &__oeuf-1 {
    left: 10%;
    top: 5%;
  }
  &__oeuf-2 {
    right: 9%;
    top: 8%;
  }
  &__oeuf-3 {
    left: 10%;
    top: 56%;
  }
  &__oeuf-4 {
    right: 10%;
    top: 60%;
  }
}
.container-5 {
  margin-bottom: 4rem;
  &__boite-titre {
    display: flex;
    width: 100%;

    &__titre {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40vh;
      @media (min-width: $breakpoint-tablet) {
        width: 60%;
        height: 90vh;
      }
      h3 {
        color: white;
        margin: 0 3rem;
      }
      div {
        position: absolute;
        width: 100%;
        &:first-child {
          z-index: +1;
        }
      }
    }
    &__oeuf {
      width: 35%;
      height: 40vh;
      display: flex;
      align-items: flex-start;
      @media (min-width: $breakpoint-tablet) {
        height: 80vh;
      }
      .oeuf {
        position: sticky;
        top: 0;
      }
    }
  }
}
.container-blog {
  h3 {
    span {
      color: $vert;
    }
  }
  .a {
    order: 1;
  }
  .b {
    order: 3;
    @media (min-width: $breakpoint-tablet) {
      order: 2;
    }
  }
  .c {
    order: 2;
    margin-top: 1rem;
    @media (min-width: $breakpoint-tablet) {
      order: 3;
      margin-top: 0;
    }
  }
  &--bleu {
    h3 {
      span {
        color: $bleu1;
      }
    }
  }

  &__box {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
    }
    .oeuf {
      position: relative;
      z-index: 12;
      height: 25vh;
      width: 33%;
      margin-left: 33%;
      @media (min-width: $breakpoint-tablet) {
        align-self: center;
        position: sticky;
        top: 200px;
        margin-left: 0;
      }
      a,
      .fond {
        position: absolute;
        height: 90px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      a {
        z-index: +1;
        color: $fondClair;
        height: auto;
        opacity: 0.8;
        width: 60%;
        transition: all 500ms ease;
        &:hover {
          opacity: 1;
          width: 70%;
        }
      }
      .fond {
        height: auto;
      }
      // &::before {
      //   content: '+';
      //   font-size: 8rem;
      //   height: 82px;
      //   line-height: 0.58;
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      //   z-index: 1;
      //   color: $fondClair;
      //   font-weight: $bold;
      //   opacity: 0.9;
      //   transition: ease-in 0.1s;
      // }
      // &:hover::before {
      //   font-size: 8.4rem;
      //   opacity: 1;
      // }
    }
    & > div {
      width: 100%;
      @media (min-width: $breakpoint-tablet) {
        width: 33%;
      }
    }
  }
}
.boite-para {
  width: 100%;
  display: flex;
  @media (min-width: $breakpoint-tablet) {
    width: 60%;
  }
  &--para {
    width: 50%;
    & p {
      text-align: justify;
    }
    &:first-of-type {
      margin-right: 1.4rem;
      @media (min-width: $breakpoint-tablet) {
        margin-right: 2rem;
      }
    }
  }
  &--titre {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 6rem;
    div {
      position: absolute;
      top: 0;
      left: 0;
      &:first-child {
        z-index: -1;
        left: -40%;
        top: -40%;
      }
    }
  }
}
#boite-logo {
  position: relative;
  width: 66%;
  height: auto;
  min-height: 52vh;
  background: url('~assets/img/forme-flou.svg') no-repeat center;
  background-size: 100%;
  // background: url('~assets/img/forme-flou.svg') no-repeat center,
  //   url('~assets/img/forme.svg') no-repeat center;
  // background-size: 90%, 100%;
  // filter: drop-shadow(14px);
  // filter: blur(14.187px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    background-size: 90%;
    width: 33%;
  }

  &::before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100px;
    background-color: blue;
    background: url('~assets/img/forme.svg') no-repeat center;
    background-size: 100%;
  }
  @keyframes hideshow {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }
  .oeuf-intro {
    padding: 5%;
    filter: blur(1px);
    z-index: 2;
    animation: hideshow 1.5s ease;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  position: relative;
  z-index: 3;
}
</style>
