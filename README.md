RLSmooth
========

A jQuery flowing effect plugin.

<h2>About</h2>

<p>rlSmooth is a small flowing plugin.</p>

<h2>Usage</h2>

<h3>HTML</h3>

		<div class="smooth"></div>

<h3>JS</h3>

<p>How to implement:</p>

		<script>
			$(function() {

				$(".smooth").rlSmooth();

				// or with options
				$(".smooth").rlSmooth('slide',{
					y: 0, //ms default settings for vertical window position
					down: 500, // ms default settings for slide down effect speed
					up: 500 // ms default settings for slide up effect speed
				});

				// Parameter options effects

				// options     first effect second effect

				// 'slide'     slideDown()  slideUp()
				// 'slideout'  slideDown()  fadeOut()
				// 'slidehide' slideDown()  hide()

				// 'fade'      fadeIn()     fadeOut()
				// 'fadeup'    fadeIn()     slideUp()
				// 'fadehide'  fadeIn()     hide()

				// 'showhide'  show()       hide()
				// 'showup'    show()       slideUp()
				// 'showout'   show()       fadeOut()

			});

		</script>

<h2>Demo:</h2>

<p>In the future my idea is implement more animations effects options include jQuery UI</p>

<p>The default css position is top, but you can change to bottom or apply when you need.</p>

<p>http://rodrigoludgero.com/rlsmooth/rlsmooth.html</p>

<h2>License</h2>
<p>Copyright (c) 2013 Rodrigo Ludgero Licensed under the MIT license</p>

<pre>
<code>

The MIT License

Copyright (c) 2013 Rodrigo Ludgero, http://rodrigoludgero.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

</code>
</pre>
