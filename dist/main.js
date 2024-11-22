/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\nfunction Gameboard() {\r\n    const gameboard = Array(10).fill(null).map(() => Array(10).fill(null));\r\n    const ships = [];\r\n\r\n    const placeShip = (ship, x, y, direction) => {\r\n        if (direction === \"horizontal\") {\r\n            for (let i = 0; i < ship.length; i++){\r\n                gameboard[x][y + i] = ship;\r\n            }\r\n        } else {\r\n            for (let i = 0; i < ship.length; i++){\r\n                gameboard[x + i][y] = ship;\r\n            }\r\n        }\r\n        ships.push(ship);\r\n\r\n    }\r\n    \r\n    const receiveAttack = (x, y) => {\r\n        const target = gameboard[x][y];\r\n\r\n        if (target && target.hit) {\r\n            target.hit(); // Call the ship's hit method\r\n          }\r\n          return target !== null;\r\n    }\r\n\r\n    const allShipsSunk = () => ships.every((ship) => ship.isSunk());\r\n    \r\n    return { placeShip, receiveAttack, allShipsSunk, gameboard };\r\n}\r\n\r\n// console.log(Gameboard().gameboard)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZWJvYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBQ2pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanM/N2U1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xyXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGdhbWVib2FyZFt4XVt5ICsgaV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGdhbWVib2FyZFt4ICsgaV1beV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcCk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBnYW1lYm9hcmRbeF1beV07XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmhpdCkge1xyXG4gICAgICAgICAgICB0YXJnZXQuaGl0KCk7IC8vIENhbGwgdGhlIHNoaXAncyBoaXQgbWV0aG9kXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ICE9PSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmssIGdhbWVib2FyZCB9O1xyXG59XHJcblxyXG4vLyBjb25zb2xlLmxvZyhHYW1lYm9hcmQoKS5nYW1lYm9hcmQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\r\n\r\n\r\n\r\nconst playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\nconst computerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\r\nconst player = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('Player');\r\nconst computer = (0,_player_js__WEBPACK_IMPORTED_MODULE_1__.Player)('Computer');\r\n\r\nconsole.log(\"hello\")\r\n// Set up the UI\r\nconst playerContainer = document.querySelector('#player-board');\r\nconst computerContainer = document.querySelector('#computer-board');\r\n\r\n// Place some ships as a test\r\nplayerBoard.placeShip(Ship(3), 0, 0, 'horizontal');\r\ncomputerBoard.placeShip(Ship(3), 2, 2, 'vertical'); \r\n\r\n// Main game loop\r\n// const playGame = () => {\r\n//   // Render boards\r\n//   renderBoard(playerBoard.gameboard, playerContainer);\r\n//   renderBoard(computerBoard.gameboard, computerContainer);\r\n\r\n//   // Add click event for attacking the computer~~\r\n//   const rect = computerContainer.getBoundingClientRect(); // Get grid boundaries\r\n//   const gridSize = 10; // Assume a 10x10 grid\r\n//   const cellWidth = rect.width / gridSize; // Width of a single cell\r\n//   const cellHeight = rect.height / gridSize; // Height of a single cell\r\n\r\n//   // Calculate x and y based on the click position\r\n//   const x = Math.floor((e.clientY - rect.top) / cellHeight);\r\n//   const y = Math.floor((e.clientX - rect.left) / cellWidth);\r\n\r\n//   // Perform the attack\r\n//   player.attack(computerBoard, x, y);\r\n\r\n//   // Check if the game is over\r\n//   if (computerBoard.areAllShipsSunk()) {\r\n//     console.log('Game Over! Player Wins!');\r\n//   }\r\n// };\r\n\r\n// playGame();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyQztBQUNOO0FBQ0M7QUFDdEM7QUFDQSxvQkFBb0Isd0RBQVM7QUFDN0Isc0JBQXNCLHdEQUFTO0FBQy9CLGVBQWUsa0RBQU07QUFDckIsaUJBQWlCLGtEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QsMEJBQTBCO0FBQzFCLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcz8xYTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJCb2FyZCB9IGZyb20gJy4vdWkuanMnO1xyXG5cclxuY29uc3QgcGxheWVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xyXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoJ1BsYXllcicpO1xyXG5jb25zdCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiaGVsbG9cIilcclxuLy8gU2V0IHVwIHRoZSBVSVxyXG5jb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLWJvYXJkJyk7XHJcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXB1dGVyLWJvYXJkJyk7XHJcblxyXG4vLyBQbGFjZSBzb21lIHNoaXBzIGFzIGEgdGVzdFxyXG5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgMCwgMCwgJ2hvcml6b250YWwnKTtcclxuY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoU2hpcCgzKSwgMiwgMiwgJ3ZlcnRpY2FsJyk7IFxyXG5cclxuLy8gTWFpbiBnYW1lIGxvb3BcclxuLy8gY29uc3QgcGxheUdhbWUgPSAoKSA9PiB7XHJcbi8vICAgLy8gUmVuZGVyIGJvYXJkc1xyXG4vLyAgIHJlbmRlckJvYXJkKHBsYXllckJvYXJkLmdhbWVib2FyZCwgcGxheWVyQ29udGFpbmVyKTtcclxuLy8gICByZW5kZXJCb2FyZChjb21wdXRlckJvYXJkLmdhbWVib2FyZCwgY29tcHV0ZXJDb250YWluZXIpO1xyXG5cclxuLy8gICAvLyBBZGQgY2xpY2sgZXZlbnQgZm9yIGF0dGFja2luZyB0aGUgY29tcHV0ZXJ+flxyXG4vLyAgIGNvbnN0IHJlY3QgPSBjb21wdXRlckNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gR2V0IGdyaWQgYm91bmRhcmllc1xyXG4vLyAgIGNvbnN0IGdyaWRTaXplID0gMTA7IC8vIEFzc3VtZSBhIDEweDEwIGdyaWRcclxuLy8gICBjb25zdCBjZWxsV2lkdGggPSByZWN0LndpZHRoIC8gZ3JpZFNpemU7IC8vIFdpZHRoIG9mIGEgc2luZ2xlIGNlbGxcclxuLy8gICBjb25zdCBjZWxsSGVpZ2h0ID0gcmVjdC5oZWlnaHQgLyBncmlkU2l6ZTsgLy8gSGVpZ2h0IG9mIGEgc2luZ2xlIGNlbGxcclxuXHJcbi8vICAgLy8gQ2FsY3VsYXRlIHggYW5kIHkgYmFzZWQgb24gdGhlIGNsaWNrIHBvc2l0aW9uXHJcbi8vICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKGUuY2xpZW50WSAtIHJlY3QudG9wKSAvIGNlbGxIZWlnaHQpO1xyXG4vLyAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKChlLmNsaWVudFggLSByZWN0LmxlZnQpIC8gY2VsbFdpZHRoKTtcclxuXHJcbi8vICAgLy8gUGVyZm9ybSB0aGUgYXR0YWNrXHJcbi8vICAgcGxheWVyLmF0dGFjayhjb21wdXRlckJvYXJkLCB4LCB5KTtcclxuXHJcbi8vICAgLy8gQ2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlclxyXG4vLyAgIGlmIChjb21wdXRlckJvYXJkLmFyZUFsbFNoaXBzU3VuaygpKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyISBQbGF5ZXIgV2lucyEnKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG4vLyBwbGF5R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\nfunction Player(name) {\r\n    const attack = (gameboard, x, y) => {\r\n      return gameboard.receiveAttack(x, y);\r\n    };\r\n  \r\n    return { name, attack };\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanM/NDViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gUGxheWVyKG5hbWUpIHtcclxuICAgIGNvbnN0IGF0dGFjayA9IChnYW1lYm9hcmQsIHgsIHkpID0+IHtcclxuICAgICAgcmV0dXJuIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiB7IG5hbWUsIGF0dGFjayB9O1xyXG4gIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(length) {\r\n    const hits = Array(length).fill(false);\r\n\r\n  const hit = () => {\r\n    for (let i = 0; i < length; i++) {\r\n      if (!hits[i]) {\r\n        hits[i] = true;\r\n        break; // Register one hit at a time\r\n      }\r\n    }\r\n  };\r\n\r\n  const isSunk = () => hits.every(Boolean);\r\n\r\n  return { length, hit, isSunk };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcz8zZmI2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gICAgY29uc3QgaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCFoaXRzW2ldKSB7XHJcbiAgICAgICAgaGl0c1tpXSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7IC8vIFJlZ2lzdGVyIG9uZSBoaXQgYXQgYSB0aW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBoaXRzLmV2ZXJ5KEJvb2xlYW4pO1xyXG5cclxuICByZXR1cm4geyBsZW5ndGgsIGhpdCwgaXNTdW5rIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ship.js\n");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction renderBoard (gameboard, container) {\r\n    container.innerHTML = ''; // Clear the board\r\n    for (let row of gameboard) {\r\n      const rowDiv = document.createElement('div');\r\n      rowDiv.classList.add('row');\r\n      row.forEach((cell) => {\r\n        const cellDiv = document.createElement('div');\r\n        cellDiv.classList.add('cell');\r\n        if (cell === 'hit') cellDiv.classList.add('hit');\r\n        if (cell === 'miss') cellDiv.classList.add('miss');\r\n        rowDiv.appendChild(cellDiv);\r\n      });\r\n      container.appendChild(rowDiv);\r\n    }\r\n  };\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkuanM/YjJhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9hcmQgKGdhbWVib2FyZCwgY29udGFpbmVyKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIHRoZSBib2FyZFxyXG4gICAgZm9yIChsZXQgcm93IG9mIGdhbWVib2FyZCkge1xyXG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xyXG4gICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNlbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICBpZiAoY2VsbCA9PT0gJ2hpdCcpIGNlbGxEaXYuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XHJcbiAgICAgICAgaWYgKGNlbGwgPT09ICdtaXNzJykgY2VsbERpdi5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGxEaXYpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0Rpdik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;