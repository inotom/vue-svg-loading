<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    :fill="fill"
    :width="size"
    :height="size"
    class="svg-loading"
  >
    <path
      v-for="n in 12"
      :key="`path-${n}`"
      :opacity="0.1 + (0.05 * n)"
      d="M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z"
      :transform="`rotate(${30 * n - 1} 50 50)`"
      :class="`svg-loading__path--${n}`"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: '#666'
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-loading {
  animation: svg-loading 1s infinite steps(12);
}

@keyframes svg-loading {
  to {
    transform: rotate(360deg);
  }
}
</style>
