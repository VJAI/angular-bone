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

module.exports = "<div class=\"container\"\n     bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"25% 1fr\"\n     bon-g-rows=\"12.5rem auto 1fr\"\n     bon-g-rows-md=\"12.5rem 1fr\"\n     bon-g-area=\"'h' 'a' 'm'\"\n     bon-g-area-md=\"'h h' 'a m'\">\n\n  <header bon-gi bon-gi-area=\"h\">\n    <div bon-f bon-f-align-items=\"center\">\n      <div bon-fi bon-fi-grow=\"1\">\n        <h1 class=\"logo\">angular<img src=\"assets/bone.png\" />bone</h1>\n        <p>Provides structure to your angular apps using CSS3 Grid and Flex</p>\n      </div>\n      <a class=\"github\" bon-fi bon-fi-align=\"flex-start\" target=\"_blank\" href=\"https://github.com/vjai/angular-bone\">GITHUB</a>\n    </div>\n  </header>\n\n  <aside #aside [class.sticky]=\"isSticky\" bon-gi bon-gi-area=\"a\">\n    <nav>\n      <h4>Table of Contents</h4>\n\n      <ul>\n        <li><a href=\"#intro\">Introduction</a></li>\n        <li><a href=\"#install\">Installation</a></li>\n        <li><a href=\"#flex-layouts\">Flex Layouts</a></li>\n        <li><a href=\"#grid-layouts\">Grid Layouts</a></li>\n        <li><a href=\"#mixing\">Mixing Grid and Flex</a></li>\n        <li><a href=\"#breakpoint-change\">Breakpoint Change Handler</a></li>\n        <li><a href=\"#service\">Media-Size Watcher Service</a></li>\n        <li><a href=\"#api\">API</a></li>\n        <li><a href=\"#license\">License</a></li>\n        <li><a href=\"#github\">Github</a></li>\n      </ul>\n    </nav>\n  </aside>\n\n  <main bon-gi bon-gi-area=\"m\">\n    <h1>angular-bone</h1>\n\n    <h2 id=\"intro\">Introduction</h2>\n\n    <p>\n      <a href=\"#\">angular-bone</a> helps to build page layouts using CSS3 Grid and Flex concepts for your angular apps. It\n      provides you a set of directives that helps to build responsive layouts in a <i>declarative way</i>.\n    </p>\n\n    <p>\n      As default, it follows <a target=\"_blank\" href=\"https://getbootstrap.com/docs/4.0/layout/grid/#grid-options\">bootstrap's breakpoint system</a> that allows you to configure layouts for 5 different screen sizes (Extra Small,\n      Small - sm, Medium - md, Large - lg and Extra Large - xl). It also follows mobile-first approach.\n    </p>\n\n    <p>\n      The library also provides you a media-size watcher service that you can use anywhere in your application to listen to the breakpoint\n      changes and act accordingly.\n    </p>\n\n    <h2 id=\"install\">Installation</h2>\n\n    <p>\n      You can install the library from npm.\n    </p>\n\n<pre>\nnpm install angular-bone --save\n</pre>\n\n    <h2 id=\"flex-layouts\">Flex Layouts</h2>\n\n    <p>\n      You can create flex layouts using two directives: <var>bon-f</var> and <var>bon-fi</var>.&nbsp;&nbsp;<var>bon-f</var> is used to\n      configure the properties of a flex container and <var>bon-fi</var> is used to configure the properties of a flex item.\n    </p>\n\n    <h3>Simple flex layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-f</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-fi bon-fi-grow=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-flex-example\" class=\"canvas\" bon-f>\n      <div class=\"green\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"yellow\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"pink\" bon-fi bon-fi-grow=\"2\"></div>\n    </div>\n\n    <h3>Responsive flex layout</h3>\n\n    <p>\n      You can configure the properties for a particular screen size by suffixing the media size abbreviation (sm, md, lg and xl) after the\n      property name. If you don't specify any suffix then it's assumed for the extra small screen. If you want the same\n      configuration for all the screen sizes then ignore the suffix.\n    </p>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-f\n     bon-f-direction=\"column\"\n     bon-f-direction-md=\"row\"</strong>&gt;\n  &lt;div class=\"green\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-fi bon-fi-grow=\"1\" bon-fi-grow-md=\"2\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-flex-example\" class=\"canvas\" bon-f bon-f-direction=\"column\" bon-f-direction-md=\"row\">\n      <div class=\"green\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"yellow\" bon-fi bon-fi-grow=\"1\"></div>\n      <div class=\"pink\" bon-fi bon-fi-grow=\"1\" bon-fi-grow-md=\"2\"></div>\n    </div>\n\n    <h2 id=\"grid-layouts\">Grid Layouts</h2>\n\n    <p>\n      You can create awesome grid layouts using two directives: <var>bon-g</var> and <var>bon-gi</var>. <var>bon-g</var> is used to\n      configure the properties of a grid container and <var>bon-gi</var> is used to configure the properties of a grid item.\n    </p>\n\n    <h3>Simple grid layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"30% 1fr\"\n     bon-g-rows=\"20% 1fr 10%\"\n     bon-g-area=\"'a a' 'b c' 'd d'\"</strong>&gt;\n  &lt;div class=\"purple\" <strong>bon-gi bon-gi-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-gi bon-gi-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-gi bon-gi-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"simple-grid-example\" class=\"canvas\" bon-g bon-g-cols=\"30% 1fr\" bon-g-rows=\"20% 1fr 10%\" bon-g-area=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-gi bon-gi-area=\"a\"></div>\n      <div class=\"yellow\" bon-gi bon-gi-area=\"b\"></div>\n      <div class=\"green\" bon-gi bon-gi-area=\"c\"></div>\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h3>Responsive grid layout</h3>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"30% 1fr\"\n     bon-g-rows=\"20% 30% 1fr 10%\"\n     bon-g-rows-md=\"20% 1fr 10%\"\n     bon-g-area=\"'a' 'b' 'c' 'd'\"\n     bon-g-area-md=\"'a a' 'b c' 'd d'\"</strong>&gt;\n  &lt;div class=\"purple\" <strong>bon-gi bon-gi-area=\"a\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"yellow\" <strong>bon-gi bon-gi-area=\"b\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"green\" <strong>bon-gi bon-gi-area=\"c\"</strong>&gt;&lt;/div&gt;\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview (Resize the window to see the changes)</h4>\n\n    <div id=\"responsive-grid-example\" class=\"canvas\"\n         bon-g\n         bon-g-cols=\"1\"\n         bon-g-cols-md=\"30% 1fr\"\n         bon-g-rows=\"20% 30% 1fr 10%\"\n         bon-g-rows-md=\"20% 1fr 10%\"\n         bon-g-area=\"'a' 'b' 'c' 'd'\"\n         bon-g-area-md=\"'a a' 'b c' 'd d'\">\n      <div class=\"purple\" bon-gi bon-gi-area=\"a\"></div>\n      <div class=\"yellow\" bon-gi bon-gi-area=\"b\"></div>\n      <div class=\"green\" bon-gi bon-gi-area=\"c\"></div>\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h2 id=\"mixing\">Mixing grid and flex</h2>\n\n    <h4>Code</h4>\n\n    <pre>\n&lt;div <strong>bon-g\n     bon-g-cols=\"1\"\n     bon-g-cols-md=\"30% 1fr\"\n     bon-g-rows=\"20% 30% 1fr 10%\"\n     bon-g-rows-md=\"20% 1fr 10%\"\n     bon-g-area=\"'a' 'b' 'c' 'd'\"\n     bon-g-area-md=\"'a a' 'b c' 'd d'\"</strong>&gt;\n\n  &lt;div class=\"purple\"\n       <strong>bon-gi\n       bon-gi-area=\"a\"\n       bon-f\n       bon-f-direction=\"row\"\n       bon-f-align-items=\"center\"</strong>&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n      &lt;div class=\"empty\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n      &lt;div class=\"grey\"&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"yellow\"\n       <strong>bon-gi\n       bon-gi-area=\"b\"\n       bon-f\n       bon-f-direction=\"column\"</strong>&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"green\"\n      <strong>bon-gi\n       bon-gi-area=\"c\"\n       bon-f\n       bon-f-direction-md=\"column\"</strong>&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"2\"</strong>&gt;&lt;/div&gt;\n    &lt;div class=\"grey\" <strong>bon-fi bon-fi-grow=\"1\"</strong>&gt;&lt;/div&gt;\n  &lt;/div&gt;\n\n  &lt;div class=\"pink\" <strong>bon-gi bon-gi-area=\"d\"</strong>&gt;&lt;/div&gt;\n&lt;/div&gt;</pre>\n\n    <h4>Preview</h4>\n\n    <div id=\"mixing-grid-and-flex-example\" class=\"canvas\"\n         bon-g\n         bon-g-cols=\"1\"\n         bon-g-cols-md=\"30% 1fr\"\n         bon-g-rows=\"20% 30% 1fr 10%\"\n         bon-g-rows-md=\"20% 1fr 10%\"\n         bon-g-area=\"'a' 'b' 'c' 'd'\"\n         bon-g-area-md=\"'a a' 'b c' 'd d'\">\n\n      <div class=\"purple\"\n           bon-gi\n           bon-gi-area=\"a\"\n           bon-f\n           bon-f-direction=\"row\"\n           bon-f-align-items=\"center\">\n        <div class=\"grey\"></div>\n        <div class=\"grey\"></div>\n        <div class=\"empty\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\"></div>\n      </div>\n\n      <div class=\"yellow\"\n           bon-gi\n           bon-gi-area=\"b\"\n           bon-f\n           bon-f-direction=\"column\">\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n      </div>\n\n      <div class=\"green\" bon-gi bon-gi-area=\"c\" bon-f bon-f-direction-md=\"column\">\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"2\"></div>\n        <div class=\"grey\" bon-fi bon-fi-grow=\"1\"></div>\n      </div>\n\n      <div class=\"pink\" bon-gi bon-gi-area=\"d\"></div>\n    </div>\n\n    <h2 id=\"breakpoint-change\">Breakpoint change handler</h2>\n\n    <p>\n      Lorem ipsum dolor....\n    </p>\n\n    <h2 id=\"service\">Media-Size Watcher Service</h2>\n\n    <p>\n      The library also provides you a service to watch for breakpoint changes anywhere and act accordingly.\n    </p>\n\n<pre>\nTODO\n</pre>\n\n    <h2 id=\"api\">API</h2>\n\n    <h3>Flex Directives</h3>\n\n    <p>\n      You can use <var>bon-f</var> and <var>bon-fi</var> directives to do flex layout system for your pages.\n    </p>\n\n    <p>\n      Below tables lists the properties of both the directives. If default is not provided then it's assumed to be the\n      browser's default.\n    </p>\n\n    <table>\n      <caption>Properties of flex container directive <var>bon-f</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-f</td>\n        <td>string</td>\n        <td>flex</td>\n        <td>The display type of the container. The value can be either \"flex\", \"inline-flex\" or \"none\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-direction</td>\n        <td>string</td>\n        <td></td>\n        <td>The flex direction. It can be one of these values: \"row\", \"row-reverse\", \"column\" or \"column-reverse\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-wrap</td>\n        <td>string</td>\n        <td></td>\n        <td>Controls the wrapping behavior of flex items. It can be \"nowrap\", \"wrap\" or \"wrap-reverse\".</td>\n      </tr>\n      <tr>\n        <td>bon-f-justify-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the alignment along the main axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      <tr>\n        <td>bon-f-align-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the default behaviour for how flex items are laid out along the cross axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      <tr>\n        <td>bon-f-align-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Defines the alignment of individual items within the main-axis. Some of the possible values are: \"flex-start\", \"flex-end\", \"center\" etc.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <p>\n      The above properties repeats for other screen sizes with the respective suffix. For example, in case of small screen\n      the properties are: <var>bon-f-sm</var>, <var>bon-f-direction-sm</var> and so on.\n    </p>\n\n    <table>\n      <caption>Properties of flex item directive <var>bon-fi</var></caption>\n      <thead>\n        <tr>\n          <th style=\"width: 25%\">Property Name</th>\n          <th style=\"width: 10%\">Type</th>\n          <th style=\"width: 10%\">Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-fi-order</td>\n        <td>number</td>\n        <td></td>\n        <td>Controls the order in which they appear in the flex container.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-grow</td>\n        <td></td>\n        <td></td>\n        <td>Defines the ability for a flex item to grow.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-shrink</td>\n        <td></td>\n        <td></td>\n        <td>Defines the ability for a flex item to shrink.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-basis</td>\n        <td></td>\n        <td></td>\n        <td>Defines the default size of an element before the remaining space is distributed.</td>\n      </tr>\n      <tr>\n        <td>bon-fi-align</td>\n        <td></td>\n        <td></td>\n        <td>The default alignment of the item.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <p>\n      The above properties repeats for other screen sizes with the respective suffix.\n    </p>\n\n    <table>\n      <caption>Properties of grid directive <var>bon-g</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-g</td>\n        <td>string</td>\n        <td></td>\n        <td>The display type of grid container. The value can be either \"grid\", \"inline-grid\" or \"none\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-cols</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The columns configuration of grid. Passing number create that many equal size columns. You can also\n        pass an array of column values or a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-rows</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The columns configuration of grid. Passing number create that many equal size rows. You can also\n          pass an array of column values or a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-area</td>\n        <td>Array&lt;Array&lt;string&gt;&gt; | string</td>\n        <td></td>\n        <td>The area configuration. You can pass as an array of arrays or just a string.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-cols</td>\n        <td>number | string</td>\n        <td></td>\n        <td>The default size of auto-generated grid columns.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-rows</td>\n        <td>number | string</td>\n        <td></td>\n        <td>The default size of auto-generated grid rows.</td>\n      </tr>\n      <tr>\n        <td>bon-g-auto-flow</td>\n        <td>string</td>\n        <td></td>\n        <td>Controls how auto-placed items get inserted in the grid. It's an enumeration and the values are \"row\", \"column\", \"row dense\" and \"column dense\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-gap</td>\n        <td>number | Array&lt;number | string&gt; | string</td>\n        <td></td>\n        <td>The gap between rows and columns.</td>\n      </tr>\n      <tr>\n        <td>bon-g-justify-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid items along the row axis. Some of the possible values are \"start\", \"end\", \"center\" and \"stretch\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-align-items</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid items along the column axis. Some of the possible values are \"start\", \"end\", \"center\" and \"stretch\".</td>\n      </tr>\n      <tr>\n        <td>bon-g-justify-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid along the row axis.</td>\n      </tr>\n      <tr>\n        <td>bon-g-align-content</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of grid along the column axis.</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <table>\n      <caption>Properties of grid directive <var>bon-g</var></caption>\n      <thead>\n      <tr>\n        <th style=\"width: 25%\">Property Name</th>\n        <th style=\"width: 10%\">Type</th>\n        <th style=\"width: 10%\">Default</th>\n        <th>Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>bon-gi-col</td>\n        <td>number | [number | string, number | string] | string</td>\n        <td></td>\n        <td>Passing a number will specify the spanning of the column. You can also specify the position as an array or string.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-row</td>\n        <td>number | [number | string, number | string] | string</td>\n        <td></td>\n        <td>Passing a number will specify the spanning of the row. You can also specify the position as an array or string.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-area</td>\n        <td>[number | string, number | string, number | string, number | string] | string</td>\n        <td></td>\n        <td>The area of the item.</td>\n      </tr>\n      <tr>\n        <td>bon-gi-justify</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of a grid item inside a cell along the inline (row).</td>\n      </tr>\n      <tr>\n        <td>bon-gi-align</td>\n        <td>string</td>\n        <td></td>\n        <td>Specifies the alignment of a grid item inside a cell along the inline (column).</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <h2 id=\"license\">License</h2>\n\n    <p>\n      MIT\n    </p>\n\n    <h2 id=\"github\">Github</h2>\n\n    <p>\n      The repo is hosted in Github <a target=\"_blank\" href=\"https://github.com/VJAI/angular-bone\">https://github.com/VJAI/angular-bone</a>. Please give a star if you like and feel\n      free to clone and raise pull requests.\n    </p>\n  </main>\n</div>\n"

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
/* harmony import */ var _lib_bone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/bone */ "./lib/bone.ts");
/* harmony import */ var _lib_watcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/watcher */ "./lib/watcher.ts");
/* harmony import */ var _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/breakpoint */ "./lib/breakpoint.ts");
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
    function DemoComponent(watcher) {
        var _this = this;
        this.watcher = watcher;
        this.title = 'angular-bone';
        this.breakpoint = this.watcher.getCurrentMedia();
        this.setAside();
        this.mediaWatcherUnSubscribeFunction = this.watcher.watch(function (breakpoint) {
            _this.breakpoint = breakpoint;
            _this.setAside();
        });
    }
    DemoComponent.prototype.setAside = function () {
        if (!this.aside) {
            return;
        }
        if ([_lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__["Breakpoint"].Medium, _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__["Breakpoint"].Large, _lib_breakpoint__WEBPACK_IMPORTED_MODULE_5__["Breakpoint"].ExtraLarge].indexOf(this.breakpoint) > -1) {
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
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_lib_watcher__WEBPACK_IMPORTED_MODULE_4__["MediaSizeWatcher"])),
        __metadata("design:paramtypes", [_lib_watcher__WEBPACK_IMPORTED_MODULE_4__["MediaSizeWatcher"]])
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
                _lib_bone__WEBPACK_IMPORTED_MODULE_3__["BoneModule"]
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

