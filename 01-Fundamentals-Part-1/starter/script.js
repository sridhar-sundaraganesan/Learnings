// let js = 'Awesomee';
// if (js == 'Awesomee') alert('JS IS MADDDD');
// console.log(60 + 2 + 90);


//1.Values and variables

// let firstName = 'Janani Prabhuvasan';
// console.log(firstName);
// console.log(firstName);


// // let 3years = 93;
// let janani$prabhu = 'Name'
// console.log(janani$prabhu);

// let name = 'Janani'
// console.log(name);


// let $function = 'os';

// console.log($function);


//2.Data types


// let jsIsFun = true

// console.log(typeof jsIsFun);
// console.log(typeof true);
// console.log(typeof 26);
// console.log(typeof 'Janani');



// jsIsFun = 'YES!!!!!! LION'
// console.log(typeof jsIsFun);


// let year;

// console.log(year);
// console.log(typeof year);

// year = 2003
// console.log(year);
// console.log(typeof year);


//3.Declare a variable let,const,var

// let age = 53;
// age = 54;

// const voterId = 1545224;
// // const account;
// voterId = 195343;

// console.log(voterId);


//4.Basic operators

//Arithmetic operators

// const yearToCalculate = 2049

// const ageJanani = yearToCalculate - 2003
// const ageSridhar = yearToCalculate - 2002
// console.log(ageSridhar, ageJanani);


// console.log(ageSridhar * 2);

// console.log(2 ** 3);

// const firstName = 'Janani'
// const lastName = 'Prabhuvasan'

// console.log(firstName + ' ' + lastName);


// //Assignment operator:

// let x = 10 + 5;

// x += 10;
// x /= 5;
// x *= 7;

// x++;
// x--


// console.log(x);

// //Comparison operator:

// console.log(ageSridhar > ageJanani);

// console.log(ageSridhar >= 18)

// const result = ageJanani >= 18;

// if (result) {
//   console.log('Eligible');
// } else {
//   console.log('Not eligible');
// }

// console.log(result);


//////////////////////////////////5.String and template literals

// const firstName = 'Janani'
// const address = 'Tambaram'
// const house = 'Prabhuvasan villas'
// const born = 2003
// const present = 2025

// const jananiDetails = "I'm " + firstName + ", lives in " + house + " , " + address + "." + " I'm " + (present - born) + " years old"

// console.log(jananiDetails);

// //Template Literals

// const details = `I'm ${firstName}, lives in ${house}, ${address}. I'm ${present - born} years old`

// console.log(details);

// console.log(`Just a regularrr string....`);

// //String with multiple lines
// console.log('Stringgg \n\with multiple\n\lines\n\!!!!');

// //Template literals with multiple lines

// console.log(`String
// with
// multiple
// lines
// !!!!!`);


////////////////////6. if condition

// const age = 9

// const voterId = age >= 18

// if (voterId) {
//   console.log('You can vote');
// } else {
//   const yearsEnough = 18 - age
//   console.log(`Sorry, you have to wait for another ${yearsEnough} years`);
// }



// const phDial = 252

// let address

// if (phDial == 452) {
//   address = 'Madurai'
// } else {
//   address = 'Selaiyur'
// }

// console.log(address);


/////////////7.Type conversion and coercion
// const birth = '2003'

// const numberBirth = Number(birth)

// console.log(typeof numberBirth);

// console.log(numberBirth + 18);

// console.log(birth + 18);


// console.log(Number('Janani'));
// console.log(typeof NaN);
// console.log(23, String(23))


// console.log('23' - '16' - 3);
// console.log('23' + '15' + 2);

// console.log('23' * 4);
// console.log('23' / '23');



///////////////////8} truthy and falsy value


//falsy value, (0,'',undefined,null,NaN)

// console.log(Boolean(0)); //false
// console.log(Boolean('Janani')); //truthy
// console.log(Boolean(undefined)); //falsy
// console.log(Boolean({})); //empty object, but this is a truthy value
// console.log(Boolean(''));


// const ticket = 10;

