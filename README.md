# bootstrap-multiselect-box

React dropdown for select and multiselect

## Usability

bootstrap-multiselect-box requires react,react-dom and bootstrap as peer dependency. All versions should be supported, but make sure you are using matching versions of the two packages.

```javascript
import MultiSelect from "bootstrap-multiselect-box";
```

and include css files with styles (you may include this in different way)

```javascript
require("../node_modules/bootstrap-multiselect-box/style.css");
```

## props/options

### data

Actual data you want to show, this is an array of either object, strings or numbers. Array or array won't work

```javascript
let arrayWithObjects = [
    { text: "air-JA007D", value: "JA007D" },
    { text: "air-JA008D", value: "JA008D" },
    { text: "air-JA009D", value: "JA009D" },
    { text: "air-JA107D", value: "JA010D" }
];

<MultiSelect elect data={arrayWithObjects} />;
```
