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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"@reduxjs/toolkit/query\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _features_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/authSlice */ \"./src/features/authSlice.js\");\n/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/userSlice */ \"./src/features/userSlice.js\");\n/* harmony import */ var _features_orderSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/orderSlice */ \"./src/features/orderSlice.js\");\n\n\n//import { userAuthApi } from '../services/userAuthApi'\n//import { userCRUDApi } from '../services/userCRUDApi'\n//import {orderApi} from '../services/orderApi'\n//import { productApi } from '../services/productApi'\n//import {feedbackApi} from '../services/feedbackApi'\n\n\n//import{customOrderApi} from '../services/customOrderApi'\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _features_authSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        user: _features_userSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        order: _features_orderSlice__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n});\n(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ007QUFDdkQsdURBQXVEO0FBQ3ZELHVEQUF1RDtBQUN2RCwrQ0FBK0M7QUFDL0MscURBQXFEO0FBQ3JELHFEQUFxRDtBQUNOO0FBQ0E7QUFDL0MsMERBQTBEO0FBQ1Q7QUFFMUMsTUFBTUssS0FBSyxHQUFHTCxnRUFBYyxDQUFDO0lBQ2xDTSxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFTCwyREFBVztRQUNqQk0sSUFBSSxFQUFFTCwyREFBVztRQUNqQk0sS0FBSyxFQUFFTCw0REFBWTtLQUNwQjtDQUNGLENBQUM7QUFFRkgsc0VBQWMsQ0FBQ0ksS0FBSyxDQUFDSyxRQUFRLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXNob3AvLi9zcmMvYXBwL3N0b3JlLmpzPzU4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHsgc2V0dXBMaXN0ZW5lcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5J1xuLy9pbXBvcnQgeyB1c2VyQXV0aEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJBdXRoQXBpJ1xuLy9pbXBvcnQgeyB1c2VyQ1JVREFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL3VzZXJDUlVEQXBpJ1xuLy9pbXBvcnQge29yZGVyQXBpfSBmcm9tICcuLi9zZXJ2aWNlcy9vcmRlckFwaSdcbi8vaW1wb3J0IHsgcHJvZHVjdEFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL3Byb2R1Y3RBcGknXG4vL2ltcG9ydCB7ZmVlZGJhY2tBcGl9IGZyb20gJy4uL3NlcnZpY2VzL2ZlZWRiYWNrQXBpJ1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL2F1dGhTbGljZSdcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuLi9mZWF0dXJlcy91c2VyU2xpY2UnXG4vL2ltcG9ydHtjdXN0b21PcmRlckFwaX0gZnJvbSAnLi4vc2VydmljZXMvY3VzdG9tT3JkZXJBcGknXG5pbXBvcnQgb3JkZXJSZWR1Y2VyIGZyb20gJy4uL2ZlYXR1cmVzL29yZGVyU2xpY2UnXG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGF1dGg6IGF1dGhSZWR1Y2VyLFxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxuICAgIG9yZGVyOiBvcmRlclJlZHVjZXIsXG4gIH0sXG59KVxuXG5zZXR1cExpc3RlbmVycyhzdG9yZS5kaXNwYXRjaCkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJzZXR1cExpc3RlbmVycyIsImF1dGhSZWR1Y2VyIiwidXNlclJlZHVjZXIiLCJvcmRlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJhdXRoIiwidXNlciIsIm9yZGVyIiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app/store.js\n");

/***/ }),

