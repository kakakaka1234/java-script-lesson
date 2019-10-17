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
function oddeven (firstNumber) {
  let number= firstNumber % 2

  if (number == 1) return 'odd';
  if (number == 0) return 'even';}

  function oddeven1(secondNumber){
    let number1=secondNumber% 2
    if (number1 == 1) return 'odd';
    if (number1 == 0) return 'even';}

    function oddeven2(thirdNumber){
      let number2=thirdNumber% 2
      if (number2 == 1) return 'odd';
      if (number2 == 0) return 'even';}

function main() {
  let firstNumber, secondNumber, thirdNumber;

  firstNumber = document.getElementById('textfield1').value;

  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById('textfield2').value;
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  thirdNumber = document.getElementById('textfield3').value;
  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);


  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a first and second numbers needs to be a number."
  } else {
    console.log("The firstnumber is", oddeven (firstNumber) );
    document.getElementById('answer').innerHTML = "This firstnumber is " + oddeven (firstNumber);
    console.log("The secondnumber is", oddeven1 (secondNumber) );
    document.getElementById('answer').innerHTML = "This secondnumber is " + oddeven1 (secondNumber);
    console.log("The thirdnumber is", oddeven2 (thirdNumber) );
    document.getElementById('answer').innerHTML = "This thirdnumber is " + oddeven1 (thirdNumber);




  }

  }
