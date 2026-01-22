// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.







const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = []
let totals = []



const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;



for (let index = 0; index < bills.length; index++) {
  const tip = calcTip(bills[index]);
  tips.push(tip)
  totals.push(bills[index] + tip)
}

console.log(totals);





// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
// Call the function with the totals array.



// const billing = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


// let sum = 0;

// for (let index = 0; index < billing.length; index++) {
//   sum += billing[index];
// }


// console.log(sum);

const calcAverage = (arr) => {
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  console.log(sum);

  return sum / arr.length;
}


console.log(calcAverage([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));









// const calcTip = (bill) => {
//   for (let index = 0; index < bills.length; index++) {
//     tips[index] = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
//     // return tips;

//     for (let j = 0; j < tips.length; j++) {
//       totals[j] = tips[j] + bills[j]
//       return totals;
//     }
//   }
// }



// for (let index = 0; index < bills.length; index++) {
//   console.log(calcTip(bills[index]));
// }

