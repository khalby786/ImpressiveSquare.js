# ImpressiveSquare.js

ImpressiveSquare.js is a simple JS library for creating and styling responsive and simple `<div>` elements. These `<div>`s have a small hover animation with a light box-shadow to produce a simple effect. 

This is how it will look:

{% glitch impressive-squares app %}

## Getting started

For this to work, you'll need a `<div>` element structured like this:

```html
<div class="impressive-square">
  <img class="impressive-image" src="https://generative-placeholders.glitch.me/image?width=637&height=200" width="100%" />
  <div class="impressive-body">
    Hi Hello
    <p>
      I'm an impressive square
    </p>
  </div>
</div>
```

There should be a main `<div>` and it should have an `<img>` tag, which will be the main image of the `<div>` and another `<div>` which will have all the content of the square, to which you can add more HTML. 

Once you've done that, you can either download ImpressiveSquare.js from [here](https://raw.githubusercontent.com/khalby786/ImpressiveSquare.js/master/script.js) or you can use a `<script>` tag with a link to a CDN:
```html
<script src = "https://cdn.jsdelivr.net/gh/khalby786/ImpressiveSquare.js@latest/script.js"></script>
```

And then, call the function to style the `<div>`s!
```html
<script>
square.new();
</script>
```

`square.new()` applies styles to default classes `impressive-square`, `impressive-image` (for the <div> image) and `impressive-body` (for all the <div> contents). However, if you wish, you can change the classes of the square, image, and body and pass it as an argument to `square.new()` like this:

```js
const config = {
  class: "my-square",
  images: "my-image",
  content: "my-body",
  width: "100%",
  back: "white",
  fore: "black"
};

square.new(config);
```

* `class` is the class of the square where you want the styles to be applied.
* `images` is the class for the main image of the square.
* `content` is the class for the square content.
* `width` is the width of the square.
* `back` is the background color of the square.
* `fore` is the color of the text.

Note that calling `square.new()` once will style all the elements with the specified class (if arguments are passed) or to the default class `impressive-square` for the square, `impressive-image` for the main image, or `impressive-body` for the square content, if no arguments are passed.

This is just a starter project and I'll be sure to add more features!