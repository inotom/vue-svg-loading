# vue-svg-loading

SVG loading animation Vue.js component.


## Demo

[Demo](http://sandbox.serendip.ws/vue-svg-loading.html)


## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vue-svg-loading.min.js"></script>
```


### npm

```
npm install -D @inotom/vue-svg-loading
```


## Usage

### Browser

```html
<div id="app">
  <svg-loading></svg-loading>
  <svg-spinner></svg-spinner>
</div>

<script src="vue.js"></script>
<script src="vue-svg-loading.min.js"></script>
<script>
Vue.use(SvgLoading);
new Vue({
  el: '#app'
});
</script>
```


### SFC

```vue
<template>
  <svg-loading></svg-loading>
  <svg-spinner></svg-spinner>
</template>

<script>
import { SvgLoading, SvgSpinner } from '@inotom/vue-svg-loading';

export default {
  components: {
    SvgLoading,
    SvgSpinner,
  }
}
</script>
```


## Props

### svg-loading

| name    | type     | defaults | description              |
|---------|----------|----------|--------------------------|
| `:size` | `Number` | `50`     | width/height pixel size  |
| `fill`  | `String` | `#666`   | SVG fill color           |


### svg-spinner

| name    | type     | defaults | description                      |
|---------|----------|----------|----------------------------------|
| `size`  | `String` | `normal` | Size name (normal, small, large) |
| `fill`  | `String` | `#666`   | SVG spinner circle  color        |


## License

MIT


## Author

inotom
