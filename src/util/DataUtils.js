import _ from 'lodash'

export const transformData = (props) => {
    let transformedData = [];
    let { data = [], selectedData = [] } = props;
    if (selectedData.length > 0) {
        data.forEach(d => {
            let checked = false;
            selectedData.forEach(s => {
                if (d.value === s.value) {
                    transformedData.push({ ...d, checked: d.value === s.value, display: true })
                    checked = true;
                }
            })
            if (!checked) {
                transformedData.push({ ...d, display: true })
            }
        })
    } else {
        transformedData = _.map(data, (d, i) => {
            return { ...d, checked: false, selecteBoxId: i, display: true }
        });
    }
    return transformedData
}

export function transformDataGroup(props) {
    let transformedData = [];
    let { data = [], selectedData = [] } = props

    data.forEach(d => {
        let { groupName = "", options = [] } = d;
        let newOption = [];
        if (options.length > 0) {
            let selectedOptions = _.filter(selectedData, { groupName });
            if (selectedOptions.length > 0) {
                options.forEach(pp => {
                    let checked = false;
                    selectedOptions[0].options.forEach(cp => {
                        if (cp.value === pp.value) {
                            newOption.push({ ...pp, checked: cp.value === pp.value, display: true })
                            checked = true;
                        }
                    })
                    if (!checked) {
                        newOption.push({ ...pp, display: true })
                    }
                })
            } else {
                newOption = options.map(el => ({ ...el, display: true }));
            }
        }
        transformedData.push({ groupName, options: newOption });
    })
    return transformedData;
}

export function CountRenderer(selected, options) {
    if (selected.length === 0) {
        return "Valitse";
    }
    return `${selected.length} valittuna`;
}


export function ValueRenderer(selected, options, displayName) {
    if (selected.length === 0) {
        return "Valitse";
    }
    return Array.prototype.map.call(selected, function (item) {
        return item[displayName];
    }).join(",");
}

export function CustomFilter(options, filter) {
    const optionIncludesText = (option) => {
        const label = option.label || "";
        return label.toLowerCase().includes(String(filter).toLowerCase());
    };
    return options.filter(optionIncludesText);
}

export function filterData(transformedData = [], filterText = "") {
    let newTransformedData = [];
    if (filterText === "") {
        transformedData.forEach(d => {
            newTransformedData.push({ ...d, display: true })
        })
    } else {
        transformedData.forEach(d => {
            if (d.text.includes(filterText)) {
                newTransformedData.push({ ...d, display: true })
            } else {
                newTransformedData.push({ ...d, display: false })
            }
        })
    }
    return newTransformedData
}


export const updateDatePickerPosition = (className) => {
    if (this.wrapperRef) {
        let comboSelect = this.wrapperRef;
        let viewportOffset = comboSelect.getBoundingClientRect();
        let top = viewportOffset.top;
        let elementHeight = comboSelect.clientHeight;
        let windowHeight = window.innerHeight;
        let bottom = windowHeight - (top + elementHeight);
        let direction;
        if (bottom > top) {
            direction = 'down';
        } else {
            direction = 'top';
        }
        if (this.state.displaySelectItem) {
            if (direction === "top") {
                let item = document.getElementsByClassName(className);
                item[0].style.transform = "translateY(-261px)";
            }
        }
    }
}
