(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("js-expressions-core", [], factory);
	else if(typeof exports === 'object')
		exports["js-expressions-core"] = factory();
	else
		root["js-expressions-core"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["js-expressions-core"],{

/***/ "./packages/js-expressions-core/src/js-expressions-core.ts":
/*!*****************************************************************!*\
  !*** ./packages/js-expressions-core/src/js-expressions-core.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Generates scope for resolving values by tokens, and returns simple callback which can be used while processing data structure.
 * @param {T} inputData - any structure which is passing to resolver when matched the expression or to function provided as a value in target structure
 * @param {TokenProvider} tokenProvider a function that provides token to search in the target value
 * @param {TokenResolver} tokenResolver a function that provides value for given token
 * @return {function(*, *=): *}
 * @template T
 */
var evaluator = function (inputData, tokenProvider, tokenResolver) {
  return function (key, value) {
    if (typeof value === 'function') {
      value = value(inputData);
    }

    if (typeof value === 'string') {
      var result = tokenProvider && value.match(tokenProvider()) || [];

      if (result.length) {
        result.forEach(function (matched) {
          return value = value.replace(matched, tokenResolver(inputData, matched));
        });
      }
    }

    return value;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (evaluator);

/***/ })

},[["./packages/js-expressions-core/src/js-expressions-core.ts","runtime"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWNvcmUvc3JjL2pzLWV4cHJlc3Npb25zLWNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNMQTtBQUFBOzs7Ozs7O0FBT0c7QUFDSCxJQUFNLFNBQVMsR0FBRyxVQUFJLFNBQUosRUFBa0IsYUFBbEIsRUFBZ0QsYUFBaEQsRUFBNEU7QUFBZ0IsbUJBQzVHLEdBRDRHLEVBRTVHLEtBRjRHLEVBRTVGO0FBRWhCLFFBQUksT0FBTyxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CLFdBQUssR0FBRyxLQUFLLENBQUksU0FBSixDQUFiO0FBQ0Q7O0FBQ0QsUUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTSxNQUFNLEdBQUksYUFBYSxJQUFJLEtBQUssQ0FBQyxLQUFOLENBQVksYUFBYSxFQUF6QixDQUFsQixJQUFtRCxFQUFsRTs7QUFDQSxVQUFJLE1BQU0sQ0FBQyxNQUFYLEVBQW1CO0FBQ2pCLGNBQU0sQ0FBQyxPQUFQLENBQWUsVUFBQyxPQUFELEVBQVE7QUFBSyxpQkFBQyxLQUFLLEdBQUksS0FBZ0IsQ0FBQyxPQUFqQixDQUF5QixPQUF6QixFQUFrQyxhQUFhLENBQUMsU0FBRCxFQUF6RCxPQUF5RCxDQUEvQyxDQUFWO0FBQStFLFNBQTNHO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLEtBQVA7QUFiNEc7QUFjN0csQ0FkRDs7QUFnQmUsd0VBQWYsRSIsImZpbGUiOiIuL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWNvcmUvZGlzdC9qcy1leHByZXNzaW9ucy1jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJqcy1leHByZXNzaW9ucy1jb3JlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImpzLWV4cHJlc3Npb25zLWNvcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wianMtZXhwcmVzc2lvbnMtY29yZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IHR5cGUgVG9rZW5Qcm92aWRlciA9ICgpID0+IHN0cmluZyB8IFJlZ0V4cDtcbmV4cG9ydCB0eXBlIFRva2VuUmVzb2x2ZXIgPSA8VD4oaW5wdXREYXRhOiBULCB0b2tlbjogc3RyaW5nKSA9PiBzdHJpbmc7XG5leHBvcnQgdHlwZSBQcm9jZXNzb3IgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBWYWx1ZVR5cGUpID0+IFZhbHVlVHlwZTtcbmV4cG9ydCB0eXBlIFZhbHVlVHlwZSA9IHN0cmluZyB8IEhhbmRsZXI7XG5leHBvcnQgdHlwZSBIYW5kbGVyID0gPFQ+KFQpID0+IHN0cmluZztcbi8qKlxuICogR2VuZXJhdGVzIHNjb3BlIGZvciByZXNvbHZpbmcgdmFsdWVzIGJ5IHRva2VucywgYW5kIHJldHVybnMgc2ltcGxlIGNhbGxiYWNrIHdoaWNoIGNhbiBiZSB1c2VkIHdoaWxlIHByb2Nlc3NpbmcgZGF0YSBzdHJ1Y3R1cmUuXG4gKiBAcGFyYW0ge1R9IGlucHV0RGF0YSAtIGFueSBzdHJ1Y3R1cmUgd2hpY2ggaXMgcGFzc2luZyB0byByZXNvbHZlciB3aGVuIG1hdGNoZWQgdGhlIGV4cHJlc3Npb24gb3IgdG8gZnVuY3Rpb24gcHJvdmlkZWQgYXMgYSB2YWx1ZSBpbiB0YXJnZXQgc3RydWN0dXJlXG4gKiBAcGFyYW0ge1Rva2VuUHJvdmlkZXJ9IHRva2VuUHJvdmlkZXIgYSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHRva2VuIHRvIHNlYXJjaCBpbiB0aGUgdGFyZ2V0IHZhbHVlXG4gKiBAcGFyYW0ge1Rva2VuUmVzb2x2ZXJ9IHRva2VuUmVzb2x2ZXIgYSBmdW5jdGlvbiB0aGF0IHByb3ZpZGVzIHZhbHVlIGZvciBnaXZlbiB0b2tlblxuICogQHJldHVybiB7ZnVuY3Rpb24oKiwgKj0pOiAqfVxuICogQHRlbXBsYXRlIFRcbiAqL1xuY29uc3QgZXZhbHVhdG9yID0gPFQ+KGlucHV0RGF0YTogVCwgdG9rZW5Qcm92aWRlcjogVG9rZW5Qcm92aWRlciwgdG9rZW5SZXNvbHZlcjogVG9rZW5SZXNvbHZlcik6IFByb2Nlc3NvciA9PiAoXG4gIGtleTogc3RyaW5nLFxuICB2YWx1ZTogVmFsdWVUeXBlXG4pOiBWYWx1ZVR5cGUgPT4ge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsdWUgPSB2YWx1ZTxUPihpbnB1dERhdGEpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gKHRva2VuUHJvdmlkZXIgJiYgdmFsdWUubWF0Y2godG9rZW5Qcm92aWRlcigpKSkgfHwgW107XG4gICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5mb3JFYWNoKChtYXRjaGVkKSA9PiAodmFsdWUgPSAodmFsdWUgYXMgc3RyaW5nKS5yZXBsYWNlKG1hdGNoZWQsIHRva2VuUmVzb2x2ZXIoaW5wdXREYXRhLCBtYXRjaGVkKSkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZhbHVhdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==