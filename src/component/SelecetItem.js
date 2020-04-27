import React from "react";

export const SelectItem = ({
    checked = false,
    value = " ",
    text = " ",
    handleChange,
    parent = ""
}) => {
    return (
        <div>
            <div className="multi-select-item selected">
                <div className="form-group">
                    <div className="form-check" onClick={() => handleChange(value, parent)}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={value}
                            checked={checked}
                            onChange={() => handleChange(value, parent)}
                        />
                        <label
                            className="form-check-label"
                            onClick={() => handleChange(value, parent)}
                        >
                            {text}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
