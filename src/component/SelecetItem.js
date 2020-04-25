import React from "react";

export const SelectItem = ({checked = false, value = " ", text = " ", handleChange}) => {
    return <div>
        <div className="multi-select-item selected">
            <div className="form-group">
                <div className="form-check" onClick={() => handleChange(value)}>
                    <input className="form-check-input" type="checkbox" value={value} checked={checked} onChange={() => handleChange(value)}/>
                    <label className="form-check-label" onClick={() => handleChange(value)}>
                        {text}
                    </label>
                </div>
            </div>
        </div>
    </div>
}


export const SelectItemGroup = ({checked = false, value = " ", text = " ", handleChange, parent = ""}) => {
    return <div>
        <div  className="multi-select-item selected">
            <div className="form-group">
                <div className="form-check" onClick={() => handleChange(parent, value)}>
                    <input className="form-check-input" type="checkbox" value={value} checked={checked} onChange={() => handleChange(parent, value)}/>
                    <label className="form-check-label" onClick={() => handleChange(parent, value)}>
                        {text}
                    </label>
                </div>
            </div>
        </div>
    </div>
}
