// // // 'use strict'


// // // const airline = 'TAP Air Portugal'
// // // const plane = 'A320'

// // // // console.log(plane[0]);
// // // // console.log(plane[1]);
// // // // console.log(plane[2]);
// // // // console.log(plane[3]);

// // // // console.log('B371'[2]);

// // // // const typee = typeof (plane[1])

// // // // console.log(typee);

// // // // console.log(airline.length);
// // // // console.log(plane.length);



// // // // console.log('Index of a specific character: ' + airline.indexOf('r'));
// // // // console.log(airline.indexOf('l'));
// // // // console.log('Last Index of: ' + airline.lastIndexOf('r'));
// // // // console.log('Complete word starting point: ' + airline.indexOf('Portugal'));
// // // // console.log(airline.indexOf('portugal'));


// // // // console.log(airline.slice(4));
// // // // console.log(airline.slice(4, 7));

// // // // console.log(airline.slice(0, airline.indexOf(' ')));

// // // // console.log(airline.slice(airline.lastIndexOf(' ') + 1));


// // // // console.log(airline.slice(-2));

// // // // console.log(airline.slice(1, -2));


// // // // //Challenge with airplane middle seat

// // // // const checkMiddleSeat = function (seat) {
// // // //   const check = seat.slice(-1).toUpperCase()
// // // //   return check === 'B' || check === 'E' ? `${seat} is middle seat` : `${seat} is not in the middle`

// // // // }


// // // // console.log(checkMiddleSeat('11B'));
// // // // console.log(checkMiddleSeat('21e'));
// // // // console.log(checkMiddleSeat('12C'));
// // // // console.log(checkMiddleSeat('65E'));
// // // // console.log(checkMiddleSeat('23O'));


// // // ////////////////////////////////////////////////////////////////

// // // console.log('janani'.toUpperCase());
// // // console.log(airline.toUpperCase());
// // // console.log(airline.toLowerCase());



// // // const fixingNames = function (passenger) {
// // //   return passenger.slice(0, 1).toUpperCase() + passenger.toLowerCase().slice(1, passenger.length)
// // // }



// // // console.log(fixingNames('jAnani'));
// // // console.log(fixingNames('sRidhaR'));
// // // console.log(fixingNames('harIsh'));
// // // console.log(fixingNames('uMayal'));


// // // const passenger = 'jAnani prabhuvasan';
// // // const fixing = passenger.slice(0, 1).toUpperCase() + passenger.toLowerCase().slice(1, passenger.length);
// // // console.log(fixing);


// // // //Comparing emails


// // // const fixingMailIds = function (email, loggedEmail) {
// // //   return loggedEmail.toLowerCase().trim() === email ? true : false
// // // }


// // // console.log(fixingMailIds('jananitheboss.io', '   JananitheBoSs.io \n'));
// // // console.log(fixingMailIds('sridhar3023.io', '   SridhAr3023.io       \n'));


// // // ///Replacing a string

// // // const priceGreatBritain = '288,972^'
// // // const priceUnitedStates = priceGreatBritain.replace(',', '.').replace('^', '$')
// // // console.log(priceUnitedStates);


// // // //Replace entire String

// // // const announcement = 'All passenger come to boarding door 23. Boarding door 23!!!'

// // // console.log(announcement.replaceAll('door', 'gate'));


// // // const flightAnnouncement = 'All passenders, please wear seatbelt, the flight is about to take off, passenders please wear seatbelt'


// // // console.log(flightAnnouncement.replace(/passenders/g, 'passengers'));


// // // ///three boolean returning methods

// // // //incluesWith(),startsWith(),endsWith()

// // // const aircraft = 'Airbus A320neo'

// // // console.log(aircraft.includes('A320'));
// // // console.log(aircraft.startsWith('Air'));
// // // console.log(aircraft.endsWith('neon'));


// // // if (aircraft.startsWith('Airbus') && aircraft.endsWith('neo')) {
// // //   console.log('New Aircraft');
// // // } else {
// // //   console.log('Old Aircraft');
// // // }

// // // const checkAircraft = function (aircraft) {
// // //   return aircraft.startsWith('Airbus') && aircraft.endsWith('neo') ? 'New Aircraft' : 'Old Aircraft'
// // // }

// // // console.log(checkAircraft('Airbus A320neo'));
// // // console.log(checkAircraft('Rezen I120MIRAI'));



// // // //Checking baggage items and what allowed and what not



// // // const checkBaggage = function (baggage) {
// // //   const items = baggage.toLowerCase();

// // //   if (items.includes('guns') || items.includes('drugs') || items.includes('knife')) {
// // //     return 'Sir/Madam, you are under arrest'
// // //   } else {
// // //     return 'Sir/Madam, you are good to go'
// // //   }
// // // }

// // // console.log(checkBaggage('I have snacks, and gifts'));
// // // console.log(checkBaggage('I have guns for protection, and toys'));
// // // console.log(checkBaggage('I have drugs, and Knife'));
// // // console.log(checkBaggage('I have UO Knife'));



// // //String part 3

