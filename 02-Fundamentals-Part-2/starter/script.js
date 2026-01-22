'use strict'      // Strict mode to write a secure js code


// let hasVoterId = false
// const passTest = true

// if (passTest) hasVoterId = true;


// if (hasVoterId) {
//   console.log('I can vote');
// }


// // const interface = 'Image'

// const private = 'Jet';




///////////1}functions

// let userName = 'Janani'

// function logDetails(name) {
//   console.log(`Hi, my name is ${userName}`);
// }


// logDetails('Janani');
// logDetails();
// logDetails();



// /////fruit generator examples


// function fruitGenerator(apples, pineapple) {
//   console.log(apples, pineapple);
//   const fruit = `Juice with ${apples} apples and ${pineapple} pineapples`
//   return fruit
// }

// const fruits = fruitGenerator(3, 4)
// console.log(fruits);


// // console.log(fruitGenerator(2, 5));
// console.log(fruitGenerator(10, 29));

// function chickenDosa(ingredients, meat) {
//   console.log(ingredients, meat);
//   const Dosa = `Made chicken Dosa with ${meat} meat and ${ingredients} ingredients`;
//   return Dosa;
// }


// const kariDosa = chickenDosa('flour', 'chicken')
// console.log(kariDosa);
// // console.log(chickenDosa('flour', 'chicken'));

// console.log(chickenDosa('flour and egg', 'chicken'));



// function greeting(name = 'Guest') {
//   console.log(`Hello sir/madam ${name} greetings`);
// }

// greeting('Janani')
// greeting('Sridhar')
// greeting('Prabhuvasan')
// greeting()



////////////////////}2.Function declaration and expression


//Function decalration examples man


// const ageDetails = calcAge(2003);
// console.log(ageDetails);

// function calcAge(birthYear) {
//   return 2025 - birthYear
// }




// //Function expression example

// const ageOfPerson = function (birthYear) {
//   return 2089 - birthYear;
// }

// const ageInfo = ageOfPerson(2003);
// console.log(ageInfo);



/////////////////3}Arrow functions


// //Function Decalaration

// function retirementAge2(age) {
//   return 60 - age;
// }

// console.log(retirementAge2(22));


// //Function expression

// const retirementAge = function (age) {
//   return 60 - age
// }

// console.log(retirementAge(24));


// //Arrow Function

// const retirementAge3 = age => 60 - age

// console.log(retirementAge3(20));


// //Arrow function examples, but this time, we need to calculate the age and the untiltheretirement

// const yearsUntilRetirement = birthYear => {
//   const age = 2025 - birthYear;
//   const retire = 60 - age;
//   return retire;
// }


// console.log(`He/She have ${yearsUntilRetirement(2003)} years left`)


// const yearsUntilRetirement2 = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retire = 60 - age;
//   return `${firstName} have ${retire} years left in his/her career`
// }

// console.log(yearsUntilRetirement2(2003, 'Janani'));
// console.log(yearsUntilRetirement2(2007, 'Prabhuvasan'));




//////////5}Function calling another function



// function fruitCutter(fruit) {
//   return fruit * 3;
// }

// const fruitGenerator = (apples, pineapples) => {
//   const applePieces = fruitCutter(apples);
//   const pineapplePieces = fruitCutter(pineapples);
//   const mixture = `Juice mixture made with ${apples} apples and cut into ${applePieces} pieces and with ${pineapples} pineaapples and cut into ${pineapplePieces} pieces`
//   return mixture;
// }



// console.log(fruitGenerator(2, 3));



////////////////6}Reviewing each functions

//Calc

// const calcAge = (dob) => {
//   return 2025 - dob;
// }


// //Arrow function
// const yearsUntil = (birthYear, firstName) => {
//   const age = calcAge(birthYear)
//   const retire = 60 - age;
//   return `${firstName} retires in ${retire} years`
// }

// console.log(yearsUntil(2003, 'Janani'));


// //Function expression
// const yearsUntil2 = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retire = 60 - age;

//   if (retire > 0) {
//     console.log('Employeeee update');
//     return `${firstName} retires in ${retire} years`
//   } else {
//     console.log('Employeeee update');
//     return `${firstName}, already retired`
//   }

// }

