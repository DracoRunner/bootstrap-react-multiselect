import React from "react";

export const SelectItem = ({selected = false, value = " ", text = " ", handleChange}) => {
    return <div>
        <div role="option" className="multi-select-item selected">
            <div className="form-group">
                <div className="form-check" onClick={() => handleChange(value)}>
                    <input className="form-check-input" type="checkbox" value={value} id="invalidCheck2" checked={selected} onChange={() => handleChange(value)}/>
                    <label className="form-check-label" htmlFor="invalidCheck2" onClick={() => handleChange(value)}>
                        {text}
                    </label>
                </div>
            </div>
        </div>
    </div>
}


export const SelectItemGroup = ({selected = false, value = " ", text = " ", handleChange, parent = ""}) => {
    return <div>
        <div role="option" className="multi-select-item selected">
            <div className="form-group">
                <div className="form-check" onClick={() => handleChange(parent, value)}>
                    <input className="form-check-input" type="checkbox" value={value} checked={selected} onChange={() => handleChange(parent, value)}/>
                    <label className="form-check-label" onClick={() => handleChange(parent, value)}>
                        {text}
                    </label>
                </div>
            </div>
        </div>
    </div>
}
