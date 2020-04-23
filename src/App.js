import {MultiSelectbox} from "./component/MultiSelectbox";
import {SelectBox} from "./component/Selectbox";
import React from "react";

export const MultiSelect = (props) => {
    if (props.group) {
        return <MultiSelectbox {...props}/>
    } else {
        return <SelectBox {...props}/>
    }
}