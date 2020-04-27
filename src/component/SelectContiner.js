import { MdKeyboardArrowDown } from "react-icons/md";
import React from "react";
import { SelectedRender } from "./SelectedRender";
import { SelectItemContainer } from "./SelectItemContainer";

export const MultiSelectContainer = props => {
  return (
    <div className="multi-select">
      <div className="multi-select-head" onClick={props.handleClick}>
        <SelectedRender {...props} />
        <MdKeyboardArrowDown />
      </div>
      <SelectItemContainer {...props} />
    </div>
  );
};
