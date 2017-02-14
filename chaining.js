// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
// 2.  Remove any integers greater than 19.
// function filterIt (cat){
// 	if (cat.length === 5){
// 		return cat;
// 	}
// }
// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);
// 3.  Multiply each remaining number by 1.5 and then subtract 1.
// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.


var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var chainingResult = integers.sort(function(a,b){return b-a}).filter(function(num){return num < 19}).map(function(num){return (num * 1.5) - 1}).reduce(function(previousValue, currentValue){return (previousValue + currentValue)});
console.log("Result ", chainingResult);




// function filterNums (allNums) {if (allNums < 19){return allNums}}
// var newChainingResult = chainingResult.filter(filterNums);
// console.log(newChainingResult);


// // var sum = integers.reduce(function(previousValue, currentValue, index) {return (previousValue * currentValue) - 1})

// // console.log(sum);
// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// var chainingResult = integers.sort(function(a,b){return b-a});
// console.log("Result ", chainingResult);



// function filterNums (allNums) {if (allNums < 19){return allNums}}
// var newChainingResult = chainingResult.filter(filterNums);
// console.log(newChainingResult); 