"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItemContainer = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _md = require("react-icons/md");

var _react = _interopRequireDefault(require("react"));

var _SelecetItemGroup = require("./SelecetItemGroup");

var SelectItemContainer = function SelectItemContainer(_ref) {
  var _ref$displayItem = _ref.displayItem,
      displayItem = _ref$displayItem === void 0 ? false : _ref$displayItem,
      props = (0, _objectWithoutProperties2.default)(_ref, ["displayItem"]);

  if (displayItem) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "multi-select-body-holder"
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(SearchItem, props), /*#__PURE__*/_react.default.createElement("div", {
      className: "multi-select-body",
      style: {
        paddingTop: props.enableSearch ? "71px" : "0px"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "multi-select-body-scroll"
    }, /*#__PURE__*/_react.default.createElement(_SelecetItemGroup.SelectItemList, props)))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
};

exports.SelectItemContainer = SelectItemContainer;

var SearchItem = function SearchItem(props) {
  if (props.enableSearch) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "selectionoption"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      placeholder: props.searchPlaceholder || "Search Text",
      className: "search-input",
      onKeyUp: function onKeyUp(e) {
        return props.filter(e.target.value);
      }
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "m-1",
      onClick: function onClick() {
        return props.handleAll(true);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_md.MdCheck, null)), props.selectAllText || " Select All"), /*#__PURE__*/_react.default.createElement("label", {
      onClick: function onClick() {
        return props.handleAll(false);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_md.MdClose, null)), props.deselectAllText || " Deselect All"));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
};