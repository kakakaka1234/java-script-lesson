
console.log("You made it to the console!");
let stop = false;

function testNaN (number) {

  if ( isNaN (number) ) {
    stop = true;
    return "Type a real number"
  } else {
    return "Input Validated"
  }
}

function geometry (numberA, numberB) {
  if (numberA == numberB) return 'Equal';
  return (numberA > numberB) ? 'numberA' :'numberB';

}
function main() {


  let firstNumber, secondNumber, text;

  firstNumber = document.getElementById('textfield').value;

  document.getElementById('validityTest').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest').innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById('textfield2').value;
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a numberA or numberB needs to be a number."
  } else {
    console.log("The bigger number is", geometry (firstNumber, secondNumber) );
    document.getElementById('answer').innerHTML = "The bigger number is " + geometry (firstNumber, secondNumber);
  }

}
