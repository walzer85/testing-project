let dash = require('ewalz-dash');
let filter = dash.filter;

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
const addHello = (names) => {
    for (i = 0; i <= names.length; i++) {
        return (`Hello {names[i]}`)
    }
}

let helloArray = addHello(names)

test('map returns a new array that says Hello array value', () => {
    expect(helloArray).toEqual(["Hello Jon","Hello Bob","Hello Ted","Hello Barney","Hello Lilly","Hello Robin","Hello Saul","Hello Axe"]);
}); 