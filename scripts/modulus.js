console.log("You made it to the console!");
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
function geometry (firstNumber,secondNumber) {
  let number= firstNumber % 2
  let number1=secondNumber% 2
  if (number == 1) return 'odd';
  if (number == 0) return 'even';
  if (number1 == 1) return 'odd';
  if (number1 == 0) return 'even'}

function main() {
  let firstNumber, secondNumber;

  firstNumber = document.getElementById('textfield1').value;

  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById('textfield2').value;
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a first and second numbers needs to be a number."
  } else {
    console.log("The firstnumber is", geometry (firstNumber, secondNumber) );
    document.getElementById('number').innerHTML = "This firstnumber is " + geometry (firstNumber, secondNumber);
    console.log("The secondnumber is", geometry (firstNumber, secondNumber) );
    document.getElementById('number1').innerHTML = "This secondnumber is " + geometry (firstNumber, secondNumber);
  }

  }
