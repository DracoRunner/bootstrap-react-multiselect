import React from "react";
import * as utils from "../util/DataUtils";
import _ from "lodash";

export const SelectedRender = props => {
    if (props.group) {
        return <SelectedRenderGroup {...props} />;
    } else {
        return <SelectedRenderNonGrp {...props} />;
    }
};

const SelectedRenderNonGrp = props => {
    let selected = [];
    selected = _.filter(props.transformedData, { checked: true });
    let data = "";
    if (props.selectedRender) {
        data = props.selectedRender(selected);
    } else {
        data = utils.CountRenderer(selected);
    }
    return <span>{data}</span>;
};

const SelectedRenderGroup = props => {
    let selected = [];
    let { transformedData = [] } = props;
    transformedData.forEach(t => {
        let { options = [] } = t;
        if (Array.isArray(options) && options.length > 0) {
            options.forEach(d => {
                if (d.checked) {
                    selected.push(d);
                }
            });
        }
    });
    let data = "";
    if (props.selectedRender) {
        data = props.selectedRender(selected);
    } else {
        data = utils.CountRenderer(selected);
    }
    return <span>{data}</span>;
};
