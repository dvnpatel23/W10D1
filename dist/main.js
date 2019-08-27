/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    return timeString;\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n\n\nconst htmlGenerator = (string, htmlElement) => {\n  if (htmlElement.children) {\n    let childrenArr = Array.from(htmlElement.children);\n    childrenArr.forEach((el, idx) => {\n      htmlElement.removeChild(el);\n    });\n  }\n\n  let paragraph = document.createElement(\"P\");\n  let text = document.createTextNode(string);\n  paragraph.appendChild(text);\n  htmlElement.appendChild(paragraph);\n};\n\nlet clockElement = document.getElementById('clock');\n\nfunction showMeClock() {\n  let clock = new Clock();\n  let string = clock.printTime();\n  htmlGenerator(string, clockElement);\n\n}\n\nshowMeClock();\nsetInterval(showMeClock, 1000);\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  let dogArray = [];\n  for (let key in dogs) {\n    let atag = document.createElement(\"a\");\n    atag.innerHTML = key;\n    atag.href = dogs[key];\n    let litag = document.createElement(\"li\");\n    litag.classList.add(\"dog-link\");\n    litag.appendChild(atag);\n    dogArray.push(litag);\n  }\n  return dogArray;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n\n  let ulElement = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n  dogLinks.forEach(el => {\n    ulElement.appendChild(el);\n  });\n\n}\n\n\n\n\nattachDogLinks();\n\nfunction handleEnter() {\n  let linksArray = Array.from(document.getElementsByClassName(\"dog-link\"));\n  linksArray.forEach(el => {\n    el.classList.remove(\"dog-link\");\n  });\n}\n\nfunction handleLeave() {\n  let linksArray = Array.from(document.querySelectorAll(\".drop-down-dog-nav li\"));\n  linksArray.forEach(el => {\n    el.classList.add(\"dog-link\");\n  });\n}\n\n\ndocument.querySelector(\".drop-down-dog-nav\").addEventListener(\"mouseenter\", handleEnter);\n\ndocument.querySelector(\".drop-down-dog-nav\").addEventListener(\"mouseleave\", handleLeave);\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let todos = JSON.parse(localStorage.getItem(\"todotask\")) || [];\n\nconsole.log(JSON.parse(localStorage.getItem(\"todotask\")));\n\nlet ulElement = document.querySelector(\".todos\");\n\nlet formElement = document.querySelector(\".add-todo-form\");\n\n\n\nfunction addTodo(e) {\n  e.preventDefault();\n  let taskValue = document.getElementsByName(\"add-todo\")[0].value;\n  let todo = { done: false, task: taskValue };\n  todos.push(todo);   \n  console.log(todos);\n  document.getElementsByName(\"add-todo\")[0].value = \"\";\n  ulElement = document.querySelector(\".todos\").innerHTML = \"\";\n\n  localStorage.setItem(\"todotask\", JSON.stringify(todos));\n\n  populateList(todos);\n}\n\nfunction populateList(todos) {\n\n  todos.forEach(el => {\n    let label = document.createElement(\"label\");\n    label.innerHTML = el.task;\n    var checkbox = document.createElement('input');\n    checkbox.type = \"checkbox\";\n    let litag = document.createElement(\"li\");\n    litag.appendChild(label);\n    litag.appendChild(checkbox);\n    ulElement = document.querySelector(\".todos\");\n    ulElement.appendChild(litag);\n  });\n\n}\n\n\npopulateList(todos);\nformElement.addEventListener(\"submit\", addTodo);\n\n\nfunction handlecheckbox(event) {\n  event.preventDefault();\n  todos.forEach( el => {\n    \n  })\n}\n\nulElement.addEventListener(\"click\", handlecheckbox);\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\n// import clock from \"./clock.js\";\n\nconst partyHeader = document.getElementById('party');\nlet string = \"I <3 Vanilla DOM manipulation So much!!!!\";\n\nconst htmlGenerator = (string, htmlElement) => {\n  let paragraph = document.createElement(\"P\");\n  let text = document.createTextNode(string);\n  paragraph.appendChild(text);\n  htmlElement.appendChild(paragraph);\n  \n\n};\n\nhtmlGenerator(string , partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });