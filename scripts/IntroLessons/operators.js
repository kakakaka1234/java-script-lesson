console.log("You made it to the console");



function simpleOperators(numberA,numberB){

  let adding = numberA + numberB;
  let substraction=  numberA - numberB;
  let multiplying =  numberA * numberB;
  let division=  numberA / numberB;
  let modulus=  numberA % numberB;
  console.log(numberA,numberB,'adding', adding);
  console.log(numberA,numberB,'substraction', substraction);
  console.log(numberA,numberB,'multiplying', multiplying);
  console.log(numberA,numberB,'division', division);
  console.log(numberA,numberB, 'modulus',modulus);





}
function skipCpinting(interval, times, startingNumber)
{

for (let i = 1; i<= times; i++){





    startingNumber = startingNumber + interval
    console.log(startingNumber);



  }
}

function howManyTimes(numberStart, numberEnd, skipCount){

  while (numberStart< numberEnd){
    numberStart += skipCount;
    console.log(numberStart);


  }
}


function LooseEquality (firstOperand, secondOperand){
console.log(firstOperand == secondOperand);





}

function strictEquality(firstOperand, secondOperand) {
  console.log(firstOperand === secondOperand);

}

function customerType (points){
return type = points >100 ? 'gold': 'silver'




}


let number=[4,7,13,99,0,100,5,1,'1'];

simpleOperators(number[0], number[1]);
simpleOperators(number[1], number[2]);
simpleOperators(number[0], number[2]);
simpleOperators(number[0], number[3]);
simpleOperators(number[0], number[4]);
simpleOperators(number[0], number[5]);


skipCpinting(number[0], number[6], number[1]);




skipCpinting(number[0], number[6], number[1]);
skipCpinting(number[5], number[2], number[2]);

howManyTimes(number[0], number[5], number[1]);

LooseEquality (number[6], number[8]);



strictEquality (number[7], number[8]);

console.log(customerType (number[3]));
