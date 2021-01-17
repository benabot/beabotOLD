<template>
  <div class="clip-svg">
    <!-- <img src="~/assets/img/profilFreakOut.jpg" alt="ggg" /> -->
    <svg
      :width="width"
      :height="width"
      viewBox="0 0 243.9 241.2"
      xml:space="preserve"
      :transform="transform"
    >
      <defs>
        <clipPath id="myClip">
          <path
            id="Tracé_7"
            class="st0"
            d="M231.3,122.4c-15.4,60.2-50.4,112.5-112.5,112.5S6.3,184.6,6.3,122.4S57.5,20.3,118.8,9.9
	C237.3-10.1,248.3,55.9,231.3,122.4z"
            :fill="fill"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'OeufImage',
  props: {
    fill: {
      type: String,
      default: '#F1F1F1', // green, green--outline, white
      required: false,
    },

    width: {
      type: String,
      default: '50%',
      required: false,
    },
    transform: {
      type: String,
      default: 'rotate(0)',
      required: false,
    },
  },
}
</script>
<style scoped>
.clip-svg {
  clip-path: url(#myClip);
  background-image: url('~assets/img/profilFreakOut.jpg');
}
</style>
