(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ria-develop/js-expressions-client"));
	else if(typeof define === 'function' && define.amd)
		define("js-expressions-example", ["@ria-develop/js-expressions-client"], factory);
	else if(typeof exports === 'object')
		exports["js-expressions-example"] = factory(require("@ria-develop/js-expressions-client"));
	else
		root["js-expressions-example"] = factory(root["@ria-develop"]["js-expressions-client"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__ria_develop_js_expressions_client__) {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["js-expressions-example"],{

/***/ "./packages/js-expressions-client/__mocks__/test-data.ts":
/*!***************************************************************!*\
  !*** ./packages/js-expressions-client/__mocks__/test-data.ts ***!
  \***************************************************************/
/*! exports provided: input, outputShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outputShape", function() { return outputShape; });
var input = {
  user: {
    id: 'uid1',
    firstName: 'John',
    lastName: 'Doe',
    address: 'st. Middle Of Nowhere 4'
  },
  products: [[{
    name: 'Product 1',
    selected: true
  }], [{
    name: 'Product 2',
    userComment: 'Need to be reviewed',
    selected: false
  }]],
  options: {
    selectedLocations: ['Location1', 'Location3'],
    deliveryDate: new Date(2021, 1, 2)
  }
};

var findCompleted = function (items) {
  return items.filter(function (basket) {
    return !basket.some(function (product) {
      return !product.selected;
    });
  });
};

var getIfCompleted = function (found, numItems) {
  return found.length === numItems ? found : undefined;
};

var options = function (data) {
  return data.options;
};

var deliveryDate = function (data) {
  return options(data).deliveryDate;
};

var selectedLocations = function (data) {
  return options(data).selectedLocations;
};

var delivery = function (data) {
  var _a;

  return (_a = deliveryDate(data)) === null || _a === void 0 ? void 0 : _a.toISOString();
};

var locations = function (data) {
  return selectedLocations(data).map(function (location) {
    return deliveryDate(data) ? location : 'Default';
  });
};

var orders = function (data) {
  return getIfCompleted(findCompleted(data.products), data.products.length);
};

var user = '{user.firstName} {user.lastName}';
var data = [{
  user: user,
  orders: orders
}, {
  locations: locations
}];
var request = {
  delivery: delivery,
  data: data
};
var outputShape = {
  request: request
};

/***/ }),

/***/ "./packages/js-expressions-example/src/js-expressions-example.ts":
/*!***********************************************************************!*\
  !*** ./packages/js-expressions-example/src/js-expressions-example.ts ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var test_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! test-data */ "./packages/js-expressions-client/__mocks__/test-data.ts");
/* harmony import */ var _ria_develop_js_expressions_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ria-develop/js-expressions-client */ "@ria-develop/js-expressions-client");
/* harmony import */ var _ria_develop_js_expressions_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ria_develop_js_expressions_client__WEBPACK_IMPORTED_MODULE_1__);


document.body.innerHTML = "\n<span>input:</span><br/>\n<pre>" + JSON.stringify(test_data__WEBPACK_IMPORTED_MODULE_0__["input"], null, '  ') + "</pre><br/>\n<span>output:</span><br/>\n<pre>" + JSON.stringify(test_data__WEBPACK_IMPORTED_MODULE_0__["outputShape"], _ria_develop_js_expressions_client__WEBPACK_IMPORTED_MODULE_1___default()(test_data__WEBPACK_IMPORTED_MODULE_0__["input"]), '  ') + "</pre>";

/***/ }),

/***/ "@ria-develop/js-expressions-client":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** external {"commonjs":"@ria-develop/js-expressions-client","commonjs2":"@ria-develop/js-expressions-client","amd":"@ria-develop/js-expressions-client","root":["@ria-develop","js-expressions-client"]} ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ria_develop_js_expressions_client__;

