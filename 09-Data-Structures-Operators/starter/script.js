'use strict';





// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  likeToOrder: function (mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}



//Destructuring objects

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);


//desturcturing object, but now with different name

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

console.log(restaurantName, hours, tags);

//Mutating variables

let nameIS = 'Janani Prabhuvasan';
({ nameIS } = restaurant)

console.log(nameIS);


//Destructuring objects with default values in it

const { menu = [], starterMenu: starter = [] } = restaurant;


console.log(menu, starter);



//Destructuring nested objects

const { fri: { open: o, close: c } } = openingHours;

console.log(o, c);



// const [main, starter] = restaurant.likeToOrder(0, 1);
// console.log(main, starter);






// let [first, , , second] = restaurant.categories;
// console.log(first, second);


// //Switchign variables
// // let temp = first;
// // first = second;
// // second = temp;

// // console.log(first, second);

// //Now swapping using destructuring

// [first, second] = [second, first];

// console.log(first, second);



// // const [mainDish, starter, pickle] = restaurant.mainMenu
// // console.log(mainDish, starter, pickle);

// // const [first, second, fourth] = restaurant.categories;
// // console.log(first, second, fourth);



// // const arr = [2, 5, 6];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];


// // const [x, y, z] = arr;

// // console.log(x, y, z);




// //Nested array

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// //Default values using destructuring


// const [p = 2, q = 2, r = 2] = [6, 7];

// console.log(p, q, r);





// Write a program that receives a list of variable names written in underscore_case 
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to 
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable 
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable 
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case 
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data