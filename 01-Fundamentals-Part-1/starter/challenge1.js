// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Ma


// const jananiHeight = 1.67;
// const sridharHeight = 1.84;

// const jananiWeight = 162;
// const sridharWeight = 92


// const bmiSridhar = sridharWeight / (sridharHeight * sridharHeight)
// const bmiJanani = jananiWeight / (jananiHeight * jananiHeight)

// const higherBMI = bmiSridhar > bmiJanani


// console.log(bmiSridhar);
// console.log(bmiJanani);
// console.log(higherBMI);

// //Normal if else statements
// if (higherBMI) {
//   console.log("Sridhar's BMI is higher than Janani's BMI");
// } else {
//   console.log("Janani's BMI is higher than Sridhar's BMI");
// }

// //Template literals

// if (higherBMI) {
//   console.log(`Sridhar's BMI ${bmiSridhar} is higer than Janani's BMI ${bmiJanani}`);
// } else {
//   console.log(`Janani's BMI ${bmiJanani} is higer than Sridhar's BMI ${bmiSridhar}`);
// }


// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.



// 👋 OPTIONAL: You can watch my solution in video format in the next lecture



// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



// let teamJananiScore1 = 97
// let teamJananiScore2 = 112
// let teamJananiScore3 = 101


// let teamSridharScore1 = 109
// let teamSridharScore2 = 95
// let teamSridharScore3 = 106


// let scoreJananis = (teamJananiScore1 + teamJananiScore2 + teamJananiScore3) / 3;
// let scoreSridhars = (teamSridharScore1 + teamSridharScore2 + teamSridharScore3) / 3;






// if (scoreJananis > scoreSridhars && scoreJananis >= 100) {
//   console.log('Janani wins');
// } else if (scoreSridhars > scoreJananis && scoreSridhars >= 100) {
//   console.log('Sridhar wins');
// } else if (scoreSridhars >= 100 && scoreSridhars >= 100 && scoreJananis === scoreSridhars) {
//   console.log('Draw the match');
// } else {
//   console.log('No team wins the match');
// }




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


let bill = 350
let total

const tip = bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.20

console.log(`Bill: ${bill},
Tip: ${tip}
Total:${bill + tip}`);