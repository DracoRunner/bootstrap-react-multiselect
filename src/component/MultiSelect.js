import React from "react";
import _ from "lodash";
import * as utils from "../util/DataUtils";
import { MultiSelectContainer } from "./SelectContiner";

export class MultiSelect extends React.Component {
    constructor() {
        super();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.state = { displayItem: false, transformedData: [] };
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    componentDidMount() {
        this.setState({ transformedData: utils.transformData(this.props) });
        document.addEventListener("click", this.handleOutsideClick, false);
        document.addEventListener("focusout", this.handleOutsideClick, false);
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({ transformedData: utils.transformData(this.props) });
        }
        this.updateDatePickerPosition();
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleOutsideClick, false);
        document.removeEventListener("focusout", this.handleOutsideClick, false);
    }

    updateDatePickerPosition = () => {
        if (this.wrapperRef) {
            let comboSelect = this.wrapperRef;
            let viewportOffset = comboSelect.getBoundingClientRect();
            let top = viewportOffset.top;
            let elementHeight = comboSelect.clientHeight;
            let windowHeight = window.innerHeight;
            let bottom = windowHeight - (top + elementHeight);
            let direction;
            if (bottom > top) {
                direction = "down";
            } else {
                direction = "top";
            }
            if (this.state.displayItem) {
                if (direction === "top") {
                    let item = document.getElementsByClassName("multi-select-body-holder");
                    if (this.props.enableSearch) {
                        item[0].style.transform = "translateY(-261px)";
                    } else {
                        item[0].style.transform = "translateY(-190px)";
                    }
                }
            }
        }
    };

    handleClick = () => {
        this.setState({ displayItem: !this.state.displayItem });
    };

    handleOutsideClick = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                displayItem: false
            });
        } else if (event.target.className === "multi-select") {
            this.setState({
                displayItem: true
            });
        }
    };

    handleChange = (value, parent = undefined) => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        if (this.props.group) {
            transformedData.forEach(t => {
                let { groupName = "", options = [] } = t;
                let newOption = [];
                if (groupName === parent) {
                    if (Array.isArray(options) && options.length > 0) {
                        options.forEach(O => {
                            if (O.value === value) {
                                if (O.checked) {
                                    newOption.push({ ...O, groupName, checked: false });
                                } else {
                                    newOption.push({ ...O, groupName, checked: true });
                                }
                            } else {
                                newOption.push({ ...O });
                            }
                        });
                    }
                    newTransformedData.push({ groupName: groupName, options: newOption });
                } else {
                    newTransformedData.push(t);
                }
            });
        } else {
            transformedData.forEach(d => {
                if (d.value === value) {
                    if (d.checked) {
                        newTransformedData.push({ ...d, checked: false });
                    } else {
                        newTransformedData.push({ ...d, checked: true });
                    }
                } else {
                    newTransformedData.push({ ...d });
                }
            });
            if (this.props.onselectionchange) {
                this.props.onselectionchange(_.filter(newTransformedData, { checked: true }));
            }
        }
        this.returnToprops(newTransformedData);
        this.setState({ transformedData: newTransformedData });
    };

    handleAll = (checked = false) => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        if (this.props.group) {
            transformedData.forEach(t => {
                let { groupName = "", options = [] } = t;
                let newOption = [];
                if (options.length > 0) {
                    options.forEach(d => {
                        newOption.push({ ...d, checked });
                    });
                }
                newTransformedData.push({ groupName, options: newOption });
            });
        } else {
            transformedData.forEach(d => {
                newTransformedData.push({ ...d, checked });
            });
        }
        this.returnToprops(newTransformedData);
        this.setState({ transformedData: newTransformedData });
    };

    filter = (filterText = "") => {
        let { transformedData = [] } = this.state;
        if (this.props.group) {
            let newTransformedData = [];
            let { transformedData = [] } = this.state;
            if (filterText !== "") {
                transformedData.forEach(t => {
                    let { groupName = "", options = [] } = t;
                    let newOption = [];
                    if (Array.isArray(options) && options.length > 0) {
                        options.forEach(d => {
                            if (d.text.includes(filterText)) {
                                newOption.push({ ...d, display: true });
                            } else {
                                newOption.push({ ...d, display: false });
                            }
                        });
                    }
                    if (newOption.length > 0) {
                        newTransformedData.push({ groupName, options: newOption });
                    }
                });
            } else {
                transformedData.forEach(t => {
                    let { groupName = "", options = [] } = t;
                    let newOption = [];
                    if (Array.isArray(options) && options.length > 0) {
                        options.forEach(d => {
                            newOption.push({ ...d, display: true });
                        });
                    }
                    if (newOption.length > 0) {
                        newTransformedData.push({ groupName, options: newOption });
                    }
                });
            }
            this.setState({ transformedData: newTransformedData });
        } else {
            this.setState({
                transformedData: utils.filterData(transformedData, filterText)
            });
        }
    };

    handleGroupSelect = (selectedGroupName, checked) => {
        let newtransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(d => {
            let { groupName = "", options = [] } = d;
            let newOption = [];
            if (groupName === selectedGroupName) {
                if (options.length > 0) {
                    let selectedOptions = _.filter(transformedData, { groupName });
                    if (selectedOptions.length > 0) {
                        options.forEach(pp => {
                            selectedOptions[0].options.forEach(cp => {
                                if (cp.value === pp.value) {
                                    newOption.push({ ...pp, checked: !checked });
                                }
                            });
                        });
                    }
                }
                newtransformedData.push({ groupName, selected: !checked, options: newOption });
            } else {
                newtransformedData.push(d);
            }
        });
        this.returnToprops(newtransformedData);
        this.setState({ transformedData: newtransformedData });
    };

    returnToprops = selectedData => {
        let data = [];
        if (this.props.getSelectedData) {
            if (this.props.group) {
                selectedData.forEach(sd => {
                    let { groupName, options = [] } = sd;
                    let newOption = [];
                    options.forEach(o => {
                        if (o.checked) newOption.push(o);
                    });
                    data.push({ groupName, options: newOption });
                });
            } else {
                selectedData.forEach(sd => {
                    if (sd.checked) data.push(sd);
                });
            }
            this.props.getSelectedData(data);
        }
    };

    render() {
        let { configOption = {} } = this.props;
        return (
            <div ref={this.setWrapperRef}>
                <MultiSelectContainer
                    {...this.state}
                    {...this.props}
                    {...configOption}
                    handleGroupSelect={this.handleGroupSelect}
                    handleClick={this.handleClick}
                    filter={this.filter}
                    handleChange={this.handleChange}
                    handleAll={this.handleAll}
                />
            </div>
        );
    }
}
