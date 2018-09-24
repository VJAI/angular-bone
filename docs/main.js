(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./demo/demo.html":
/*!************************!*\
  !*** ./demo/demo.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"25% 1fr\"\n     bon-g-rows=\"12.5rem auto 1fr\"\n     bon-g-rows-md=\"12.5rem 1fr\"\n     bon-g-area=\"'h' 'a' 'm'\"\n     bon-g-area-md=\"'h h' 'a m'\">\n\n  <header bon-gi bon-gi-area=\"h\">\n    <div bon-f bon-f-align-items=\"center\">\n      <div bon-fi bon-fi-grow=\"1\">\n        <h1 class=\"logo\">angular<img src=\"assets/bone.png\" />bone</h1>\n        <p>Provides structure to your angular apps using CSS3 Grid and Flex</p>\n      </div>\n      <a class=\"github\" bon-fi bon-fi-align=\"flex-start\" target=\"_blank\" href=\"https://github.com/vjai/angular-bone\">GITHUB</a>\n    </div>\n  </header>\n\n  <aside #aside [class.sticky]=\"isSticky\" bon-gi bon-gi-area=\"a\">\n    <nav>\n      <h4>Table of Contents</h4>\n\n      <ul>\n        <li><a href=\"#intro\">Introduction</a></li>\n        <li><a href=\"#install\">Installation</a></li>\n        <li><a href=\"#flex-layouts\">Flex Layouts</a></li>\n        <li><a href=\"#grid-layouts\">Grid Layouts</a></li>\n        <li><a href=\"#mixing\">Mixing Grid and Flex</a></li>\n        <li><a href=\"#breakpoint-change\">Breakpoint Change Handler</a></li>\n        <li><a href=\"#service\">Media-Size Watcher Service</a></li>\n        <li><a href=\"#api\">API</a></li>\n        <li><a href=\"#license\">License</a></li>\n        <li><a href=\"#github\">Github</a></li>\n      </ul>\n    </nav>\n  </aside>\n\n  <main bon-gi bon-gi-area=\"m\">\n    <h1>angular-bone</h1>\n\n    <h2 id=\"intro\">Introduction</h2>\n\n    <p>\n      <a href=\"https://vjai.github.io/angular-bone/\">angular-bone</a> helps to build page layouts using CSS3 Grid and Flex concepts for your angular apps. It\n      provides you a set of directives that helps to build responsive layouts in a declarative way.\n    </p>\n\n    <p>\n      As default, it follows <a target=\"_blank\" href=\"https://getbootstrap.com/docs/4.0/layout/grid/#grid-options\">bootstrap's breakpoint system</a> that allows you to configure layouts for 5 different screen sizes (Extra Small,\n      Small - sm, Medium - md, Large - lg and Extra Large - xl). It also follows mobile-first approach.\n    </p>\n\n    <p>\n      The library also provides you a media-size watcher service that you can use anywhere in your application to listen to the breakpoint\n      changes and act accordingly.\n    </p>\n\n    <h2 id=\"install\">Installation</h2>\n\n    <p>\n      You can install the library from npm.\n    </p>\n\n<pre>\nnpm install angular-bone --save\n</pre>\n\n    <h2 id=\"flex-layouts\">Flex Layouts</h2>\n\n    <p>\n      You can create flex layouts using two directives: <var>bon-f</var> and <var>bon-fi</var>.&nbsp;&nbsp;<var>bon-f</var> is used to\n      configure the properties of a flex container and <var>bon-fi</var> is used to configure the properties of a flex item.\n    </p>\n\n    <h3>Simple flex layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-f</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-fi bon-fi-grow=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-flex-example\" class=\"canvas\" bon-f>\n      <div class=\"green\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"yellow\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"pink\" bon-fi bon-fi-grow=\"2\"></div>\n    </div>\n\n    <h3>Responsive flex layout</h3>\n\n    <p>\n      You can configure the properties for a particular screen size by suffixing the media size abbreviation (sm, md, lg and xl) after the\n      property name. If you don't specify any suffix then it's assumed for the extra small screen. If you want the same\n      configuration for all the screen sizes then ignore the suffix.\n    </p>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-f\n     bon-f-direction=\"column\"\n     bon-f-direction-md=\"row\"</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-fi bon-fi-grow=\"1\" bon-fi-grow-md=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-flex-example\" class=\"canvas\" bon-f bon-f-direction=\"column\" bon-f-direction-md=\"row\">\n      <div class=\"green\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"yellow\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"pink\" bon-fi bon-fi-grow=\"1\" bon-fi-grow-md=\"2\"></div>\n    </div>\n\n    <h2 id=\"grid-layouts\">Grid Layouts</h2>\n\n    <p>\n      You can create awesome grid layouts using two directives: <var>bon-g</var> and <var>bon-gi</var>. <var>bon-g</var> is used to\n      configure the properties of a grid container and <var>bon-gi</var> is used to configure the properties of a grid item.\n    </p>\n\n    <h3>Simple grid layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"30% 1fr\"\n     bon-g-rows=\"20% 1fr 10%\"\n     bon-g-area=\"'a a' 'b c' 'd d'\"</strong>&gt;\n  &lt;div class=\"purple\" <strong>bon-gi bon-gi-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-gi bon-gi-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-gi bon-gi-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-grid-example\" class=\"canvas\" bon-g bon-g-cols=\"30% 1fr\" bon-g-rows=\"20% 1fr 10%\" bon-g-area=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-gi bon-gi-area=\"a\"></div>\n      <div class=\"yellow\" bon-gi bon-gi-area=\"b\"></div>\n      <div class=\"green\" bon-gi bon-gi-area=\"c\"></div>\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h3>Responsive grid layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"30% 1fr\"\n     bon-g-rows=\"20% 30% 1fr 10%\"\n     bon-g-rows-md=\"20% 1fr 10%\"\n     bon-g-area=\"'a' 'b' 'c' 'd'\"\n     bon-g-area-md=\"'a a' 'b c' 'd d'\"</strong>&gt;\n  &lt;div class=\"purple\" <strong>bon-gi bon-gi-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-gi bon-gi-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-gi bon-gi-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-grid-example\" class=\"canvas\"\n         bon-g\n         bon-g-cols=\"1\"\n         bon-g-cols-md=\"30% 1fr\"\n         bon-g-rows=\"20% 30% 1fr 10%\"\n         bon-g-rows-md=\"20% 1fr 10%\"\n         bon-g-area=\"'a' 'b' 'c' 'd'\"\n         bon-g-area-md=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-gi bon-gi-area=\"a\"></div>\n      <div class=\"yellow\" bon-gi bon-gi-area=\"b\"></div>\n      <div class=\"green\" bon-gi bon-gi-area=\"c\"></div>\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h2 id=\"mixing\">Mixing grid and flex</h2>\n\n    <p>\n      You can mix both the grid and flex directives together. A grid item can be a flex container and a flex item can be a grid container.\n      Usually developers use grid for macro level arrangement and flex for micro level arrangement.\n    </p>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"30% 1fr\"\n     bon-g-rows=\"20% 30% 1fr 10%\"\n     bon-g-rows-md=\"20% 1fr 10%\"\n     bon-g-area=\"'a' 'b' 'c' 'd'\"\n     bon-g-area-md=\"'a a' 'b c' 'd d'\"</strong>&gt;\n\n  &lt;div class=\"purple\"\n       <strong>bon-gi\n       bon-gi-area=\"a\"\n       bon-f\n       bon-f-direction=\"row\"\n       bon-f-align-items=\"center\"</strong>&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n      &lt;div class=\"empty\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"yellow\"\n       <strong>bon-gi\n       bon-gi-area=\"b\"\n       bon-f\n       bon-f-direction=\"column\"</strong>&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"green\"\n      <strong>bon-gi\n       bon-gi-area=\"c\"\n       bon-f\n       bon-f-direction-md=\"column\"</strong>&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"2\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"mixing-grid-and-flex-example\" class=\"canvas\"\n         bon-g\n         bon-g-cols=\"1\"\n         bon-g-cols-md=\"30% 1fr\"\n         bon-g-rows=\"20% 30% 1fr 10%\"\n         bon-g-rows-md=\"20% 1fr 10%\"\n         bon-g-area=\"'a' 'b' 'c' 'd'\"\n         bon-g-area-md=\"'a a' 'b c' 'd d'\">\n\n      <div class=\"purple\"\n           bon-gi\n           bon-gi-area=\"a\"\n           bon-f\n           bon-f-direction=\"row\"\n           bon-f-align-items=\"center\">\n        <div class=\"grey\"></div>\n        <div class=\"grey\"></div>\n        <div class=\"empty\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\"></div>\n      </div>\n\n      <div class=\"yellow\"\n           bon-gi\n           bon-gi-area=\"b\"\n           bon-f\n           bon-f-direction=\"column\">\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n      </div>\n\n      <div class=\"green\" bon-gi bon-gi-area=\"c\" bon-f bon-f-direction-md=\"column\">\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"2\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n      </div>\n\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h2 id=\"breakpoint-change\">Breakpoint change handler</h2>\n\n    <p>\n      All the directives provides you an event called <code>breakpoint-change</code> to listen to breakpoint changes. You can either use this event or the <code>MediaSizeWatcher</code>\n      service to do some interesting when the screen size changes.\n    </p>\n\n<pre [innerHtml]=\"code1\">\n</pre>\n\n    <p>\n      The event argument contains the breakpoint, element and directive.\n    </p>\n\n    <h2 id=\"service\">Media-Size Watcher Service</h2>\n\n    <p>\n      The library also provides you a service to watch for breakpoint changes anywhere and act accordingly.\n    </p>\n\n<pre [innerHtml]=\"code2\">\n</pre>\n\n    <h2 id=\"api\">API</h2>\n\n    <h3>Flex Directives</h3>\n\n    <p>\n      You can use <var>bon-f</var> and <var>bon-fi</var> directives to do flex layout system for your pages.\n    </p>\n\n    <p>\n      Below tables lists the properties of both the directives. If default is not provided then it's assumed to be the\n      browser's default.\n    </p>\n\n    <table>\n      <caption>Properties of flex container directive <var>bon-f</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-f</td>\n        <td>string</td>\n        <td>flex</td>\n        <td>The display type of the container. The value can be either \"flex\", \"inline-flex\" or \"none\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-direction</td>\n        <td>string</td>\n        <td></td>\n        <td>The flex direction. It can be one of these values: \"row\", \"row-reverse\", \"column\" or \"column-reverse\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-wrap</td>\n        <td>string</td>\n        <td></td>\n        <td>Controls the wrapping behavior of flex items. It can be \"nowrap\", \"wrap\" or \"wrap-reverse\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-justify-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the alignment along the main axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      <tr>\n        <td>bon-f-align-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the default behaviour for how flex items are laid out along the cross axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      <tr>\n        <td>bon-f-align-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the alignment of individual items within the main-axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <p>\n      The above properties repeats for other screen sizes with the respective suffix. For example, in case of small screen\n      the properties are: <var>bon-f-sm</var>, <var>bon-f-direction-sm</var> and so on.\n    </p>\n\n    <table>\n      <caption>Properties of flex item directive <var>bon-fi</var></caption>\n      <thead>\n        <tr>\n          <th style=\"width: 25%\">Property Name</th>\n          <th style=\"width: 10%\">Type</th>\n          <th style=\"width: 10%\">Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-fi-order</td>\n        <td>number</td>\n        <td></td>\n        <td>Controls the order in which they appear in the flex container.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-grow</td>\n        <td>number</td>\n        <td></td>\n        <td>Defines the ability for a flex item to grow.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-shrink</td>\n        <td>number</td>\n        <td></td>\n        <td>Defines the ability for a flex item to shrink.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-basis</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the default size of an element before the remaining space is distributed.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-align</td>\n        <td>string</td>\n        <td></td>\n        <td>The default alignment of the item.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <p>\n      The above properties repeats for other screen sizes with the respective suffix.\n    </p>\n\n    <table>\n      <caption>Properties of grid directive <var>bon-g</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-g</td>\n        <td>string</td>\n        <td></td>\n        <td>The display type of grid container. The value can be either \"grid\", \"inline-grid\" or \"none\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-cols</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The columns configuration of grid. Passing number create that many equal size columns. You can also\n        pass an array of column values or a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-rows</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The columns configuration of grid. Passing number create that many equal size rows. You can also\n          pass an array of column values or a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-area</td>\n        <td>Array&lt;Array&lt;string&gt;&gt; | string</td>\n        <td></td>\n        <td>The area configuration. You can pass as an array of arrays or just a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-cols</td>\n        <td>number | string</td>\n        <td></td>\n        <td>The default size of auto-generated grid columns.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-rows</td>\n        <td>number | string</td>\n        <td></td>\n        <td>The default size of auto-generated grid rows.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-flow</td>\n        <td>string</td>\n        <td></td>\n        <td>Controls how auto-placed items get inserted in the grid. It's an enumeration and the values are \"row\", \"column\", \"row dense\" and \"column dense\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-gap</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The gap between rows and columns.</td>\n      </tr>\n      <tr>\n        <td>bon-g-justify-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid items along the row axis. Some of the possible values are \"start\", \"end\", \"center\" and \"stretch\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-align-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid items along the column axis. Some of the possible values are \"start\", \"end\", \"center\" and \"stretch\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-justify-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid along the row axis.</td>\n      </tr>\n      <tr>\n        <td>bon-g-align-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid along the column axis.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table>\n      <caption>Properties of grid directive <var>bon-g</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-gi-col</td>\n        <td>number | [number | string, number | string] | string</td>\n        <td></td>\n        <td>Passing a number will specify the spanning of the column. You can also specify the position as an array or string.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-row</td>\n        <td>number | [number | string, number | string] | string</td>\n        <td></td>\n        <td>Passing a number will specify the spanning of the row. You can also specify the position as an array or string.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-area</td>\n        <td>[number | string, number | string, number | string, number | string] | string</td>\n        <td></td>\n        <td>The area of the item.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-justify</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of a grid item inside a cell along the inline (row).</td>\n      </tr>\n      <tr>\n        <td>bon-gi-align</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of a grid item inside a cell along the inline (column).</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <h2 id=\"license\">License</h2>\n\n    <p>\n      MIT\n    </p>\n\n    <h2 id=\"github\">Github</h2>\n\n    <p>\n      The repo is hosted in Github <a target=\"_blank\" href=\"https://github.com/VJAI/angular-bone\">https://github.com/VJAI/angular-bone</a>. Please give a star if you like and feel\n      free to clone and raise pull requests.\n    </p>\n  </main>\n</div>\n"

/***/ }),

