//variable initiations
var displayScreen = document.getElementById("display"),
    currentInternalValue = "",
    operand1 = "",
    operand2 = "",
    operator = "",
    equalsChecker = false,
    operatorStorage = "";

//operator constants
const plus = "+",
      minus = "-",
      multiply = "*",
      divide = "/";


//functions
function numFunc(num) {
  if (equalsChecker == false) {  //handles button press
    currentInternalValue = currentInternalValue + num;
    printDisplay();
  } else {  //handles pressing a number button after equals has been done
    clearFunc();
    currentInternalValue = currentInternalValue + num;
    printDisplay();
  }
}

function operatorFunc(operatorText) {
  if (operator != "" && currentInternalValue == "") {  //handles pressing multiple operator buttons in a row
    operator = operatorText;
  } else if (operator != "" && currentInternalValue != "") {  //handles pressing an operator instead of equals
    operand2 = currentInternalValue;
    currentInternalValue = eval(operand1 + operator + operand2);
    printDisplay();
    operator = operatorText;
    operand1 = currentInternalValue;
    currentInternalValue = "";
  } else if (operator == "" && operand1 == "" && currentInternalValue == "") {  //protects against operator being selected at the very beginning
    operand1 = "0";
    operator = operatorText;
  } else {  //handles operator
    operand1 = currentInternalValue;
    operator = operatorText;
    currentInternalValue = "";
    equalsChecker = false;
  }
}

function equalsFunc () {
  if (equalsChecker == false && operand1 != "") {  //handles basic equals
    operand2 = currentInternalValue;
    currentInternalValue =  eval(operand1 + operator + operand2);
    equalsChecker = true;
    printDisplay();
    operatorStorage = operator;  //this is used in case equals is pressed again
    operator = "";
  } else if (equalsChecker == false && operand1 == "") {  //handles pressing equals without an operand in place
    return;
  } else if (equalsChecker == true) {  //handles pressing equals after equals was already pressed
    operand1 = currentInternalValue;
    currentInternalValue = eval(operand1 + operatorStorage + operand2);
    printDisplay();
  }
}

function clearFunc() {
  currentInternalValue = "";
  operand1 = "";
  equalsChecker = false;
  displayReset();
}

function printDisplay() {
  displayScreen.value = currentInternalValue;
}

function displayReset () {
  displayScreen.value = "0";
}