// console.log(yearsUntil2(1990, 'Janani Prabhuvasan'));
// console.log(yearsUntil2(1960, 'Janani Prabhuvasan'));




///////////////////8}Arrays

// const friend1 = 'Janani'
// const friend2 = 'Prabhuvasan'
// const friend3 = 'Sridhar'


// //avoid these while assigning the friends , instead use data structure in js like objeccts and arrays


// const friends = ['Janani', 'Sridhar', 'Prabhuvasan']
// console.log(friends);


// const friendsGrp = new Array('Janani', 'Prabhuvasan', 'Sridhar');
// console.log(friendsGrp);

// friendsGrp[1] = 'Suryaaa';
// console.log(friendsGrp);



// const dateOfBirth = new Array(2003, 2001, 2000, 2019)


// console.log(dateOfBirth);
// console.log(dateOfBirth[0]);
// console.log(dateOfBirth[3]);

// console.log(dateOfBirth.length);

// console.log(dateOfBirth[dateOfBirth.length - 1]);


// dateOfBirth[2] = 2004
// console.log(dateOfBirth);

// // dateOfBirth = [1093, 2009, 2345, 4211]    //Illegal




const location = 'Tambaram'
const friendsList = ['Sridhar', 'Surya']
const friendDetails = ['Janani', 'Prabhuvasan', location, 2025 - 2003, friendsList, 'F'];

console.log(friendDetails[4][0]);



// ///Small exercise


// const calculateAge = (birthYear) => 2025 - birthYear;


// const dobYears = [2000, 2003, 2001, 2020, 2019];


// console.log(calculateAge(dobYears[4]));


// console.log('loop');

// let aging = [];

// for (let index = 0; index < dobYears.length; index++) {

//   aging[index] = calculateAge(dobYears[index])
//   // console.log(calculateAge(dobYears[index]))
// }

// console.log(aging[2]);



/////////////////////9}Basic Array operation



// const friendsGroup = ['Janani', 'Prabhuvasan', 'Sridhar'];
// const newLength = friendsGroup.push('Harish');
// console.log(newLength);
// console.log(friendsGroup);





// const employee = ['Janani', 'Prabhuvasan'];

// employee.push('Sridhar');
// console.log(employee);

// employee.unshift('Angel');
// employee.push('Coasta')


// const removedElement = employee.pop();
// console.log(removedElement);
// console.log(employee);



// const removedElementFront = employee.shift();
// console.log(removedElementFront);


// //In which position a certain element is present

// console.log(employee.indexOf('Janani'));
// // console.log(employee.indexOf('janani'));



// console.log(employee.includes('Janani'));
// console.log(employee.includes('Angel'));


// employee.push('Angel')
// console.log(employee);

// console.log(employee.includes('Angel'));


// if (employee.includes('janani')) {
//   console.log('Congratulations!!! You won');
// }




///////////////10}Objects

// const twitterFriends = ['Sridhar', 'Harish']
// const jananis = ['Prabhuvasan', 'Tambaram', 'F', 2025 - 2003, twitterFriends];

// console.log(jananis);

// //In arrays, we can't name the element, like we can't reference it by name, but only by the order number, so we are moving to Objects, another data structure in javascript


// const janani = { lastName: 'Prabhuvasan', location: 'Tambaram', gender: 'F', age: 2025 - 2003, twitterFriends: ['Sridhar', 'Harish'] }
// console.log(janani);

// const nameKey = 'Name'
// console.log(janani.lastName);
// console.log(janani['lastName']);
// console.log(janani['last' + nameKey]);



// const choice = prompt('What do you want to know about janani, choose bw friends,age, location,gender and lastname');

// console.log(janani.choice);



// if (choice in janani) {
//   console.log(janani[choice]);
// } else {
//   console.log('Please enter a valid property');
// }


// //To add new property using dot and bracket notation

// janani.insta = 'janani_prabhuvasan';
// janani['phoneNumber'] = '8642354234';
// janani.firstName = 'Janani'

// console.log(janani.insta);
// console.log(janani.phoneNumber);



// if (choice === 'lastName' || choice === 'age' || choice === 'gender' || choice === 'twitterFriends' || choice === 'location' || choice === 'insta' || choice === 'phoneNumber' || choice === 'firstName') {
//   console.log(janani[choice]);
// } else {
//   console.log('Please enter a valid property');
// }