/***/ "./lib/base.ts":
/*!*********************!*\
  !*** ./lib/base.ts ***!
  \*********************/
/*! exports provided: BoneBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneBase", function() { return BoneBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watcher */ "./lib/watcher.ts");
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


var BoneBase = /** @class */ (function () {
    function BoneBase(el, watcher) {
        var _this = this;
        this.el = el;
        this.watcher = watcher;
        this.breakpointChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentAppliedStyles = null;
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
    BoneBase.prototype.ngOnChanges = function () {
        this.applyLayout();
    };
    BoneBase.prototype.ngOnDestroy = function () {
        var _this = this;
        this.mediaWatcherUnSubscribeFunction();
        this.getStylePropNames().forEach(function (style) {
            _this.el.nativeElement.style.removeProperty(style);
        });
    };
    BoneBase.prototype.applyLayout = function () {
        var _this = this;
        var styles = this.getStyles();
        if (!styles) {
            return;
        }
        Object.keys(styles).forEach(function (style) {
            var value = styles[style];
            if (value) {
                _this.el.nativeElement.style.setProperty(_this.toKebab(style), value);
            }
            else {
                _this.el.nativeElement.style.removeProperty(_this.toCamel(style));
            }
        });
    };
    BoneBase.prototype.destroy = function () {
        this.ngOnDestroy();
    };
    BoneBase.prototype.getValue = function (arr) {
        return arr.splice(['xl', 'lg', 'md', 'sm', 'xs'].indexOf(this.breakpoint)).find(function (val) { return val; });
    };
    BoneBase.prototype.isNumeric = function (num) {
        return !isNaN(num);
    };
    BoneBase.prototype.toKebab = function (str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    };
    BoneBase.prototype.toCamel = function (str) {
        return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('breakpoint-change'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BoneBase.prototype, "breakpointChange", void 0);
    BoneBase = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_watcher__WEBPACK_IMPORTED_MODULE_1__["MediaSizeWatcher"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _watcher__WEBPACK_IMPORTED_MODULE_1__["MediaSizeWatcher"]])
    ], BoneBase);
    return BoneBase;
}());



/***/ }),

/***/ "./lib/bone.flex.ts":
/*!**************************!*\
  !*** ./lib/bone.flex.ts ***!
  \**************************/
/*! exports provided: BoneFlex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneFlex", function() { return BoneFlex; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneFlex = /** @class */ (function (_super) {
    __extends(BoneFlex, _super);
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
        get: function () {
            return this._display;
        },
        set: function (display) {
            this._display = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displaySm", {
        get: function () {
            return this._displaySm;
        },
        set: function (display) {
            this._displaySm = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayMd", {
        get: function () {
            return this._displayMd;
        },
        set: function (display) {
            this._displayMd = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayLg", {
        get: function () {
            return this._displayLg;
        },
        set: function (display) {
            this._displayLg = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneFlex.prototype, "displayXl", {
        get: function () {
            return this._displayXl;
        },
        set: function (display) {
            this._displayXl = display || 'flex';
        },
        enumerable: true,
        configurable: true
    });
    BoneFlex.prototype.getStyles = function () {
        var newStyles = {
            display: this.getValue([this.displayXl, this.displayLg, this.displayMd, this.displaySm, this.display]),
            flexDirection: this.getValue([this.directionXl, this.directionLg, this.directionMd, this.directionSm, this.direction]),
            flexWrap: this.getValue([this.wrapXl, this.wrapLg, this.wrapMd, this.wrapSm, this.wrap]),
            justifyContent: this.getValue([this.justifyContentXl, this.justifyContentLg,
                this.justifyContentMd, this.justifyContentSm, this.justifyContent]),
            alignItems: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignItems]),
            alignContent: this.getValue([this.alignContentXl, this.alignContentLg, this.alignContentMd, this.alignContentSm, this.alignContent])
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
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
    BoneFlex.prototype.getStylePropNames = function () {
        return ['display', 'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "display", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-direction'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "direction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-wrap'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-justify-content'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-items'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-content'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-sm'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displaySm", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-direction-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-wrap-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-justify-content-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-items-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-content-sm'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-md'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayMd", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-direction-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-wrap-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-justify-content-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-items-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-content-md'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-lg'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayLg", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-direction-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-wrap-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-justify-content-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-items-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-content-lg'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-xl'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneFlex.prototype, "displayXl", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-direction-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "directionXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-wrap-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "wrapXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-justify-content-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "justifyContentXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-items-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-f-align-content-xl'),
        __metadata("design:type", String)
    ], BoneFlex.prototype, "alignContentXl", void 0);
    BoneFlex = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-f]'
        })
    ], BoneFlex);
    return BoneFlex;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.flexitem.ts":
