import { MdCheck, MdClose } from "react-icons/md";
import React from "react";
import { SelectItemList } from "./SelecetItemGroup";

export const SelectItemContainer = ({ displayItem = false, ...props }) => {
    if (displayItem) {
        return (
            <div className="multi-select-body-holder">
                <div>
                    <SearchItem {...props} />
                    <div
                        className="multi-select-body"
                        style={{ paddingTop: props.enableSearch ? "71px" : "0px" }}
                    >
                        <div className="multi-select-body-scroll">
                            <SelectItemList {...props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

const SearchItem = props => {
    if (props.enableSearch) {
        return (
            <div className="selectionoption">
                <input
                    type="text"
                    placeholder={props.searchPlaceholder || "Search Text"}
                    className="search-input"
                    onKeyUp={e => props.filter(e.target.value)}
                />
                <label className="m-1" onClick={() => props.handleAll(true)}>
                    <span>
                        <MdCheck />
                    </span>
                    {props.selectAllText || " Select All"}
                </label>
                <label onClick={() => props.handleAll(false)}>
                    <span>
                        <MdClose />
                    </span>
                    {props.deselectAllText || " Deselect All"}
                </label>
            </div>
        );
    } else {
        return <></>;
    }
};
