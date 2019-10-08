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

function orderingFive (first, second, third, fourth, fifth) { //Notice these parameters are local and do not mix with "number" variable
  //Memory variable
  let memory1;

  //If numbers out of order
  //Use desending sequence to illustrate while loop ... if statements fail without WHILE since double switch required
  //For example: 70, 60, 50
  while (first > second || second > third || third > fourth || fourth > fifth ) {
    if (first > second) {
      memory1 = second;
      second = first;
      first = memory1;
    }
    if (second > third) {
      memory1 = third;
      third = second;
      second = memory1;
    }
    if (third > fourth) {
      memory1 = fourth;
      fourth = third;
      third = memory1;
    }
    if (fourth > fifth) {
      memory1 = fifth;
      fifth = fourth;
      fourth = memory1;
    }
  }

  //Final Check: this checks if numbers are in order
  //Also checks if numbers are equal and catches if something is wrong
  if (first <= second) {
    if (second <= third) {
      if(third<= fourth){
        if(fourth<= fifth){
      return first + ", " + second + ", " + third + "," + fourth + "," + fifth
    }}}
  } else {
    return "Check program for errors"
  }
}



// This coding illustrates the advanced method
function main() {
  //console.log("It works");

  let firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber

  //Get the Width-value from id=textfield1
  firstNumber = document.getElementById('textfield1').value;
  //testNaN (firstNumber);
  document.getElementById('validityTest1').innerHTML = alert ( testNaN (firstNumber));
  document.getElementById('validityTest1').innerHTML = testNaN (firstNumber);

  //Get the Height-value from id=textfield2
  secondNumber = document.getElementById('textfield2').value;
  //testNaN (secondNumber);
  document.getElementById('validityTest2').innerHTML = alert ( testNaN (secondNumber));
  document.getElementById('validityTest2').innerHTML = testNaN (secondNumber);

  //Get the Height-value from id=textfield2
  thirdNumber = document.getElementById('textfield3').value;
  document.getElementById('validityTest3').innerHTML = alert ( testNaN (thirdNumber));
  document.getElementById('validityTest3').innerHTML = testNaN (thirdNumber);

  fourthNumber = document.getElementById('textfield4').value;
  document.getElementById('validityTest4').innerHTML = alert ( testNaN (fourthNumber));
  document.getElementById('validityTest4').innerHTML = testNaN (fourthNumber);

  fifthNumber = document.getElementById('textfield5').value;
  document.getElementById('validityTest5').innerHTML = alert ( testNaN (fifthNumber));
  document.getElementById('validityTest5').innerHTML = testNaN (fifthNumber);



  //Illustrates one example of character escapes
  console.log("In memory, \n the first number is " + firstNumber + " and \n the second number is " + secondNumber + " and \n the third number is " + thirdNumber + " and \n the fourth number is " + fourthNumber + " and \n the fifth number is " + fifthNumber);

  //Final Output to inner HTML & Console

  if (stop == true) {
    document.getElementById('answer').innerHTML = "Restart the example, a width or height needs to be a number."
  } else {
    console.log("The smallest to largest order is ", orderingFive (firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber) );
    document.getElementById('answer').innerHTML = "The numbers " + firstNumber + ", " + secondNumber + ", " + thirdNumber + ", " + fourthNumber + ", " + fifthNumber + " in order from smallest to largest is ... \n" +
    orderingFive(firstNumber, secondNumber, thirdNumber, fourthNumber,fifthNumber);
  }
}
