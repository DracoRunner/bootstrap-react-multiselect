"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItems = exports.SelectItemGroups = exports.SelectItemList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _SelecetItem = require("./SelecetItem");

var SelectItemList = function SelectItemList(_ref) {
  var _ref$group = _ref.group,
      group = _ref$group === void 0 ? false : _ref$group,
      props = (0, _objectWithoutProperties2.default)(_ref, ["group"]);

  if (group) {
    return /*#__PURE__*/_react.default.createElement(SelectItemGroups, props);
  } else {
    return /*#__PURE__*/_react.default.createElement(SelectItems, props);
  }
};

exports.SelectItemList = SelectItemList;

var SelectItemGroups = function SelectItemGroups(_ref2) {
  var _ref2$transformedData = _ref2.transformedData,
      transformedData = _ref2$transformedData === void 0 ? [] : _ref2$transformedData,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["transformedData"]);
  return transformedData.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return props.handleGroupSelect(item.groupName, item.selected);
      }
    }, item.groupName), /*#__PURE__*/_react.default.createElement(SelectItems, (0, _extends2.default)({
      transformedData: item.options
    }, props, {
      parent: item.groupName
    })));
  });
};

exports.SelectItemGroups = SelectItemGroups;

var SelectItems = function SelectItems(_ref3) {
  var _ref3$transformedData = _ref3.transformedData,
      transformedData = _ref3$transformedData === void 0 ? [] : _ref3$transformedData,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["transformedData"]);
  return transformedData.map(function (item, i) {
    if (item.display) return /*#__PURE__*/_react.default.createElement(_SelecetItem.SelectItem, (0, _extends2.default)({
      key: i
    }, item, props));else return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  });
};

exports.SelectItems = SelectItems;