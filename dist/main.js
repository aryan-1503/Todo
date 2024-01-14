/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addProjectCard.js":
/*!*******************************!*\
  !*** ./src/addProjectCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectCard)\n/* harmony export */ });\nfunction createProjectCard(buttonsArray){\r\n    const customProjects = document.querySelector('.custom-projects')\r\n    const addProjectButton = document.getElementById('add-project-button')\r\n    const projectCard = document.getElementById('add-project-card');\r\n    const projectCardDiv = document.createElement('div')\r\n    projectCardDiv.classList.add('project-card');\r\n    const inputDiv = document.createElement('div')\r\n    const pName = document.createElement('input')\r\n    pName.type = \"text\"\r\n    pName.id = \"p-name\"\r\n    pName.placeholder = \"Project Name\"\r\n\r\n    inputDiv.append(pName)\r\n\r\n    const buttonsDiv = document.createElement('div')\r\n    const addButton = document.createElement('input')\r\n    addButton.type = \"button\"\r\n    addButton.value = \"Add\"\r\n\r\n    const cancelButton = document.createElement('button')\r\n    cancelButton.id = 'project-cancel-btn'\r\n    cancelButton.innerHTML = 'Cancel'\r\n\r\n    buttonsDiv.append(addButton,cancelButton)\r\n\r\n    projectCardDiv.append(inputDiv,buttonsDiv)\r\n\r\n\r\n    projectCard.append(projectCardDiv)\r\n    addButton.addEventListener('click',() => {\r\n        const projects = document.getElementById('add-project')\r\n\r\n        const project = document.createElement('button')\r\n        project.innerHTML = pName.value\r\n        projects.append(project)\r\n        buttonsArray.push(pName.value)\r\n        localStorage.setItem('buttons', buttonsArray);\r\n\r\n        projectCardDiv.remove()\r\n        customProjects.append(addProjectButton)\r\n\r\n    })\r\n    cancelButton.addEventListener('click',()=>{\r\n        projectCardDiv.remove()\r\n        customProjects.append(addProjectButton)\r\n\r\n    })\r\n    return projectCard\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/addProjectCard.js?");

/***/ }),

/***/ "./src/addTaskCard.js":
/*!****************************!*\
  !*** ./src/addTaskCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTaskCard)\n/* harmony export */ });\nfunction createTaskCard(){\r\n    const taskCard = document.getElementById('task-card');\r\n    const addTaskBtnDiv = document.getElementById('add-task-btn');\r\n    const addTaskBtn = document.getElementById('add-task')\r\n    // taskCard.style.display = 'block'\r\n\r\n    const addTaskContainer = document.createElement('div')\r\n    addTaskContainer.classList.add('add-task-container')\r\n\r\n    const addTaskName = document.createElement('div')\r\n    addTaskName.classList.add('add-task-name')\r\n\r\n    const inputName = document.createElement('input')\r\n    inputName.id = 'add-task-name'\r\n    inputName.type = 'text'\r\n    inputName.placeholder = 'Task Name'\r\n\r\n    addTaskName.append(inputName)\r\n\r\n    const addTaskDate = document.createElement('div')\r\n    addTaskDate.classList.add('add-task-date')\r\n\r\n    const inputDate = document.createElement('input')\r\n    inputDate.id = 'add-task-date'\r\n    inputDate.type = 'date'\r\n\r\n    addTaskDate.append(inputDate)\r\n\r\n    const buttonsDiv = document.createElement('div')\r\n    const addButton = document.createElement('input')\r\n    addButton.type = \"button\"\r\n    addButton.value = \"Add\"\r\n\r\n    const cancelButton = document.createElement('button')\r\n    cancelButton.innerHTML = 'Cancel'\r\n\r\n\r\n\r\n    buttonsDiv.append(addButton,cancelButton)\r\n\r\n    addTaskContainer.append(addTaskName,addTaskDate,buttonsDiv)\r\n\r\n    taskCard.append(addTaskContainer)\r\n\r\n    cancelButton.addEventListener('click',() => {\r\n        addTaskContainer.remove()\r\n        addTaskBtnDiv.append(addTaskBtn)\r\n    })\r\n\r\n    return taskCard\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/addTaskCard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addProjectCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectCard */ \"./src/addProjectCard.js\");\n/* harmony import */ var _addTaskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskCard */ \"./src/addTaskCard.js\");\n\r\n\r\n\r\nconsole.log(\"Todo List\");\r\nlet tempArray = localStorage.getItem('buttons')\r\ntempArray = tempArray.split(',')\r\n\r\nlet buttonsArray = Array.from(tempArray)\r\n\r\n\r\nconst addProjectButton = document.getElementById(\"add-project-button\");\r\nconst addTaskButton = document.getElementById('add-task')\r\n\r\naddProjectButton.addEventListener(\"click\", () => {\r\n    ;(0,_addProjectCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(buttonsArray);\r\n    addProjectButton.remove();\r\n});\r\n\r\n\r\naddTaskButton.addEventListener('click',() => {\r\n    console.log('add task button clicked')\r\n    ;(0,_addTaskCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    addTaskButton.remove();\r\n})\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    let buttonsArray = localStorage.getItem('buttons');\r\n    if (buttonsArray) {\r\n        buttonsArray = buttonsArray.split(',');\r\n        buttonsArray.forEach((projectName) => {\r\n            const projects = document.getElementById('add-project');\r\n            const project = document.createElement('button');\r\n            project.innerHTML = projectName;\r\n            projects.append(project);\r\n        });\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;