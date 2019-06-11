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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BattleShipForm = __webpack_require__(/*! ./src/views/battleship_form_view.js */ \"./client/src/views/battleship_form_view.js\");\nconst BattleShipNewGame = __webpack_require__(/*! ./src/models/new_game.js */ \"./client/src/models/new_game.js\");\nconst HitOrMiss = __webpack_require__(/*! ./src/views/battleship_hitOrNot_view.js */ \"./client/src/views/battleship_hitOrNot_view.js\");\nconst Overlay = __webpack_require__(/*! ./src/views/battleship_ship_overlay_page.js */ \"./client/src/views/battleship_ship_overlay_page.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n  const userInput = document.querySelector(\"#input-coordinates\")\n  const battleShipForm = new BattleShipForm(userInput)\n  battleShipForm.bindEvents()\n\n  const hitOrMiss = new HitOrMiss()\n  hitOrMiss.bindEvents()\n\n  const overlayContainer = document.querySelector('#overlay')\n  const overlay = new Overlay(overlayContainer)\n  overlay.bindEvents()\n\n  const water = document.querySelector(\"#audio-water\")\n  \n\n  const battleShipNewGame = new BattleShipNewGame ()\n  battleShipNewGame.newGameToBePlayed()\n  battleShipNewGame.playerGuessInput()\n});\n\n\n//# sourceURL=webpack:///./client/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    console.log(`Publishing on ${channel} : ${payload}`);\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    console.log(`Subscribing on: ${channel}`);\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/models/new_game.js":
/*!***************************************!*\
  !*** ./client/src/models/new_game.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Battleship = __webpack_require__(/*! ./ships/battleShips.js */ \"./client/src/models/ships/battleShips.js\")\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\n\nconst NewGame = function(){};\n\n\nconst battleShip1 = new Battleship('Battleship1', 3);\nconst battleShip2 = new Battleship('Battleship2', 3);\nconst destroyer1 = new Battleship('Destroyer1', 3);\nconst destroyer2 = new Battleship('Destroyer2', 3);\nconst submarine = new Battleship('Submarine', 2);\nconst aircraftCarrier = new Battleship('AircraftCarrier', 4);\n\nconst NavalFleet = [battleShip1, battleShip2, destroyer1, destroyer2, submarine, aircraftCarrier]\nlet assignedCoordinates =[];\n\nconst newGame1 =  new NewGame\n\nNewGame.prototype.bindEvents = function () {\n\n};\n\nNewGame.prototype.newGameToBePlayed = function () {\n\n  this.assignNewCoordinatesToShipNewGame()\n\n  let value = false\n  while(value === false){\n    for(i=0; i < assignedCoordinates.length; i++){\n      if(assignedCoordinates.includes(assignedCoordinates[i + 1]) === true){\n        assignedCoordinates = []\n        this.assignNewCoordinatesToShipNewGame()\n      }\n    }\n    value = true\n  }\n};\n\n\nNewGame.prototype.assignNewCoordinatesToShipNewGame = function(){\n\n  let letters = ['a','b','c','d','e','f','g','h','i','j']\n\n  NavalFleet.forEach(function (element) {\n    element.coordinates =[]\n  });\n\n  for(let i=0; i < NavalFleet.length; i++){\n    let alreadyAssignedLetters = []\n    let alreadyAssignedNumbers = []\n\n    if (i%2 === 0){\n\n      let evenNumberTrue__false = false\n      while(evenNumberTrue__false === false){\n\n        let coordinateLetterVertically = letters[this.randomNumber() -1]\n        let coordinateNumberVertically = this.randomNumber()\n        let newCoordinateVertically = coordinateLetterVertically + coordinateNumberVertically\n\n        if (coordinateNumberVertically + NavalFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateVertically) === false){\n          let value = 0\n          alreadyAssignedLetters.push(coordinateLetterVertically)\n          while(value < NavalFleet[i].hitPoints ){\n            newCoordinateVertically = coordinateLetterVertically + coordinateNumberVertically\n            NavalFleet[i].coordinates.push(newCoordinateVertically)\n            assignedCoordinates.push(newCoordinateVertically)\n            coordinateNumberVertically += 1\n            value += 1\n          }\n          evenNumberTrue__false = true;\n        }\n      }\n    }else{\n      let oddNumberTrue__False = false\n\n      while(oddNumberTrue__False === false){\n\n        let coordinateLetterHorizontal = letters[this.randomNumber() -1]\n        let coordinateNumberHorizontal = this.randomNumber()\n        let indexOfLetterHorizontal = letters.indexOf(coordinateLetterHorizontal)\n        let newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal\n\n        if (indexOfLetterHorizontal + NavalFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateHorizontal) === false){\n          alreadyAssignedNumbers.push(coordinateNumberHorizontal)\n          oddNumberTrue__False = true;\n          let value = 0\n          while(value < NavalFleet[i].hitPoints ){\n            newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal\n            NavalFleet[i].coordinates.push(newCoordinateHorizontal)\n            assignedCoordinates.push(newCoordinateHorizontal)\n            indexOfLetterHorizontal += 1\n            value += 1\n          }\n        }\n      }\n    }\n  }\n};\n\n\nNewGame.prototype.randomNumber = function () {\n  const randomValueNumber = Math.floor(Math.random() * 10 + 1)\n  return randomValueNumber;\n};\n\nNewGame.prototype.randomLetter = function () {\n  let gridLetters = ['a','b','c','d','e','f','g','h','i','j'];\n  const randomValueLetter = this.randomNumber();\n  const randomLetter = gridLetters[randomValueLetter -1 ];\n  return randomLetter;\n};\n\n\nNewGame.prototype.playerGuessInput = function() {\n  PubSub.subscribe(\"BattleShipFormView:User-input-ready\", (event) => {\n    const coordinate = event.detail;\n    console.log(event.detail);\n    NavalFleet.forEach(function(ship){\n      if(ship.coordinates.includes(coordinate)){\n        PubSub.publish(\"newGame: succesful-hit\", coordinate)\n        ship.succesfulHitToShip()\n      }else{\n        PubSub.publish(\"newGame: succesful-fail\", coordinate);\n      }\n    })\n    console.log(NavalFleet);\n  })\n};\n\n\n\n// NewGame.prototype.explosion = function (guess) {\n//   const gridBox = document.querySelector(guess)\n//   gridBox.classList.add('visibility')\n// };\n\n\n\nmodule.exports = NewGame;\n\n\n//# sourceURL=webpack:///./client/src/models/new_game.js?");