/*!******************************!*\
  !*** ./lib/bone.flexitem.ts ***!
  \******************************/
/*! exports provided: BoneFlexItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneFlexItem", function() { return BoneFlexItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneFlexItem = /** @class */ (function (_super) {
    __extends(BoneFlexItem, _super);
    function BoneFlexItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    BoneFlexItem.prototype.getStyles = function () {
        var newStyles = {
            flexOrder: this.getValue([this.orderXl, this.orderLg, this.orderMd, this.orderSm, this.order]),
            flexGrow: this.getValue([this.growXl, this.growLg, this.growMd, this.growSm, this.grow]),
            flexShrink: this.getValue([this.shrinkXl, this.shrinkLg, this.shrinkMd, this.shrinkSm, this.shrink]),
            flexBasis: this.getValue([this.basisXl, this.basisLg, this.basisMd, this.basisSm, this.basis]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align])
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
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
    BoneFlexItem.prototype.getStylePropNames = function () {
        return ['order', 'grow', 'shrink', 'basis', 'align'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-order'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "order", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-grow'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "grow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-shrink'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-basis'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-align'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-order-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-grow-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-shrink-sm'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-basis-sm'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-align-sm'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-order-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-grow-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-shrink-md'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-basis-md'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-align-md'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-order-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-grow-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-shrink-lg'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-basis-lg'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-align-lg'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-order-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "orderXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-grow-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "growXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-shrink-xl'),
        __metadata("design:type", Number)
    ], BoneFlexItem.prototype, "shrinkXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-basis-xl'),
        __metadata("design:type", Object)
    ], BoneFlexItem.prototype, "basisXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-fi-align-xl'),
        __metadata("design:type", String)
    ], BoneFlexItem.prototype, "alignXl", void 0);
    BoneFlexItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-fi]'
        })
    ], BoneFlexItem);
    return BoneFlexItem;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.grid.ts":
