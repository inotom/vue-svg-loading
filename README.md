# @inotom/vue-svg-loading

SVG loading animation Vue.js component.

From v3.0.0, it works for Vue 3.

## Demo

[Demo](https://sandbox.serendip.ws/vue-svg-loading.html)


## Install

### Browser

```html
<script src="vue.global.prod.js"></script>
<script src="vue-svg-loading.umd.js"></script>
```


### npm

```
npm install --save @inotom/vue-svg-loading
```


## Usage

### Browser

```html
<div id="app">
  <svg-loading></svg-loading>
  <svg-spinner></svg-spinner>
</div>

<script src="vue.global.prod.js"></script>
<script src="vue-svg-loading.umd.js"></script>
<script>
const { createApp } = Vue;
const { SvgLoading, SvgSpinner } = SwsVueSvgLoading;

createApp({
  components: {
    SvgLoading,
    SvgSpinner,
  },
}).mount('#app');
</script>
```


### SFC (TypeScript)

```vue
<script setup lang="ts">
import { SvgLoading, SvgSpinner } from '@inotom/vue-svg-loading';
</script>

<template>
  <svg-loading></svg-loading>
  <svg-spinner></svg-spinner>
</template>
```


## Props

### svg-loading

| name    | type     | defaults | description              |
|---------|----------|----------|--------------------------|
| `:size` | `Number` | `50`     | width/height pixel size  |
| `fill`  | `String` | `#666`   | SVG fill color           |


### svg-spinner

| name     | type     | defaults | description                          |
|----------|----------|----------|--------------------------------------|
| `size`   | `number` | `50`     | width/height pixel size              |
| `weight` | `number` | `5`      | SVG spinner circle weight pixel size |
| `fill`   | `String` | `#666`   | SVG spinner circle  color            |


## License

MIT


## Author

inotom
