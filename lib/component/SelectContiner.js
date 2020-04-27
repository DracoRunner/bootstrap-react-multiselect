"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectContainer = void 0;

var _md = require("react-icons/md");

var _react = _interopRequireDefault(require("react"));

var _SelectedRender = require("./SelectedRender");

var _SelectItemContainer = require("./SelectItemContainer");

var MultiSelectContainer = function MultiSelectContainer(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-select"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-select-head",
    onClick: props.handleClick
  }, /*#__PURE__*/_react.default.createElement(_SelectedRender.SelectedRender, props), /*#__PURE__*/_react.default.createElement(_md.MdKeyboardArrowDown, null)), /*#__PURE__*/_react.default.createElement(_SelectItemContainer.SelectItemContainer, props));
};

exports.MultiSelectContainer = MultiSelectContainer;