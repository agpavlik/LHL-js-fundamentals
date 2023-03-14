const howManyHundreds = function (num){
  let calculation = num / 100 ;
  let output = Math.floor(calculation);
  return output;
  
};
console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
