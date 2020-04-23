import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MultiSelect} from "./App";

const selectedValues = [
    {text: 'air-JA007D', win: 'win-111', value: 'JA007D'},
    {text: '11air-JA008D1', win: 'win-2221', value: 'JA0081D', number: 0},
    {text: 'air-JA107D6', win: 'win-4447', value: 'JA010D7', number: 1},
]
const data = [{text: 'air-JA007D', win: 'win-111', value: 'JA007D'}, {
    text: '11air-JA008D1',
    win: 'win-2221',
    value: 'JA0081D',
    number: 0
}]


const selectedValuesGroup = [
    {
        groupName: "Group1",
        options: [
            {text: 'air-JA007D', win: 'win-111', value: 'JA007D'},
            {text: '112air-JA008D1', win: 'win-2221', value: 'JA0081D', number: 0},
            {text: 'air-JA107D6', win: 'win-4447', value: 'JA010D7', number: 1},
        ]
    }, {
        groupName: "Group",
        options: [
            {text: 'air-JA007D', win: 'win-111', value: 'JA007D'},
            {text: '11air-JA008D1', win: 'win-2221', value: 'JA0081D', number: 0},
            {text: 'air-JA107D6', win: 'win-4447', value: 'JA010D7', number: 1},
        ]
    }
]

const selectedGroup = [
    {
        groupName: "Group1",
        options: [
            {text: 'air-JA007D', win: 'win-111', value: 'JA007D'}
        ]
    }, {
        groupName: "Group",
        options: [
            {text: 'air-JA007D', win: 'win-111', value: 'JA007D'},
            {text: '11air-JA008D1', win: 'win-2221', value: 'JA0081D', number: 0},
        ]
    }
]
ReactDOM.render(
    <React.StrictMode>
        <>
            <MultiSelect data={selectedValues} selectedData={data}/>
            <MultiSelect group data={selectedValuesGroup} selectedData={selectedGroup}/>
        </>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
