<template>
  <main>
    <h3 class="text-bold h3 text-black">Éco-conception</h3>
    <nuxt-child />
  </main>
</template>

<script>
export default {
  scrollToTop: true,
  created() {
    // this.$store.commit('page/sethome', false)
  },
}
</script>
<style lang="scss" scoped>
h3 {
  color: $vert;
  text-align: center;
  margin-top: 2rem;
}
</style>
