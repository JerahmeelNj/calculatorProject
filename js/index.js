var equal = document.getElementById("equals");
var display = document.getElementById("display");
function calculate() {
    var integer = display.value;
    console.log(display.value);
    var displayNew = eval(integer);
    display.value = displayNew;
}