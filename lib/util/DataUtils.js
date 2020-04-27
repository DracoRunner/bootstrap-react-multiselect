"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountRenderer = CountRenderer;
exports.ValueRenderer = ValueRenderer;
exports.CustomFilter = CustomFilter;
exports.filterData = filterData;
exports.transformData = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var transformData = function transformData(props) {
  var transformedData = [];
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      _props$selectedData = props.selectedData,
      selectedData = _props$selectedData === void 0 ? [] : _props$selectedData,
      _props$group = props.group,
      group = _props$group === void 0 ? undefined : _props$group;

  if (group) {
    data.forEach(function (d) {
      var _d$groupName = d.groupName,
          groupName = _d$groupName === void 0 ? "" : _d$groupName,
          _d$options = d.options,
          options = _d$options === void 0 ? [] : _d$options;
      var newOption = [];

      if (options.length > 0) {
        var selectedOptions = _lodash.default.filter(selectedData, {
          groupName: groupName
        });

        if (selectedOptions.length > 0) {
          options.forEach(function (pp) {
            var checked = false;
            selectedOptions[0].options.forEach(function (cp) {
              if (cp.value === pp.value) {
                newOption.push(_objectSpread({}, pp, {
                  checked: cp.value === pp.value,
                  display: true
                }));
                checked = true;
              }
            });

            if (!checked) {
              newOption.push(_objectSpread({}, pp, {
                display: true
              }));
            }
          });
        } else {
          newOption = options.map(function (el) {
            return _objectSpread({}, el, {
              display: true
            });
          });
        }
      }

      transformedData.push({
        groupName: groupName,
        options: newOption
      });
    });
  } else {
    if (selectedData.length > 0) {
      data.forEach(function (d) {
        var checked = false;
        selectedData.forEach(function (s) {
          if (d.value === s.value) {
            transformedData.push(_objectSpread({}, d, {
              checked: d.value === s.value,
              display: true
            }));
            checked = true;
          }
        });

        if (!checked) {
          transformedData.push(_objectSpread({}, d, {
            display: true
          }));
        }
      });
    } else {
      transformedData = _lodash.default.map(data, function (d, i) {
        return _objectSpread({}, d, {
          checked: false,
          selecteBoxId: i,
          display: true
        });
      });
    }
  }

  return transformedData;
};

exports.transformData = transformData;

function CountRenderer(selected, placeholder) {
  if (selected.length === 0) {
    return "Select One";
  }

  return "".concat(selected.length, " Selected");
}

function ValueRenderer(selected, displayKey) {
  if (selected.length === 0) {
    return "Select One";
  }

  return Array.prototype.map.call(selected, function (item) {
    return item[displayKey];
  }).join(",");
}

function CustomFilter(options, filter) {
  var optionIncludesText = function optionIncludesText(option) {
    var label = option.label || "";
    return label.toLowerCase().includes(String(filter).toLowerCase());
  };

  return options.filter(optionIncludesText);
}

function filterData() {
  var transformedData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filterText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var newTransformedData = [];

  if (filterText === "") {
    transformedData.forEach(function (d) {
      newTransformedData.push(_objectSpread({}, d, {
        display: true
      }));
    });
  } else {
    transformedData.forEach(function (d) {
      if (d.text.includes(filterText)) {
        newTransformedData.push(_objectSpread({}, d, {
          display: true
        }));
      } else {
        newTransformedData.push(_objectSpread({}, d, {
          display: false
        }));
      }
    });
  }

  return newTransformedData;
}