/*!**************************!*\
  !*** ./lib/bone.grid.ts ***!
  \**************************/
/*! exports provided: BoneGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGrid", function() { return BoneGrid; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneGrid = /** @class */ (function (_super) {
    __extends(BoneGrid, _super);
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
        get: function () {
            return this._display;
        },
        set: function (display) {
            this._display = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displaySm", {
        get: function () {
            return this._displaySm;
        },
        set: function (display) {
            this._displaySm = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayMd", {
        get: function () {
            return this._displayMd;
        },
        set: function (display) {
            this._displayMd = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayLg", {
        get: function () {
            return this._displayLg;
        },
        set: function (display) {
            this._displayLg = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoneGrid.prototype, "displayXl", {
        get: function () {
            return this._displayXl;
        },
        set: function (display) {
            this._displayXl = display || 'grid';
        },
        enumerable: true,
        configurable: true
    });
    BoneGrid.prototype.getStyles = function () {
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
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
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
    BoneGrid.prototype.getStylePropNames = function () {
        return [
            'display',
            'grid-template-columns',
            'grid-template-rows',
            'grid-template-areas',
            'grid-auto-columns',
            'grid-auto-rows',
            'grid-gap',
            'justify-items',
            'align-items',
            'justify-content',
            'align-content'
        ];
    };
    BoneGrid.prototype.getCols = function () {
        var cols = this.getValue([this.colsXl, this.colsLg, this.colsMd, this.colsSm, this.cols]);
        return this.getTracks(cols);
    };
    BoneGrid.prototype.getRows = function () {
        var rows = this.getValue([this.rowsXl, this.rowsLg, this.rowsMd, this.rowsSm, this.rows]);
        return this.getTracks(rows);
    };
    BoneGrid.prototype.getTracks = function (tracks) {
        if (this.isNumeric(tracks)) {
            return "repeat(" + tracks + ", 1fr)";
        }
        else if (Array.isArray(tracks)) {
            return tracks.map(function (track) { return typeof track === 'number' ? track + "px" : track; }).join(' ');
        }
        return tracks;
    };
    BoneGrid.prototype.getAutoCols = function () {
        var colDefaultSize = this.getValue([this.autoColsXl, this.autoColsLg, this.autoColsMd, this.autoColsSm, this.autoCols]);
        return this.getTrackDefaultSize(colDefaultSize);
    };
    BoneGrid.prototype.getAutoRows = function () {
        var rowDefaultSize = this.getValue([this.autoRowsXl, this.autoRowsLg, this.autoRowsMd, this.autoColsSm, this.autoRows]);
        return this.getTrackDefaultSize(rowDefaultSize);
    };
    BoneGrid.prototype.getTrackDefaultSize = function (size) {
        return this.isNumeric(size) ? size + "px" : size;
    };
    BoneGrid.prototype.getAreas = function () {
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return area.map(function (row) { return row.join(' '); }).reduce(function (areaStr, row, index) { return (index === 0 ? "'" + areaStr + "'" : areaStr) + " '" + row + "'"; });
        }
        return area;
    };
    BoneGrid.prototype.getGap = function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "display", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-cols'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "cols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-rows'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-area'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "area", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-cols'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoCols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-rows'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-flow'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-gap'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-items'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-items'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-content'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-content'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-sm'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displaySm", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-cols-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-rows-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-area-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-cols-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-rows-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-flow-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-gap-sm'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-items-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-items-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-content-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-content-sm'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-md'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayMd", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-cols-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-rows-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-area-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-cols-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-rows-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-flow-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-gap-md'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-items-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-items-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-content-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-content-md'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-lg'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayLg", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-cols-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-rows-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-area-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-cols-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-rows-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-flow-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-gap-lg'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-items-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-items-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-content-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-content-lg'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-xl'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], BoneGrid.prototype, "displayXl", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-cols-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "colsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-rows-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "rowsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-area-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "areaXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-cols-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoColsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-rows-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "autoRowsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-auto-flow-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "autoFlowXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-gap-xl'),
        __metadata("design:type", Object)
    ], BoneGrid.prototype, "gridGapXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-items-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-items-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignItemsXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-justify-content-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "justifyContentXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-g-align-content-xl'),
        __metadata("design:type", String)
    ], BoneGrid.prototype, "alignContentXl", void 0);
    BoneGrid = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-g]'
        })
    ], BoneGrid);
    return BoneGrid;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.griditem.ts":