/***/ })

},[["./packages/js-expressions-example/src/js-expressions-example.ts","runtime"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWNsaWVudC9fX21vY2tzX18vdGVzdC1kYXRhLnRzIiwid2VicGFjazovL1tuYW1lXS8uL3BhY2thZ2VzL2pzLWV4cHJlc3Npb25zLWV4YW1wbGUvc3JjL2pzLWV4cHJlc3Npb25zLWV4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vW25hbWVdL2V4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJAcmlhLWRldmVsb3AvanMtZXhwcmVzc2lvbnMtY2xpZW50XCIsXCJjb21tb25qczJcIjpcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jbGllbnRcIixcImFtZFwiOlwiQHJpYS1kZXZlbG9wL2pzLWV4cHJlc3Npb25zLWNsaWVudFwiLFwicm9vdFwiOltcIkByaWEtZGV2ZWxvcFwiLFwianMtZXhwcmVzc2lvbnMtY2xpZW50XCJdfSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFPLElBQU0sS0FBSyxHQUFHO0FBQ25CLE1BQUksRUFBRTtBQUNKLE1BQUUsRUFBRSxNQURBO0FBRUosYUFBUyxFQUFFLE1BRlA7QUFHSixZQUFRLEVBQUUsS0FITjtBQUlKLFdBQU8sRUFBRTtBQUpMLEdBRGE7QUFPbkIsVUFBUSxFQUFFLENBQ1IsQ0FDRTtBQUNFLFFBQUksRUFBRSxXQURSO0FBRUUsWUFBUSxFQUFFO0FBRlosR0FERixDQURRLEVBT1IsQ0FDRTtBQUNFLFFBQUksRUFBRSxXQURSO0FBRUUsZUFBVyxFQUFFLHFCQUZmO0FBR0UsWUFBUSxFQUFFO0FBSFosR0FERixDQVBRLENBUFM7QUFzQm5CLFNBQU8sRUFBRTtBQUNQLHFCQUFpQixFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FEWjtBQUVQLGdCQUFZLEVBQUUsSUFBSSxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFGUDtBQXRCVSxDQUFkOztBQThCUCxJQUFNLGFBQWEsR0FBRyxVQUFDLEtBQUQsRUFBTTtBQUFLLGNBQUssQ0FBQyxNQUFOLENBQWEsVUFBQyxNQUFELEVBQU87QUFBSyxZQUFDLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBQyxPQUFELEVBQVE7QUFBSyxjQUFDLE9BQU8sQ0FBUjtBQUExQixLQUFDLENBQUQ7QUFBekI7QUFBc0UsQ0FBdkc7O0FBRUEsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFELEVBQVEsUUFBUixFQUFnQjtBQUFLLFNBQUMsS0FBSyxDQUFDLE1BQU4sS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FBRDtBQUErQyxDQUEzRjs7QUFFQSxJQUFNLE9BQU8sR0FBRyxVQUFDLElBQUQsRUFBSztBQUFLLGFBQUksQ0FBSjtBQUFZLENBQXRDOztBQUVBLElBQU0sWUFBWSxHQUFHLFVBQUMsSUFBRCxFQUFLO0FBQUssZ0JBQU8sQ0FBQyxJQUFELENBQVA7QUFBMEIsQ0FBekQ7O0FBRUEsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQUQsRUFBSztBQUFLLGdCQUFPLENBQUMsSUFBRCxDQUFQO0FBQStCLENBQW5FOztBQUVBLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBRCxFQUFnQjtBQUFBOztBQUFBLGVBQWEsWUFBWSxDQUFDLElBQUQsQ0FBekIsTUFBK0IsSUFBL0IsSUFBK0IsYUFBL0IsR0FBK0IsTUFBL0IsR0FBK0IsR0FBRSxXQUFGLEVBQS9CO0FBQThDLENBQS9FOztBQUVBLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBRCxFQUFnQjtBQUNoQywwQkFBaUIsQ0FBQyxJQUFELENBQWpCLENBQXdCLEdBQXhCLENBQTRCLFVBQUMsUUFBRCxFQUFpQjtBQUFLLFdBQUMsWUFBWSxDQUFDLElBQUQsQ0FBWixHQUFxQixRQUFyQixHQUFEO0FBQTJDLEdBQTdGO0FBQThGLENBRGhHOztBQUdBLElBQU0sTUFBTSxHQUFHLFVBQUMsSUFBRCxFQUFnQjtBQUFxQix1QkFBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBTixDQUFkLEVBQStCLElBQUksQ0FBQyxRQUFMLENBQTdDLE1BQWMsQ0FBZDtBQUFrRSxDQUF0SDs7QUFFQSxJQUFNLElBQUksR0FBRyxrQ0FBYjtBQUVBLElBQU0sSUFBSSxHQUFHLENBQ1g7QUFDRSxNQUFJLE1BRE47QUFFRSxRQUFNO0FBRlIsQ0FEVyxFQUtYO0FBQ0UsV0FBUztBQURYLENBTFcsQ0FBYjtBQVVBLElBQU0sT0FBTyxHQUFHO0FBQ2QsVUFBUSxVQURNO0FBRWQsTUFBSTtBQUZVLENBQWhCO0FBS08sSUFBTSxXQUFXLEdBQUc7QUFDekIsU0FBTztBQURrQixDQUFwQixDOzs7Ozs7Ozs7Ozs7QUNoRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsUUFBUSxDQUFDLElBQVQsQ0FBYyxTQUFkLEdBQTBCLHNDQUVuQixJQUFJLENBQUMsU0FBTCxDQUFlLCtDQUFmLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBRm1CLEdBRWMsK0NBRmQsR0FJbkIsSUFBSSxDQUFDLFNBQUwsQ0FBZSxxREFBZixFQUE0Qix5RUFBUSxDQUFDLCtDQUFELENBQXBDLEVBQTZDLElBQTdDLENBSm1CLEdBSStCLFFBSnpELEM7Ozs7Ozs7Ozs7O0FDSEEsZ0YiLCJmaWxlIjoiLi9wYWNrYWdlcy9qcy1leHByZXNzaW9ucy1leGFtcGxlL2Rpc3QvanMtZXhwcmVzc2lvbnMtZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jbGllbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJqcy1leHByZXNzaW9ucy1leGFtcGxlXCIsIFtcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jbGllbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wianMtZXhwcmVzc2lvbnMtZXhhbXBsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkByaWEtZGV2ZWxvcC9qcy1leHByZXNzaW9ucy1jbGllbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzLWV4cHJlc3Npb25zLWV4YW1wbGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAcmlhLWRldmVsb3BcIl1bXCJqcy1leHByZXNzaW9ucy1jbGllbnRcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19yaWFfZGV2ZWxvcF9qc19leHByZXNzaW9uc19jbGllbnRfXykge1xucmV0dXJuICIsImV4cG9ydCBjb25zdCBpbnB1dCA9IHtcbiAgdXNlcjoge1xuICAgIGlkOiAndWlkMScsXG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGFkZHJlc3M6ICdzdC4gTWlkZGxlIE9mIE5vd2hlcmUgNCdcbiAgfSxcbiAgcHJvZHVjdHM6IFtcbiAgICBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQcm9kdWN0IDEnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnUHJvZHVjdCAyJyxcbiAgICAgICAgdXNlckNvbW1lbnQ6ICdOZWVkIHRvIGJlIHJldmlld2VkJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICBdLFxuICBvcHRpb25zOiB7XG4gICAgc2VsZWN0ZWRMb2NhdGlvbnM6IFsnTG9jYXRpb24xJywgJ0xvY2F0aW9uMyddLFxuICAgIGRlbGl2ZXJ5RGF0ZTogbmV3IERhdGUoMjAyMSwgMSwgMilcbiAgfVxufTtcblxudHlwZSBJbnB1dERhdGEgPSB7dXNlcjsgcHJvZHVjdHM7IG9wdGlvbnN9O1xuXG5jb25zdCBmaW5kQ29tcGxldGVkID0gKGl0ZW1zKSA9PiBpdGVtcy5maWx0ZXIoKGJhc2tldCkgPT4gIWJhc2tldC5zb21lKChwcm9kdWN0KSA9PiAhcHJvZHVjdC5zZWxlY3RlZCkpO1xuXG5jb25zdCBnZXRJZkNvbXBsZXRlZCA9IChmb3VuZCwgbnVtSXRlbXMpID0+IChmb3VuZC5sZW5ndGggPT09IG51bUl0ZW1zID8gZm91bmQgOiB1bmRlZmluZWQpO1xuXG5jb25zdCBvcHRpb25zID0gKGRhdGEpID0+IGRhdGEub3B0aW9ucztcblxuY29uc3QgZGVsaXZlcnlEYXRlID0gKGRhdGEpID0+IG9wdGlvbnMoZGF0YSkuZGVsaXZlcnlEYXRlO1xuXG5jb25zdCBzZWxlY3RlZExvY2F0aW9ucyA9IChkYXRhKSA9PiBvcHRpb25zKGRhdGEpLnNlbGVjdGVkTG9jYXRpb25zO1xuXG5jb25zdCBkZWxpdmVyeSA9IChkYXRhOiBJbnB1dERhdGEpOiBzdHJpbmcgPT4gZGVsaXZlcnlEYXRlKGRhdGEpPy50b0lTT1N0cmluZygpO1xuXG5jb25zdCBsb2NhdGlvbnMgPSAoZGF0YTogSW5wdXREYXRhKTogc3RyaW5nW10gPT5cbiAgc2VsZWN0ZWRMb2NhdGlvbnMoZGF0YSkubWFwKChsb2NhdGlvbjogc3RyaW5nKSA9PiAoZGVsaXZlcnlEYXRlKGRhdGEpID8gbG9jYXRpb24gOiAnRGVmYXVsdCcpKTtcblxuY29uc3Qgb3JkZXJzID0gKGRhdGE6IElucHV0RGF0YSk6IFtdIHwgdW5kZWZpbmVkID0+IGdldElmQ29tcGxldGVkKGZpbmRDb21wbGV0ZWQoZGF0YS5wcm9kdWN0cyksIGRhdGEucHJvZHVjdHMubGVuZ3RoKTtcblxuY29uc3QgdXNlciA9ICd7dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfSc7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICB1c2VyLFxuICAgIG9yZGVyc1xuICB9LFxuICB7XG4gICAgbG9jYXRpb25zXG4gIH1cbl07XG5cbmNvbnN0IHJlcXVlc3QgPSB7XG4gIGRlbGl2ZXJ5LFxuICBkYXRhXG59O1xuXG5leHBvcnQgY29uc3Qgb3V0cHV0U2hhcGUgPSB7XG4gIHJlcXVlc3Rcbn07XG4iLCJpbXBvcnQge2lucHV0LCBvdXRwdXRTaGFwZX0gZnJvbSAndGVzdC1kYXRhJztcbmltcG9ydCByZXBsYWNlciBmcm9tICdAcmlhLWRldmVsb3AvanMtZXhwcmVzc2lvbnMtY2xpZW50JztcblxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgXG48c3Bhbj5pbnB1dDo8L3NwYW4+PGJyLz5cbjxwcmU+JHtKU09OLnN0cmluZ2lmeShpbnB1dCwgbnVsbCwgJyAgJyl9PC9wcmU+PGJyLz5cbjxzcGFuPm91dHB1dDo8L3NwYW4+PGJyLz5cbjxwcmU+JHtKU09OLnN0cmluZ2lmeShvdXRwdXRTaGFwZSwgcmVwbGFjZXIoaW5wdXQpLCAnICAnKX08L3ByZT5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19yaWFfZGV2ZWxvcF9qc19leHByZXNzaW9uc19jbGllbnRfXzsiXSwic291cmNlUm9vdCI6IiJ9