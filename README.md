# angular-bone

[angular-bone](https://vjai.github.io/angular-bone/) helps to build page layouts using CSS3 Grid and Flex concepts for your angular apps. 
It provides you a set of directives that helps to build responsive layouts in a declarative way.


## Simple Flex Layout

```html
<div bon-flex>
  <div class="green" bon-flex-item bon-flex-item-grow="1"></div>
  <div class="yellow" bon-flex-item bon-flex-item-grow="1"></div>
  <div class="pink" bon-flex-item bon-flex-item-grow="2"></div>
</div>
```


## Simple Grid Layout

```html
<div id="simple-grid-example" class="canvas"
      bon-grid bon-grid-cols="30% 1fr"
      bon-grid-rows="20% 1fr 10%"
      bon-grid-area="'a a' 'b c' 'd d'">

  <div class="purple" bon-grid-item bon-grid-item-area="a"></div>
  <div class="yellow" bon-grid-item bon-grid-item-area="b"></div>
  <div class="green" bon-grid-item bon-grid-item-area="c"></div>
  <div class="pink" bon-grid-item bon-grid-item-area="d"></div>
</div>
```


## Responsive Flex Layout

```html
<div bon-flex bon-flex-direction-md="column" bon-flex-direction-md="row">
  <div class="green" bon-flex-item bon-flex-item-grow="1"></div>
  <div class="yellow" bon-flex-item bon-flex-item-grow="1"></div>
  <div class="pink" bon-flex-item bon-flex-item-grow="1" bon-flex-item-grow-md="2"></div>
</div>
```


## Responsive Grid Layout

```html
<div id="simple-grid-example" class="canvas"
      bon-grid bon-grid-cols="1"
      bon-grid-cols-md="30% 1fr"
      bon-grid-rows="20% 30% 1fr 10%"
      bon-grid-rows-md="20% 1fr 10%"
      bon-grid-area="'a' 'b' 'c' 'd'"
      bon-grid-area-md="'a a' 'b c' 'd d'">

  <div class="purple" bon-grid-item bon-grid-item-area="a"></div>
  <div class="yellow" bon-grid-item bon-grid-item-area="b"></div>
  <div class="green" bon-grid-item bon-grid-item-area="c"></div>
  <div class="pink" bon-grid-item bon-grid-item-area="d"></div>
</div>
```


## Mixing Grid and Flex

TODO


## Real World Example

TODO


## API

TODO