// // console.log('a+very+nice+string'.split('+'));

// // console.log('a-good-romantic-song'.split('-'));

// // console.log('Janani Prabhuvasan'.split(' '));



// // const [firstName, lastName] = 'Janani Prabhuvasan'.split(' ')  //Destructuring 

// // const newName = ['Ms.', firstName, lastName.toUpperCase()]
// // console.log(newName);




// // const passenger = 'jessica ann smith david'



// // //Capitalize names using for loop tried on my own
// // const capitalizeNames = function (passenger) {
// //   const nameDetails = passenger.split(' ');
// //   console.log(nameDetails);
// //   let dummy = [];
// //   for (let index = 0; index < nameDetails.length; index++) {
// //     let names = nameDetails[index]
// //     let res = names.slice(0, 1).toUpperCase() + names.slice(1, names.length)
// //     dummy.push(res);
// //   }
// //   return dummy.join(' ');
// // }





// // const capitalizePassengers = function (passengersDetails) {

// //   const nameDetails = passengersDetails.split(' ');

// //   let namesUpper = [];

// //   for (const n of nameDetails) {
// //     namesUpper.push(n[0].toUpperCase() + n.slice(1))
// //     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
// //   }

// //   return namesUpper.join(' ');

// // }


// // console.log(capitalizePassengers('jessica ann smith davids'));

// // // console.log(capitalizeNames('jessica ann smith david'));



// // //Padding

// // const padding = 'Go to gate 23!';
// // console.log(padding.padStart(25, '+').padEnd(35, '+'));


// // const padding1 = 'The beginning'

// // console.log(padding1.padEnd(25, '+'));


// // const creditCardNumber = function (creditNumber) {
// //   let str = String(creditNumber);

// //   let modify = str.slice(-4).padStart(16, '*');
// //   return modify
// // }


// // console.log(creditCardNumber(3454785436909842));


// // //Repeat

// // const message = 'Bad weather... All flights are delayed.. '

// // console.log(message.repeat(5));




// // const camelCasing = function (names) {
// //   const tick = '✔';
// //   const [firstName, lastName] = names.trim().split('_')
// //   const Case = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
// //   let camelCase = firstName.toLowerCase() + Case
// //   return `${camelCase} ${tick}`;
// // }



// // console.log(camelCasing('underscore_case'));
// // console.log(camelCasing('first_name'));
// // console.log(camelCasing('Some_Variable'));
// // console.log(camelCasing('calculate_AGE'));
// // console.log(camelCasing('delayed_departure'));






// function toCamelCase(str) {



//   if (str.includes('-')) {
//     let [firstName, secondName, thirdName] = str.split('-')
//     let result = firstName + secondName.slice(0, 1).toUpperCase() + secondName.slice(1) + thirdName.slice(0, 1).toUpperCase() + thirdName.slice(1)
//     return result;
//   } else if (str.includes('_')) {
//     let [firstName, secondName, thirdName] = str.split('_')
//     let result = firstName.slice(0, 1).toUpperCase() + firstName.slice(1) + secondName.slice(0, 1).toUpperCase() + secondName.slice(1) + thirdName.slice(0, 1).toUpperCase() + thirdName.slice(1)
//     return result;
//   }

// }


// console.log(toCamelCase('the-stealth-warrior-champion'));
// console.log(toCamelCase('The_Stealth_Warrior'));



// function squareDigits(num) {
//   let str = String(num)

//   let arr = [];
//   for (let index = 0; index < str.length; index++) {
//     let assigned = str[index];
//     let calc = assigned * assigned;

//     arr.push(calc)
//   }

//   return Number(arr.join(''));
// }

// console.log(squareDigits(9119));


// function findShort(s) {
//   let arr = s.split(' ')

//   let result = arr.sort((a, b) => a.length - b.length);

//   return result[0];

// }

// console.log(findShort('Janani Prabhuvasan is eating food'));
// console.log(findShort('better place to view a movie'));



// // function shorterReverseLonger(a, b) {

// //   let names = [a, b];

// //   let result = `${names[0]}  ${names[1].reverse()}`

// //   return result;
// // }


// // console.log(shorterReverseLonger('first', 'abcde'))


// function minMax(arr) {
//   if (arr.length === 1) {
//     return [arr[0], arr[0]]
//   } else {
//     arr.sort((a, b) => a - b)
//     return [arr[0], arr[arr.length - 1]]
//   }
// }

// console.log(minMax([1, 2, 3, 4, 5]));

function billboard(name, price = 30) {
  let p = name.length * 30;
  return p;
}
console.log(billboard('Jeong-Ho Aristotelis'));

function fakeBin(x) {
  // let arr = x.split('');

  for (let index = 0; index < x.length; index++) {
    let number = Number(x)
    if (number[index] < 5) {
      console.log(0);
    } else if (x[index] > 5) {
      x.replaceAll(1)
    }
  }

  return x;
}

console.log(fakeBin('343535345334357'));



function digitize(n) {
  let str = String(n).split('')

  return str.map(Number).reverse()
}

console.log(digitize(35236));