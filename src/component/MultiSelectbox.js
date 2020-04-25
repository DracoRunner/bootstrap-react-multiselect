import React from "react";
import * as utils from "../util/DataUtils";
import { MultiSelect } from "./SelectContiner";
import _ from 'lodash'

export class MultiSelectbox extends React.Component {
    constructor() {
        super();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.state = { displaySelectItem: false, transformedData: [] };
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    componentDidMount() {
        this.setState({ transformedData: utils.transformDataGroup(this.props) })
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({ transformedData: utils.transformDataGroup(this.props) })
        }
        utils.updateDatePickerPosition("multi-select-body-holder");
    }

    componentWillMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
        document.addEventListener('focusout', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
        document.removeEventListener('focusout', this.handleOutsideClick, false);
    }

    handleClick = () => {
        this.setState({ displaySelectItem: !this.state.displaySelectItem })
    }


    handleOutsideClick = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                displaySelectItem: false
            });
        } else if (event.target.className === 'multi-select') {

            this.setState({
                displaySelectItem: true
            });

        }
    }

    handleChange = (newgroupName, value) => {
        let newtransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(t => {
            let { groupName = "", options = [] } = t;
            let newOption = [];
            if (groupName === newgroupName) {
                if (Array.isArray(options) && options.length > 0) {
                    options.forEach(O => {
                        if (O.value === value) {
                            if (O.selected) {
                                newOption.push({ ...O, groupName, selected: false })
                            } else {
                                newOption.push({ ...O, groupName, selected: true })
                            }

                        } else {
                            newOption.push({ ...O })
                        }
                    })
                }
                newtransformedData.push({ groupName: groupName, options: newOption });
            } else {
                newtransformedData.push(t);
            }
        })
        this.returnToProps(newtransformedData);
        this.setState({ transformedData: newtransformedData })
    }

    handleAll = (selected = false) => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(t => {
            let { groupName = "", options = [] } = t;
            let newOption = [];
            if (Array.isArray(options) && options.length > 0) {
                options.forEach(d => {
                    newOption.push({ ...d, selected })
                })
            }
            newTransformedData.push({ groupName, options: newOption })
        });
        this.returnToProps(newTransformedData)
        this.setState({ transformedData: newTransformedData })
    }

    filter = (filterText = "") => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        if (filterText !== "") {
            transformedData.forEach(t => {
                let { groupName = "", options = [] } = t;
                let newOption = [];
                if (Array.isArray(options) && options.length > 0) {
                    options.forEach(d => {
                        if (d.text.includes(filterText)) {
                            newOption.push({ ...d, display: true })
                        } else {
                            newOption.push({ ...d, display: false })
                        }
                    })
                }
                if (newOption.length > 0) {
                    newTransformedData.push({ groupName, options: newOption })
                }
            });
        } else {
            transformedData.forEach(t => {
                let { groupName = "", options = [] } = t;
                let newOption = [];
                if (Array.isArray(options) && options.length > 0) {
                    options.forEach(d => {
                        newOption.push({ ...d, display: true })
                    })
                }
                if (newOption.length > 0) {
                    newTransformedData.push({ groupName, options: newOption })
                }
            });
        }
        this.setState({ transformedData: newTransformedData })
    }

    returnToProps = (transformedData) => {
        let newtransformedData = [];
        transformedData.forEach(t => {
            let { groupName = "", options = [] } = t;
            let newOption = [];
            if (Array.isArray(options) && options.length > 0) {
                options.forEach(O => {
                    if (O.selected) {
                        newOption.push(O);
                    }
                })
            }
            newtransformedData.push({ groupName: groupName, options: newOption });
        })
        if (this.props.getSelectedData) {
            this.props.getSelectedData(newtransformedData);

        }
    }

    selectByGroupName = (newgroupName, selected) => {
        let newtransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(d => {
            let { groupName = "", options = [] } = d;
            let newOption = [];
            if (newgroupName === groupName) {
                if (options.length > 0) {
                    let selectedOptions = _.filter(transformedData, { groupName });
                    if (selectedOptions.length > 0) {
                        options.forEach(pp => {
                            selectedOptions[0].options.forEach(cp => {
                                if (cp.value === pp.value) {
                                    newOption.push({ ...pp, selected: selected })
                                }
                            })
                        })
                    }
                }
                newtransformedData.push({ groupName, options: newOption });
            } else {
                newtransformedData.push(d);
            }
        })
        this.setState({ transformedData: newtransformedData })
    }

    render() {
        return (
            <div ref={this.setWrapperRef}>
                <MultiSelect group selectByGroupName={this.selectByGroupName} {...this.state} handleClick={this.handleClick} filter={this.filter} handleChange={this.handleChange} handleAll={this.handleAll} />
            </div>
        )
    }
}