/*!******************************!*\
  !*** ./lib/bone.griditem.ts ***!
  \******************************/
/*! exports provided: BoneGridItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneGridItem", function() { return BoneGridItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./lib/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoneGridItem = /** @class */ (function (_super) {
    __extends(BoneGridItem, _super);
    function BoneGridItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentStyles = null;
        return _this;
    }
    BoneGridItem.prototype.getStyles = function () {
        var newStyles = {
            justifySelf: this.getValue([this.justifyXl, this.justifyLg, this.justifyMd, this.justifySm, this.justify]),
            alignSelf: this.getValue([this.alignXl, this.alignLg, this.alignMd, this.alignSm, this.align]),
            gridArea: this.getAreaInfo(),
            gridColumn: this.getCol(),
            gridRow: this.getRow()
        };
        var hasValue = Object.values(newStyles).filter(function (newStyle) { return !!newStyle; }).length > 0;
        if (this.currentStyles === null) {
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
    BoneGridItem.prototype.getStylePropNames = function () {
        return ['grid-column', 'grid-row', 'grid-area', 'justify-self', 'align-self'];
    };
    BoneGridItem.prototype.getCol = function () {
        var col = this.getValue([this.colXl, this.colLg, this.colMd, this.colSm, this.col]);
        return this.getTrackInfo(col);
    };
    BoneGridItem.prototype.getRow = function () {
        var row = this.getValue([this.rowXl, this.rowLg, this.rowMd, this.rowSm, this.row]);
        return this.getTrackInfo(row);
    };
    BoneGridItem.prototype.getTrackInfo = function (track) {
        if (this.isNumeric(track)) {
            return "span " + track;
        }
        else if (Array.isArray(track)) {
            return track[0] + " / " + track[1];
        }
        return track || '';
    };
    BoneGridItem.prototype.getAreaInfo = function () {
        var area = this.getValue([this.areaXl, this.areaLg, this.areaMd, this.areaSm, this.area]);
        if (Array.isArray(area)) {
            return "" + area[0] / area[1] / area[2] / area[3];
        }
        return area;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-col'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-row'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-area'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "area", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-justify'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justify", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-align'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "align", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-col-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "colSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-row-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-area-sm'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-justify-sm'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifySm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-align-sm'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignSm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-col-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-row-md'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-area-md'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-justify-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-align-md'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignMd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-col-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-row-lg'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-area-lg'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-justify-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-align-lg'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignLg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-col-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "colXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-row-xl'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "rowXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-area-xl'),
        __metadata("design:type", Object)
    ], BoneGridItem.prototype, "areaXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-justify-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "justifyXl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bon-gi-align-xl'),
        __metadata("design:type", String)
    ], BoneGridItem.prototype, "alignXl", void 0);
    BoneGridItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[bon-gi]'
        })
    ], BoneGridItem);
    return BoneGridItem;
}(_base__WEBPACK_IMPORTED_MODULE_1__["BoneBase"]));



