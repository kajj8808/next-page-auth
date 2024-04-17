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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/client/useUser.tsx":
/*!********************************!*\
  !*** ./lib/client/useUser.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction useUser() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && !data.ok) {\n            router.replace(\"/create-account\");\n        } else {\n            router.replace(\"/\");\n        }\n    }, [\n        data,\n        error\n    ]);\n    return {\n        user: data,\n        isLoading: !data && !error\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBQ1Q7QUFFVixTQUFTRyxPQUFPLEdBQUc7SUFDaEMsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFHSCwrQ0FBTSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxNQUFNSSxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFFMUJDLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUlHLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNHLEVBQUUsRUFBRTtZQUNwQkQsTUFBTSxDQUFDRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNuQyxNQUFNO1lBQ0xGLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0YsRUFBRTtRQUFDSixJQUFJO1FBQUVDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFbEIsT0FBTztRQUFFSSxJQUFJLEVBQUVMLElBQUk7UUFBRU0sU0FBUyxFQUFFLENBQUNOLElBQUksSUFBSSxDQUFDQyxLQUFLO0tBQUUsQ0FBQztDQUNuRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vbGliL2NsaWVudC91c2VVc2VyLnRzeD81YzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVXNlcigpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS91c2Vycy9tZVwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAmJiAhZGF0YS5vaykge1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY3JlYXRlLWFjY291bnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgICB9XG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xuXG4gIHJldHVybiB7IHVzZXI6IGRhdGEsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInVzZXIiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/useUser.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Page() {\n    const { user  } = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Welcome \",\n                    user?.name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Your email is: \",\n                    user?.email\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFFa0I7QUFFNUMsU0FBU0UsSUFBSSxHQUFHO0lBQ2QsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBR0YsK0RBQU8sRUFBRTtJQUUxQixxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7O29CQUFDLFVBQVE7b0JBQUNGLElBQUksRUFBRUcsSUFBSTs7Ozs7O29CQUFNOzBCQUM3Qiw4REFBQ0MsSUFBRTs7b0JBQUMsaUJBQWU7b0JBQUNKLElBQUksRUFBRUssS0FBSzs7Ozs7O29CQUFNOzs7Ozs7WUFDakMsQ0FDTjtDQUNIO0FBRUQsaUVBQWVOLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VVc2VyXCI7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5XZWxjb21lIHt1c2VyPy5uYW1lfTwvaDE+XG4gICAgICA8aDI+WW91ciBlbWFpbCBpczoge3VzZXI/LmVtYWlsfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VVc2VyIiwiUGFnZSIsInVzZXIiLCJkaXYiLCJoMSIsIm5hbWUiLCJoMiIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();