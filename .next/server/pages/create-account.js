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
exports.id = "pages/create-account";
exports.ids = ["pages/create-account"];
exports.modules = {

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateAccount)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"react-hook-form\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);\nreact_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction CreateAccount() {\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onValid = async (data)=>{\n        const json = await (await fetch(\"/api/users/enter\", {\n            body: JSON.stringify(data),\n            method: \"POST\"\n        })).json();\n        if (json.ok === true) {\n            alert(\"Account created! Please log in!\");\n            router.push(\"/login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"name\")\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ...register(\"email\")\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFDRTtBQVEzQixTQUFTRSxhQUFhLEdBQUc7SUFDdEMsTUFBTSxFQUFFQyxRQUFRLEdBQUVDLFlBQVksR0FBRSxHQUFHSCx3REFBTyxFQUFTO0lBQ25ELE1BQU1JLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixNQUFNTSxPQUFPLEdBQUcsT0FBT0MsSUFBVyxHQUFLO1FBQ3JDLE1BQU1DLElBQUksR0FBRyxNQUFNLENBQ2pCLE1BQU1DLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUM5QkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDO1lBQzFCTSxNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUMsQ0FDSCxDQUFDTCxJQUFJLEVBQUU7UUFDUixJQUFJQSxJQUFJLENBQUNNLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDcEJDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ3pDVixNQUFNLENBQUNXLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLGdCQUFjOzs7OztvQkFBSzswQkFDdkIsOERBQUNDLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRWhCLFlBQVksQ0FBQ0UsT0FBTyxDQUFDOztrQ0FDbkMsOERBQUNlLE9BQUs7a0NBQUMsT0FBSzs7Ozs7NEJBQVE7a0NBQ3BCLDhEQUFDQyxPQUFLO3dCQUFFLEdBQUduQixRQUFRLENBQUMsTUFBTSxDQUFDOzs7Ozs0QkFBSTtrQ0FDL0IsOERBQUNvQixJQUFFOzs7OzRCQUFHO2tDQUNOLDhEQUFDRixPQUFLO2tDQUFDLFFBQU07Ozs7OzRCQUFRO2tDQUNyQiw4REFBQ0MsT0FBSzt3QkFBRSxHQUFHbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQzs7Ozs7NEJBQUk7a0NBQ2hDLDhEQUFDb0IsSUFBRTs7Ozs0QkFBRztrQ0FDTiw4REFBQ0MsUUFBTTtrQ0FBQyxnQkFBYzs7Ozs7NEJBQVM7Ozs7OztvQkFDMUI7Ozs7OztZQUNILENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvY3JlYXRlLWFjY291bnQudHN4PzQ1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuXG5pbnRlcmZhY2UgSUZvcm0ge1xuICBlbWFpbDogU3RyaW5nO1xuICBuYW1lOiBTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUFjY291bnQoKSB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxJRm9ybT4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG9uVmFsaWQgPSBhc3luYyAoZGF0YTogSUZvcm0pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgKFxuICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL2VudGVyXCIsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICAgIGlmIChqc29uLm9rID09PSB0cnVlKSB7XG4gICAgICBhbGVydChcIkFjY291bnQgY3JlYXRlZCEgUGxlYXNlIGxvZyBpbiFcIik7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcIm5hbWVcIil9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImVtYWlsXCIpfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUZvcm0iLCJDcmVhdGVBY2NvdW50IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJyb3V0ZXIiLCJvblZhbGlkIiwiZGF0YSIsImpzb24iLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwib2siLCJhbGVydCIsInB1c2giLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/create-account.tsx"));
module.exports = __webpack_exports__;

})();