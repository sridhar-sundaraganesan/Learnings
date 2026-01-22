// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// And now let's use arrays! So, create an array called bills containing the test data below.
// Create an array called tips containing the tip value for each bill, calculated from the function you created before.
// BONUS: Create an array totals containing the total values, so the bill + tip.
// TEST DATA: 125, 555, and 44.


const bill = 100;
let tip;
let total;

const calcTip = (bill) => {
  tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
  total = bill + tip;
  return tip;
}


const bills = [125, 555, 44]
const tips = [];
const totals = []


// tips[0] = calcTip(bills[0])
// tips[1] = calcTip(bills[1])
// tips[2] = calcTip(bills[2])
// console.log(`Tips:` + tips);


for (let index = 0; index < bills.length; index++) {
  tips[index] = calcTip(bills[index])
}


console.log('For Loops: ' + tips);



for (let index = 0; index < tips.length; index++) {
  totals[index] = bills[index] + tips[index]
}


// totals[0] = bills[0] + tips[0]
// totals[1] = bills[1] + tips[1]
// totals[2] = bills[2] + tips[2]


console.log(`Totals: ${totals}`);



// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));










// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20 %.
// Your tasks:
// 1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
// this.It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
//   (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