/***/ "./src/features/authSlice.js":
/*!***********************************!*\
  !*** ./src/features/authSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": () => (/* binding */ authSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setUserToken\": () => (/* binding */ setUserToken),\n/* harmony export */   \"unSetUserToken\": () => (/* binding */ unSetUserToken)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    access_token: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth_token\",\n    initialState,\n    reducers: {\n        setUserToken: (state, action)=>{\n            state.access_token = action.payload.access_token;\n        },\n        unSetUserToken: (state, action)=>{\n            state.access_token = action.payload.access_token;\n        }\n    }\n});\nconst { setUserToken , unSetUserToken  } = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYXV0aFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLFlBQVksRUFBRSxJQUFJO0NBQ25CO0FBRU0sTUFBTUMsU0FBUyxHQUFHSCw2REFBVyxDQUFDO0lBQ25DSSxJQUFJLEVBQUUsWUFBWTtJQUNsQkgsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDUkMsWUFBWSxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQy9CRCxLQUFLLENBQUNMLFlBQVksR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUNQLFlBQVk7U0FDakQ7UUFDRFEsY0FBYyxFQUFFLENBQUNILEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ2pDRCxLQUFLLENBQUNMLFlBQVksR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUNQLFlBQVk7U0FDakQ7S0FDRjtDQUNGLENBQUM7QUFFSyxNQUFNLEVBQUVJLFlBQVksR0FBRUksY0FBYyxHQUFFLEdBQUdQLFNBQVMsQ0FBQ1EsT0FBTztBQUVqRSxpRUFBZVIsU0FBUyxDQUFDUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVzaG9wLy4vc3JjL2ZlYXR1cmVzL2F1dGhTbGljZS5qcz8zMzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBhY2Nlc3NfdG9rZW46IG51bGwsXG59XG5cbmV4cG9ydCBjb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhdXRoX3Rva2VuJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFVzZXJUb2tlbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmFjY2Vzc190b2tlbiA9IGFjdGlvbi5wYXlsb2FkLmFjY2Vzc190b2tlblxuICAgIH0sXG4gICAgdW5TZXRVc2VyVG9rZW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5hY2Nlc3NfdG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3NfdG9rZW5cbiAgICB9LFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlclRva2VuLCB1blNldFVzZXJUb2tlbiB9ID0gYXV0aFNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJhY2Nlc3NfdG9rZW4iLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyVG9rZW4iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ1blNldFVzZXJUb2tlbiIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/authSlice.js\n");

/***/ }),

