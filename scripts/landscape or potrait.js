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
