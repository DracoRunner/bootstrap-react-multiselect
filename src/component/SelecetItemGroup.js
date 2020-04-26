import React from "react";
import { SelectItem } from "./SelecetItem";
export const SelectItemList = ({ group = false, ...props }) => {
    if (group) {
        return <SelectItemGroups {...props} />;
    } else {
        return <SelectItems {...props} />;
    }
};

export const SelectItemGroups = ({ transformedData = [], ...props }) => {
    return transformedData.map((item, i) => {
        return (
            <div key={i}>
                <span onClick={() => props.handleGroupSelect(item.groupName, item.selected)}>
                    {item.groupName}
                </span>
                <SelectItems transformedData={item.options} {...props} parent={item.groupName} />
            </div>
        );
    });
};

export const SelectItems = ({ transformedData = [], ...props }) => {
    return transformedData.map((item, i) => {
        if (item.display) return <SelectItem key={i} {...item} {...props} />;
        else return <></>;
    });
};
