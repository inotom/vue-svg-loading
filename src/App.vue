<script setup lang="ts">
import { computed } from 'vue';
import SvgLoading from './components/SvgLoading.vue';
import SvgSpinner from './components/SvgSpinner.vue';

const isDev = computed(() => import.meta.env.DEV);
</script>

<template>
  <h1>vue-svg-loading demo</h1>

  <h2><code>&lt;svg-loading&gt;</code></h2>

  <div class="sample">
    <svg-loading></svg-loading>
  </div>
  <div class="sample">
    <svg-loading :size="20"></svg-loading>
  </div>
  <div class="sample">
    <svg-loading fill="#f00"></svg-loading>
  </div>
  <div class="sample">
    <svg-loading :size="200" fill="blue"></svg-loading>
  </div>
  <div class="sample--dark">
    <svg-loading fill="#fff"></svg-loading>
  </div>

  <h2><code>&lt;svg-spinner&gt;</code></h2>

  <div class="sample">
    <svg-spinner></svg-spinner>
  </div>
  <div v-if="isDev" class="sample">
    <svg-spinner size="small"></svg-spinner>
  </div>
  <div class="sample">
    <svg-spinner :size="20" :weight="2"></svg-spinner>
  </div>
  <div class="sample">
    <svg-spinner fill="#f00"></svg-spinner>
  </div>
  <div v-if="isDev" class="sample">
    <svg-spinner size="large" fill="blue"></svg-spinner>
  </div>
  <div class="sample">
    <svg-spinner :size="200" :weight="20" fill="blue"></svg-spinner>
  </div>
  <div class="sample--dark">
    <svg-spinner fill="rgba(255, 255, 255, .7)"></svg-spinner>
  </div>
</template>

<style lang="scss" scoped>
h1, h2 {
  text-align: center;
}
.sample {
  padding: 1em 0;
  text-align: center;

  $root: #{&};

  &--dark {
    @extend #{$root};
    color: #fff;
    background-color: #000;
  }
}
</style>