// if (ticket) {
//   console.log('Review the movie once u complete');
// } else {
//   console.log('Buy the ticket');
// }


// let twitterId = 'kikiibikii'

// if (twitterId) {
//   console.log('Thanks for sharing ur twitterId mate');
// } else {
//   console.log('Bro why are you so introvertedddddd');
// }



/////////////////9}equality operator == or Strict equality opeartor ===

// const age = 18

// if (age === 18) {
//   console.log('You can vote sir/madam');
// } else {
//   console.log('Sorry sir/madam, you cant vote');
// }


// const userFav = Number(prompt('Whats your fav nummber'))

// console.log(userFav);
// console.log(typeof userFav);


// if (userFav === 29) {
//   console.log(userFav + ' is a amazingg number');
// } else if (userFav === 7) {
//   console.log(userFav + ' is also cooool number');
// } else {
//   console.log(userFav + ' kubukkkk');
// }



// if (userFav !== 38) {
//   console.log('Why not 38 looser???');
// } else if (userFav !== 32) {
//   console.log('32 is the best idiot');
// } else {
//   console.log('whatever');
// }

//////////////10}Logical Operator

// const hasTicket = true
// const hasGoodCinemaKnowledge = true

// console.log(hasTicket && hasGoodCinemaKnowledge);
// console.log(hasTicket || hasGoodCinemaKnowledge);
// console.log(!hasGoodCinemaKnowledge);

// const isForiegner = false

// const shouldWatchMovie = hasTicket && hasGoodCinemaKnowledge && !isForiegner


// if (shouldWatchMovie) {
//   console.log('You can enjoy the show, you are about to watch a masterclasssss');
// } else {
//   console.log('I think you should skip the movie');
// }


// // if (shouldWatchMovie) {
// //   console.log('You can enjoy the show, you are about to watch a masterclasssss');
// // } else {
// //   console.log('I think you should skip the movie');
// // }




// console.log(hasTicket && hasGoodCinemaKnowledge && !isForiegner);


// if (hasTicket && hasGoodCinemaKnowledge) {
//   console.log('You will enjoy this movie for sure');
// } else {
//   console.log('Doubt thaan');
// }



///////////////////////////11}Switch statements


// const day = 'monday'


// switch (day.toLowerCase()) {
//   case 'monday': console.log('2 hrs of Udemy course');
//     break;
//   case 'Tuesday': console.log('3 hrs of Udemy course');
//     break;
//   case 'Wednesday': console.log('Revision');
//     break;
//   case 'Thursday': console.log('Examination');
//     break;
//   case 'Friday': console.log('Result');
//     break;
//   case 'Saturday': console.log('Movie Time');
//     break;
//   case 'Sunday': console.log('Eat/Rest/Sleep/Repeat');
//     break;
//   default: console.log('Sorry we dont have any plan for the day you have mentioned, please enter a valid day');
// }


// if (day.toUpperCase() === 'MONDAY') {
//   console.log('2 hrs of Udemy course');
// } else if (day === 'Tuesday') {
//   console.log('3 hrs of Udemy course');
// } else if (day === 'Wednesday') {
//   console.log('Revision');
// } else if (day === 'Thursday') {
//   console.log('Exam');
// } else if (day === 'Friday') {
//   console.log('Revision');
// } else if (day === 'Saturday' || day === 'Sunday') {
//   console.log('Movie time/Eat/Sleep');
// } else {
//   console.log('Sorry we dont have any plan for the day you have mentioned, please enter a valid day');
// }




////////////////////12}Ternary operator



const age = 6

age >= 18 ? console.log('You can use twitter') : console.log('Sorry you are not eligible enought to use twitter')



const aged = 11;

const app = aged >= 18 ? 'Twitter' : 'Youtube Kids'
console.log(app);

let app2;

if (aged >= 18) {
  app2 = 'Twitter'
} else {
  app2 = 'Youtube Kids'
}

console.log(app2);


console.log(`I am ${aged} old, I can use ${aged >= 18 ? 'Twitter' : 'Youtube Kids'}`);