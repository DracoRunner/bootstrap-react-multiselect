"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedRender = void 0;

var _react = _interopRequireDefault(require("react"));

var utils = _interopRequireWildcard(require("../util/DataUtils"));

var _lodash = _interopRequireDefault(require("lodash"));

var SelectedRender = function SelectedRender(props) {
  if (props.group) {
    return /*#__PURE__*/_react.default.createElement(SelectedRenderGroup, props);
  } else {
    return /*#__PURE__*/_react.default.createElement(SelectedRenderNonGrp, props);
  }
};

exports.SelectedRender = SelectedRender;

var SelectedRenderNonGrp = function SelectedRenderNonGrp(props) {
  var selected = [];
  selected = _lodash.default.filter(props.transformedData, {
    checked: true
  });
  var data = "";

  if (props.selectedRender) {
    data = props.selectedRender(selected);
  } else {
    data = utils.CountRenderer(selected);
  }

  return /*#__PURE__*/_react.default.createElement("span", null, data);
};

var SelectedRenderGroup = function SelectedRenderGroup(props) {
  var selected = [];
  var _props$transformedDat = props.transformedData,
      transformedData = _props$transformedDat === void 0 ? [] : _props$transformedDat;
  transformedData.forEach(function (t) {
    var _t$options = t.options,
        options = _t$options === void 0 ? [] : _t$options;

    if (Array.isArray(options) && options.length > 0) {
      options.forEach(function (d) {
        if (d.checked) {
          selected.push(d);
        }
      });
    }
  });
  var data = "";

  if (props.selectedRender) {
    data = props.selectedRender(selected);
  } else {
    data = utils.CountRenderer(selected);
  }

  return /*#__PURE__*/_react.default.createElement("span", null, data);
};