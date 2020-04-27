"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("bootstrap/dist/css/bootstrap.min.css");

require("bootstrap/dist/js/bootstrap.min");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./style.css");

var _MultiSelect = require("./component/MultiSelect");

var selectedValues = [{
  text: "air-JA007D",
  win: "win-111",
  value: "JA007D"
}, {
  text: "11air-JA008D1",
  win: "win-2221",
  value: "JA0081D",
  number: 0
}, {
  text: "air-JA107D6",
  win: "win-4447",
  value: "JA010D7",
  number: 1
}];
var data = [{
  text: "air-JA007D",
  win: "win-111",
  value: "JA007D"
}, {
  text: "11air-JA008D1",
  win: "win-2221",
  value: "JA0081D",
  number: 0
}];
var selectedValuesGroup = [{
  groupName: "Group1",
  options: [{
    text: "air-JA007D",
    win: "win-111",
    value: "JA007D"
  }, {
    text: "112air-JA008D1",
    win: "win-2221",
    value: "JA0081D",
    number: 0
  }, {
    text: "air-JA107D6",
    win: "win-4447",
    value: "JA010D7",
    number: 1
  }]
}, {
  groupName: "Group",
  options: [{
    text: "air-JA007D",
    win: "win-111",
    value: "JA007D"
  }, {
    text: "11air-JA008D1",
    win: "win-2221",
    value: "JA0081D",
    number: 0
  }, {
    text: "air-JA107D6",
    win: "win-4447",
    value: "JA010D7",
    number: 1
  }]
}];
var selectedGroup = [{
  groupName: "Group1",
  options: [{
    text: "air-JA007D",
    win: "win-111",
    value: "JA007D"
  }]
}, {
  groupName: "Group",
  options: [{
    text: "air-JA007D",
    win: "win-111",
    value: "JA007D"
  }, {
    text: "11air-JA008D1",
    win: "win-2221",
    value: "JA0081D",
    number: 0
  }]
}];

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
  data: selectedValues,
  selectedData: data,
  getSelectedData: function getSelectedData(list) {
    return console.log(list);
  },
  enableSearch: true
}), /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_MultiSelect.MultiSelect, {
  group: true,
  data: selectedValuesGroup,
  selectedData: selectedGroup
}))), document.getElementById("root"));