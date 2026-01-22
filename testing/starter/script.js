'use strict';




// // const summation = function (num) {


// //   let indexValue = num;
// //   let sum = 0;

// //   for (let index = indexValue; index > 0; index--) {
// //     sum += index;
// //   }
// //   return sum;
// // }

// // console.log(summation(4));
// // summation(3);




// // function invert(array) {

// //   let setValue = [];

// //   let summing = [];

// //   for (let index = 0; index < array.length; index++) {
// //     if (array[index] > 0) {
// //       setValue.push(array[index]);
// //     } else if (array[index] < 0) {
// //       summing = Math.abs(setValue.push(array[index]));
// //     }
// //   }

// //   return summing;
// // }




// // console.log(invert([-1, -2, -3, -4, -5]));




// // function feast(beast, dish) {
// //   let beastLength = beast.length;
// //   let dishLength = dish.length;
// //   if (beast[0] === dish[0] && beast[beastLength] === dish[dishLength]) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }


// // console.log(feast("great blue heron", "garlic naan"));
// // console.log(feast("rreat blue heron", "carlic naan"));


// // const str = 'Janani Prabhuvasan';
// // console.log(str.length);



// // function pinValidationn(pin) {

// //   if (String(pin).length === 4 || String(pin).length === 6 || String(pin).includes([0 - 9])) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }


// // console.log(pinValidationn(111224));




// // function reversal(str) {

// //   let dummy = 'Janani Prabhuvasan';

// //   let reversalOfDummy = dummy.split('').reverse().join('')

// //   return reversalOfDummy;
// //   let reverse = str.split('').reverse().join('');
// //   return reverse;
// // }

// // console.log(reversal('Janani'));



// // function reverseIt(data) {
// //   if (typeof (data) === "string" || typeof (data) === "number") {
// //     return data.toString().split('').reverse().join('')
// //   } else {
// //     return data;
// //   }
// // }


// // // console.log(reverseIt(1234));



// // function getDomainName(url) {
// //   return url.split('//')[1].split('/')[0].replace('www.', '').replace('.com', '')
// // }

// // console.log(getDomainName("http://github.com/carbonfive/raygun"));
// // console.log(getDomainName("http://www.zombie-bites.com"));
// // console.log(getDomainName("https://www.cnet.com"));


// function removeChar(str) {

//   if (str.length === 2) {
//     return '';
//   } else {
//     return str.slice(1, -1)
//   }
// };


// console.log(removeChar('janani'));
// console.log(removeChar('an'));



function solution(str, ending) {

  return str.endsWith(ending)

}

console.log(solution('abc', 'bcs'));