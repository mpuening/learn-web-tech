
const expression = document.getElementById("expression");
const display = document.getElementById("display");
let memory = "";

function onButton(key) {
    expression.value += key;
}

function onClear() {
    expression.value = "";
    display.value = "";
}

function onUndo() {
    if (expression.value.length > 0) {
        expression.value = expression.value.substring(0, expression.value.length - 1);
    }
}
function onMemorySave() {
    memory = display.value;
}

function onMemoryRecall() {
    expression.value += memory;
}

function onCalculate() {
    try {
        if (expression.value.length > 0) {
            display.value = eval(expression.value);
            expression.value = "";
        }
    }
    catch(error) {
        display.value = "Error";
    }
}