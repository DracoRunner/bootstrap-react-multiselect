import _ from "lodash";

export const transformData = props => {
    let transformedData = [];
    let { data = [], selectedData = [], group = undefined } = props;
    if (group) {
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
                                newOption.push({
                                    ...pp,
                                    checked: cp.value === pp.value,
                                    display: true
                                });
                                checked = true;
                            }
                        });
                        if (!checked) {
                            newOption.push({ ...pp, display: true });
                        }
                    });
                } else {
                    newOption = options.map(el => ({ ...el, display: true }));
                }
            }
            transformedData.push({ groupName, options: newOption });
        });
    } else {
        if (selectedData.length > 0) {
            data.forEach(d => {
                let checked = false;
                selectedData.forEach(s => {
                    if (d.value === s.value) {
                        transformedData.push({
                            ...d,
                            checked: d.value === s.value,
                            display: true
                        });
                        checked = true;
                    }
                });
                if (!checked) {
                    transformedData.push({ ...d, display: true });
                }
            });
        } else {
            transformedData = _.map(data, (d, i) => {
                return { ...d, checked: false, selecteBoxId: i, display: true };
            });
        }
    }
    return transformedData;
};

export function CountRenderer(selected, placeholder) {
    if (selected.length === 0) {
        return "Select One";
    }
    return `${selected.length} Selected`;
}

export function ValueRenderer(selected, displayKey) {
    if (selected.length === 0) {
        return "Select One";
    }
    return Array.prototype.map
        .call(selected, function(item) {
            return item[displayKey];
        })
        .join(",");
}

export function CustomFilter(options, filter) {
    const optionIncludesText = option => {
        const label = option.label || "";
        return label.toLowerCase().includes(String(filter).toLowerCase());
    };
    return options.filter(optionIncludesText);
}

export function filterData(transformedData = [], filterText = "") {
    let newTransformedData = [];
    if (filterText === "") {
        transformedData.forEach(d => {
            newTransformedData.push({ ...d, display: true });
        });
    } else {
        transformedData.forEach(d => {
            if (d.text.includes(filterText)) {
                newTransformedData.push({ ...d, display: true });
            } else {
                newTransformedData.push({ ...d, display: false });
            }
        });
    }
    return newTransformedData;
}
