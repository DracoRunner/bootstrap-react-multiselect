"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var utils = _interopRequireWildcard(require("../util/DataUtils"));

var _SelectContiner = require("./SelectContiner");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MultiSelect = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MultiSelect, _React$Component);

  var _super = _createSuper(MultiSelect);

  function MultiSelect() {
    var _this;

    (0, _classCallCheck2.default)(this, MultiSelect);
    _this = _super.call(this);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "updateDatePickerPosition", function () {
      if (_this.wrapperRef) {
        var comboSelect = _this.wrapperRef;
        var viewportOffset = comboSelect.getBoundingClientRect();
        var top = viewportOffset.top;
        var elementHeight = comboSelect.clientHeight;
        var windowHeight = window.innerHeight;
        var bottom = windowHeight - (top + elementHeight);
        var direction;

        if (bottom > top) {
          direction = "down";
        } else {
          direction = "top";
        }

        if (_this.state.displayItem) {
          if (direction === "top") {
            var item = document.getElementsByClassName("multi-select-body-holder");

            if (_this.props.enableSearch) {
              item[0].style.transform = "translateY(-261px)";
            } else {
              item[0].style.transform = "translateY(-190px)";
            }
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClick", function () {
      _this.setState({
        displayItem: !_this.state.displayItem
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleOutsideClick", function (event) {
      if (_this.wrapperRef && !_this.wrapperRef.contains(event.target)) {
        _this.setState({
          displayItem: false
        });
      } else if (event.target.className === "multi-select") {
        _this.setState({
          displayItem: true
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (value) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var newTransformedData = [];
      var _this$state$transform = _this.state.transformedData,
          transformedData = _this$state$transform === void 0 ? [] : _this$state$transform;

      if (_this.props.group) {
        transformedData.forEach(function (t) {
          var _t$groupName = t.groupName,
              groupName = _t$groupName === void 0 ? "" : _t$groupName,
              _t$options = t.options,
              options = _t$options === void 0 ? [] : _t$options;
          var newOption = [];

          if (groupName === parent) {
            if (Array.isArray(options) && options.length > 0) {
              options.forEach(function (O) {
                if (O.value === value) {
                  if (O.checked) {
                    newOption.push(_objectSpread({}, O, {
                      groupName: groupName,
                      checked: false
                    }));
                  } else {
                    newOption.push(_objectSpread({}, O, {
                      groupName: groupName,
                      checked: true
                    }));
                  }
                } else {
                  newOption.push(_objectSpread({}, O));
                }
              });
            }

            newTransformedData.push({
              groupName: groupName,
              options: newOption
            });
          } else {
            newTransformedData.push(t);
          }
        });
      } else {
        transformedData.forEach(function (d) {
          if (d.value === value) {
            if (d.checked) {
              newTransformedData.push(_objectSpread({}, d, {
                checked: false
              }));
            } else {
              newTransformedData.push(_objectSpread({}, d, {
                checked: true
              }));
            }
          } else {
            newTransformedData.push(_objectSpread({}, d));
          }
        });

        if (_this.props.onselectionchange) {
          _this.props.onselectionchange(_lodash.default.filter(newTransformedData, {
            checked: true
          }));
        }
      }

      _this.returnToprops(newTransformedData);

      _this.setState({
        transformedData: newTransformedData
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAll", function () {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var newTransformedData = [];
      var _this$state$transform2 = _this.state.transformedData,
          transformedData = _this$state$transform2 === void 0 ? [] : _this$state$transform2;

      if (_this.props.group) {
        transformedData.forEach(function (t) {
          var _t$groupName2 = t.groupName,
              groupName = _t$groupName2 === void 0 ? "" : _t$groupName2,
              _t$options2 = t.options,
              options = _t$options2 === void 0 ? [] : _t$options2;
          var newOption = [];

          if (options.length > 0) {
            options.forEach(function (d) {
              newOption.push(_objectSpread({}, d, {
                checked: checked
              }));
            });
          }

          newTransformedData.push({
            groupName: groupName,
            options: newOption
          });
        });
      } else {
        transformedData.forEach(function (d) {
          newTransformedData.push(_objectSpread({}, d, {
            checked: checked
          }));
        });
      }

      _this.returnToprops(newTransformedData);

      _this.setState({
        transformedData: newTransformedData
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "filter", function () {
      var filterText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _this$state$transform3 = _this.state.transformedData,
          transformedData = _this$state$transform3 === void 0 ? [] : _this$state$transform3;

      if (_this.props.group) {
        var newTransformedData = [];

        var _this$state$transform4 = _this.state.transformedData,
            _transformedData = _this$state$transform4 === void 0 ? [] : _this$state$transform4;

        if (filterText !== "") {
          _transformedData.forEach(function (t) {
            var _t$groupName3 = t.groupName,
                groupName = _t$groupName3 === void 0 ? "" : _t$groupName3,
                _t$options3 = t.options,
                options = _t$options3 === void 0 ? [] : _t$options3;
            var newOption = [];

            if (Array.isArray(options) && options.length > 0) {
              options.forEach(function (d) {
                if (d.text.includes(filterText)) {
                  newOption.push(_objectSpread({}, d, {
                    display: true
                  }));
                } else {
                  newOption.push(_objectSpread({}, d, {
                    display: false
                  }));
                }
              });
            }

            if (newOption.length > 0) {
              newTransformedData.push({
                groupName: groupName,
                options: newOption
              });
            }
          });
        } else {
          _transformedData.forEach(function (t) {
            var _t$groupName4 = t.groupName,
                groupName = _t$groupName4 === void 0 ? "" : _t$groupName4,
                _t$options4 = t.options,
                options = _t$options4 === void 0 ? [] : _t$options4;
            var newOption = [];

            if (Array.isArray(options) && options.length > 0) {
              options.forEach(function (d) {
                newOption.push(_objectSpread({}, d, {
                  display: true
                }));
              });
            }

            if (newOption.length > 0) {
              newTransformedData.push({
                groupName: groupName,
                options: newOption
              });
            }
          });
        }

        _this.setState({
          transformedData: newTransformedData
        });
      } else {
        _this.setState({
          transformedData: utils.filterData(transformedData, filterText)
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleGroupSelect", function (selectedGroupName, checked) {
      var newtransformedData = [];
      var _this$state$transform5 = _this.state.transformedData,
          transformedData = _this$state$transform5 === void 0 ? [] : _this$state$transform5;
      transformedData.forEach(function (d) {
        var _d$groupName = d.groupName,
            groupName = _d$groupName === void 0 ? "" : _d$groupName,
            _d$options = d.options,
            options = _d$options === void 0 ? [] : _d$options;
        var newOption = [];

        if (groupName === selectedGroupName) {
          if (options.length > 0) {
            var selectedOptions = _lodash.default.filter(transformedData, {
              groupName: groupName
            });

            if (selectedOptions.length > 0) {
              options.forEach(function (pp) {
                selectedOptions[0].options.forEach(function (cp) {
                  if (cp.value === pp.value) {
                    newOption.push(_objectSpread({}, pp, {
                      checked: !checked
                    }));
                  }
                });
              });
            }
          }

          newtransformedData.push({
            groupName: groupName,
            selected: !checked,
            options: newOption
          });
        } else {
          newtransformedData.push(d);
        }
      });

      _this.returnToprops(newtransformedData);

      _this.setState({
        transformedData: newtransformedData
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "returnToprops", function (selectedData) {
      var data = [];

      if (_this.props.getSelectedData) {
        if (_this.props.group) {
          selectedData.forEach(function (sd) {
            var groupName = sd.groupName,
                _sd$options = sd.options,
                options = _sd$options === void 0 ? [] : _sd$options;
            var newOption = [];
            options.forEach(function (o) {
              if (o.checked) newOption.push(o);
            });
            data.push({
              groupName: groupName,
              options: newOption
            });
          });
        } else {
          selectedData.forEach(function (sd) {
            if (sd.checked) data.push(sd);
          });
        }

        _this.props.getSelectedData(data);
      }
    });
    _this.setWrapperRef = _this.setWrapperRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      displayItem: false,
      transformedData: []
    };
    return _this;
  }

  (0, _createClass2.default)(MultiSelect, [{
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        transformedData: utils.transformData(this.props)
      });
      document.addEventListener("click", this.handleOutsideClick, false);
      document.addEventListener("focusout", this.handleOutsideClick, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        this.setState({
          transformedData: utils.transformData(this.props)
        });
      }

      this.updateDatePickerPosition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleOutsideClick, false);
      document.removeEventListener("focusout", this.handleOutsideClick, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$configOpt = this.props.configOption,
          configOption = _this$props$configOpt === void 0 ? {} : _this$props$configOpt;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.setWrapperRef
      }, /*#__PURE__*/_react.default.createElement(_SelectContiner.MultiSelectContainer, (0, _extends2.default)({}, this.state, this.props, configOption, {
        handleGroupSelect: this.handleGroupSelect,
        handleClick: this.handleClick,
        filter: this.filter,
        handleChange: this.handleChange,
        handleAll: this.handleAll
      })));
    }
  }]);
  return MultiSelect;
}(_react.default.Component);

exports.MultiSelect = MultiSelect;