/***/ "./demo/demo.scss":
/*!************************!*\
  !*** ./demo/demo.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%; }\n  .container header {\n    background-color: #00bfff;\n    color: #efefef;\n    box-shadow: 0 3px 3px -3px #949a9c;\n    text-shadow: 0 1px 0 #949a9c;\n    z-index: 1; }\n  .container header div {\n      margin: 0 1rem 0 1rem; }\n  .container header div .logo {\n        font-size: 3.5rem;\n        font-family: 'Fredoka One', cursive;\n        letter-spacing: 1px; }\n  .container header div .logo img {\n          position: relative;\n          bottom: 5px;\n          margin: 0 5px; }\n  .container header div .github {\n        color: #fff;\n        margin-top: 1rem; }\n  .container aside {\n    background-color: #f2f4f4;\n    overflow: auto; }\n  .container aside nav {\n      padding-top: 20px; }\n  .container aside nav h4 {\n        font-size: 1.5rem;\n        text-align: center; }\n  .container aside nav ul {\n        text-transform: capitalize;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        font-size: 1.2rem;\n        font-weight: bold;\n        letter-spacing: 0.5px; }\n  .container aside nav ul li a {\n          padding: 0.5rem 0.75rem;\n          display: block;\n          text-align: center;\n          transition: all 0.25s;\n          color: #666; }\n  .container aside nav ul li a:hover {\n            background-color: #fff;\n            text-decoration: none; }\n  .container aside.sticky {\n      position: fixed;\n      top: 0;\n      height: 100%;\n      width: 25%; }\n  .container main {\n    padding: 2rem 4rem 10rem 4rem; }\n  .container main h1 {\n      border-bottom: solid 1px #eaefef; }\n  .container main .canvas {\n      background-color: #f2f2f2;\n      border-radius: 5px;\n      padding: 10px; }\n  .container main .canvas div:not(.empty) {\n        margin: 5px;\n        border-radius: 5px;\n        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n  .container main .green {\n      background-color: #c7e853; }\n  .container main .yellow {\n      background-color: #f2ef37; }\n  .container main .pink {\n      background-color: #ff2873; }\n  .container main .purple {\n      background-color: #a07df2; }\n  .container main .grey {\n      background-color: #eee; }\n  .container main #simple-flex-example, .container main #responsive-flex-example {\n      height: 300px; }\n  .container main #simple-grid-example, .container main #responsive-grid-example, .container main #mixing-grid-and-flex-example {\n      height: 500px; }\n  .container main #mixing-grid-and-flex-example .purple .grey {\n      width: 100px;\n      height: 20px; }\n  .container main #mixing-grid-and-flex-example .yellow, .container main #mixing-grid-and-flex-example .green {\n      padding: 20px; }\n  @media screen and (max-width: 575px) {\n  .container header div .logo {\n    font-size: 2.2rem; }\n    .container header div .logo img {\n      width: 20px; }\n  .container main {\n    padding: 2rem; } }\n"

/***/ }),

/***/ "./demo/demo.ts":
/*!**********************!*\
  !*** ./demo/demo.ts ***!
  \**********************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_bone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bone */ "./dist/angular-bone/fesm5/angular-bone.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DemoComponent = /** @class */ (function () {
    function DemoComponent(watcher, sanitized) {
        var _this = this;
        this.watcher = watcher;
        this.sanitized = sanitized;
        this.title = 'angular-bone';
        this.breakpoint = this.watcher.getCurrentMedia();
        this.setAside();
        this.mediaWatcherUnSubscribeFunction = this.watcher.watch(function (breakpoint) {
            _this.breakpoint = breakpoint;
            _this.setAside();
        });
        this.code1 = this.sanitized.bypassSecurityTrustHtml("&lt;div <strong>bon-g\n     bon-g-cols=\"30% 1fr\"\n     bon-g-rows=\"20% 1fr 10%\"\n     bon-g-area=\"'a a' 'b c' 'd d'\"</strong>\n     breakpoint-change=\"onBreakpointChange($event)\"&gt;\n     ...\n&lt;/div&gt;");
        this.code2 = this.sanitized.bypassSecurityTrustHtml("@Component({...})\npublic class TestComponent implements OnDestroy {\n\n  private mediaWatcherUnSubscribeFunction: () => void;\n\n  constructor(@Inject(MediaSizeWatcher) private mediaSizeWatcher: MediaSizeWatcher) {\n    this.mediaWatcherUnSubscribeFunction = this.watcher.watch((breakpoint: Breakpoint) => {\n      if (breakpoint == Breakpoint.ExtraLarge) {\n        // may be add some css class or change the style of the component?\n      }\n    });\n  }\n\n  ngOnDestroy() {\n    this.mediaWatcherUnSubscribeFunction();\n  }\n}");
    }
    DemoComponent.prototype.setAside = function () {
        if (!this.aside) {
            return;
        }
        if ([angular_bone__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"].Medium, angular_bone__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"].Large, angular_bone__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"].ExtraLarge].indexOf(this.breakpoint) > -1) {
            this.isSticky = window.pageYOffset >= this.initialOffset;
        }
        else {
            this.isSticky = false;
        }
    };
    DemoComponent.prototype.ngAfterViewInit = function () {
        this.initialOffset = this.aside.nativeElement.offsetTop;
    };
    DemoComponent.prototype.ngOnDestroy = function () {
        this.mediaWatcherUnSubscribeFunction && this.mediaWatcherUnSubscribeFunction();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('aside'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DemoComponent.prototype, "aside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DemoComponent.prototype, "setAside", null);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-root',
            template: __webpack_require__(/*! ./demo.html */ "./demo/demo.html"),
            styles: [__webpack_require__(/*! ./demo.scss */ "./demo/demo.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_bone__WEBPACK_IMPORTED_MODULE_3__["MediaSizeWatcher"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])),
        __metadata("design:paramtypes", [angular_bone__WEBPACK_IMPORTED_MODULE_3__["MediaSizeWatcher"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], DemoComponent);
    return DemoComponent;
}());
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                DemoComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_bone__WEBPACK_IMPORTED_MODULE_3__["BoneModule"]
            ],
            bootstrap: [DemoComponent]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo */ "./demo/demo.ts");


Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_demo__WEBPACK_IMPORTED_MODULE_1__["DemoModule"]);


/***/ }),

/***/ "./dist/angular-bone/fesm5/angular-bone.js":
/*!*************************************************!*\
  !*** ./dist/angular-bone/fesm5/angular-bone.js ***!
  \*************************************************/
