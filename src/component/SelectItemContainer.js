import {MdCheck, MdClose} from "react-icons/md";
import React from "react";
import {SelectItemList} from "./SelecetItemGroup";

export const SelectItemContainer = ({displaySelectItem = false, ...props}) => {
    if (displaySelectItem) {
        return <div className="multi-select-body-holder">
            <div>
                <div className="selectionoption">
                    <input type="text" placeholder="search text" className="search-input" onKeyUp={(e) => props.filter(e.target.value)}/>
                    <label className="m-1" onClick={() => props.handleAll(true)}><span><MdCheck/></span>Select All</label>
                    <label onClick={() => props.handleAll(false)}><span><MdClose/></span>Deselect All</label>
                </div>
                <div className="multi-select-body">
                    <div className="multi-select-body-scroll">
                        <SelectItemList {...props}/>
                    </div>
                </div>
            </div>
        </div>
    } else {
        return <></>
    }
}