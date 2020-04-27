"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItem = void 0;

var _react = _interopRequireDefault(require("react"));

var SelectItem = function SelectItem(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? " " : _ref$value,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? " " : _ref$text,
      handleChange = _ref.handleChange,
      _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? "" : _ref$parent;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-select-item selected"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-check",
    onClick: function onClick() {
      return handleChange(value, parent);
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    value: value,
    checked: checked,
    onChange: function onChange() {
      return handleChange(value, parent);
    }
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "form-check-label",
    onClick: function onClick() {
      return handleChange(value, parent);
    }
  }, text)))));
};

exports.SelectItem = SelectItem;