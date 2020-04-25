import React from "react";
import * as utils from '../util/DataUtils'
import { MultiSelect } from "./SelectContiner";
import _ from 'lodash'

export class SelectBox extends React.Component {
    constructor() {
        super();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.state = { displaySelectItem: false, transformedData: [] };
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    componentDidMount() {
        this.setState({ transformedData: utils.transformData(this.props) })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({ transformedData: utils.transformData(this.props) })
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

    handleChange = (value) => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(d => {
            if (d.value === value) {
                if (d.checked) {
                    newTransformedData.push({ ...d, checked: false })
                } else {
                    newTransformedData.push({ ...d, checked: true })
                }
            } else {
                newTransformedData.push({ ...d })
            }
        })
        if (this.props.onselectionchange) {
            this.props.onselectionchange(_.filter(newTransformedData, { "checked": true }));
        }
        this.setState({ transformedData: newTransformedData })
    }

    handleAll = (checked = false) => {
        let newTransformedData = [];
        let { transformedData = [] } = this.state;
        transformedData.forEach(d => {
            newTransformedData.push({ ...d, checked })
        })
        if (this.props.onselectionchange) {
            this.props.onselectionchange(_.filter(newTransformedData, { "selected": true }));
        }
        this.setState({ transformedData: newTransformedData })
    }

    filter = (filterText = "") => {
        let { transformedData = [] } = this.state;
        this.setState({ transformedData: utils.filterData(transformedData, filterText) })
    }

    render() {
        return (
            <div ref={this.setWrapperRef}>
                <MultiSelect  {...this.state} handleClick={this.handleClick} filter={this.filter} handleChange={this.handleChange} handleAll={this.handleAll} />
            </div>
        )
    }
}