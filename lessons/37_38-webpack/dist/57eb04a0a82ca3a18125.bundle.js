/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Contacts)
});

// EXTERNAL MODULE: ./src/utils/components.js
var components = __webpack_require__(735);
;// CONCATENATED MODULE: ./src/components/Contacts/cat-computer.jpeg
/* harmony default export */ const cat_computer = (__webpack_require__.p + "9a222994fd50c9e188de89408ccc1547.jpeg");
;// CONCATENATED MODULE: ./src/components/Contacts/Contacts.js




var Contacts = function Contacts() {
  return (0,components/* createComponent */.L)("\n  <main class=\"contacts\">\n    <h1>Contacts</h1>\n    <p>Some info about site</p>\n    <img src=\"".concat(cat_computer, "\" />\n  </main>\n"));
};

/* harmony default export */ const Contacts_Contacts = (Contacts);
;// CONCATENATED MODULE: ./src/components/Contacts/index.js

/* harmony default export */ const components_Contacts = (Contacts_Contacts);

/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ createComponent)
/* harmony export */ });
/* unused harmony export notUsedFunction */
var createComponent = function createComponent(stringHtml) {
  console.log('createComponent', stringHtml);
  return new DOMParser().parseFromString(stringHtml, 'text/html').querySelector('body').firstChild;
};
var notUsedFunction = function notUsedFunction() {
  console.log('notUsedFunction');
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./src/utils/components.js
var components = __webpack_require__(735);
;// CONCATENATED MODULE: ./src/components/Header/logo.png
/* harmony default export */ const logo = (__webpack_require__.p + "8e3dd0d1ec344c0d687b9a0d24c43f06.png");
;// CONCATENATED MODULE: ./src/components/Header/Header.js




var Header = function Header() {
  return (0,components/* createComponent */.L)("\n  <header class=\"header\">\n    <img src=\"".concat(logo, "\" width=\"200\" alt=\"\" />\n    <a href=\"/home\">Home</a>\n    <a href=\"/contacts\">Contacts</a>\n  </header>\n"));
};

/* harmony default export */ const Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Header/index.js

/* harmony default export */ const components_Header = (Header_Header);
;// CONCATENATED MODULE: ./src/components/Content/cat.jpeg
/* harmony default export */ const cat = (__webpack_require__.p + "2cf85f48c9278d3d9439376c80e4d065.jpeg");
;// CONCATENATED MODULE: ./src/components/Content/Content.js




var Content = function Content() {
  return (0,components/* createComponent */.L)("\n  <main class=\"content\">\n    <h1>My app</h1>\n    <p>Some text with custom font</p>\n    <img src=\"".concat(cat, "\" />\n  </main>\n"));
};

/* harmony default export */ const Content_Content = (Content);
;// CONCATENATED MODULE: ./src/components/Content/index.js

/* harmony default export */ const components_Content = (Content_Content);
// EXTERNAL MODULE: ./src/components/Contacts/index.js + 2 modules
var Contacts = __webpack_require__(422);
;// CONCATENATED MODULE: ./src/main.js





var render = function render() {
  var root = document.querySelector('#app');
  root.innerHTML = '';
  root.appendChild(components_Header());

  if (window.location.pathname === '/home' || window.location.pathname === '/') {
    root.appendChild(components_Content());
  }

  if (window.location.pathname === '/contacts') {
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 422)).then(function (_ref) {
      var contactsModule = _ref.default;
      root.appendChild(contactsModule());
    });
  }
};

if (false) {}

render();
})();

/******/ })()
;
//# sourceMappingURL=57eb04a0a82ca3a18125.bundle.js.map