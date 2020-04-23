import React from "react";
import {SelectItem, SelectItemGroup} from "./SelecetItem";
export const SelectItemList=({group=false,...props})=>{
    if(group){
        return <SelectItemGroups {...props}/>
    }else{
        return <SelectItems {...props}/>
    }

}
export const SelectItems = ({transformedData = [], ...props}) => {
    return transformedData.map(item => {
        if (item.display)
            return <SelectItem {...item} {...props}/>
        else return <></>
    });
}

export const SelectItemGroups = ({transformedData = [], ...props}) => {
    return transformedData.map(item => {
        return (<>
            <span onClick={()=>props.selectByGroupName(item.groupName,true)}>{item.groupName}</span>
            <SelectItemGroupList transformedData={item.options} {...props} parent={item.groupName}/>
        </>)
    });
}

const SelectItemGroupList = ({transformedData = [], ...props}) => {
    return transformedData.map(item => {
        if (item.display)
            return <SelectItemGroup {...item} {...props}/>
        else return <></>
    });
}
