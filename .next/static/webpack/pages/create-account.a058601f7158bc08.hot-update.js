"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./lib/client/useUser.tsx":
/*!********************************!*\
  !*** ./lib/client/useUser.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useUser; }\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\n\n\nvar _s = $RefreshSig$();\nfunction useUser() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/users/me\"), data = ref.data, error = ref.error;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data && !data.ok) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        data,\n        error\n    ]);\n    return {\n        user: data,\n        isLoading: !data && !error\n    };\n};\n_s(useUser, \"4W9O7/pgHSLAxPizl2rA7NDDAiw=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZVVzZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNOO0FBQ1Q7O0FBRVYsU0FBU0csT0FBTyxHQUFHOztJQUNoQyxJQUF3QkQsR0FBdUIsR0FBdkJBLCtDQUFNLENBQUMsZUFBZSxDQUFDLEVBQXZDRSxJQUFJLEdBQVlGLEdBQXVCLENBQXZDRSxJQUFJLEVBQUVDLEtBQUssR0FBS0gsR0FBdUIsQ0FBakNHLEtBQUs7SUFDbkIsSUFBTUMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBRTFCQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJRyxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxFQUFFLEVBQUU7WUFDcEJELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDbkM7S0FDRixFQUFFO1FBQUNKLElBQUk7UUFBRUMsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVsQixPQUFPO1FBQUVJLElBQUksRUFBRUwsSUFBSTtRQUFFTSxTQUFTLEVBQUUsQ0FBQ04sSUFBSSxJQUFJLENBQUNDLEtBQUs7S0FBRSxDQUFDO0NBQ25EO0dBWHVCRixPQUFPOztRQUNMRCwyQ0FBTTtRQUNmRixrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvY2xpZW50L3VzZVVzZXIudHN4PzVjMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVc2VyKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3VzZXJzL21lXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICYmICFkYXRhLm9rKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9jcmVhdGUtYWNjb3VudFwiKTtcbiAgICB9XG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xuXG4gIHJldHVybiB7IHVzZXI6IGRhdGEsIGlzTG9hZGluZzogIWRhdGEgJiYgIWVycm9yIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsImRhdGEiLCJlcnJvciIsInJvdXRlciIsIm9rIiwicmVwbGFjZSIsInVzZXIiLCJpc0xvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/client/useUser.tsx\n");

/***/ }),

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var _home_kajj8808_Nomadcoder_auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_kajj8808_Nomadcoder_auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kajj8808_Nomadcoder_auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/client/useUser */ \"./lib/client/useUser.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    _s();\n    var user = (0,_lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var onValid = function() {\n        var _ref = _asyncToGenerator(_home_kajj8808_Nomadcoder_auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var json;\n            return _home_kajj8808_Nomadcoder_auth_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/users/enter\", {\n                            body: JSON.stringify(data),\n                            method: \"POST\"\n                        });\n                    case 2:\n                        _ctx.next = 4;\n                        return _ctx.sent.json();\n                    case 4:\n                        json = _ctx.sent;\n                        if (json.ok === true) {\n                            alert(\"Account created! Please log in!\");\n                            router.push(\"/login\");\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onValid(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onValid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({}, register(\"name\")), void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({}, register(\"email\")), void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        children: \"Create Account\"\n                    }, void 0, false, {\n                        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kajj8808/Nomadcoder/auth/pages/create-account.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"rbyloeSykK7xCcO+96rv7/6sfSo=\", false, function() {\n    return [\n        _lib_client_useUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDRTs7QUFPN0IsU0FBU0csYUFBYSxHQUFHOztJQUN0QyxJQUFNQyxJQUFJLEdBQUdGLCtEQUFPLEVBQUU7SUFDdEIsSUFBbUNELEdBQWdCLEdBQWhCQSx3REFBTyxFQUFTLEVBQTNDSSxRQUFRLEdBQW1CSixHQUFnQixDQUEzQ0ksUUFBUSxFQUFFQyxZQUFZLEdBQUtMLEdBQWdCLENBQWpDSyxZQUFZO0lBQzlCLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixJQUFNUSxPQUFPO21CQUFHLDZLQUFPQyxJQUFXLEVBQUs7Z0JBQy9CQyxJQUFJOzs7OzsrQkFDRkMsS0FBSyxDQUFDLGtCQUFrQixFQUFFOzRCQUM5QkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsSUFBSSxDQUFDOzRCQUMxQk0sTUFBTSxFQUFFLE1BQU07eUJBQ2YsQ0FBQzs7OytCQUplLFVBS2pCTCxJQUFJLEVBQUU7O3dCQUxGQSxJQUFJLFlBS0Y7d0JBQ1IsSUFBSUEsSUFBSSxDQUFDTSxFQUFFLEtBQUssSUFBSSxFQUFFOzRCQUNwQkMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7NEJBQ3pDVixNQUFNLENBQUNXLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDdkI7Ozs7OztTQUNGO3dCQVhLVixPQUFPLENBQVVDLElBQVc7OztPQVdqQztJQUNELHFCQUNFLDhEQUFDVSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxnQkFBYzs7Ozs7b0JBQUs7MEJBQ3ZCLDhEQUFDQyxNQUFJO2dCQUFDQyxRQUFRLEVBQUVoQixZQUFZLENBQUNFLE9BQU8sQ0FBQzs7a0NBQ25DLDhEQUFDZSxPQUFLO2tDQUFDLE9BQUs7Ozs7OzRCQUFRO2tDQUNwQiw4REFBQ0MsT0FBSyxvQkFBS25CLFFBQVEsQ0FBQyxNQUFNLENBQUM7Ozs7NEJBQUk7a0NBQy9CLDhEQUFDb0IsSUFBRTs7Ozs0QkFBRztrQ0FDTiw4REFBQ0YsT0FBSztrQ0FBQyxRQUFNOzs7Ozs0QkFBUTtrQ0FDckIsOERBQUNDLE9BQUssb0JBQUtuQixRQUFRLENBQUMsT0FBTyxDQUFDOzs7OzRCQUFJO2tDQUNoQyw4REFBQ29CLElBQUU7Ozs7NEJBQUc7a0NBQ04sOERBQUNDLFFBQU07a0NBQUMsZ0JBQWM7Ozs7OzRCQUFTOzs7Ozs7b0JBQzFCOzs7Ozs7WUFDSCxDQUNOO0NBQ0g7R0E5QnVCdkIsYUFBYTs7UUFDdEJELDJEQUFPO1FBQ2VELG9EQUFPO1FBQzNCRCxrREFBUzs7O0FBSEZHLEtBQUFBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLWFjY291bnQudHN4PzQ1MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIi4uL2xpYi9jbGllbnQvdXNlVXNlclwiO1xuXG5pbnRlcmZhY2UgSUZvcm0ge1xuICBlbWFpbDogU3RyaW5nO1xuICBuYW1lOiBTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUFjY291bnQoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxJRm9ybT4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG9uVmFsaWQgPSBhc3luYyAoZGF0YTogSUZvcm0pID0+IHtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgKFxuICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL2VudGVyXCIsIHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB9KVxuICAgICkuanNvbigpO1xuICAgIGlmIChqc29uLm9rID09PSB0cnVlKSB7XG4gICAgICBhbGVydChcIkFjY291bnQgY3JlYXRlZCEgUGxlYXNlIGxvZyBpbiFcIik7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DcmVhdGUgQWNjb3VudDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcIm5hbWVcIil9IC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHsuLi5yZWdpc3RlcihcImVtYWlsXCIpfSAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUZvcm0iLCJ1c2VVc2VyIiwiQ3JlYXRlQWNjb3VudCIsInVzZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJvdXRlciIsIm9uVmFsaWQiLCJkYXRhIiwianNvbiIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJvayIsImFsZXJ0IiwicHVzaCIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});