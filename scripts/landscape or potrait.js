console.log("You made it to the console!");




let stop=false;
function testNaN(number) {
  console.log(stop);
  if (isNaN(number)){
    stop= true;

    return"type a new number"
  }
else {
  return" Input Validated"


}



}
function geometry (width, height) { //Notice these parameters are local and do not mix with "number" variable
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
  //Seems odd, the inequality, here, is reading the opposite
}

function checkboxes() {
  let checkbox1, checkbox2, checkbox3;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "Landscape";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "Portrait";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
}


function main() {
  console.log("it works");
  let firstNumber;
  let secondNumber;
  let text;

  firstNumber= document.getElementByID("textfield").value;
  document.getElementByID("validityTest").innerHTML= testNaN(firstNumber);
    document.getElementByID("validityTest").innerHTML= alert(testNaN(firstNumber));
  //testNaN(firstNumber);

  secondNumber= document.getElementByID("textfield2").value;
  document.getElementByID("validityTest2").innerHTML= testNaN(secondNumber);
    document.getElementByID("validityTest2").innerHTML= alert(testNaN(secondNumber));
    if(stop == true){
      document.getElementByID("answer").innerHTML="restart the example, a width or height needs to be a number."
    } else {
      console.log("the display geometry is",geometry(firstNumber,secondNumber));
      document.getElementByID("answer").innerHTML ="This display is" + geometry (firstNumber,secondNumber);

    }



}