/***/ }),

/***/ "./lib/bone.ts":
/*!*********************!*\
  !*** ./lib/bone.ts ***!
  \*********************/
/*! exports provided: BoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoneModule", function() { return BoneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bone_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bone.flex */ "./lib/bone.flex.ts");
/* harmony import */ var _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bone.flexitem */ "./lib/bone.flexitem.ts");
/* harmony import */ var _bone_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bone.grid */ "./lib/bone.grid.ts");
/* harmony import */ var _bone_griditem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bone.griditem */ "./lib/bone.griditem.ts");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watcher */ "./lib/watcher.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BoneModule = /** @class */ (function () {
    function BoneModule() {
    }
    BoneModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [
                _bone_flex__WEBPACK_IMPORTED_MODULE_1__["BoneFlex"],
                _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__["BoneFlexItem"],
                _bone_grid__WEBPACK_IMPORTED_MODULE_3__["BoneGrid"],
                _bone_griditem__WEBPACK_IMPORTED_MODULE_4__["BoneGridItem"]
            ],
            providers: [
                _watcher__WEBPACK_IMPORTED_MODULE_5__["MediaSizeWatcher"]
            ],
            exports: [
                _bone_flex__WEBPACK_IMPORTED_MODULE_1__["BoneFlex"],
                _bone_flexitem__WEBPACK_IMPORTED_MODULE_2__["BoneFlexItem"],
                _bone_grid__WEBPACK_IMPORTED_MODULE_3__["BoneGrid"],
                _bone_griditem__WEBPACK_IMPORTED_MODULE_4__["BoneGridItem"]
            ]
        })
    ], BoneModule);
    return BoneModule;
}());