// console.log(`${janani.firstName} has ${janani.twitterFriends.length} friends in twitter, in that her bestfriend is ${janani.twitterFriends[0]}`);
// //Challenge




// const janani = {
//   firstName: 'Janani',
//   lastName: 'Prabhuvasan',
//   location: 'Tambaram', gender: 'F',
//   dob: 2003,
//   twitterFriends: ['Sridhar', 'Harish'],
//   // calcAge: (dob) => 2025 - dob

//   // calcAge: function () {    //this keyword refers to janani object
//   //   console.log(this);
//   //   return 2025 - this.dob
//   // }

//   calcAge: function () {
//     this.age = 2025 - this.dob;
//     return this.age
//   },

//   getSummary: function () {
//     return `${janani.firstName} ${janani.lastName} is a ${janani.age} years old womann..she ${janani.carLicense === true ? 'have' : 'dont have'} car driving license. She is located in ${janani.location}`
//   }
// }


// janani.landLine = '0451-244352'
// janani.carLicense = true;


// console.log(janani.calcAge());
// console.log(janani.age);
// console.log(janani.age);
// console.log(janani.age);
// console.log(janani.landLine);

// console.log(janani.getSummary());

// console.log(`${janani.firstName} ${janani.lastName} is a ${janani.age} years old womann..she ${janani.carLicense === true ? 'have' : 'dont have'} car driving license. She is located in ${janani.location}`);




////////////}10}loops


// console.log('Praying to god 1');
// console.log('Praying to god 2');
// console.log('Praying to god 3');
// console.log('Praying to god 4');
// console.log('Praying to god 5');
// console.log('Praying to god 6');
// console.log('Praying to god 7');
// console.log('Praying to god 1');
// console.log('Praying to god 8');
// console.log('Praying to god 9');
// console.log('Praying to god 10');


//It violates the Dont repeat yourself principle


// for (let index = 1; index <= 10; index++) {
//   console.log('Praying to god ' + index);
// }



///////11}Looping arrays, break, continuing

// const janani = ['Prabhuvasan', 'F', 'Tambaram', ['Harish', 'Sridhar'], 2025 - 2003, 'kikiibikii'];

// console.log(janani);
// console.log(janani.length);

// const jananiDetails = [];

// // for (let index = 0; index < janani.length; index++) {
// //   //Reading the Janani array
// //   console.log(janani[index], typeof janani[index]);

// //   //Filling the array
// //   // jananiDetails[index] = typeof janani[index];

// //   jananiDetails.push(typeof janani[index])

// // }

// console.log(jananiDetails);




// //Practical Example

// const years = [2003, 2001, 2020, 2009, 2019, 2008];


// const calcAge = (birth) => 2025 - birth;

// const age = [];


// for (let index = 0; index < years.length; index++) {
//   // age[index] = calcAge(years[index])
//   age.push(calcAge(years[index]));
// }

// console.log(age);



// //Continue example
// console.log('Only stringsssss');
// for (let index = 0; index < janani.length; index++) {

//   if (typeof janani[index] !== 'string') {
//     continue;
//   }
//   console.log(janani[index], typeof janani[index]);
// }


// console.log('After a number type break the iteration')


// for (let i = 0; i < janani.length; i++) {
//   if (typeof janani[i] === 'number') {
//     break;
//   }

//   console.log(janani[i], typeof janani[i]);
// }



////////////////12} Looping backwards


// const janani = ['Prabhuvasan', 'F', 'Tambaram', ['Harish', 'Sridhar'], 2025 - 2003, 'kikiibikii'];

// for (let index = janani.length - 1; index >= 0; index--) {
//   console.log(index, janani[index]);
// }



// //Loop inside loop

// for (let index = 1; index <= 3; index++) {
//   console.log(`Completed section ${index}`);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`Section ${index} : Practice assignment ${j}`);
//   }
// }




/////////////////////////////12}While loop


for (let index = 1; index <= 10; index++) {
  console.log(`Praying to god: ${index}`);
}


//While loop

let index = 1;

while (index <= 10) {
  console.log(`While looop: Praying to god: ${index}`);
  index++;
}



/////Dice until 6, we need to roll


let dice = Math.floor(Math.random() * 6) + 1
console.log(dice);


while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log('Loooooop endsss');
  }
}