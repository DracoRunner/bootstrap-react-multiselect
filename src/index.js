import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { MultiSelect } from "./component/MultiSelect";

const selectedValues = [
    { text: "air-JA007D", win: "win-111", value: "JA007D" },
    { text: "11air-JA008D1", win: "win-2221", value: "JA0081D", number: 0 },
    { text: "air-JA107D6", win: "win-4447", value: "JA010D7", number: 1 }
];
const data = [
    { text: "air-JA007D", win: "win-111", value: "JA007D" },
    {
        text: "11air-JA008D1",
        win: "win-2221",
        value: "JA0081D",
        number: 0
    }
];

const selectedValuesGroup = [
    {
        groupName: "Group1",
        options: [
            { text: "air-JA007D", win: "win-111", value: "JA007D" },
            { text: "112air-JA008D1", win: "win-2221", value: "JA0081D", number: 0 },
            { text: "air-JA107D6", win: "win-4447", value: "JA010D7", number: 1 }
        ]
    },
    {
        groupName: "Group",
        options: [
            { text: "air-JA007D", win: "win-111", value: "JA007D" },
            { text: "11air-JA008D1", win: "win-2221", value: "JA0081D", number: 0 },
            { text: "air-JA107D6", win: "win-4447", value: "JA010D7", number: 1 }
        ]
    }
];

const selectedGroup = [
    {
        groupName: "Group1",
        options: [{ text: "air-JA007D", win: "win-111", value: "JA007D" }]
    },
    {
        groupName: "Group",
        options: [
            { text: "air-JA007D", win: "win-111", value: "JA007D" },
            { text: "11air-JA008D1", win: "win-2221", value: "JA0081D", number: 0 }
        ]
    }
];

ReactDOM.render(
    <React.StrictMode>
        <>
            <MultiSelect
                data={selectedValues}
                selectedData={data}
                getSelectedData={list => console.log(list)}
                enableSearch
            />
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <MultiSelect group data={selectedValuesGroup} selectedData={selectedGroup} />
        </>
    </React.StrictMode>,
    document.getElementById("root")
);