/*! exports provided: BoneGrid, BoneGridItem, MediaSizeWatcher, Breakpoint, BoneModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGrid", function() { return BoneGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGridItem", function() { return BoneGridItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSizeWatcher", function() { return MediaSizeWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneModule", function() { return BoneModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BoneBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BoneFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BoneFlexItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var Breakpoint = {
    ExtraSmall: 'xs',
    Small: 'sm',
    Medium: 'md',
    Large: 'lg',
    ExtraLarge: 'xl',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MediaSizeWatcher = /** @class */ (function () {
    function MediaSizeWatcher(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.subscribers = [];
        this.mediaSizeQueryMap = new Map([
            [Breakpoint.ExtraLarge, window.matchMedia('(min-width: 1200px)')],
            [Breakpoint.Large, window.matchMedia('(min-width: 992px)')],
            [Breakpoint.Medium, window.matchMedia('(min-width: 768px)')],
            [Breakpoint.Small, window.matchMedia('(min-width: 576px)')],
            [Breakpoint.ExtraSmall, window.matchMedia('(min-width: 0)')]
        ]);
        this.listen = this.listen.bind(this);
        this.mediaSizeQueryMap.forEach(function (value) { return value.addListener(_this.listen); });
        this.listen();
    }
    /**
     * @return {?}
     */
    MediaSizeWatcher.prototype.getCurrentMedia = /**
     * @return {?}
     */
    function () {
        return this.currentMediaSize;
    };
    /**
     * @param {?} subscriber
     * @return {?}
     */
    MediaSizeWatcher.prototype.watch = /**
     * @param {?} subscriber
     * @return {?}
     */
    function (subscriber) {
        var _this = this;
        this.subscribers.push(subscriber);
        return function () { return _this.subscribers.splice(_this.subscribers.length - 1, 1); };
    };
    /**
     * @return {?}
     */
    MediaSizeWatcher.prototype.listen = /**
     * @return {?}
     */
    function () {
        try {
            for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.mediaSizeQueryMap), _b = _a.next(); !_b.done; _b = _a.next()) {
                var mediaSizeQuery = _b.value;
                var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(mediaSizeQuery, 2), mediaSize = _c[0], query = _c[1];
                if (query.matches) {
                    if (mediaSize !== this.currentMediaSize) {
                        this.currentMediaSize = mediaSize;
                        this.alertSubscribers();
                    }
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _d;
    };
    /**
     * @return {?}
     */
    MediaSizeWatcher.prototype.alertSubscribers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.subscribers.forEach(function (subscriber) { return subscriber(_this.currentMediaSize); });
        });
    };
    MediaSizeWatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MediaSizeWatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],] }] }
    ]; };
    /** @nocollapse */ MediaSizeWatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MediaSizeWatcher_Factory() { return new MediaSizeWatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: MediaSizeWatcher, providedIn: "root" });
    return MediaSizeWatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var BoneBase = /** @class */ (function () {
    function BoneBase(el, watcher) {
        var _this = this;
        this.el = el;
        this.watcher = watcher;
        this.breakpointChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.breakpoint = this.watcher.getCurrentMedia();
        this.mediaWatcherUnSubscribeFunction = this.watcher.watch(function (breakpoint) {
            _this.breakpoint = breakpoint;
            _this.applyLayout();
            _this.breakpointChange && _this.breakpointChange.emit({
                breakpoint: _this.breakpoint,
                el: _this.el,
                directive: _this
            });
        });
    }
    /**
     * @return {?}
     */
    BoneBase.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.applyLayout();
    };
    /**
     * @return {?}
     */
    BoneBase.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mediaWatcherUnSubscribeFunction();
        this.getStylePropNames().forEach(function (style) {
            _this.el.nativeElement.style.removeProperty(_this.toKebab(style));
        });
    };
    /**
     * @return {?}
     */
    BoneBase.prototype.applyLayout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var styles = this.getStyles();
        if (!styles) {
            return;
        }
        Object.keys(styles).filter(function (style) { return !styles[style]; })
            .forEach(function (style) { return _this.el.nativeElement.style.removeProperty(_this.toKebab(style)); });
        Object.keys(styles).filter(function (style) { return !!styles[style]; })
            .forEach(function (style) { return _this.el.nativeElement.style.setProperty(_this.toKebab(style), styles[style]); });
    };
    /**
     * @return {?}
     */
    BoneBase.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.ngOnDestroy();
    };
    /**
     * @param {?} arr
     * @return {?}
     */
    BoneBase.prototype.getValue = /**
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return arr.splice(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(this.breakpoint)).find(function (val) { return val; });
    };
    /**
     * @param {?} num
     * @return {?}
     */
    BoneBase.prototype.isNumeric = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return !isNaN(/** @type {?} */ (num));
    };
    /**
     * @param {?} str
     * @return {?}
     */
    BoneBase.prototype.toKebab = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };
    /** @nocollapse */
    BoneBase.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],] }] },
        { type: MediaSizeWatcher, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [MediaSizeWatcher,] }] }
    ]; };
    BoneBase.propDecorators = {
        breakpointChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['breakpoint-change',] }]
    };
    return BoneBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoneGrid = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoneGrid, _super);
    function BoneGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._display = 'grid';
        _this._displaySm = 'grid';
        _this._displayMd = 'grid';
        _this._displayLg = 'grid';
        _this._displayXl = 'grid';
        _this.currentStyles = null;
        return _this;
    }
    Object.defineProperty(BoneGrid.prototype, "display", {
        get: /**
         * @return {?}
         */
        function () {
            return this._display;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._display = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displaySm", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displaySm;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displaySm = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayMd", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayMd;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayMd = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayLg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayLg;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayLg = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayXl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayXl;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayXl = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BoneGrid.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newStyles = {
            display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
            gridTemplateColumns: this.getCols(),
            gridTemplateRows: this.getRows(),
            gridTemplateAreas: this.getAreas(),
            gridAutoColumns: this.getAutoCols(),
            gridAutoRows: this.getAutoRows(),
            gridGap: this.getGap(),
            justifyItems: this.getValue([this.justifyItemsXl, this.justifyItemsLg, this.justifyItemsMd, this.justifyItemsSm, this.justifyItems]),
            alignItems: this.getValue([this.alignItemsXl, this.alignItemsLg, this.alignItemsMd, this.alignItemsSm, this.alignItems]),
            justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg, this.justifyContentMd,
                this.justifyContentSm, this.justifyContent]),
            alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
        };
        if (this.currentStyles === null) {
            /** @type {?} */
            var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.display !== newStyles.display ||
            this.currentStyles.gridTemplateColumns !== newStyles.gridTemplateColumns ||
            this.currentStyles.gridTemplateRows !== newStyles.gridTemplateRows ||
            this.currentStyles.gridTemplateAreas !== newStyles.gridTemplateAreas ||
            this.currentStyles.gridAutoColumns !== newStyles.gridAutoColumns ||
            this.currentStyles.gridAutoRows !== newStyles.gridAutoRows ||
            this.currentStyles.gridGap !== newStyles.gridGap ||
            this.currentStyles.justifyItems !== newStyles.justifyItems ||
            this.currentStyles.alignItems !== newStyles.alignItems ||
            this.currentStyles.justifyContent !== newStyles.justifyContent ||
            this.currentStyles.alignContent !== newStyles.alignContent) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getStylePropNames = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.currentStyles || {});
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getCols = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cols = this.getValue([this.colsXl, this.colsLg, this.colsMd, this.colsSm, this.cols]);
        return this.getTracks(cols);
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getRows = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rows = this.getValue([this.rowsXl, this.rowsLg, this.rowsMd, this.rowsSm, this.rows]);
        return this.getTracks(rows);
    };
    /**
     * @param {?} tracks
     * @return {?}
     */
    BoneGrid.prototype.getTracks = /**
     * @param {?} tracks
     * @return {?}
     */
    function (tracks) {
        if (this.isNumeric(/** @type {?} */ (tracks))) {
            return "repeat(" + tracks + ", 1fr)";
        }
        else if (Array.isArray(tracks)) {
            return tracks.map(function (track) { return typeof track === 'number' ? track + "px" : track; }).join(' ');
        }
        return /** @type {?} */ (tracks);
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getAutoCols = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var colDefaultSize = this.getValue([this.autoColsXl, this.autoColsLg, this.autoColsMd, this.autoColsSm, this.autoCols]);
        return this.getTrackDefaultSize(colDefaultSize);
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getAutoRows = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rowDefaultSize = this.getValue([this.autoRowsXl, this.autoRowsLg, this.autoRowsMd, this.autoColsSm, this.autoRows]);
        return this.getTrackDefaultSize(rowDefaultSize);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    BoneGrid.prototype.getTrackDefaultSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        return this.isNumeric(size) ? size + "px" : /** @type {?} */ (size);
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getAreas = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return area.map(function (row) { return row.join(' '); }).reduce(function (areaStr, row, index) { return (index === 0 ? "'" + areaStr + "'" : areaStr) + " '" + row + "'"; });
        }
        return /** @type {?} */ (area);
    };
    /**
     * @return {?}
     */
    BoneGrid.prototype.getGap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var gridGap = this.getValue([this.gridGapXl, this.gridGapLg, this.gridGapMd, this.gridGapSm, this.gridGap]);
        if (this.isNumeric(gridGap)) {
            return gridGap + "px";
        }
        else if (Array.isArray(gridGap)) {
            return gridGap.map(function (g) { return typeof g === 'number' ? g + "px" : g; }).join(' ');
        }
        else {
            return gridGap;
        }
    };
    BoneGrid.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[bon-g]'
                },] }
    ];
    BoneGrid.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g',] }],
        cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-cols',] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-rows',] }],
        area: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-area',] }],
        autoCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-cols',] }],
        autoRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-rows',] }],
        autoFlow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-flow',] }],
        gridGap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-gap',] }],
        justifyItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-items',] }],
        alignItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-items',] }],
        justifyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-content',] }],
        alignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-content',] }],
        displaySm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-sm',] }],
        colsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-cols-sm',] }],
        rowsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-rows-sm',] }],
        areaSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-area-sm',] }],
        autoColsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-cols-sm',] }],
        autoRowsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-rows-sm',] }],
        autoFlowSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-flow-sm',] }],
        gridGapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-gap-sm',] }],
        justifyItemsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-items-sm',] }],
        alignItemsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-items-sm',] }],
        justifyContentSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-content-sm',] }],
        alignContentSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-content-sm',] }],
        displayMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-md',] }],
        colsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-cols-md',] }],
        rowsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-rows-md',] }],
        areaMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-area-md',] }],
        autoColsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-cols-md',] }],
        autoRowsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-rows-md',] }],
        autoFlowMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-flow-md',] }],
        gridGapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-gap-md',] }],
        justifyItemsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-items-md',] }],
        alignItemsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-items-md',] }],
        justifyContentMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-content-md',] }],
        alignContentMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-content-md',] }],
        displayLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-lg',] }],
        colsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-cols-lg',] }],
        rowsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-rows-lg',] }],
        areaLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-area-lg',] }],
        autoColsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-cols-lg',] }],
        autoRowsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-rows-lg',] }],
        autoFlowLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-flow-lg',] }],
        gridGapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-gap-lg',] }],
        justifyItemsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-items-lg',] }],
        alignItemsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-items-lg',] }],
        justifyContentLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-content-lg',] }],
        alignContentLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-content-lg',] }],
        displayXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-xl',] }],
        colsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-cols-xl',] }],
        rowsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-rows-xl',] }],
        areaXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-area-xl',] }],
        autoColsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-cols-xl',] }],
        autoRowsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-rows-xl',] }],
        autoFlowXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-auto-flow-xl',] }],
        gridGapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-gap-xl',] }],
        justifyItemsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-items-xl',] }],
        alignItemsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-items-xl',] }],
        justifyContentXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-justify-content-xl',] }],
        alignContentXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-g-align-content-xl',] }]
    };
    return BoneGrid;
}(BoneBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoneGridItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoneGridItem, _super);
    function BoneGridItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    /**
     * @return {?}
     */
    BoneGridItem.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newStyles = {
            justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align]),
            gridArea: this.getAreaInfo(),
            gridColumn: this.getCol(),
            gridRow: this.getRow()
        };
        if (this.currentStyles === null) {
            /** @type {?} */
            var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.justifySelf !== newStyles.justifySelf ||
            this.currentStyles.alignSelf !== newStyles.alignSelf ||
            this.currentStyles.gridArea !== newStyles.gridArea ||
            this.currentStyles.gridColumn !== newStyles.gridColumn ||
            this.currentStyles.gridRow !== newStyles.gridRow) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BoneGridItem.prototype.getStylePropNames = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.currentStyles || {});
    };
    /**
     * @return {?}
     */
    BoneGridItem.prototype.getCol = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var col = this.getValue([this.colXl, this.colLg, this.colMd, this.colSm, this.col]);
        return this.getTrackInfo(col);
    };
    /**
     * @return {?}
     */
    BoneGridItem.prototype.getRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var row = this.getValue([this.rowXl, this.rowLg, this.rowMd, this.rowSm, this.row]);
        return this.getTrackInfo(row);
    };
    /**
     * @param {?} track
     * @return {?}
     */
    BoneGridItem.prototype.getTrackInfo = /**
     * @param {?} track
     * @return {?}
     */
    function (track) {
        if (this.isNumeric(/** @type {?} */ (track))) {
            return "span " + track;
        }
        else if (Array.isArray(track)) {
            return track[0] + " / " + track[1];
        }
        return /** @type {?} */ (track);
    };
    /**
     * @return {?}
     */
    BoneGridItem.prototype.getAreaInfo = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return "" + area[0] / area[1] / area[2] / area[3];
        }
        return area;
    };
    BoneGridItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[bon-gi]'
                },] }
    ];
    BoneGridItem.propDecorators = {
        col: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-col',] }],
        row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-row',] }],
        area: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-area',] }],
        justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-justify',] }],
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-align',] }],
        colSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-col-sm',] }],
        rowSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-row-sm',] }],
        areaSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-area-sm',] }],
        justifySm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-justify-sm',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-align-sm',] }],
        colMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-col-md',] }],
        rowMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-row-md',] }],
        areaMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-area-md',] }],
        justifyMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-justify-md',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-align-md',] }],
        colLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-col-lg',] }],
        rowLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-row-lg',] }],
        areaLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-area-lg',] }],
        justifyLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-justify-lg',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-align-lg',] }],
        colXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-col-xl',] }],
        rowXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-row-xl',] }],
        areaXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-area-xl',] }],
        justifyXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-justify-xl',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-gi-align-xl',] }]
    };
    return BoneGridItem;
}(BoneBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoneFlex = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoneFlex, _super);
    function BoneFlex() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._display = 'flex';
        _this._displaySm = 'flex';
        _this._displayMd = 'flex';
        _this._displayLg = 'flex';
        _this._displayXl = 'flex';
        _this.currentStyles = null;
        return _this;
    }
    Object.defineProperty(BoneFlex.prototype, "display", {
        get: /**
         * @return {?}
         */
        function () {
            return this._display;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._display = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displaySm", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displaySm;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displaySm = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayMd", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayMd;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayMd = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayLg", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayLg;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayLg = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayXl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._displayXl;
        },
        set: /**
         * @param {?} display
         * @return {?}
         */
        function (display) {
            this._displayXl = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BoneFlex.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newStyles = {
            display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
            flexDirection: this.getValue([this.directionXl, this.directionLg, this.directionMd, this.directionSm, this.direction]),
            flexWrap: this.getValue([this.wrapXl, this.wrapLg, this.wrapMd, this.wrapSm, this.wrap]),
            justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg,
                this.justifyContentMd, this.justifyContentSm, this.justifyContent]),
            alignItems: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignItems]),
            alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
        };
        if (this.currentStyles === null) {
            /** @type {?} */
            var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.display !== newStyles.display ||
            this.currentStyles.flexDirection !== newStyles.flexDirection ||
            this.currentStyles.flexWrap !== newStyles.flexWrap ||
            this.currentStyles.justifyContent !== newStyles.justifyContent ||
            this.currentStyles.alignItems !== newStyles.alignItems ||
            this.currentStyles.alignContent !== newStyles.alignContent) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BoneFlex.prototype.getStylePropNames = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.currentStyles || {});
    };
    BoneFlex.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[bon-f]'
                },] }
    ];
    BoneFlex.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f',] }],
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-direction',] }],
        wrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-wrap',] }],
        justifyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-justify-content',] }],
        alignItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-items',] }],
        alignContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-content',] }],
        displaySm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-sm',] }],
        directionSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-direction-sm',] }],
        wrapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-wrap-sm',] }],
        justifyContentSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-justify-content-sm',] }],
        alignItemsSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-items-sm',] }],
        alignContentSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-content-sm',] }],
        displayMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-md',] }],
        directionMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-direction-md',] }],
        wrapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-wrap-md',] }],
        justifyContentMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-justify-content-md',] }],
        alignItemsMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-items-md',] }],
        alignContentMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-content-md',] }],
        displayLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-lg',] }],
        directionLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-direction-lg',] }],
        wrapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-wrap-lg',] }],
        justifyContentLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-justify-content-lg',] }],
        alignItemsLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-items-lg',] }],
        alignContentLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-content-lg',] }],
        displayXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-xl',] }],
        directionXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-direction-xl',] }],
        wrapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-wrap-xl',] }],
        justifyContentXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-justify-content-xl',] }],
        alignItemsXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-items-xl',] }],
        alignContentXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-f-align-content-xl',] }]
    };
    return BoneFlex;
}(BoneBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoneFlexItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoneFlexItem, _super);
    function BoneFlexItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    /**
     * @return {?}
     */
    BoneFlexItem.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newStyles = {
            flexOrder: this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]),
            flexGrow: this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]),
            flexShrink: this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]),
            flexBasis: this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
        };
        if (this.currentStyles === null) {
            /** @type {?} */
            var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
            this.currentStyles = hasValue ? newStyles : null;
            return this.currentStyles;
        }
        else if (this.currentStyles.flexOrder !== newStyles.flexOrder ||
            this.currentStyles.flexShrink !== newStyles.flexShrink ||
            this.currentStyles.flexBasis !== newStyles.flexBasis ||
            this.currentStyles.alignSelf !== newStyles.alignSelf) {
            this.currentStyles = newStyles;
            return this.currentStyles;
        }
        return null;
    };
    /**
     * @return {?}
     */
    BoneFlexItem.prototype.getStylePropNames = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.currentStyles || {});
    };
    BoneFlexItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[bon-fi]'
                },] }
    ];
    BoneFlexItem.propDecorators = {
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-order',] }],
        grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-grow',] }],
        shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-shrink',] }],
        basis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-basis',] }],
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-align',] }],
        orderSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-order-sm',] }],
        growSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-grow-sm',] }],
        shrinkSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-shrink-sm',] }],
        basisSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-basis-sm',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-align-sm',] }],
        orderMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-order-md',] }],
        growMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-grow-md',] }],
        shrinkMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-shrink-md',] }],
        basisMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-basis-md',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-align-md',] }],
        orderLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-order-lg',] }],
        growLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-grow-lg',] }],
        shrinkLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-shrink-lg',] }],
        basisLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-basis-lg',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-align-lg',] }],
        orderXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-order-xl',] }],
        growXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-grow-xl',] }],
        shrinkXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-shrink-xl',] }],
        basisXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-basis-xl',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['bon-fi-align-xl',] }]
    };
    return BoneFlexItem;
}(BoneBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BoneModule = /** @class */ (function () {
    function BoneModule() {
    }
    BoneModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        BoneFlex,
                        BoneFlexItem,
                        BoneGrid,
                        BoneGridItem
                    ],
                    providers: [
                        MediaSizeWatcher
                    ],
                    exports: [
                        BoneFlex,
                        BoneFlexItem,
                        BoneGrid,
                        BoneGridItem
                    ]
                },] }
    ];
    return BoneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1ib25lLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWJvbmUvYnJlYWtwb2ludC50cyIsIm5nOi8vYW5ndWxhci1ib25lL3dhdGNoZXIudHMiLCJuZzovL2FuZ3VsYXItYm9uZS9iYXNlLnRzIiwibmc6Ly9hbmd1bGFyLWJvbmUvYm9uZS5ncmlkLnRzIiwibmc6Ly9hbmd1bGFyLWJvbmUvYm9uZS5ncmlkaXRlbS50cyIsIm5nOi8vYW5ndWxhci1ib25lL2JvbmUuZmxleC50cyIsIm5nOi8vYW5ndWxhci1ib25lL2JvbmUuZmxleGl0ZW0udHMiLCJuZzovL2FuZ3VsYXItYm9uZS9ib25lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEJyZWFrcG9pbnQge1xuICBFeHRyYVNtYWxsID0gJ3hzJyxcbiAgU21hbGwgPSAnc20nLFxuICBNZWRpdW0gPSAnbWQnLFxuICBMYXJnZSA9ICdsZycsXG4gIEV4dHJhTGFyZ2UgPSAneGwnXG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludCB9IGZyb20gJy4vYnJlYWtwb2ludCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhU2l6ZVdhdGNoZXIge1xuXG4gIHByaXZhdGUgY3VycmVudE1lZGlhU2l6ZTogQnJlYWtwb2ludDtcblxuICBwcml2YXRlIHN1YnNjcmliZXJzOiBBcnJheTwoTWVkaWFRdWVyeUxpc3QpID0+IHZvaWQ+ID0gW107XG5cbiAgLy8gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4wL2xheW91dC9ncmlkLyNyZXNwb25zaXZlLWNsYXNzZXNcbiAgcHJpdmF0ZSBtZWRpYVNpemVRdWVyeU1hcDogTWFwPEJyZWFrcG9pbnQsIE1lZGlhUXVlcnlMaXN0PiA9IG5ldyBNYXA8QnJlYWtwb2ludCwgTWVkaWFRdWVyeUxpc3Q+KFtcbiAgICBbQnJlYWtwb2ludC5FeHRyYUxhcmdlLCB3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpXSxcbiAgICBbQnJlYWtwb2ludC5MYXJnZSwgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpXSxcbiAgICBbQnJlYWtwb2ludC5NZWRpdW0sIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKV0sXG4gICAgW0JyZWFrcG9pbnQuU21hbGwsIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiA1NzZweCknKV0sXG4gICAgW0JyZWFrcG9pbnQuRXh0cmFTbWFsbCwgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDApJyldXG4gIF0pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTmdab25lKSBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5saXN0ZW4gPSB0aGlzLmxpc3Rlbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMubWVkaWFTaXplUXVlcnlNYXAuZm9yRWFjaCgodmFsdWU6TWVkaWFRdWVyeUxpc3QpID0+IHZhbHVlLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuKSk7XG4gICAgdGhpcy5saXN0ZW4oKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50TWVkaWEoKTogQnJlYWtwb2ludCB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE1lZGlhU2l6ZTtcbiAgfVxuXG4gIHB1YmxpYyB3YXRjaChzdWJzY3JpYmVyOiAoTWVkaWFRdWVyeUxpc3QpID0+IHZvaWQpOiAoKSA9PiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuc3Vic2NyaWJlcnMuc3BsaWNlKHRoaXMuc3Vic2NyaWJlcnMubGVuZ3RoIC0gMSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbigpOiB2b2lkIHtcbiAgICBmb3IobGV0IG1lZGlhU2l6ZVF1ZXJ5IG9mIHRoaXMubWVkaWFTaXplUXVlcnlNYXApIHtcbiAgICAgIGNvbnN0IFttZWRpYVNpemUsIHF1ZXJ5XSA9IG1lZGlhU2l6ZVF1ZXJ5O1xuXG4gICAgICBpZiAocXVlcnkubWF0Y2hlcykge1xuICAgICAgICBpZiAobWVkaWFTaXplICE9PSB0aGlzLmN1cnJlbnRNZWRpYVNpemUpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNZWRpYVNpemUgPSBtZWRpYVNpemU7XG4gICAgICAgICAgdGhpcy5hbGVydFN1YnNjcmliZXJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFsZXJ0U3Vic2NyaWJlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIodGhpcy5jdXJyZW50TWVkaWFTaXplKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVha3BvaW50IH0gZnJvbSAnLi9icmVha3BvaW50JztcbmltcG9ydCB7IE1lZGlhU2l6ZVdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFrcG9pbnRDaGFuZ2VIYW5kbGVyQXJncyB7XG4gIGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQ7XG4gIGVsOiBFbGVtZW50UmVmO1xuICBkaXJlY3RpdmU6IGFueTtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJvbmVCYXNlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIEBPdXRwdXQoJ2JyZWFrcG9pbnQtY2hhbmdlJylcbiAgcHVibGljIGJyZWFrcG9pbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxCcmVha3BvaW50Q2hhbmdlSGFuZGxlckFyZ3M+ID0gbmV3IEV2ZW50RW1pdHRlcjxCcmVha3BvaW50Q2hhbmdlSGFuZGxlckFyZ3M+KCk7XG5cbiAgcHJvdGVjdGVkIGJyZWFrcG9pbnQ6IEJyZWFrcG9pbnQ7XG5cbiAgcHJvdGVjdGVkIG1lZGlhV2F0Y2hlclVuU3Vic2NyaWJlRnVuY3Rpb246ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChFbGVtZW50UmVmKSBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoTWVkaWFTaXplV2F0Y2hlcikgcHJvdGVjdGVkIHdhdGNoZXI6IE1lZGlhU2l6ZVdhdGNoZXIpIHtcbiAgICB0aGlzLmJyZWFrcG9pbnQgPSB0aGlzLndhdGNoZXIuZ2V0Q3VycmVudE1lZGlhKCk7XG4gICAgdGhpcy5tZWRpYVdhdGNoZXJVblN1YnNjcmliZUZ1bmN0aW9uID0gdGhpcy53YXRjaGVyLndhdGNoKChicmVha3BvaW50OiBCcmVha3BvaW50KSA9PiB7XG4gICAgICB0aGlzLmJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICAgICAgdGhpcy5hcHBseUxheW91dCgpO1xuICAgICAgdGhpcy5icmVha3BvaW50Q2hhbmdlICYmIHRoaXMuYnJlYWtwb2ludENoYW5nZS5lbWl0KHtcbiAgICAgICAgYnJlYWtwb2ludDogdGhpcy5icmVha3BvaW50LFxuICAgICAgICBlbDogdGhpcy5lbCxcbiAgICAgICAgZGlyZWN0aXZlOiB0aGlzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFwcGx5TGF5b3V0KCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tZWRpYVdhdGNoZXJVblN1YnNjcmliZUZ1bmN0aW9uKCk7XG4gICAgdGhpcy5nZXRTdHlsZVByb3BOYW1lcygpLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHRoaXMudG9LZWJhYihzdHlsZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFwcGx5TGF5b3V0KCk6IHZvaWQge1xuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZ2V0U3R5bGVzKCk7XG5cbiAgICBpZiAoIXN0eWxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZmlsdGVyKHN0eWxlID0+ICFzdHlsZXNbc3R5bGVdKVxuICAgICAgLmZvckVhY2goc3R5bGUgPT4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHRoaXMudG9LZWJhYihzdHlsZSkpKTtcblxuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZmlsdGVyKHN0eWxlID0+ICEhc3R5bGVzW3N0eWxlXSlcbiAgICAgIC5mb3JFYWNoKHN0eWxlID0+IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh0aGlzLnRvS2ViYWIoc3R5bGUpLCBzdHlsZXNbc3R5bGVdKSk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgZ2V0U3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgcHVibGljIGFic3RyYWN0IGdldFN0eWxlUHJvcE5hbWVzKCk6IEFycmF5PHN0cmluZz47XG5cbiAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKGFycjogQXJyYXk8YW55Pik6IGFueSB7XG4gICAgcmV0dXJuIGFyci5zcGxpY2UoWyd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddLmluZGV4T2YodGhpcy5icmVha3BvaW50KSkuZmluZCh2YWwgPT4gdmFsKTtcbiAgfVxuXG4gIHB1YmxpYyBpc051bWVyaWMobnVtOiBudW1iZXIgfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWlzTmFOKG51bSBhcyBudW1iZXIpO1xuICB9XG5cbiAgcHVibGljIHRvS2ViYWIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9uZUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDb250YWluZXJTdHlsZVByb3BzIHtcbiAgZGlzcGxheTogc3RyaW5nO1xuICBncmlkVGVtcGxhdGVDb2x1bW5zOiBzdHJpbmc7XG4gIGdyaWRUZW1wbGF0ZVJvd3M6IHN0cmluZztcbiAgZ3JpZFRlbXBsYXRlQXJlYXM6IHN0cmluZztcbiAgZ3JpZEF1dG9Db2x1bW5zOiBzdHJpbmc7XG4gIGdyaWRBdXRvUm93czogc3RyaW5nO1xuICBncmlkR2FwOiBzdHJpbmc7XG4gIGp1c3RpZnlJdGVtczogc3RyaW5nO1xuICBhbGlnbkl0ZW1zOiBzdHJpbmc7XG4gIGp1c3RpZnlDb250ZW50OiBzdHJpbmc7XG4gIGFsaWduQ29udGVudDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYm9uLWddJ1xufSlcbmV4cG9ydCBjbGFzcyBCb25lR3JpZCBleHRlbmRzIEJvbmVCYXNlIHtcblxuICBwcml2YXRlIF9kaXNwbGF5ID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgnYm9uLWcnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGlzcGxheShkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheSB8fCAnZ3JpZCc7XG4gIH1cblxuICBASW5wdXQoJ2Jvbi1nLWNvbHMnKVxuICBwdWJsaWMgY29sczogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLXJvd3MnKVxuICBwdWJsaWMgcm93czogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFyZWEnKVxuICBwdWJsaWMgYXJlYTogQXJyYXk8QXJyYXk8c3RyaW5nPj4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hdXRvLWNvbHMnKVxuICBwdWJsaWMgYXV0b0NvbHM6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWF1dG8tcm93cycpXG4gIHB1YmxpYyBhdXRvUm93czogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWctYXV0by1mbG93JylcbiAgcHVibGljIGF1dG9GbG93OiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1nYXAnKVxuICBwdWJsaWMgZ3JpZEdhcDogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWp1c3RpZnktaXRlbXMnKVxuICBwdWJsaWMganVzdGlmeUl0ZW1zOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1pdGVtcycpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1qdXN0aWZ5LWNvbnRlbnQnKVxuICBwdWJsaWMganVzdGlmeUNvbnRlbnQ6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFsaWduLWNvbnRlbnQnKVxuICBwdWJsaWMgYWxpZ25Db250ZW50OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheVNtID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgnYm9uLWctc20nKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlTbSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5U207XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3BsYXlTbShkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5U20gPSBkaXNwbGF5IHx8ICdncmlkJztcbiAgfVxuXG4gIEBJbnB1dCgnYm9uLWctY29scy1zbScpXG4gIHB1YmxpYyBjb2xzU206IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1yb3dzLXNtJylcbiAgcHVibGljIHJvd3NTbTogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFyZWEtc20nKVxuICBwdWJsaWMgYXJlYVNtOiBBcnJheTxBcnJheTxzdHJpbmc+PiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWF1dG8tY29scy1zbScpXG4gIHB1YmxpYyBhdXRvQ29sc1NtOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hdXRvLXJvd3Mtc20nKVxuICBwdWJsaWMgYXV0b1Jvd3NTbTogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWctYXV0by1mbG93LXNtJylcbiAgcHVibGljIGF1dG9GbG93U206IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWdhcC1zbScpXG4gIHB1YmxpYyBncmlkR2FwU206IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1qdXN0aWZ5LWl0ZW1zLXNtJylcbiAgcHVibGljIGp1c3RpZnlJdGVtc1NtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1pdGVtcy1zbScpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zU206IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWp1c3RpZnktY29udGVudC1zbScpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudFNtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1jb250ZW50LXNtJylcbiAgcHVibGljIGFsaWduQ29udGVudFNtOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheU1kID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgnYm9uLWctbWQnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlNZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3BsYXlNZChkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TWQgPSBkaXNwbGF5IHx8ICdncmlkJztcbiAgfVxuXG4gIEBJbnB1dCgnYm9uLWctY29scy1tZCcpXG4gIHB1YmxpYyBjb2xzTWQ6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1yb3dzLW1kJylcbiAgcHVibGljIHJvd3NNZDogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFyZWEtbWQnKVxuICBwdWJsaWMgYXJlYU1kOiBBcnJheTxBcnJheTxzdHJpbmc+PiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWF1dG8tY29scy1tZCcpXG4gIHB1YmxpYyBhdXRvQ29sc01kOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hdXRvLXJvd3MtbWQnKVxuICBwdWJsaWMgYXV0b1Jvd3NNZDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWctYXV0by1mbG93LW1kJylcbiAgcHVibGljIGF1dG9GbG93TWQ6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWdhcC1tZCcpXG4gIHB1YmxpYyBncmlkR2FwTWQ6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1qdXN0aWZ5LWl0ZW1zLW1kJylcbiAgcHVibGljIGp1c3RpZnlJdGVtc01kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1pdGVtcy1tZCcpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zTWQ6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWp1c3RpZnktY29udGVudC1tZCcpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudE1kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1jb250ZW50LW1kJylcbiAgcHVibGljIGFsaWduQ29udGVudE1kOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheUxnID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgnYm9uLWctbGcnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlMZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TGc7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3BsYXlMZyhkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TGcgPSBkaXNwbGF5IHx8ICdncmlkJztcbiAgfVxuXG4gIEBJbnB1dCgnYm9uLWctY29scy1sZycpXG4gIHB1YmxpYyBjb2xzTGc6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1yb3dzLWxnJylcbiAgcHVibGljIHJvd3NMZzogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFyZWEtbGcnKVxuICBwdWJsaWMgYXJlYUxnOiBBcnJheTxBcnJheTxzdHJpbmc+PiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWF1dG8tY29scy1sZycpXG4gIHB1YmxpYyBhdXRvQ29sc0xnOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hdXRvLXJvd3MtbGcnKVxuICBwdWJsaWMgYXV0b1Jvd3NMZzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWctYXV0by1mbG93LWxnJylcbiAgcHVibGljIGF1dG9GbG93TGc6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWdhcC1sZycpXG4gIHB1YmxpYyBncmlkR2FwTGc6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1qdXN0aWZ5LWl0ZW1zLWxnJylcbiAgcHVibGljIGp1c3RpZnlJdGVtc0xnOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1pdGVtcy1sZycpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zTGc6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWp1c3RpZnktY29udGVudC1sZycpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudExnOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1jb250ZW50LWxnJylcbiAgcHVibGljIGFsaWduQ29udGVudExnOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheVhsID0gJ2dyaWQnO1xuXG4gIEBJbnB1dCgnYm9uLWcteGwnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlYbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5WGw7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3BsYXlYbChkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5WGwgPSBkaXNwbGF5IHx8ICdncmlkJztcbiAgfVxuXG4gIEBJbnB1dCgnYm9uLWctY29scy14bCcpXG4gIHB1YmxpYyBjb2xzWGw6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1yb3dzLXhsJylcbiAgcHVibGljIHJvd3NYbDogbnVtYmVyIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWFyZWEteGwnKVxuICBwdWJsaWMgYXJlYVhsOiBBcnJheTxBcnJheTxzdHJpbmc+PiB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWF1dG8tY29scy14bCcpXG4gIHB1YmxpYyBhdXRvQ29sc1hsOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hdXRvLXJvd3MteGwnKVxuICBwdWJsaWMgYXV0b1Jvd3NYbDogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWctYXV0by1mbG93LXhsJylcbiAgcHVibGljIGF1dG9GbG93WGw6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWdhcC14bCcpXG4gIHB1YmxpYyBncmlkR2FwWGw6IG51bWJlciB8IEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1qdXN0aWZ5LWl0ZW1zLXhsJylcbiAgcHVibGljIGp1c3RpZnlJdGVtc1hsOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1pdGVtcy14bCcpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zWGw6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1nLWp1c3RpZnktY29udGVudC14bCcpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudFhsOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZy1hbGlnbi1jb250ZW50LXhsJylcbiAgcHVibGljIGFsaWduQ29udGVudFhsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjdXJyZW50U3R5bGVzOiBHcmlkQ29udGFpbmVyU3R5bGVQcm9wcyA9IG51bGw7XG5cbiAgcHVibGljIGdldFN0eWxlcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBuZXdTdHlsZXMgPSB7XG4gICAgICBkaXNwbGF5OiB0aGlzLmdldFZhbHVlKFt0aGlzLmRpc3BsYXlYbCwgdGhpcy5kaXNwbGF5TGcsIHRoaXMuZGlzcGxheU1kLCB0aGlzLmRpc3BsYXlTbSwgdGhpcy5kaXNwbGF5XSksXG4gICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiB0aGlzLmdldENvbHMoKSxcbiAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6IHRoaXMuZ2V0Um93cygpLFxuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IHRoaXMuZ2V0QXJlYXMoKSxcbiAgICAgIGdyaWRBdXRvQ29sdW1uczogdGhpcy5nZXRBdXRvQ29scygpLFxuICAgICAgZ3JpZEF1dG9Sb3dzOiB0aGlzLmdldEF1dG9Sb3dzKCksXG4gICAgICBncmlkR2FwOiB0aGlzLmdldEdhcCgpLFxuICAgICAganVzdGlmeUl0ZW1zOiB0aGlzLmdldFZhbHVlKFt0aGlzLmp1c3RpZnlJdGVtc1hsLCB0aGlzLmp1c3RpZnlJdGVtc0xnLCB0aGlzLmp1c3RpZnlJdGVtc01kLCB0aGlzLmp1c3RpZnlJdGVtc1NtLCB0aGlzLmp1c3RpZnlJdGVtc10pLFxuICAgICAgYWxpZ25JdGVtczogdGhpcy5nZXRWYWx1ZShbdGhpcy5hbGlnbkl0ZW1zWGwsIHRoaXMuYWxpZ25JdGVtc0xnLCB0aGlzLmFsaWduSXRlbXNNZCwgdGhpcy5hbGlnbkl0ZW1zU20sIHRoaXMuYWxpZ25JdGVtc10pLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuanVzdGlmeUNvbnRlbnRYbCwgdGhpcy5qdXN0aWZ5Q29udGVudExnLCB0aGlzLmp1c3RpZnlDb250ZW50TWQsXG4gICAgICAgIHRoaXMuanVzdGlmeUNvbnRlbnRTbSwgdGhpcy5qdXN0aWZ5Q29udGVudF0pLFxuICAgICAgYWxpZ25Db250ZW50OiB0aGlzLmdldFZhbHVlKFt0aGlzLmFsaWduQ29udGVudFhsLCB0aGlzLmFsaWduQ29udGVudExnLCB0aGlzLmFsaWduQ29udGVudE1kLCB0aGlzLmFsaWduQ29udGVudFNtLCB0aGlzLmFsaWduQ29udGVudF0pXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRTdHlsZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhhc1ZhbHVlID0gT2JqZWN0LnZhbHVlcyhuZXdTdHlsZXMpLmZpbHRlcihuZXdTdHlsZSA9PiAhIW5ld1N0eWxlKS5sZW5ndGggPiAwO1xuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzID0gaGFzVmFsdWUgPyBuZXdTdHlsZXMgOiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0eWxlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFN0eWxlcy5kaXNwbGF5ICE9PSBuZXdTdHlsZXMuZGlzcGxheSB8fFxuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzLmdyaWRUZW1wbGF0ZUNvbHVtbnMgIT09IG5ld1N0eWxlcy5ncmlkVGVtcGxhdGVDb2x1bW5zIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZ3JpZFRlbXBsYXRlUm93cyAhPT0gbmV3U3R5bGVzLmdyaWRUZW1wbGF0ZVJvd3MgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5ncmlkVGVtcGxhdGVBcmVhcyAhPT0gbmV3U3R5bGVzLmdyaWRUZW1wbGF0ZUFyZWFzIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZ3JpZEF1dG9Db2x1bW5zICE9PSBuZXdTdHlsZXMuZ3JpZEF1dG9Db2x1bW5zIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZ3JpZEF1dG9Sb3dzICE9PSBuZXdTdHlsZXMuZ3JpZEF1dG9Sb3dzIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZ3JpZEdhcCAhPT0gbmV3U3R5bGVzLmdyaWRHYXAgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5qdXN0aWZ5SXRlbXMgIT09IG5ld1N0eWxlcy5qdXN0aWZ5SXRlbXMgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5hbGlnbkl0ZW1zICE9PSBuZXdTdHlsZXMuYWxpZ25JdGVtcyB8fFxuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzLmp1c3RpZnlDb250ZW50ICE9PSBuZXdTdHlsZXMuanVzdGlmeUNvbnRlbnQgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5hbGlnbkNvbnRlbnQgIT09IG5ld1N0eWxlcy5hbGlnbkNvbnRlbnRcbiAgICApIHtcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcyA9IG5ld1N0eWxlcztcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdHlsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3R5bGVQcm9wTmFtZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudFN0eWxlcyB8fCB7fSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbHMoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb2xzID0gdGhpcy5nZXRWYWx1ZShbdGhpcy5jb2xzWGwsIHRoaXMuY29sc0xnLCB0aGlzLmNvbHNNZCwgdGhpcy5jb2xzU20sIHRoaXMuY29sc10pO1xuICAgIHJldHVybiB0aGlzLmdldFRyYWNrcyhjb2xzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93cygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLmdldFZhbHVlKFt0aGlzLnJvd3NYbCwgdGhpcy5yb3dzTGcsIHRoaXMucm93c01kLCB0aGlzLnJvd3NTbSwgdGhpcy5yb3dzXSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhY2tzKHJvd3MpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFja3ModHJhY2tzOiBudW1iZXIgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc051bWVyaWMoPG51bWJlciB8IHN0cmluZz50cmFja3MpKSB7XG4gICAgICByZXR1cm4gYHJlcGVhdCgke3RyYWNrc30sIDFmcilgO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0cmFja3MpKSB7XG4gICAgICByZXR1cm4gdHJhY2tzLm1hcCh0cmFjayA9PiB0eXBlb2YgdHJhY2sgPT09ICdudW1iZXInID8gYCR7dHJhY2t9cHhgIDogdHJhY2spLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gPHN0cmluZz50cmFja3M7XG4gIH1cblxuICBwcml2YXRlIGdldEF1dG9Db2xzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sRGVmYXVsdFNpemUgPSB0aGlzLmdldFZhbHVlKFt0aGlzLmF1dG9Db2xzWGwsIHRoaXMuYXV0b0NvbHNMZywgdGhpcy5hdXRvQ29sc01kLCB0aGlzLmF1dG9Db2xzU20sIHRoaXMuYXV0b0NvbHNdKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFja0RlZmF1bHRTaXplKGNvbERlZmF1bHRTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXV0b1Jvd3MoKTogc3RyaW5nIHtcbiAgICBjb25zdCByb3dEZWZhdWx0U2l6ZSA9IHRoaXMuZ2V0VmFsdWUoW3RoaXMuYXV0b1Jvd3NYbCwgdGhpcy5hdXRvUm93c0xnLCB0aGlzLmF1dG9Sb3dzTWQsIHRoaXMuYXV0b0NvbHNTbSwgdGhpcy5hdXRvUm93c10pO1xuICAgIHJldHVybiB0aGlzLmdldFRyYWNrRGVmYXVsdFNpemUocm93RGVmYXVsdFNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFja0RlZmF1bHRTaXplKHNpemU6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNOdW1lcmljKHNpemUpID8gYCR7c2l6ZX1weGAgOiA8c3RyaW5nPnNpemU7XG4gIH1cblxuICBwcml2YXRlIGdldEFyZWFzKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJlYSA9IHRoaXMuZ2V0VmFsdWUoW3RoaXMuYXJlYVhsLCB0aGlzLmFyZWFMZywgdGhpcy5hcmVhTWQsIHRoaXMuYXJlYVNtLCB0aGlzLmFyZWFdKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZWEpKSB7XG4gICAgICByZXR1cm4gYXJlYS5tYXAocm93ID0+IHJvdy5qb2luKCcgJykpLnJlZHVjZSgoYXJlYVN0ciwgcm93LCBpbmRleCkgPT4gYCR7aW5kZXggPT09IDAgPyBgJyR7YXJlYVN0cn0nYCA6IGFyZWFTdHJ9ICcke3Jvd30nYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxzdHJpbmc+YXJlYTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R2FwKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZ3JpZEdhcCA9IHRoaXMuZ2V0VmFsdWUoW3RoaXMuZ3JpZEdhcFhsLCB0aGlzLmdyaWRHYXBMZywgdGhpcy5ncmlkR2FwTWQsIHRoaXMuZ3JpZEdhcFNtLCB0aGlzLmdyaWRHYXBdKTtcblxuICAgIGlmICh0aGlzLmlzTnVtZXJpYyhncmlkR2FwKSkge1xuICAgICAgcmV0dXJuIGAke2dyaWRHYXB9cHhgO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShncmlkR2FwKSkge1xuICAgICAgcmV0dXJuIGdyaWRHYXAubWFwKGcgPT4gdHlwZW9mIGcgPT09ICdudW1iZXInID8gYCR7Z31weGAgOiBnKS5qb2luKCcgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBncmlkR2FwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9uZUJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRJdGVtU3R5bGVQcm9wcyB7XG4gIGp1c3RpZnlTZWxmOiBzdHJpbmc7XG4gIGFsaWduU2VsZjogc3RyaW5nO1xuICBncmlkQXJlYT86IHN0cmluZztcbiAgZ3JpZENvbHVtbj86IHN0cmluZztcbiAgZ3JpZFJvdz86IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Jvbi1naV0nXG59KVxuZXhwb3J0IGNsYXNzIEJvbmVHcmlkSXRlbSBleHRlbmRzIEJvbmVCYXNlIHtcblxuICBASW5wdXQoJ2Jvbi1naS1jb2wnKVxuICBwdWJsaWMgY29sOiBudW1iZXIgfCBbbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmddIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLXJvdycpXG4gIHB1YmxpYyByb3c6IG51bWJlciB8IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZ10gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktYXJlYScpXG4gIHB1YmxpYyBhcmVhOiBbbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nXSB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1qdXN0aWZ5JylcbiAgcHVibGljIGp1c3RpZnk6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1hbGlnbicpXG4gIHB1YmxpYyBhbGlnbjogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWNvbC1zbScpXG4gIHB1YmxpYyBjb2xTbTogbnVtYmVyIHwgW251bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nXSB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1yb3ctc20nKVxuICBwdWJsaWMgcm93U206IG51bWJlciB8IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZ10gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktYXJlYS1zbScpXG4gIHB1YmxpYyBhcmVhU206IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmddIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWp1c3RpZnktc20nKVxuICBwdWJsaWMganVzdGlmeVNtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktYWxpZ24tc20nKVxuICBwdWJsaWMgYWxpZ25TbTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWNvbC1tZCcpXG4gIHB1YmxpYyBjb2xNZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLXJvdy1tZCcpXG4gIHB1YmxpYyByb3dNZDogbnVtYmVyIHwgW251bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nXSB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1hcmVhLW1kJylcbiAgcHVibGljIGFyZWFNZDogW251bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZ10gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktanVzdGlmeS1tZCcpXG4gIHB1YmxpYyBqdXN0aWZ5TWQ6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1hbGlnbi1tZCcpXG4gIHB1YmxpYyBhbGlnbk1kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktY29sLWxnJylcbiAgcHVibGljIGNvbExnOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktcm93LWxnJylcbiAgcHVibGljIHJvd0xnOiBudW1iZXIgfCBbbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmddIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWFyZWEtbGcnKVxuICBwdWJsaWMgYXJlYUxnOiBbbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nXSB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1qdXN0aWZ5LWxnJylcbiAgcHVibGljIGp1c3RpZnlMZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWFsaWduLWxnJylcbiAgcHVibGljIGFsaWduTGc6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1jb2wteGwnKVxuICBwdWJsaWMgY29sWGw6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1naS1yb3cteGwnKVxuICBwdWJsaWMgcm93WGw6IG51bWJlciB8IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZ10gfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktYXJlYS14bCcpXG4gIHB1YmxpYyBhcmVhWGw6IFtudW1iZXIgfCBzdHJpbmcsIG51bWJlciB8IHN0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmddIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWdpLWp1c3RpZnkteGwnKVxuICBwdWJsaWMganVzdGlmeVhsOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZ2ktYWxpZ24teGwnKVxuICBwdWJsaWMgYWxpZ25YbDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudFN0eWxlczogR3JpZEl0ZW1TdHlsZVByb3BzID0gbnVsbDtcblxuICBwdWJsaWMgZ2V0U3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IG5ld1N0eWxlczogR3JpZEl0ZW1TdHlsZVByb3BzID0ge1xuICAgICAganVzdGlmeVNlbGY6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuanVzdGlmeVhsLCB0aGlzLmp1c3RpZnlMZywgdGhpcy5qdXN0aWZ5TWQsIHRoaXMuanVzdGlmeVNtLCB0aGlzLmp1c3RpZnldKSxcbiAgICAgIGFsaWduU2VsZjogdGhpcy5nZXRWYWx1ZShbdGhpcy5hbGlnblhsLCB0aGlzLmFsaWduTGcsIHRoaXMuYWxpZ25NZCwgdGhpcy5hbGlnblNtLCB0aGlzLmFsaWduXSksXG4gICAgICBncmlkQXJlYTogdGhpcy5nZXRBcmVhSW5mbygpLFxuICAgICAgZ3JpZENvbHVtbjogdGhpcy5nZXRDb2woKSxcbiAgICAgIGdyaWRSb3c6IHRoaXMuZ2V0Um93KClcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFN0eWxlcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaGFzVmFsdWUgPSBPYmplY3QudmFsdWVzKG5ld1N0eWxlcykuZmlsdGVyKG5ld1N0eWxlID0+ICEhbmV3U3R5bGUpLmxlbmd0aCA+IDA7XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMgPSBoYXNWYWx1ZSA/IG5ld1N0eWxlcyA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3R5bGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U3R5bGVzLmp1c3RpZnlTZWxmICE9PSBuZXdTdHlsZXMuanVzdGlmeVNlbGYgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5hbGlnblNlbGYgIT09IG5ld1N0eWxlcy5hbGlnblNlbGYgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5ncmlkQXJlYSAhPT0gbmV3U3R5bGVzLmdyaWRBcmVhIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZ3JpZENvbHVtbiAhPT0gbmV3U3R5bGVzLmdyaWRDb2x1bW4gfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5ncmlkUm93ICE9PSBuZXdTdHlsZXMuZ3JpZFJvdykge1xuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzID0gbmV3U3R5bGVzO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0eWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdHlsZVByb3BOYW1lcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jdXJyZW50U3R5bGVzIHx8IHt9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29sKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sID0gdGhpcy5nZXRWYWx1ZShbdGhpcy5jb2xYbCwgdGhpcy5jb2xMZywgdGhpcy5jb2xNZCwgdGhpcy5jb2xTbSwgdGhpcy5jb2xdKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFja0luZm8oY29sKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um93KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgcm93ID0gdGhpcy5nZXRWYWx1ZShbdGhpcy5yb3dYbCwgdGhpcy5yb3dMZywgdGhpcy5yb3dNZCwgdGhpcy5yb3dTbSwgdGhpcy5yb3ddKTtcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFja0luZm8ocm93KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHJhY2tJbmZvKHRyYWNrOiBudW1iZXIgfCBbbnVtYmVyIHwgc3RyaW5nLCBudW1iZXIgfCBzdHJpbmddIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc051bWVyaWMoPG51bWJlcj50cmFjaykpIHtcbiAgICAgIHJldHVybiBgc3BhbiAke3RyYWNrfWA7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRyYWNrKSkge1xuICAgICAgcmV0dXJuIGAke3RyYWNrWzBdfSAvICR7dHJhY2tbMV19YDtcbiAgICB9XG5cbiAgICByZXR1cm4gPHN0cmluZz50cmFjaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXJlYUluZm8oKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcmVhID0gdGhpcy5nZXRWYWx1ZShbdGhpcy5hcmVhWGwsIHRoaXMuYXJlYUxnLCB0aGlzLmFyZWFNZCwgdGhpcy5hcmVhU20sIHRoaXMuYXJlYV0pO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJlYSkpIHtcbiAgICAgIHJldHVybiBgJHthcmVhWzBdIC8gYXJlYVsxXSAvIGFyZWFbMl0gLyBhcmVhWzNdfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZWE7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvbmVCYXNlIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBGbGV4Q29udGFpbmVyU3R5bGVQcm9wcyB7XG4gIGRpc3BsYXk6IHN0cmluZztcbiAgZmxleERpcmVjdGlvbjogc3RyaW5nO1xuICBmbGV4V3JhcDogc3RyaW5nO1xuICBqdXN0aWZ5Q29udGVudDogc3RyaW5nO1xuICBhbGlnbkl0ZW1zOiBzdHJpbmc7XG4gIGFsaWduQ29udGVudDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYm9uLWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBCb25lRmxleCBleHRlbmRzIEJvbmVCYXNlIHtcblxuICBwcml2YXRlIF9kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gIEBJbnB1dCgnYm9uLWYnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGlzcGxheShkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5ID0gZGlzcGxheSB8fCAnZmxleCc7XG4gIH1cblxuICBASW5wdXQoJ2Jvbi1mLWRpcmVjdGlvbicpXG4gIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLXdyYXAnKVxuICBwdWJsaWMgd3JhcDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtanVzdGlmeS1jb250ZW50JylcbiAgcHVibGljIGp1c3RpZnlDb250ZW50OiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1hbGlnbi1pdGVtcycpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1hbGlnbi1jb250ZW50JylcbiAgcHVibGljIGFsaWduQ29udGVudDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlTbSA9ICdmbGV4JztcblxuICBASW5wdXQoJ2Jvbi1mLXNtJylcbiAgcHVibGljIGdldCBkaXNwbGF5U20oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVNtO1xuICB9XG5cbiAgcHVibGljIHNldCBkaXNwbGF5U20oZGlzcGxheTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheVNtID0gZGlzcGxheSB8fCAnZmxleCc7XG4gIH1cblxuICBASW5wdXQoJ2Jvbi1mLWRpcmVjdGlvbi1zbScpXG4gIHB1YmxpYyBkaXJlY3Rpb25TbTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtd3JhcC1zbScpXG4gIHB1YmxpYyB3cmFwU206IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLWp1c3RpZnktY29udGVudC1zbScpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudFNtOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1hbGlnbi1pdGVtcy1zbScpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zU206IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLWFsaWduLWNvbnRlbnQtc20nKVxuICBwdWJsaWMgYWxpZ25Db250ZW50U206IHN0cmluZztcblxuICBwcml2YXRlIF9kaXNwbGF5TWQgPSAnZmxleCc7XG5cbiAgQElucHV0KCdib24tZi1tZCcpXG4gIHB1YmxpYyBnZXQgZGlzcGxheU1kKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXlNZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgZGlzcGxheU1kKGRpc3BsYXk6IHN0cmluZykge1xuICAgIHRoaXMuX2Rpc3BsYXlNZCA9IGRpc3BsYXkgfHwgJ2ZsZXgnO1xuICB9XG5cbiAgQElucHV0KCdib24tZi1kaXJlY3Rpb24tbWQnKVxuICBwdWJsaWMgZGlyZWN0aW9uTWQ6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLXdyYXAtbWQnKVxuICBwdWJsaWMgd3JhcE1kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1qdXN0aWZ5LWNvbnRlbnQtbWQnKVxuICBwdWJsaWMganVzdGlmeUNvbnRlbnRNZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtYWxpZ24taXRlbXMtbWQnKVxuICBwdWJsaWMgYWxpZ25JdGVtc01kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1hbGlnbi1jb250ZW50LW1kJylcbiAgcHVibGljIGFsaWduQ29udGVudE1kOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGlzcGxheUxnID0gJ2ZsZXgnO1xuXG4gIEBJbnB1dCgnYm9uLWYtbGcnKVxuICBwdWJsaWMgZ2V0IGRpc3BsYXlMZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kaXNwbGF5TGc7XG4gIH1cblxuICBwdWJsaWMgc2V0IGRpc3BsYXlMZyhkaXNwbGF5OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNwbGF5TGcgPSBkaXNwbGF5IHx8ICdmbGV4JztcbiAgfVxuXG4gIEBJbnB1dCgnYm9uLWYtZGlyZWN0aW9uLWxnJylcbiAgcHVibGljIGRpcmVjdGlvbkxnOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi13cmFwLWxnJylcbiAgcHVibGljIHdyYXBMZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtanVzdGlmeS1jb250ZW50LWxnJylcbiAgcHVibGljIGp1c3RpZnlDb250ZW50TGc6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLWFsaWduLWl0ZW1zLWxnJylcbiAgcHVibGljIGFsaWduSXRlbXNMZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtYWxpZ24tY29udGVudC1sZycpXG4gIHB1YmxpYyBhbGlnbkNvbnRlbnRMZzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Rpc3BsYXlYbCA9ICdmbGV4JztcblxuICBASW5wdXQoJ2Jvbi1mLXhsJylcbiAgcHVibGljIGdldCBkaXNwbGF5WGwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGxheVhsO1xuICB9XG5cbiAgcHVibGljIHNldCBkaXNwbGF5WGwoZGlzcGxheTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzcGxheVhsID0gZGlzcGxheSB8fCAnZmxleCc7XG4gIH1cblxuICBASW5wdXQoJ2Jvbi1mLWRpcmVjdGlvbi14bCcpXG4gIHB1YmxpYyBkaXJlY3Rpb25YbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWYtd3JhcC14bCcpXG4gIHB1YmxpYyB3cmFwWGw6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLWp1c3RpZnktY29udGVudC14bCcpXG4gIHB1YmxpYyBqdXN0aWZ5Q29udGVudFhsOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZi1hbGlnbi1pdGVtcy14bCcpXG4gIHB1YmxpYyBhbGlnbkl0ZW1zWGw6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1mLWFsaWduLWNvbnRlbnQteGwnKVxuICBwdWJsaWMgYWxpZ25Db250ZW50WGw6IHN0cmluZztcblxuICBwcml2YXRlIGN1cnJlbnRTdHlsZXM6IEZsZXhDb250YWluZXJTdHlsZVByb3BzID0gbnVsbDtcblxuICBwdWJsaWMgZ2V0U3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIGRpc3BsYXk6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuZGlzcGxheVhsLCB0aGlzLmRpc3BsYXlMZywgdGhpcy5kaXNwbGF5TWQsIHRoaXMuZGlzcGxheVNtLCB0aGlzLmRpc3BsYXldKSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IHRoaXMuZ2V0VmFsdWUoW3RoaXMuZGlyZWN0aW9uWGwsIHRoaXMuZGlyZWN0aW9uTGcsIHRoaXMuZGlyZWN0aW9uTWQsIHRoaXMuZGlyZWN0aW9uU20sIHRoaXMuZGlyZWN0aW9uXSksXG4gICAgICBmbGV4V3JhcDogdGhpcy5nZXRWYWx1ZShbdGhpcy53cmFwWGwsIHRoaXMud3JhcExnLCB0aGlzLndyYXBNZCwgdGhpcy53cmFwU20sIHRoaXMud3JhcF0pLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuanVzdGlmeUNvbnRlbnRYbCwgdGhpcy5qdXN0aWZ5Q29udGVudExnLFxuICAgICAgICB0aGlzLmp1c3RpZnlDb250ZW50TWQsIHRoaXMuanVzdGlmeUNvbnRlbnRTbSwgdGhpcy5qdXN0aWZ5Q29udGVudF0pLFxuICAgICAgYWxpZ25JdGVtczogdGhpcy5nZXRWYWx1ZShbdGhpcy5hbGlnbkNvbnRlbnRYbCwgdGhpcy5hbGlnbkNvbnRlbnRMZywgdGhpcy5hbGlnbkNvbnRlbnRNZCwgdGhpcy5hbGlnbkNvbnRlbnRTbSwgdGhpcy5hbGlnbkl0ZW1zXSksXG4gICAgICBhbGlnbkNvbnRlbnQ6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuYWxpZ25Db250ZW50WGwsIHRoaXMuYWxpZ25Db250ZW50TGcsIHRoaXMuYWxpZ25Db250ZW50TWQsIHRoaXMuYWxpZ25Db250ZW50U20sIHRoaXMuYWxpZ25Db250ZW50XSlcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFN0eWxlcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgaGFzVmFsdWUgPSBPYmplY3QudmFsdWVzKG5ld1N0eWxlcykuZmlsdGVyKG5ld1N0eWxlID0+ICEhbmV3U3R5bGUpLmxlbmd0aCA+IDA7XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMgPSBoYXNWYWx1ZSA/IG5ld1N0eWxlcyA6IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3R5bGVzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50U3R5bGVzLmRpc3BsYXkgIT09IG5ld1N0eWxlcy5kaXNwbGF5IHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuZmxleERpcmVjdGlvbiAhPT0gbmV3U3R5bGVzLmZsZXhEaXJlY3Rpb24gfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5mbGV4V3JhcCAhPT0gbmV3U3R5bGVzLmZsZXhXcmFwIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuanVzdGlmeUNvbnRlbnQgIT09IG5ld1N0eWxlcy5qdXN0aWZ5Q29udGVudCB8fFxuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzLmFsaWduSXRlbXMgIT09IG5ld1N0eWxlcy5hbGlnbkl0ZW1zIHx8XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMuYWxpZ25Db250ZW50ICE9PSBuZXdTdHlsZXMuYWxpZ25Db250ZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdHlsZXMgPSBuZXdTdHlsZXM7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3R5bGVzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldFN0eWxlUHJvcE5hbWVzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRTdHlsZXMgfHwge30pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCb25lQmFzZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxleEl0ZW1TdHlsZVByb3BzIHtcbiAgZmxleE9yZGVyOiBzdHJpbmc7XG4gIGZsZXhHcm93OiBzdHJpbmc7XG4gIGZsZXhTaHJpbms6IHN0cmluZztcbiAgZmxleEJhc2lzOiBzdHJpbmc7XG4gIGFsaWduU2VsZjogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYm9uLWZpXSdcbn0pXG5leHBvcnQgY2xhc3MgQm9uZUZsZXhJdGVtIGV4dGVuZHMgQm9uZUJhc2Uge1xuXG4gIEBJbnB1dCgnYm9uLWZpLW9yZGVyJylcbiAgcHVibGljIG9yZGVyOiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktZ3JvdycpXG4gIHB1YmxpYyBncm93OiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktc2hyaW5rJylcbiAgcHVibGljIHNocmluazogbnVtYmVyO1xuXG4gIEBJbnB1dCgnYm9uLWZpLWJhc2lzJylcbiAgcHVibGljIGJhc2lzOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZmktYWxpZ24nKVxuICBwdWJsaWMgYWxpZ246IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1maS1vcmRlci1zbScpXG4gIHB1YmxpYyBvcmRlclNtOiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktZ3Jvdy1zbScpXG4gIHB1YmxpYyBncm93U206IG51bWJlcjtcblxuICBASW5wdXQoJ2Jvbi1maS1zaHJpbmstc20nKVxuICBwdWJsaWMgc2hyaW5rU206IG51bWJlcjtcblxuICBASW5wdXQoJ2Jvbi1maS1iYXNpcy1zbScpXG4gIHB1YmxpYyBiYXNpc1NtOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZmktYWxpZ24tc20nKVxuICBwdWJsaWMgYWxpZ25TbTogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWZpLW9yZGVyLW1kJylcbiAgcHVibGljIG9yZGVyTWQ6IG51bWJlcjtcblxuICBASW5wdXQoJ2Jvbi1maS1ncm93LW1kJylcbiAgcHVibGljIGdyb3dNZDogbnVtYmVyO1xuXG4gIEBJbnB1dCgnYm9uLWZpLXNocmluay1tZCcpXG4gIHB1YmxpYyBzaHJpbmtNZDogbnVtYmVyO1xuXG4gIEBJbnB1dCgnYm9uLWZpLWJhc2lzLW1kJylcbiAgcHVibGljIGJhc2lzTWQ6IG51bWJlciB8IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1maS1hbGlnbi1tZCcpXG4gIHB1YmxpYyBhbGlnbk1kOiBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZmktb3JkZXItbGcnKVxuICBwdWJsaWMgb3JkZXJMZzogbnVtYmVyO1xuXG4gIEBJbnB1dCgnYm9uLWZpLWdyb3ctbGcnKVxuICBwdWJsaWMgZ3Jvd0xnOiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktc2hyaW5rLWxnJylcbiAgcHVibGljIHNocmlua0xnOiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktYmFzaXMtbGcnKVxuICBwdWJsaWMgYmFzaXNMZzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIEBJbnB1dCgnYm9uLWZpLWFsaWduLWxnJylcbiAgcHVibGljIGFsaWduTGc6IHN0cmluZztcblxuICBASW5wdXQoJ2Jvbi1maS1vcmRlci14bCcpXG4gIHB1YmxpYyBvcmRlclhsOiBudW1iZXI7XG5cbiAgQElucHV0KCdib24tZmktZ3Jvdy14bCcpXG4gIHB1YmxpYyBncm93WGw6IG51bWJlcjtcblxuICBASW5wdXQoJ2Jvbi1maS1zaHJpbmsteGwnKVxuICBwdWJsaWMgc2hyaW5rWGw6IG51bWJlcjtcblxuICBASW5wdXQoJ2Jvbi1maS1iYXNpcy14bCcpXG4gIHB1YmxpYyBiYXNpc1hsOiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgQElucHV0KCdib24tZmktYWxpZ24teGwnKVxuICBwdWJsaWMgYWxpZ25YbDogc3RyaW5nO1xuXG4gIHByaXZhdGUgY3VycmVudFN0eWxlczogRmxleEl0ZW1TdHlsZVByb3BzID0gbnVsbDtcblxuICBwdWJsaWMgZ2V0U3R5bGVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IG5ld1N0eWxlcyA9IHtcbiAgICAgIGZsZXhPcmRlcjogdGhpcy5nZXRWYWx1ZShbdGhpcy5vcmRlclhsLCB0aGlzLm9yZGVyTGcsIHRoaXMub3JkZXJNZCwgdGhpcy5vcmRlclNtLCB0aGlzLm9yZGVyXSksXG4gICAgICBmbGV4R3JvdzogdGhpcy5nZXRWYWx1ZShbdGhpcy5ncm93WGwsIHRoaXMuZ3Jvd0xnLCB0aGlzLmdyb3dNZCwgdGhpcy5ncm93U20sIHRoaXMuZ3Jvd10pLFxuICAgICAgZmxleFNocmluazogdGhpcy5nZXRWYWx1ZShbdGhpcy5zaHJpbmtYbCwgdGhpcy5zaHJpbmtMZywgdGhpcy5zaHJpbmtNZCwgdGhpcy5zaHJpbmtTbSwgdGhpcy5zaHJpbmtdKSxcbiAgICAgIGZsZXhCYXNpczogdGhpcy5nZXRWYWx1ZShbdGhpcy5iYXNpc1hsLCB0aGlzLmJhc2lzTGcsIHRoaXMuYmFzaXNNZCwgdGhpcy5iYXNpc1NtLCB0aGlzLmJhc2lzXSksXG4gICAgICBhbGlnblNlbGY6IHRoaXMuZ2V0VmFsdWUoW3RoaXMuYWxpZ25YbCwgdGhpcy5hbGlnbkxnLCB0aGlzLmFsaWduTWQsIHRoaXMuYWxpZ25TbSwgdGhpcy5hbGlnbl0pXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRTdHlsZXMgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhhc1ZhbHVlID0gT2JqZWN0LnZhbHVlcyhuZXdTdHlsZXMpLmZpbHRlcihuZXdTdHlsZSA9PiAhIW5ld1N0eWxlKS5sZW5ndGggPiAwO1xuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzID0gaGFzVmFsdWUgPyBuZXdTdHlsZXMgOiBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0eWxlcztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFN0eWxlcy5mbGV4T3JkZXIgIT09IG5ld1N0eWxlcy5mbGV4T3JkZXIgfHxcbiAgICAgIHRoaXMuY3VycmVudFN0eWxlcy5mbGV4U2hyaW5rICE9PSBuZXdTdHlsZXMuZmxleFNocmluayB8fFxuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzLmZsZXhCYXNpcyAhPT0gbmV3U3R5bGVzLmZsZXhCYXNpcyB8fFxuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzLmFsaWduU2VsZiAhPT0gbmV3U3R5bGVzLmFsaWduU2VsZikge1xuICAgICAgdGhpcy5jdXJyZW50U3R5bGVzID0gbmV3U3R5bGVzO1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0eWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdHlsZVByb3BOYW1lcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jdXJyZW50U3R5bGVzIHx8IHt9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvbmVGbGV4IH0gZnJvbSAnLi9ib25lLmZsZXgnO1xuaW1wb3J0IHsgQm9uZUZsZXhJdGVtIH0gZnJvbSAnLi9ib25lLmZsZXhpdGVtJztcbmltcG9ydCB7IEJvbmVHcmlkIH0gZnJvbSAnLi9ib25lLmdyaWQnO1xuaW1wb3J0IHsgQm9uZUdyaWRJdGVtIH0gZnJvbSAnLi9ib25lLmdyaWRpdGVtJztcbmltcG9ydCB7IE1lZGlhU2l6ZVdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQm9uZUZsZXgsXG4gICAgQm9uZUZsZXhJdGVtLFxuICAgIEJvbmVHcmlkLFxuICAgIEJvbmVHcmlkSXRlbVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNZWRpYVNpemVXYXRjaGVyXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCb25lRmxleCxcbiAgICBCb25lRmxleEl0ZW0sXG4gICAgQm9uZUdyaWQsXG4gICAgQm9uZUdyaWRJdGVtXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQm9uZU1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyIsInRzbGliXzEuX19leHRlbmRzIl0sIm1h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

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/VijayaAnand/Git/angular-bone/demo/main.ts */"./demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map