/***/ "./src/features/orderSlice.js":
/*!************************************!*\
  !*** ./src/features/orderSlice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"orderSlice\": () => (/* binding */ orderSlice),\n/* harmony export */   \"setOrder\": () => (/* binding */ setOrder),\n/* harmony export */   \"unsetOrder\": () => (/* binding */ unsetOrder)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    id: \"\",\n    order_Status: \"\",\n    order_Delivery_Date: \"\",\n    order_Delivery_Time: \" \",\n    total_Amount: \"\"\n};\nconst orderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"Order\",\n    initialState,\n    reducers: {\n        setOrder: (state, action)=>{\n            state.id = action.payload.id;\n            state.order_Status = action.payload.order_Status;\n            state.order_Delivery_Date = action.payload.order_Delivery_Date;\n            state.order_Delivery_Time = action.payload.order_Delivery_Time;\n            state.total_Amount = action.payload.total_Amount;\n        },\n        unsetOrder: (state, action)=>{\n            state.id = action.payload.id;\n            state.order_Status = action.payload.order_Status;\n            state.order_Delivery_Date = action.payload.order_Delivery_Date;\n            state.order_Delivery_Time = action.payload.order_Delivery_Time;\n            state.total_Amount = action.payload.total_Amount;\n        }\n    }\n});\nconst { setOrder , unsetOrder  } = orderSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvb3JkZXJTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsWUFBWSxHQUFHO0lBQ2pCQyxFQUFFLEVBQUMsRUFBRTtJQUNMQyxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsbUJBQW1CLEVBQUUsRUFBRTtJQUN2QkMsbUJBQW1CLEVBQUUsR0FBRztJQUN4QkMsWUFBWSxFQUFFLEVBQUU7Q0FDbkI7QUFFTSxNQUFNQyxVQUFVLEdBQUdQLDZEQUFXLENBQUM7SUFDcENRLElBQUksRUFBRSxPQUFPO0lBQ2JQLFlBQVk7SUFDWlEsUUFBUSxFQUFFO1FBQ1JDLFFBQVEsRUFBRSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUMzQkQsS0FBSyxDQUFDVCxFQUFFLEdBQUdVLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWCxFQUFFO1lBQzVCUyxLQUFLLENBQUNSLFlBQVksR0FBR1MsTUFBTSxDQUFDQyxPQUFPLENBQUNWLFlBQVk7WUFDaERRLEtBQUssQ0FBQ1AsbUJBQW1CLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVCxtQkFBbUI7WUFDOURPLEtBQUssQ0FBQ04sbUJBQW1CLEdBQUdPLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUixtQkFBbUI7WUFDOURNLEtBQUssQ0FBQ0wsWUFBWSxHQUFFTSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1AsWUFBWTtTQUVoRDtRQUNEUSxVQUFVLEVBQUUsQ0FBQ0gsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDN0JELEtBQUssQ0FBQ1QsRUFBRSxHQUFHVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1gsRUFBRTtZQUM1QlMsS0FBSyxDQUFDUixZQUFZLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVixZQUFZO1lBQ2hEUSxLQUFLLENBQUNQLG1CQUFtQixHQUFHUSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1QsbUJBQW1CO1lBQzlETyxLQUFLLENBQUNOLG1CQUFtQixHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsbUJBQW1CO1lBQzlETSxLQUFLLENBQUNMLFlBQVksR0FBRU0sTUFBTSxDQUFDQyxPQUFPLENBQUNQLFlBQVk7U0FDaEQ7S0FDRjtDQUNGLENBQUM7QUFFSyxNQUFNLEVBQUVJLFFBQVEsR0FBRUksVUFBVSxHQUFFLEdBQUdQLFVBQVUsQ0FBQ1EsT0FBTztBQUUxRCxpRUFBZVIsVUFBVSxDQUFDUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVzaG9wLy4vc3JjL2ZlYXR1cmVzL29yZGVyU2xpY2UuanM/YWZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpZDpcIlwiLFxuICAgIG9yZGVyX1N0YXR1czogXCJcIixcbiAgICBvcmRlcl9EZWxpdmVyeV9EYXRlOiBcIlwiLFxuICAgIG9yZGVyX0RlbGl2ZXJ5X1RpbWUgOlwiIFwiLFxuICAgIHRvdGFsX0Ftb3VudDogXCJcIixcbn1cblxuZXhwb3J0IGNvbnN0IG9yZGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdPcmRlcicsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRPcmRlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlkID0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIHN0YXRlLm9yZGVyX1N0YXR1cyA9IGFjdGlvbi5wYXlsb2FkLm9yZGVyX1N0YXR1c1xuICAgICAgc3RhdGUub3JkZXJfRGVsaXZlcnlfRGF0ZSA9IGFjdGlvbi5wYXlsb2FkLm9yZGVyX0RlbGl2ZXJ5X0RhdGVcbiAgICAgIHN0YXRlLm9yZGVyX0RlbGl2ZXJ5X1RpbWUgPSBhY3Rpb24ucGF5bG9hZC5vcmRlcl9EZWxpdmVyeV9UaW1lXG4gICAgICBzdGF0ZS50b3RhbF9BbW91bnQ9IGFjdGlvbi5wYXlsb2FkLnRvdGFsX0Ftb3VudFxuXG4gICAgfSxcbiAgICB1bnNldE9yZGVyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaWQgPSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgc3RhdGUub3JkZXJfU3RhdHVzID0gYWN0aW9uLnBheWxvYWQub3JkZXJfU3RhdHVzXG4gICAgICBzdGF0ZS5vcmRlcl9EZWxpdmVyeV9EYXRlID0gYWN0aW9uLnBheWxvYWQub3JkZXJfRGVsaXZlcnlfRGF0ZVxuICAgICAgc3RhdGUub3JkZXJfRGVsaXZlcnlfVGltZSA9IGFjdGlvbi5wYXlsb2FkLm9yZGVyX0RlbGl2ZXJ5X1RpbWVcbiAgICAgIHN0YXRlLnRvdGFsX0Ftb3VudD0gYWN0aW9uLnBheWxvYWQudG90YWxfQW1vdW50XG4gICAgfSxcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0T3JkZXIsIHVuc2V0T3JkZXIgfSA9IG9yZGVyU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBvcmRlclNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpZCIsIm9yZGVyX1N0YXR1cyIsIm9yZGVyX0RlbGl2ZXJ5X0RhdGUiLCJvcmRlcl9EZWxpdmVyeV9UaW1lIiwidG90YWxfQW1vdW50Iiwib3JkZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldE9yZGVyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwidW5zZXRPcmRlciIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/orderSlice.js\n");

