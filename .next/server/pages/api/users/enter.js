"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/enter";
exports.ids = ["pages/api/users/enter"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = global.db || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxFQUFFLElBQUksSUFBSUQsd0RBQVksRUFBRTtBQUUxQyxJQUFJRyxJQUFzQyxFQUFFRCxNQUFNLENBQUNELEVBQUUsR0FBR0EsRUFBRSxDQUFDO0FBRTNELGlFQUFlQSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkYiA9IGdsb2JhbC5kYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/enter.tsx":
/*!***********************************!*\
  !*** ./pages/api/users/enter.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\n\nasync function handler(req, res) {\n    const { email , name  } = JSON.parse(req.body);\n    if (!email || !name) return res.status(400).json({\n        ok: false\n    });\n    await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n        data: {\n            name: name,\n            email: email\n        }\n    });\n    return res.json({\n        ok: true\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ2lDO0FBRWxCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDO0lBQzVDLElBQUksQ0FBQ0osS0FBSyxJQUFJLENBQUNDLElBQUksRUFBRSxPQUFPRixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxLQUFLO0tBQUUsQ0FBQyxDQUFDO0lBRWhFLE1BQU1YLDJEQUFjLENBQUM7UUFDbkJjLElBQUksRUFBRTtZQUNKVCxJQUFJLEVBQUVBLElBQUk7WUFDVkQsS0FBSyxFQUFFQSxLQUFLO1NBQ2I7S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPRCxHQUFHLENBQUNPLElBQUksQ0FBQztRQUNkQyxFQUFFLEVBQUUsSUFBSTtLQUNULENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1zcWxpdGUvLi9wYWdlcy9hcGkvdXNlcnMvZW50ZXIudHN4PzAyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIGNvbnN0IHsgZW1haWwsIG5hbWUgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xuICBpZiAoIWVtYWlsIHx8ICFuYW1lKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBvazogZmFsc2UgfSk7XG5cbiAgYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBlbWFpbDogZW1haWwsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXMuanNvbih7XG4gICAgb2s6IHRydWUsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwib2siLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/enter.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/enter.tsx"));
module.exports = __webpack_exports__;

})();