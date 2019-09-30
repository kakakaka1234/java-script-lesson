
console.log("You made it to the console!");
let stop = false; //NAN Boolean Memory

function testNaN (number) {
  //console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function geometry (numberA, numberB) { //Notice these parameters are local and do not mix with "number" variable
  if (numberA == numberB) return 'Equal'; //must be first, return will not allow rest of code to run
  return (numberA > numberB) ? 'numberA' :'numberB';

}
function main() {
  //console.log("It works");

  //checkboxes();


  let firstNumber, secondNumber, text;

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield').value;

  //testNaN (firstNumber);
  document.getElementById('validityTest').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a numberA or numberB needs to be a number."
  } else {
    console.log("The bigger number is", geometry (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "The bigger number is " + geometry (firstNumber, secondNumber);
  }

}