/***/ }),

/***/ "./client/src/models/ships/battleShips.js":
/*!************************************************!*\
  !*** ./client/src/models/ships/battleShips.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst  BattleShip = function(type, hitpoints){\n  this.type = type\n  this.hitPoints = hitpoints,\n  this.coordinates = []\n}\n\nconst battleShip = new BattleShip\n\nBattleShip.prototype.succesfulHitToShip = function () {\n\n  if (this.hitPoints === 1 ){\n    PubSub.publish(\"Battleship: ship-has-been-sunk-payload-ship-type\", this.type)\n    return this.hitPoints -= 1\n   }\n  return this.hitPoints -= 1\n};\n\nmodule.exports = BattleShip;\n\n\n//# sourceURL=webpack:///./client/src/models/ships/battleShips.js?");

/***/ }),

/***/ "./client/src/views/battleship_form_view.js":
/*!**************************************************!*\
  !*** ./client/src/views/battleship_form_view.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst BattleShipInputForm = function(form){\n  this.form = form;\n}\n\nBattleShipInputForm.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (event) => {\n    event.preventDefault()\n    const coordinates = event.target.coordinates.value\n    PubSub.publish(\"BattleShipFormView:User-input-ready\", coordinates)\n    this.form.reset()\n  })\n};\n\nPubSub.subscribe(\"Battleship: ship-has-been-sunk-payload-ship-type\", (event) => {\n  const battleShipType = event.detail\n  console.log(battleShipType);\n  const shipToRemove = document.querySelector('#'+ battleShipType)\n  console.log(shipToRemove);\n  shipToRemove.classList.add('visibility')\n})\n\n\n\nmodule.exports = BattleShipInputForm;\n\n\n//# sourceURL=webpack:///./client/src/views/battleship_form_view.js?");

/***/ }),

/***/ "./client/src/views/battleship_hitOrNot_view.js":
/*!******************************************************!*\
  !*** ./client/src/views/battleship_hitOrNot_view.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst HitOrMiss = function (){\n};\n\n\nHitOrMiss.prototype.bindEvents = function () {\n\n  PubSub.subscribe(\"newGame: succesful-hit\", (event)=>{\n    const coordinate = event.detail\n    this.explosion(coordinate)\n  });\n\n  PubSub.subscribe(\"newGame: succesful-fail\", (event) => {\n    const coordinate = event.detail\n    console.log(coordinate);\n    this.miss(coordinate)\n  });\n\n};\n\nHitOrMiss.prototype.explosion = function (guess) {\n  const gridBox = document.querySelector(`#${guess}`)\n  const explosion = document.querySelector('#audio-explosion')\n  gridBox.classList.remove('visibility')\n  explosion.play()\n\n};\n\nHitOrMiss.prototype.miss = function (guess) {\n  const gridBox = document.querySelector(`#${guess}`)\n  const gridBoxParent = gridBox.parentNode\n  gridBoxParent.classList.add('miss')\n  console.log('hello');\n};\n\nmodule.exports = HitOrMiss;\n\n\n//# sourceURL=webpack:///./client/src/views/battleship_hitOrNot_view.js?");

/***/ }),

/***/ "./client/src/views/battleship_ship_overlay_page.js":
/*!**********************************************************!*\
  !*** ./client/src/views/battleship_ship_overlay_page.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\n\nconst Overlay = function(container){\n  this.container = container\n}\n\n\nOverlay.prototype.bindEvents = function () {\n  this.renderOverlayOpen()\n  this.renderOverlayClose()\n};\n\nOverlay.prototype.renderOverlayOpen = function () {\n\n  PubSub.subscribe(\"Battleship: ship-has-been-sunk-payload-ship-type\", (event) => {\n    const shipType = event.detail\n\n    const closeButton = document.createElement('button')\n    closeButton.id = \"closeButton\"\n    closeButton.textContent = \"CLOSE\"\n\n    const youSunkShipType = document.createElement('h1')\n    youSunkShipType.id = \"youSunkShipType\"\n    youSunkShipType.textContent = `Enemy ${shipType} has been destroyed`\n\n    this.container.classList.remove('visibility')\n\n    this.container.appendChild(youSunkShipType)\n    this.container.appendChild(closeButton)\n  })\n};\n\nOverlay.prototype.renderOverlayClose = function () {\n  document.addEventListener('click', (event) =>{\n    this.container.classList.add('visibility')\n    this.container.innerHTML = ''\n  })\n};\n\n\n\nmodule.exports = Overlay;\n\n\n//# sourceURL=webpack:///./client/src/views/battleship_ship_overlay_page.js?");

/***/ })

/******/ });