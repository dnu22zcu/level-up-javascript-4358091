// Write your code here - CHECK END SOLUTION
var Title;
var Author;
var ISBN;
var totalCopies;

function getAvailability(){
  if(totalCopies == 0){
    return "Out of stock";
  } else if(totalCopies < 10){
    return "Low stock";
  } else{
    return "In stock!";
  }
}

function sell(numSold = 1){
  return totalCopies -= numSold;
}

function restock(numCopies = 5){
  return totalCopies += numCopies;
}

