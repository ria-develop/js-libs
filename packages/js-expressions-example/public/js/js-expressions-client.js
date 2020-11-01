(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ria-develop/js-expressions-core"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("js-expressions-client", ["@ria-develop/js-expressions-core", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["js-expressions-client"] = factory(require("@ria-develop/js-expressions-core"), require("lodash"));
	else
		root["js-expressions-client"] = factory(root["@ria-develop"]["js-expressions-core"], root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__ria_develop_js_expressions_core__, __WEBPACK_EXTERNAL_MODULE_lodash__) {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["js-expressions-client"],{

/***/ "./packages/js-expressions-client/src/js-expressions-client.ts":
/*!*********************************************************************!*\
  !*** ./packages/js-expressions-client/src/js-expressions-client.ts ***!
  \*********************************************************************/
/*! exports provided: CONTENT_ONLY_TOKEN, TOKEN, tokenProvider, tokenExtractor, tokenResolver, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ONLY_TOKEN", function() { return CONTENT_ONLY_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenProvider", function() { return tokenProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenExtractor", function() { return tokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenResolver", function() { return tokenResolver; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ria_develop_js_expressions_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ria-develop/js-expressions-core */ "@ria-develop/js-expressions-core");
/* harmony import */ var _ria_develop_js_expressions_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ria_develop_js_expressions_core__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Optional token that can be used to resolve value
 * TODO: Implement method for resolving this kind of token
 * @type {RegExp}
 */

var CONTENT_ONLY_TOKEN = /([^{]+(?=}))/g;
/**
 * Optional token that can be used to resolve value
 * @type {RegExp}
 */

var TOKEN = /{[^[}]+}/g;
/**
 * Default implementation of TokenProvider
 * @returns {RegExp}
 */

var tokenProvider = function () {
  return TOKEN;
};
/**
 * Default implementation of token cleanup while to see only token value e.g for '{token}' returns 'token'
 * @param {string} token
 * @returns {string}
 */

var tokenExtractor = function (token) {
  return token.replace(/[{}]/g, '');
};
/**
 * Default TokenResolver implementations which uses {#tokenExtractor}
 * @param data
 * @param token
 * @returns {*}
 */

var tokenResolver = function (data, token) {
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(data, tokenExtractor(token));
};
/* harmony default export */ __webpack_exports__["default"] = (function (inputData) {
  return _ria_develop_js_expressions_core__WEBPACK_IMPORTED_MODULE_1___default()(inputData, tokenProvider, tokenResolver);
});

/***/ }),

