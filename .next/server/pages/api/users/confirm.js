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
exports.id = "pages/api/users/confirm";
exports.ids = ["pages/api/users/confirm"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = global.db || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBR0MsTUFBTSxDQUFDRCxFQUFFLElBQUksSUFBSUQsd0RBQVksRUFBRTtBQUUxQyxJQUFJRyxJQUFzQyxFQUFFRCxNQUFNLENBQUNELEVBQUUsR0FBR0EsRUFBRSxDQUFDO0FBRTNELGlFQUFlQSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL2xpYi9kYi50cz8xZGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBkYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkYiA9IGdsb2JhbC5kYiB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/confirm.tsx":
/*!*************************************!*\
  !*** ./pages/api/users/confirm.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(api)/./lib/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    const { email  } = JSON.parse(req.body);\n    const exists = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n        where: {\n            email: email\n        }\n    });\n    if (!exists) return res.status(404).end();\n    req.session.user = {\n        id: exists.id\n    };\n    await req.session.save();\n    res.status(200).end();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(handler, {\n    cookieName: \"auth-session\",\n    password: \"V<xGM?4ALE>/UQk%;Rg'7=Sr$&jX9Wwb\"\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY29uZmlybS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTREO0FBRTNCO0FBVWpDLGVBQWVFLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixHQUFHLENBQUNLLElBQUksQ0FBQztJQUN0QyxNQUFNQyxNQUFNLEdBQUcsTUFBTVIsK0RBQWtCLENBQUM7UUFDdENXLEtBQUssRUFBRTtZQUNMUCxLQUFLLEVBQUVBLEtBQUs7U0FDYjtLQUNGLENBQUM7SUFDRixJQUFJLENBQUNJLE1BQU0sRUFBRSxPQUFPTCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7SUFDMUNYLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDTCxJQUFJLEdBQUc7UUFDakJNLEVBQUUsRUFBRVAsTUFBTSxDQUFDTyxFQUFFO0tBQ2QsQ0FBQztJQUNGLE1BQU1iLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDRSxJQUFJLEVBQUUsQ0FBQztJQUN6QmIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0NBQ3ZCO0FBRUQsaUVBQWVkLDBFQUF1QixDQUFDRSxPQUFPLEVBQUU7SUFDOUNnQixVQUFVLEVBQUUsY0FBYztJQUMxQkMsUUFBUSxFQUFFLGtDQUFrQztDQUM3QyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL3BhZ2VzL2FwaS91c2Vycy9jb25maXJtLnRzeD9mZjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xyXG5cclxuZGVjbGFyZSBtb2R1bGUgXCJpcm9uLXNlc3Npb25cIiB7XHJcbiAgaW50ZXJmYWNlIElyb25TZXNzaW9uRGF0YSB7XHJcbiAgICB1c2VyPzoge1xyXG4gICAgICBpZDogbnVtYmVyO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZVR5cGU+XHJcbikge1xyXG4gIGNvbnN0IHsgZW1haWwgfSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG4gIGNvbnN0IGV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGlmICghZXhpc3RzKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmVuZCgpO1xyXG4gIHJlcS5zZXNzaW9uLnVzZXIgPSB7XHJcbiAgICBpZDogZXhpc3RzLmlkLFxyXG4gIH07XHJcbiAgYXdhaXQgcmVxLnNlc3Npb24uc2F2ZSgpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5lbmQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwge1xyXG4gIGNvb2tpZU5hbWU6IFwiYXV0aC1zZXNzaW9uXCIsXHJcbiAgcGFzc3dvcmQ6IFwiVjx4R00/NEFMRT4vVVFrJTtSZyc3PVNyJCZqWDlXd2JcIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSIsImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImV4aXN0cyIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJzdGF0dXMiLCJlbmQiLCJzZXNzaW9uIiwiaWQiLCJzYXZlIiwiY29va2llTmFtZSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/confirm.tsx\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL25vZGVfbW9kdWxlcy9pcm9uLXNlc3Npb24vbmV4dC9kaXN0L2luZGV4Lm1qcz80Y2EzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5leHQvaW5kZXgudHNcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSBcImlyb24tc2Vzc2lvblwiO1xuXG4vLyBzcmMvZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbi50c1xuZnVuY3Rpb24gZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICAgIHNldCh2YWx1ZSkge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRLZXlzID0gT2JqZWN0LmtleXMoc2Vzc2lvbik7XG4gICAgICBjdXJyZW50S2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICBkZWxldGUgc2Vzc2lvbltrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHNlc3Npb25ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbi8vIG5leHQvaW5kZXgudHNcbmZ1bmN0aW9uIHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlKGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIG5leHRBcGlIYW5kbGVyV3JhcHBlZFdpdGhJcm9uU2Vzc2lvbihyZXEsIHJlcykge1xuICAgIGxldCBzZXNzaW9uT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IGF3YWl0IG9wdGlvbnMocmVxLCByZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRJcm9uU2Vzc2lvbihyZXEsIHJlcywgc2Vzc2lvbk9wdGlvbnMpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgIHJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uU3NyKGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIG5leHRHZXRTZXJ2ZXJTaWRlUHJvcHNIYW5kbGVyV3JhcHBlZFdpdGhJcm9uU2Vzc2lvbihjb250ZXh0KSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhjb250ZXh0LnJlcSwgY29udGV4dC5yZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXNzaW9uT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRJcm9uU2Vzc2lvbihcbiAgICAgIGNvbnRleHQucmVxLFxuICAgICAgY29udGV4dC5yZXMsXG4gICAgICBzZXNzaW9uT3B0aW9uc1xuICAgICk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBcInNlc3Npb25cIixcbiAgICAgIGdldFByb3BlcnR5RGVzY3JpcHRvckZvclJlcVNlc3Npb24oc2Vzc2lvbilcbiAgICApO1xuICAgIHJldHVybiBoYW5kbGVyKGNvbnRleHQpO1xuICB9O1xufVxuZXhwb3J0IHtcbiAgd2l0aElyb25TZXNzaW9uQXBpUm91dGUsXG4gIHdpdGhJcm9uU2Vzc2lvblNzclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/confirm.tsx"));
module.exports = __webpack_exports__;

})();