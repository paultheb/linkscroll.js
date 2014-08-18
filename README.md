linkscroll.js
=============

####Version 2.0

Short and sweet jQuery plugin which implements page scrolling for anchor tags.

Setup
-----

1. Download jQuery or link within your document to a jQuery CDN.
2. Download or clone the linkscroll.js archive into your project directory.
3. Include the jQuery library, followed by the linkscroll script `src="js/linkscroll.min.js"`.

Use
---

For links that you wish to have scroll to the location of other elements on the page:

1. Add `class="linkscroll" to the anchor tag.
2. Set the destination of the anchor tag: `href="destination_element"`

For links that you wish to have scroll to the top of the page:

1. Add `class="topscroll" to the anchor tag.

Defaults / Customization
------------------------

By default, the speed of the scrolling animation is 800ms. It is very simple to change the scrolling speed however by simply adding the speed as a data attribute on the anchor tag.

1. `<a href="#services" class="linkscroll" data-speed="600">Services</a>`

The same applies to links which will scroll to the top of the page.

1. `<a class="topscroll" data-speed="600">Back to top</a>`