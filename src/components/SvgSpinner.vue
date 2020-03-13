<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :viewBox="`0 0 ${boxSize} ${boxSize}`"
    x="0px"
    y="0px"
    :width="`${boxSize}px`"
    :height="`${boxSize}px`"
    class="svg-spinner"
  >
    <circle
      fill="none"
      :stroke="fill"
      :stroke-width="circleWeight"
      stroke-miterlimit="10"
      :cx="boxSize / 2"
      :cy="boxSize / 2"
      :r="circleSize / 2"
      :class="circleClassName"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'normal',
    },
    fill: {
      type: String,
      default: '#666'
    }
  },

  computed: {
    boxSize() {
      switch (this.size) {
        case 'large':
          return 100;
        case 'small':
          return 25;
        default:
          return 50;
      }
    },
    circleSize() {
      switch (this.size) {
        case 'large':
          return 80;
        case 'small':
          return 20;
        default:
          return 40;
      }
    },
    circleClassName() {
      const name = {};
      name[`svg-spinner__circle--${this.size}`] = true;
      return name;
    },
    circleWeight() {
      switch (this.size) {
        case 'large':
          return 10;
        case 'small':
          return 3;
        default:
          return 5;
      }
    },
  },

  created() {
    const ua = navigator.userAgent.toLowerCase();
    const rootClassName = ua.indexOf('trident/7') === -1 ? 'is-not-ie11-svg-spinner' : 'is-ie11-svg-spinner';
    document.documentElement.classList.add(rootClassName);
  },
};
</script>

<style lang="scss" scoped>
$PI: 3.141592;

@keyframes svg-spinner-rotation-small {
  0% {
    transform: rotate(-720deg);
    stroke-dashoffset: calc(#{$PI} * 20px / 1.25);
  }
  50% {
    transform: rotate(-360deg);
    stroke-dashoffset: calc(#{$PI} * 20px / 8);
  }
  100% {
    transform: rotate(0deg);
    stroke-dashoffset: calc(#{$PI} * 20px / 1.25);
  }
}

@keyframes svg-spinner-rotation-normal {
  0% {
    transform: rotate(-720deg);
    stroke-dashoffset: calc(#{$PI} * 40px / 1.25);
  }
  50% {
    transform: rotate(-360deg);
    stroke-dashoffset: calc(#{$PI} * 40px / 8);
  }
  100% {
    transform: rotate(0deg);
    stroke-dashoffset: calc(#{$PI} * 40px / 1.25);
  }
}

@keyframes svg-spinner-rotation-large {
  0% {
    transform: rotate(-720deg);
    stroke-dashoffset: calc(#{$PI} * 80px / 1.25);
  }
  50% {
    transform: rotate(-360deg);
    stroke-dashoffset: calc(#{$PI} * 80px / 8);
  }
  100% {
    transform: rotate(0deg);
    stroke-dashoffset: calc(#{$PI} * 80px / 1.25);
  }
}

@keyframes svg-spinner-rotation-ie11 {
  0% {
    transform: rotate(-720deg);
  }
  50% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.svg-spinner {
  @at-root .is-ie11-svg-spinner & {
    animation: svg-spinner-rotation-ie11 3s linear infinite 0s;
  }

  &__circle {
    transform-origin: 50% 50%;

    $circle: #{&};

    &--small {
      @extend #{$circle};
      stroke-dasharray: calc(#{$PI} * 20px);
      stroke-dashoffset: calc(#{$PI} * 20px);
      animation: svg-spinner-rotation-small 3s linear infinite 0s;

      @at-root .is-ie11-svg-spinner & {
        stroke-dasharray: 50px;
        stroke-dashoffset: 0;
      }
    }

    &--normal {
      @extend #{$circle};
      stroke-dasharray: calc(#{$PI} * 40px);
      stroke-dashoffset: calc(#{$PI} * 40px);
      animation: svg-spinner-rotation-normal 3s linear infinite 0s;

      @at-root .is-ie11-svg-spinner & {
        stroke-dasharray: 100px;
        stroke-dashoffset: 0;
      }
    }

    &--large {
      @extend #{$circle};
      stroke-dasharray: calc(#{$PI} * 80px);
      stroke-dashoffset: calc(#{$PI} * 80px);
      animation: svg-spinner-rotation-large 3s linear infinite 0s;

      @at-root .is-ie11-svg-spinner & {
        stroke-dasharray: 200px;
        stroke-dashoffset: 0;
      }
    }
  }
}
</style>
