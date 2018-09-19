# angular-bone

[angular-bone](https://vjai.github.io/angular-bone/) helps to build page layouts using CSS3 Grid and Flex concepts for your angular apps. 
It provides you a set of directives that helps to build responsive layouts in a declarative way.


## Simple Flex Layout

```html
<div bon-f>
  <div class="green" bon-fi bon-fi-grow="1"></div>
  <div class="yellow" bon-fi bon-fi-grow="1"></div>
  <div class="pink" bon-fi bon-fi-grow="2"></div>
</div>
```


## Responsive Flex Layout

```html
<div bon-f bon-f-direction="column" bon-f-direction-md="row">
  <div class="green" bon-fi bon-fi-grow="1"></div>
  <div class="yellow" bon-fi bon-fi-grow="1"></div>
  <div class="pink" bon-fi bon-fi-grow="1" bon-fi-grow-md="2"></div>
</div>
```


## Simple Grid Layout

```html
<div id="simple-grid-example" class="canvas"
      bon-g bon-g-cols="30% 1fr"
      bon-g-rows="20% 1fr 10%"
      bon-g-area="'a a' 'b c' 'd d'">

  <div class="purple" bon-gi bon-gi-area="a"></div>
  <div class="yellow" bon-gi bon-gi-area="b"></div>
  <div class="green" bon-gi bon-gi-area="c"></div>
  <div class="pink" bon-gi bon-gi-area="d"></div>
</div>
```


## Responsive Grid Layout

```html
<div id="simple-grid-example" class="canvas"
      bon-g bon-g-cols="1"
      bon-g-cols-md="30% 1fr"
      bon-g-rows="20% 30% 1fr 10%"
      bon-g-rows-md="20% 1fr 10%"
      bon-g-area="'a' 'b' 'c' 'd'"
      bon-g-area-md="'a a' 'b c' 'd d'">

  <div class="purple" bon-gi bon-gi-area="a"></div>
  <div class="yellow" bon-gi bon-gi-area="b"></div>
  <div class="green" bon-gi bon-gi-area="c"></div>
  <div class="pink" bon-gi bon-gi-area="d"></div>
</div>
```


For further information please visit [https://vjai.github.io/angular-bone/](https://vjai.github.io/angular-bone/).
