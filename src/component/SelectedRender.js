import React from "react";
import * as utils from '../util/DataUtils'
import _ from 'lodash';

export const SelectedRender = (props) => {
    if (props.group) {
        return <SelectedRenderGroup {...props}/>
    } else {
        return <SelectedRenderNonGrp {...props}/>
    }

}

export const SelectedRenderNonGrp = (props) => {
    let selected = [];
    selected = _.filter(props.transformedData, {"selected": true});
    let data = utils.CountRenderer(selected, props.transformedData)
    return <span>{data}</span>
}

export const SelectedRenderGroup = (props) => {
    let newtransformedData = [];
    let {transformedData = []} = props;
    transformedData.forEach(t => {
        let {groupName = "", options = []} = t
        if (Array.isArray(options) && options.length > 0) {
            options.forEach(d => {
                if (d.selected) {
                    newtransformedData.push(d)
                }
            })
        }
    });
    let data = utils.CountRenderer(newtransformedData, props.transformedData)
    return <span>{data}</span>
}