/***/ }),

/***/ "./src/features/userSlice.js":
/*!***********************************!*\
  !*** ./src/features/userSlice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setUserInfo\": () => (/* binding */ setUserInfo),\n/* harmony export */   \"unsetUserInfo\": () => (/* binding */ unsetUserInfo),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    id: \"\",\n    first_Name: \"\",\n    last_Name: \"\",\n    email: \"\",\n    phone_Number: \"\",\n    type: \"\"\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user_info\",\n    initialState,\n    reducers: {\n        setUserInfo: (state, action)=>{\n            state.id = action.payload.id;\n            state.first_Name = action.payload.first_Name;\n            state.last_Name = action.payload.last_Name;\n            state.email = action.payload.email;\n            state.phone_Number = action.payload.phone_Number;\n            state.type = action.payload.type;\n        },\n        unsetUserInfo: (state, action)=>{\n            state.id = action.payload.id;\n            state.first_Name = action.payload.first_Name;\n            state.last_Name = action.payload.last_Name;\n            state.email = action.payload.email;\n            state.phone_Number = action.payload.phone_Number;\n            state.type = action.payload.type;\n        }\n    }\n});\nconst { setUserInfo , unsetUserInfo  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxZQUFZLEdBQUc7SUFDakJDLEVBQUUsRUFBQyxFQUFFO0lBQ0xDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxJQUFJLEVBQUUsRUFBRTtDQUNYO0FBRU0sTUFBTUMsU0FBUyxHQUFHUiw2REFBVyxDQUFDO0lBQ25DUyxJQUFJLEVBQUUsV0FBVztJQUNqQlIsWUFBWTtJQUNaUyxRQUFRLEVBQUU7UUFDUkMsV0FBVyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzlCRCxLQUFLLENBQUNWLEVBQUUsR0FBR1csTUFBTSxDQUFDQyxPQUFPLENBQUNaLEVBQUU7WUFDNUJVLEtBQUssQ0FBQ1QsVUFBVSxHQUFHVSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1gsVUFBVTtZQUM1Q1MsS0FBSyxDQUFDUixTQUFTLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVixTQUFTO1lBQzFDUSxLQUFLLENBQUNQLEtBQUssR0FBR1EsTUFBTSxDQUFDQyxPQUFPLENBQUNULEtBQUs7WUFDbENPLEtBQUssQ0FBQ04sWUFBWSxHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsWUFBWTtZQUNoRE0sS0FBSyxDQUFDTCxJQUFJLEdBQUVNLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDUCxJQUFJO1NBRWhDO1FBQ0RRLGFBQWEsRUFBRSxDQUFDSCxLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUNoQ0QsS0FBSyxDQUFDVixFQUFFLEdBQUdXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWixFQUFFO1lBQzVCVSxLQUFLLENBQUNULFVBQVUsR0FBR1UsTUFBTSxDQUFDQyxPQUFPLENBQUNYLFVBQVU7WUFDNUNTLEtBQUssQ0FBQ1IsU0FBUyxHQUFHUyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1YsU0FBUztZQUMxQ1EsS0FBSyxDQUFDUCxLQUFLLEdBQUdRLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVCxLQUFLO1lBQ2xDTyxLQUFLLENBQUNOLFlBQVksR0FBR08sTUFBTSxDQUFDQyxPQUFPLENBQUNSLFlBQVk7WUFDaERNLEtBQUssQ0FBQ0wsSUFBSSxHQUFFTSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1AsSUFBSTtTQUNoQztLQUNGO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRUksV0FBVyxHQUFFSSxhQUFhLEdBQUUsR0FBR1AsU0FBUyxDQUFDUSxPQUFPO0FBRS9ELGlFQUFlUixTQUFTLENBQUNTLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXNob3AvLi9zcmMvZmVhdHVyZXMvdXNlclNsaWNlLmpzPzYyODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgaWQ6XCJcIixcbiAgICBmaXJzdF9OYW1lOiBcIlwiLFxuICAgIGxhc3RfTmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwaG9uZV9OdW1iZXI6IFwiXCIsXG4gICAgdHlwZTogXCJcIixcbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3VzZXJfaW5mbycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VySW5mbzogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmlkID0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgIHN0YXRlLmZpcnN0X05hbWUgPSBhY3Rpb24ucGF5bG9hZC5maXJzdF9OYW1lXG4gICAgICBzdGF0ZS5sYXN0X05hbWUgPSBhY3Rpb24ucGF5bG9hZC5sYXN0X05hbWVcbiAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQuZW1haWxcbiAgICAgIHN0YXRlLnBob25lX051bWJlciA9IGFjdGlvbi5wYXlsb2FkLnBob25lX051bWJlclxuICAgICAgc3RhdGUudHlwZT0gYWN0aW9uLnBheWxvYWQudHlwZVxuXG4gICAgfSxcbiAgICB1bnNldFVzZXJJbmZvOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuaWQgPSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgc3RhdGUuZmlyc3RfTmFtZSA9IGFjdGlvbi5wYXlsb2FkLmZpcnN0X05hbWVcbiAgICAgIHN0YXRlLmxhc3RfTmFtZSA9IGFjdGlvbi5wYXlsb2FkLmxhc3RfTmFtZVxuICAgICAgc3RhdGUuZW1haWwgPSBhY3Rpb24ucGF5bG9hZC5lbWFpbFxuICAgICAgc3RhdGUucGhvbmVfTnVtYmVyID0gYWN0aW9uLnBheWxvYWQucGhvbmVfTnVtYmVyXG4gICAgICBzdGF0ZS50eXBlPSBhY3Rpb24ucGF5bG9hZC50eXBlXG4gICAgfSxcbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc2V0VXNlckluZm8sIHVuc2V0VXNlckluZm8gfSA9IHVzZXJTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiaWQiLCJmaXJzdF9OYW1lIiwibGFzdF9OYW1lIiwiZW1haWwiLCJwaG9uZV9OdW1iZXIiLCJ0eXBlIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VXNlckluZm8iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ1bnNldFVzZXJJbmZvIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/userSlice.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n\n\n\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MyApp = ({ Component , pageProps  })=>{\n    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n            value: {\n                cart,\n                setCart\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vishal Jaimin Vakil\\\\Downloads\\\\Delete - Copy\\\\Cake-Shop-Website-With-Admin-Panel-main\\\\customer-frontend\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Vishal Jaimin Vakil\\\\Downloads\\\\Delete - Copy\\\\Cake-Shop-Website-With-Admin-Panel-main\\\\customer-frontend\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Vishal Jaimin Vakil\\\\Downloads\\\\Delete - Copy\\\\Cake-Shop-Website-With-Admin-Panel-main\\\\customer-frontend\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ2pCO0FBQ087QUFDRjtBQUU3QixNQUFNSSxXQUFXLGlCQUFHSixvREFBYSxFQUFFLENBQUM7QUFFM0MsTUFBTUssS0FBSyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUMxQyxNQUFNLEVBUlIsR0FRU0MsSUFBSSxHQVJiLEdBUWVDLE9BQU8sTUFBSVIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDcEMscUJBQ0UsOERBQUNDLGlEQUFRO1FBQUNDLEtBQUssRUFBRUEsNkNBQUs7a0JBQ3BCLDRFQUFDQyxXQUFXLENBQUNGLFFBQVE7WUFBQ1EsS0FBSyxFQUFFO2dCQUFFRixJQUFJO2dCQUFFQyxPQUFPO2FBQUU7c0JBQzlDLDRFQUFDSCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O3lCQUFJOzs7OztxQkFDUDs7Ozs7aUJBQ1osQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jlc2hvcC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9hcHAvc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBzZXRDYXJ0IH19PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb3ZpZGVyIiwic3RvcmUiLCJDYXJ0Q29udGV4dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2FydCIsInNldENhcnQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query":
/*!*****************************************!*\
  !*** external "@reduxjs/toolkit/query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();