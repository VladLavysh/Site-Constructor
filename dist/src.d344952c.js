parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ixA8":[function(require,module,exports) {
module.exports="/simple_image.f445fc25.jpg";
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(o,'">').concat(n,"</div>")}function o(n){return'<div class="col-sm">'.concat(n,"</div>")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){return'\n    <form name="'.concat(n,'">\n      <h5>').concat(n,'</h5>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="value" placeholder="value">\n      </div>\n      <div class="form-group">\n        <input class="form-control form-control-sm" name="styles" placeholder="styles">\n      </div>\n      <button type="sumbit" class="btn btn-primary btn-sm">Add</button>\n    </form>\n    <hr/>\n  ')}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=o,exports.css=t,exports.block=r;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImageBlock=exports.ColumnsBlock=exports.TextBlock=exports.TitleBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=i();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?u(t):o}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("The method 'toHTML' must be implemented")}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=e.rowStyles,r=e.styles;return(0,t.row)((0,t.col)("<".concat(o,' style="').concat((0,t.css)(r),'">').concat(this.value,"</").concat(o,">")),(0,t.css)(n))}}]),c}();exports.TextBlock=h;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=v;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=e.imageStyles;return(0,t.row)('<img src="'.concat(this.value,'" style="').concat((0,t.css)(n),'"/>'),(0,t.css)(o))}}]),c}();exports.ImageBlock=b;
},{"../utils":"FOZT"}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=a(require("./assets/simple_image.jpg")),t=require("./classes/blocks");function a(e){return e&&e.__esModule?e:{default:e}}var i="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",o=["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.","Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."],u=[new t.TitleBlock("Pure JavaScript Website Builder",{tag:"h1",styles:{background:"linear-gradient(to right, #5e52bb, #493240)",padding:"1.3rem",color:"#fff","box-shadow":"0px 3px 10px -1px rgba(0,0,0,0.75)","text-align":"center"}}),new t.ImageBlock(e.default,{styles:{"margin-top":"1rem"},imageStyles:{width:"700px",height:"auto",margin:"auto"}}),new t.TextBlock(i,{tag:"p",styles:{color:"white",margin:"auto"},rowStyles:{background:"linear-gradient(90deg, rgba(44,56,145,1) 0%, rgba(54,21,21,1) 91%)","box-shadow":"0px -3px 10px -1px rgba(0,0,0,0.75)",padding:"1rem","margin-top":"1rem"}}),new t.ColumnsBlock(o,{styles:{background:"#944336",color:"white",padding:"1rem"}})];exports.model=u;
},{"./assets/simple_image.jpg":"ixA8","./classes/blocks":"dDFO"}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var a=function(){function r(e,t){n(this,r),this.$el=document.querySelector(e),this.update=t,this.init()}return i(r,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"add",value:function(e){e.preventDefault();var n=e.target.name,r=e.target.value.value,i=e.target.styles.value,a="text"===n?new t.TextBlock(r,{styles:i}):new t.TitleBlock(r,{styles:i});this.update(a),e.target.value.value="",e.target.styles.value=""}},{key:"template",get:function(){return[(0,e.block)("title"),(0,e.block)("text")].join("")}}]),r}();exports.Sidebar=a;
},{"../utils":"FOZT","./blocks":"dDFO"}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./sidebar"),r=require("./site");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function t(e){n(this,t),this.model=e}return i(t,[{key:"init",value:function(){var n=this,t=new r.Site("#site");t.render(this.model);new e.Sidebar("#panel",function(e){n.model.push(e),t.render(n.model)})}}]),t}();exports.App=o;
},{"./sidebar":"idI0","./site":"V48B"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),s=require("./classes/app");require("./styles/main.css"),new s.App(e.model).init();
},{"./model":"JDu1","./classes/app":"Z1kE","./styles/main.css":"jExt"}]},{},["Focm"], null)