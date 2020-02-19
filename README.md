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
npm install --save @inotom/vue-svg-loading
```


## Usage

### Browser

```html
<div id="app">
  <svg-loading></svg-loading>
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
</template>

<script>
import { SvgLoading } from '@inotom/vue-svg-loading';

export default {
  components: {
    SvgLoading
  }
}
</script>
```


## Props

| name    | type     | defaults | description              |
|---------|----------|----------|--------------------------|
| `:size` | `Number` | `50`     | width/height pixel size  |
| `fill`  | `String` | `#666`   | SVG fill color           |


## License

MIT


## Author

inotom
