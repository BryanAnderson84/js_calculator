var calcButtons = document.getElementsByClassName('calc_button');
console.log(calcButtons);
var values = {
 "first": null,
 "second": null,
 "operator": null
}

for(var i = 0; i < calcButtons.length; i++) {
 var button = calcButtons[i];
 console.log(button);
 button.addEventListener('click', function(event) {
   handleButtonPress(event);
 });
}

function handleButtonPress(event) {
 var buttonValue = event.target.innerHTML;
 var inputValue = calc_input.innerHTML;

 // +, -, /
 if (isOperation(buttonValue)) {
     values["first"] = inputValue
     values["operator"] = buttonValue
     calc_input.innerHTML = "0"
 // =
 } else if (buttonValue == "=") {
   values["second"] = inputValue
   calculate()
 // any ol number
 } else {
   if (inputValue == "0") {
     calc_input.innerHTML = buttonValue;
   } else {
       calc_input.innerHTML = inputValue + buttonValue;
   }
 }

 // If we press equals, save the second value
 // Perform the operation
 // Set the calculator display to the result
}

function isOperation(buttonValue) {
 switch(buttonValue) {
   case '+':
       return true
       break;
   case '-':
       return true
       break;
   case '*':
       return true
       break;
   case '/':
       return true
       break;
   default:
     return false
 }
}

function setValue(value) {
 console.log(value);
}

function clearCalc() {
 var result = document.getElementById('messages');
 result.innerHTML = '';
}


function calculate() {
 var result;

 switch(values["operator"]) {
   case '+':
       result = values["first"] + values["second"];
       break;
   case '-':
       result = values["first"] - values["second"];
       break;
   case '*':
       result = values["first"] * values["second"];
       break;
   case '/':
       result = values["first"] / values["second"];
       break;
   default:
     result = 'Not a valid operator';
 }
 document.getElementById('calc_input').innerHTML = result;
}
