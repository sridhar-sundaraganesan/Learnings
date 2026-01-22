'use strict';


// const bookingDetails = []

// const createBooking = function (flightNum, numOfPassengers = 1, price = 290 * numOfPassengers) {

//   //ES5 FEATURES
//   // numOfPassengers = numOfPassengers || 1
//   // price = price || 250

//   const booking = {
//     flightNum,
//     numOfPassengers,
//     price
//   }

//   console.log(booking);

//   bookingDetails.push(booking)
//   return bookingDetails;
// }

// // createBooking('LH23')
// // createBooking('LH2H3', 2, 5000)
// createBooking('LH23', 6)
// createBooking('LJ2SF', undefined, 400)
// console.log(bookingDetails);



// function solution(string) {

//   let numbers = []

//   for (let index = 0; index < string.length; index++) {
//     if (string[index].toUpperCase() === string[index]) {
//       let indexing = string.indexOf(string[index])
//       numbers.push(indexing)
//     }
//   }

//   let names = []
//   for (let index = 0; index < numbers.length; index++) {
//     let splited = string.slice(numbers[index])
//     names.push(splited)
//   }

//   return names;
// }

// console.log(solution('camelCaseTest'));





const flightMark = 'AE2Y8';
const janani = {
  name: 'Janani Prabhuvasan',
  passport: 259720029
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'AZ9R1'
  passenger.name = 'Mrs.' + passenger.name

  if (passenger.passport === 259720029) {
    alert('Checked In')
  } else {
    alert('Wrong passport')
  }

  return [flightNum, passenger]

}

console.log(checkIn(flightMark, janani));

console.log(flightMark, janani);



const newPassword = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000)

}

newPassword(janani)
checkIn(flightMark, janani)