/***/ "@ria-develop/js-expressions-core":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@ria-develop/js-expressions-core","commonjs2":"@ria-develop/js-expressions-core","amd":"@ria-develop/js-expressions-core","root":["@ria-develop","js-expressions-core"]} ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ria_develop_js_expressions_core__;

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

},[["./packages/js-expressions-client/src/js-expressions-client.ts","runtime"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWNsaWVudC9zcmMvanMtZXhwcmVzc2lvbnMtY2xpZW50LnRzIiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiQHJpYS1kZXZlbG9wL2pzLWV4cHJlc3Npb25zLWNvcmVcIixcImNvbW1vbmpzMlwiOlwiQHJpYS1kZXZlbG9wL2pzLWV4cHJlc3Npb25zLWNvcmVcIixcImFtZFwiOlwiQHJpYS1kZXZlbG9wL2pzLWV4cHJlc3Npb25zLWNvcmVcIixcInJvb3RcIjpbXCJAcmlhLWRldmVsb3BcIixcImpzLWV4cHJlc3Npb25zLWNvcmVcIl19Iiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIixcInJvb3RcIjpcIl9cIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQUlHOztBQUNJLElBQU0sa0JBQWtCLEdBQUcsZUFBM0I7QUFFUDs7O0FBR0c7O0FBQ0ksSUFBTSxLQUFLLEdBQUcsV0FBZDtBQUVQOzs7QUFHRzs7QUFDSSxJQUFNLGFBQWEsR0FBa0I7QUFBYztBQUFLLENBQXhEO0FBRVA7Ozs7QUFJRzs7QUFDSSxJQUFNLGNBQWMsR0FBRyxVQUFDLEtBQUQsRUFBYztBQUFhLGNBQUssQ0FBQyxPQUFOLENBQWMsT0FBZDtBQUEwQixDQUE1RTtBQUVQOzs7OztBQUtHOztBQUNJLElBQU0sYUFBYSxHQUFrQixVQUFDLElBQUQsRUFBTyxLQUFQLEVBQVk7QUFBSyxzREFBQyxDQUFDLEdBQUYsQ0FBTSxJQUFOLEVBQVksY0FBYyxDQUExQixLQUEwQixDQUExQjtBQUFrQyxDQUF4RjtBQUVRLHlFQUFJLFNBQUosRUFBZ0I7QUFBZ0IsZ0ZBQVMsQ0FBQyxTQUFELEVBQVksYUFBWixFQUFULGFBQVMsQ0FBVDtBQUFrRCxDQUFqRyxFOzs7Ozs7Ozs7OztBQ3JDQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiIuL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWNsaWVudC9kaXN0L2pzLWV4cHJlc3Npb25zLWNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jb3JlXCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwianMtZXhwcmVzc2lvbnMtY2xpZW50XCIsIFtcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jb3JlXCIsIFwibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzLWV4cHJlc3Npb25zLWNsaWVudFwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jb3JlXCIpLCByZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJqcy1leHByZXNzaW9ucy1jbGllbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJAcmlhLWRldmVsb3BcIl1bXCJqcy1leHByZXNzaW9ucy1jb3JlXCJdLCByb290W1wiX1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3JpYV9kZXZlbG9wX2pzX2V4cHJlc3Npb25zX2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXykge1xucmV0dXJuICIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZXZhbHVhdG9yLCB7UHJvY2Vzc29yLCBUb2tlblByb3ZpZGVyLCBUb2tlblJlc29sdmVyfSBmcm9tICdAcmlhLWRldmVsb3AvanMtZXhwcmVzc2lvbnMtY29yZSc7XG5cbi8qKlxuICogT3B0aW9uYWwgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byByZXNvbHZlIHZhbHVlXG4gKiBUT0RPOiBJbXBsZW1lbnQgbWV0aG9kIGZvciByZXNvbHZpbmcgdGhpcyBraW5kIG9mIHRva2VuXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG5leHBvcnQgY29uc3QgQ09OVEVOVF9PTkxZX1RPS0VOID0gLyhbXntdKyg/PX0pKS9nO1xuXG4vKipcbiAqIE9wdGlvbmFsIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVzb2x2ZSB2YWx1ZVxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuZXhwb3J0IGNvbnN0IFRPS0VOID0gL3tbXlt9XSt9L2c7XG5cbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBUb2tlblByb3ZpZGVyXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICovXG5leHBvcnQgY29uc3QgdG9rZW5Qcm92aWRlcjogVG9rZW5Qcm92aWRlciA9ICgpOiBSZWdFeHAgPT4gVE9LRU47XG5cbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0b2tlbiBjbGVhbnVwIHdoaWxlIHRvIHNlZSBvbmx5IHRva2VuIHZhbHVlIGUuZyBmb3IgJ3t0b2tlbn0nIHJldHVybnMgJ3Rva2VuJ1xuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgdG9rZW5FeHRyYWN0b3IgPSAodG9rZW46IHN0cmluZyk6IHN0cmluZyA9PiB0b2tlbi5yZXBsYWNlKC9be31dL2csICcnKTtcblxuLyoqXG4gKiBEZWZhdWx0IFRva2VuUmVzb2x2ZXIgaW1wbGVtZW50YXRpb25zIHdoaWNoIHVzZXMgeyN0b2tlbkV4dHJhY3Rvcn1cbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gdG9rZW5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgdG9rZW5SZXNvbHZlcjogVG9rZW5SZXNvbHZlciA9IChkYXRhLCB0b2tlbikgPT4gXy5nZXQoZGF0YSwgdG9rZW5FeHRyYWN0b3IodG9rZW4pKTtcblxuZXhwb3J0IGRlZmF1bHQgPFQ+KGlucHV0RGF0YTogVCk6IFByb2Nlc3NvciA9PiBldmFsdWF0b3IoaW5wdXREYXRhLCB0b2tlblByb3ZpZGVyLCB0b2tlblJlc29sdmVyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fcmlhX2RldmVsb3BfanNfZXhwcmVzc2lvbnNfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sb2Rhc2hfXzsiXSwic291cmNlUm9vdCI6IiJ9