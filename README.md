linkscroll.js
=============

<p>Version 1.0</p>
<p>Short and sweet JavaScript plugin written with jQuery which implements page scrolling for anchor tags.</p>

<h1>Setup</h1>
<ol>
<li>Get jQuery by <a href="http://jquery.com/download/">download</a> or <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">CDN</a>.</li>
<li>Download the linkscroll archive by clicking "Download ZIP" to the right.</li>
<li>Include the linkscroll script with <code>src="js/linkscroll.min.js"</code> (include AFTER jQuery)</li>
</ol>

<h1>Use</h1>
<p>For links that you wish to have scroll to different elements of the page on click:</p>
<ol>
<li>Add <code>class="linkscroll"</code> to the anchor tag.</li>
<li>Set destination of anchor tag: <code>href="#destination_element"</code></li>
</ol>
<p>For links that you wish to have scroll to the top of the page on click:</p>
<ol>
<li>Add <code>class="topscroll"</code> to the anchor tag.</li>
</ol>

<h1>Defaults/Customization</h1>
<p>By default the scrolling animation will take 800ms. It is very simple to change the speed of the scrolling animation by opening <strong>linksroll.js</strong> and changing the integer on lines 9 and 15 to whatever number you wish.</p>
<p>If you do change this value, make sure you include this file within your script tags instead of <strong>linkscroll.min.js</strong>. Otherwise your change will not be effective.</p>
