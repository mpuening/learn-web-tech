
const expression = document.getElementById("expression");
const result = document.getElementById("result");
let memory = "";

function onButton(key) {
    expression.value += key;
}

function onClear() {
    expression.value = "";
    result.value = "";
}

function onUndo() {
    if (expression.value.length > 0) {
        expression.value = expression.value.substring(0, expression.value.length - 1);
    }
}
function onMemorySave() {
    memory = result.value;
}

function onMemoryRecall() {
    expression.value += memory;
}

function onCalculate() {
    try {
        if (expression.value.length > 0) {
            result.value = eval(expression.value);
            expression.value = "";
        }
    }
    catch(error) {
        result.value = "Error";
    }
}