/***/ }),

/***/ "./lib/breakpoint.ts":
/*!***************************!*\
  !*** ./lib/breakpoint.ts ***!
  \***************************/
/*! exports provided: Breakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoint", function() { return Breakpoint; });
var Breakpoint;
(function (Breakpoint) {
    Breakpoint["ExtraSmall"] = "xs";
    Breakpoint["Small"] = "sm";
    Breakpoint["Medium"] = "md";
    Breakpoint["Large"] = "lg";
    Breakpoint["ExtraLarge"] = "xl";
})(Breakpoint || (Breakpoint = {}));


/***/ }),

/***/ "./lib/watcher.ts":
/*!************************!*\
  !*** ./lib/watcher.ts ***!
  \************************/
/*! exports provided: MediaSizeWatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSizeWatcher", function() { return MediaSizeWatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoint */ "./lib/breakpoint.ts");
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
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var MediaSizeWatcher = /** @class */ (function () {
    function MediaSizeWatcher(ngZone) {
        var _this = this;
        this.ngZone = ngZone;
        this.subscribers = [];
        // https://getbootstrap.com/docs/4.0/layout/grid/#responsive-classes
        this.mediaSizeQueryMap = new Map([
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].ExtraLarge, window.matchMedia('(min-width: 1200px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Large, window.matchMedia('(min-width: 992px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Medium, window.matchMedia('(min-width: 768px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].Small, window.matchMedia('(min-width: 576px)')],
            [_breakpoint__WEBPACK_IMPORTED_MODULE_1__["Breakpoint"].ExtraSmall, window.matchMedia('(min-width: 0)')]
        ]);
        this.listen = this.listen.bind(this);
        this.mediaSizeQueryMap.forEach(function (value) { return value.addListener(_this.listen); });
        this.listen();
    }
    MediaSizeWatcher.prototype.getCurrentMedia = function () {
        return this.currentMediaSize;
    };
    MediaSizeWatcher.prototype.watch = function (subscriber) {
        var _this = this;
        this.subscribers.push(subscriber);
        return function () { return _this.subscribers.splice(_this.subscribers.length - 1, 1); };
    };
    MediaSizeWatcher.prototype.listen = function () {
        try {
            for (var _a = __values(this.mediaSizeQueryMap), _b = _a.next(); !_b.done; _b = _a.next()) {
                var mediaSizeQuery = _b.value;
                var _c = __read(mediaSizeQuery, 2), mediaSize = _c[0], query = _c[1];
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
    MediaSizeWatcher.prototype.alertSubscribers = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.subscribers.forEach(function (subscriber) { return subscriber(_this.currentMediaSize); });
        });
    };
    MediaSizeWatcher = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MediaSizeWatcher);
    return MediaSizeWatcher;
}());



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