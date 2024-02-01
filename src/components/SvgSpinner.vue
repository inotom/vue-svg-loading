<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Props {
  size?: number | string;
  weight?: number;
  fill?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 50,
  weight: 5,
  fill: '#666',
});

const elSvgRoot = ref(null);

const boxSize = computed(() => {
  if (typeof props.size === 'string') {
    console.warn('Setting the size property to a string type is deprecated.');
    switch (props.size) {
      case 'large':
        return 100;
      case 'small':
        return 25;
      default:
        return 50;
    }
  }
  return props.size;
});

const circleSize = computed(() => {
  if (typeof props.size === 'string') {
    console.warn('Setting the size property to a string type is deprecated.');
    switch (props.size) {
      case 'large':
        return 80;
      case 'small':
        return 20;
      default:
        return 40;
    }
  }
  return props.size - (props.weight * 2);
});

const circleWeight = computed(() => {
  if (typeof props.size === 'string') {
    console.warn('Setting the size property to a string type is deprecated.');
    switch (props.size) {
      case 'large':
        return 10;
      case 'small':
        return 3;
      default:
        return 5;
    }
  }
  return props.weight;
});

onMounted(() => {
  if (elSvgRoot.value) {
    const el = elSvgRoot.value as SVGElement;
    el.style.setProperty('--svg-spinner-size', `${boxSize.value}px`);
  }
});
</script>

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
    ref="elSvgRoot"
  >
    <circle
      fill="none"
      :stroke="fill"
      :stroke-width="circleWeight"
      stroke-miterlimit="10"
      :cx="boxSize / 2"
      :cy="boxSize / 2"
      :r="circleSize / 2"
      class="svg-spinner__circle"
    />
  </svg>
</template>

<style lang="scss" scoped>
.svg-spinner {
  $PI: 3.141592;

  @keyframes svg-spinner-rotation {
    0% {
      transform: rotate(-720deg);
      stroke-dashoffset: calc(#{$PI} * var(--svg-spinner-size) / 1.25);
    }
    50% {
      transform: rotate(-360deg);
      stroke-dashoffset: calc(#{$PI} * var(--svg-spinner-size) / 8);
    }
    100% {
      transform: rotate(0deg);
      stroke-dashoffset: calc(#{$PI} * var(--svg-spinner-size) / 1.25);
    }
  }

  &__circle {
    transform-origin: 50% 50%;
    stroke-dasharray: calc(#{$PI} * var(--svg-spinner-size));
    stroke-dashoffset: calc(#{$PI} * var(--svg-spinner-size));
    animation: svg-spinner-rotation 3s linear infinite 0s;
  }
}
</style>
