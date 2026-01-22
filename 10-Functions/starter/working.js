// // // // 'use strict'


// // // // // function rearrange(arr) {
// // // // //   let arranged = [];

// // // // //   for (let index = 0; index < arr.length; index++) {
// // // // //     if (arr.indexOf(arr[index]) === 0) {
// // // // //       arranged.push(arr[index + 2])
// // // // //     } else if (arr.indexOf(arr[index]) === 1) {
// // // // //       arranged.push(arr[index])
// // // // //     } else if (arr.indexOf(arr[index]) === 2) {
// // // // //       arranged.push(arr[0])
// // // // //     }
// // // // //   }
// // // // //   return arranged

// // // // // }

// // // // // console.log(rearrange(['tail', 'body', 'head']));
// // // // // console.log(rearrange(["Shin", "Jagi", "Shin"]));



// // // // function oddOne(arr) {

// // // //   for (let index = 0; index < arr.length; index++) {
// // // //     if (Math.abs(arr[index]) % 2 == 1) {
// // // //       return index
// // // //     }
// // // //   }
// // // //   return -1
// // // // }

// // // // console.log(oddOne([2, 4, 6, 7, 10]));
// // // // console.log(oddOne([2, 4, 6, 8, 10]));



// // // // // function mergeArrays(arr1, arr2) {
// // // // //   return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b)

// // // // // }
// // // // // console.log(mergeArrays([1, 2, 4, 3, 5], [6, 7, 9, 1, 8]));


// // // // // function sumArray(array) {
// // // // //   array.sort((a, b) => a - b)
// // // // //   let sum = 0;
// // // // //   for (let index = 0; index < array.length; index++) {
// // // // //     sum += array[index]
// // // // //   }
// // // // //   return sum - array[0] - array[array.length - 1]
// // // // // }

// // // // // console.log(sumArray([6, 2, 1, 8, 10]));
// // // // // console.log(sumArray([-6, -20, -1, -10, -12]));




// // // // function nbDig(n, d) {

// // // //   let arr = []

// // // //   for (let index = 0; index <= n; index++) {
// // // //     let k = index * index
// // // //     arr.push(k)
// // // //   }

// // // //   console.log(arr);
// // // //   let count = 0
// // // //   for (let index = 0; index < arr.length; index++) {

// // // //     if (String(arr[index]).includes(d)) {
// // // //       count++
// // // //     }
// // // //   }

// // // //   return count
// // // // }

// // // // console.log(nbDig(10, 1));
// // // // console.log(nbDig(25, 1))


// // // // function getMiddle(s) {
// // // //   let strLength = s.length;

// // // //   let mid = Math.floor(strLength / 2)

// // // //   if (strLength % 2 === 0) {
// // // //     return s[mid - 1] + s[mid]
// // // //   } else {
// // // //     return s[mid]
// // // //   }
// // // // }

// // // // console.log(getMiddle('middle'));
// // // // console.log(getMiddle('A'));
// // // // console.log(getMiddle('testing'));





// // // // // const isSquare = function (n) {

// // // // //   if (Math.sqrt(n))


// // // // // }

// // // // // console.log(isSquare(25));
// // // // // console.log(isSquare(8));
// // // // // console.log(isSquare(0));



// // // // function noBoringZeros(n) {

// // // //   let str = String(n)

// // // //   let arr = [];
// // // //   for (let index = 0; index < str.length; index++) {
// // // //     if (!str[str.length].endsWith('0')) {
// // // //       arr.push(str[index])
// // // //     }
// // // //   }

// // // //   let value = arr.join('')

// // // //   return Number(value)
// // // // }


// // // // console.log(noBoringZeros(1500));
// // // // console.log(noBoringZeros(1120));
// // // // console.log(noBoringZeros(9600000));
// // // // console.log(noBoringZeros(1020));
// // // // console.log(noBoringZeros(0));



// // // // function findMultiples(integer, limit) {

// // // //   let length = limit / integer

// // // //   let arr = [];

// // // //   for (let index = 1; index <= length; index++) {
// // // //     let calc = integer * index
// // // //     arr.push(calc)
// // // //   }

// // // //   return arr
// // // // }

// // // // console.log(findMultiples(5, 25))
// // // // console.log(findMultiples(11, 54))



// // // function descendingOrder(n) {

// // //   let str = String(n)

// // //   str.split('')

// // //   let arr = []
// // //   for (let index = 0; index < str.length; index++) {
// // //     let numeral = Number(str[index])
// // //     arr.push(numeral)
// // //   }


// // //   return arr.sort((a, b) => b - a).join('')


// // // }

// // // console.log(descendingOrder(1021));


// // // function problem(x) {
// // //   if (typeof x == 'number') {
// // //     return (x * 50) + 6
// // //   } else {
// // //     return 'Error'
// // //   }
// // // }

// // // console.log(problem(1));



// // // function order(words) {
// // //   let arr = words.split(' ')

// // //   console.log(arr);

// // //   let newArray = arr.sort((a, b) => a.match(/\d/) - b.match(/\d/))
// // //   return newArray.join('')


// // // }

// // // console.log(order("is2 Thi1s T4est 3a"));



// // function highAndLow(numbers) {
// //   let arr = numbers.replaceAll(' ', '').split('')
// //   let newArray = []

// //   for (let index = 0; index < arr.length; index++) {
// //     let num = Number(arr[index])
// //     newArray.push(num)
// //   }

// //   let array = newArray.reverse()
// //   return `${array[0]} ${array[array.length - 1]}`
// // }

// // console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));



// // function isPalindrome(x) {
// //   let split = x.split('').reverse()
// //   let split2 = x.split('')


// //   return split.join('') === split2.join('')

// // }

// // console.log(isPalindrome('malayala'));





// // function take(arr, n) {

// //   let array = []

// //   console.log(arr.length);

// //   for (let index = 0; index < n; index++) {
// //     if (arr[index] === undefined) {
// //       return [];
// //     }
// //     array.push(arr[index])
// //   }

// //   return array

// // }

// // console.log(take([-24, 5, -34, 67, 76, 23, 78, 99]), 5);



// // function minValue(values) {
// //   values.sort((a, b) => a - b)

// //   return values
// // }

// // console.log(minValue([1, 3, 1]));


// // function multiplicationTable(size) {


// //   let firstArr = [];
// //   let secondArr = [];
// //   let thirdArr = []
// //   for (let index = 1; index <= size; index++) {
// //     firstArr.push(index)
// //   }

// //   for (let index = 0; index < firstArr.length; index++) {
// //     secondArr.push(firstArr[index] * 2)
// //   }

// //   for (let index = 0; index < firstArr.length; index++) {
// //     thirdArr.push(firstArr[index] * 3)
// //   }

// //   return [[firstArr], [secondArr], [thirdArr]]


// // }


// // console.log(multiplicationTable(3));

// // function hello(name) {

// //   if (name) {
// //     return 'Hello, ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!'
// //   } else {
// //     return `Hello, World!`
// //   }

// // }

// // console.log(hello('aliCe'));
// // console.log(hello());


// // if (Number.MAX_VALUE)




// // function removeEveryOther(arr) {
// //   let result = [];

// //   for (let index = 0; index < arr.length; index++) {
// //     if (index % 2 !== 0) {
// //       continue;
// //     } else {
// //       result.push(arr[index])
// //     }

// //   }

// //   return result

// // }

// // console.log(removeEveryOther(['All the best', 'Good things', 'Jolly', 'Happy days ahead']));


// // function reverse(word) {

// //   return word.split(' ').reverse().join(' ')

// // }

// // console.log(reverse('Hello Good days ahead Jolly days'));


// // function sumDigits(number) {
// //   let str = String(Math.abs(number)).split('')

// //   let sum = 0;
// //   for (let index = 0; index < str.length; index++) {
// //     sum += Number(str[index])
// //   }

// //   return sum;
// // }

// // console.log(sumDigits(18));
// // console.log(sumDigits(-32));
// // console.log(sumDigits(99));



// // function countBy(x, n) {

// //   let length = x * n;
// //   let arr = [];

// //   for (let index = x; index <= length; index += x) {
// //     arr.push(index)
// //     index + x
// //   }

// //   return arr;

// // }

// // console.log(countBy(1, 10));
// // console.log(countBy(2, 5));



// // function sumStr(a, b) {
// //   let arr = [a, b]

// //   let sum = 0;
// //   for (let index = 0; index < arr.length; index++) {
// //     sum += Number(arr[index])
// //   }
// //   return String(sum)

// // }

// // console.log(sumStr("4", "5"));
// // console.log(sumStr("34", "5"));


// // function reverseLetter(str) {
// //   let arr = str.replaceAll(/[0-9?/%^&*!@#$%^&*()|\/]/g, '').split('')

// //   let res = [];
// //   for (let index = arr.length - 1; index >= 0; index--) {
// //       return res.join('')
// // }

// // console.log(reverseLetter('Krishnan'));
// // console.log(reverseLetter('ultr53o?n'));
// // console.log(reverseLetter('ab23c'));



// // function gimme(triplet) {
// //   let res = triplet.sort((a, b) => a - b)

// //   for (let index = 0; index < res.length; index++) {
// //     if (index == 1) {
// //       return index
// //     }
// //   }

// // }

// // console.log(gimme([2, 3, 1]));
// // console.log(gimme([5, 10, 14]));res.push(arr[index])
// // }



// function sayHello(name, city, state) {
//   return `Hello, ${name.join(' ') + '!'} Welcome to ${city}, ${state}!`
// }


// console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));


// function greet(language) {



//   const greetings = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso"
//   };


//   return greetings[language] || "Welcome";

// }


// console.log(greet('polish'));




// function calculateYears(principal, interest, tax, desired) {
//   let years = 0;
//   let currentValue = principal

//   while (currentValue < desired) {
//     let taxing = principal * interest * (1 - tax)
//     currentValue += taxing
//     years++;
//   }

//   return years

// }

// console.log(calculateYears(1000, 0.05, 0.18, 1100));




// function incrementString(strng) {
//   let name = strng.split(/[1-9]/g).join('')
//   let numeral = Number(strng.split(/[a-zA-Z]/g).join(''))
//   let calc = numeral + 1;
//   return `${name}${calc}`
// }

// // console.log(incrementString('foobar1'));
// // console.log(incrementString('foo099'));
// // console.log(incrementString('fo99obar99'));
// // console.log(incrementString('foo0042'));
// // console.log(incrementString('foobar23'));
// // console.log(incrementString('foo'));
// console.log(incrementString('foobar000'));






// function validateHello(greetings) {

//   let validation = greetings.toLowerCase();

//   return validation.includes('ahoj' || 'hello' || 'ciao' || 'salut' || 'hallo' || 'hola' || 'czesc') ? true : false
// }

// console.log(validateHello('ahoj'));
// console.log(validateHello('meh'));
// console.log(validateHello('aHoj'));



// function top3(products, amounts, prices) {

//   let order = [];
//   for (let index = 0; index < amounts.length; index++) {
//     let total = amounts[index] * prices[index]
//     order.push(total)
//   }

//   let result = [];
//   for (let index = 0; index < order.length; index++) {
//     const objectOrder = {
//       products[index]: order[index]
//     }
//   }

// }

// console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]));



// function solution(hour) {

//   if (String(hour).length == 2 || String(hour).length > 4) {
//     throw new Error
//   }


//   if (String(hour).length >= 3 || String(hour).length == 4) {

//     if (String(hour).length === 3) {
//       let first = String(hour).split('').slice(0, 1) + ':'
//       let second = String(hour).split('').slice(1)
//       return first + second.join('')
//     } else {
//       let first = String(hour).split('').slice(0, 2) + ':'
//       let second = String(hour).split('').slice(2)
//       return first.replace(',', '') + second.join('')
//     }

//   }
// }

// console.log(solution(80));
// console.log(solution(800));
// console.log(solution(900));
// console.log(solution(1000));


// function lottery(lotteryNumber) {
//   let num = lotteryNumber.replace(/[a-zA-Z]/g, '')

//   return num ? [...new Set(num)].join('') : 'One more run!'

// }

// console.log(lottery('Q8Hy0y5m5oshQPeRCkG'));
// console.log(lottery('hPrBKWDH8yc6Lt5NQZWQ'));
// console.log(lottery('ynMAisVpHEqpqHBqTrwH'));


// function initializeNames(name) {

//   let arr = name.split(' ')

//   let value = [];
//   for (let index = 1; index < arr.length - 1; index++) {

//     if (arr.length >= 1 && arr.length <= 2) {
//       return name;
//     } else {
//       let namingConvention = arr[index].slice(0, 1) + '.'

//       let fullName = arr[0] + ' ' + namingConvention + arr[arr.length - 1]
//       value.push(fullName)
//     }

//   }

//   return value

// }


// console.log(initializeNames('Lois Mary Lane'));
// console.log(initializeNames('Janani Prabhuvasan'));
// console.log(initializeNames('Alice Betty Catherine Davis'));


// function rowWeights(array) {

//   let arr = [];

//   let evenSum = 0;
//   let oddSum = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (index % 2 == 0) {
//       evenSum += array[index]
//     } else {
//       oddSum += array[index]
//     }
//   }

//   arr.push(evenSum, oddSum)

//   return arr;

// }

// console.log(rowWeights([50, 60, 70, 80]));



// function esrever(str) {
//   let words = str.split('').reverse().join('')
//   let ex = words.slice(0, 1)

//   return `${words.slice(1)}${ex}`


// }

// console.log(esrever('an Easy one?'));
// console.log(esrever('tacocat!'));
// console.log(esrever('Much l33t?'));



// function removeRotten(bagOfFruits) {

//   if (!bagOfFruits || bagOfFruits === null) {
//     return [];
//   }

//   let arr = [];
//   for (let index = 0; index < bagOfFruits.length; index++) {

//     if (bagOfFruits[index].includes('rotten')) {
//       arr.push(bagOfFruits[index].replace('rotten', '').toLowerCase())
//     } else {
//       arr.push(bagOfFruits[index])
//     }

//   }

//   return arr;

// }

// console.log(removeRotten(["apple", "rottenBanana", "apple"]));
// console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]));
// console.log(removeRotten([]));



// function factorial(n) {

//   if (n === 0) return undefined


//   let result = 1;
//   for (let index = 2; index <= n; index++) {
//     result *= index;
//   }

//   return result

// }

// console.log(factorial(5));


// function sumOfMinimum(arr) {
//   let sum = 0
//   for (let index = 0; index < arr.length; index++) {
//     let min = arr[index].sort((a, b) => a - b)
//     sum += min[0];
//   }
//   return sum;
// }


// console.log(sumOfMinimum([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))



// function include(arr, item) {

//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === item) {
//       return true;
//     }
//   }

//   return false;

// }

// console.log(include([1, 2, 3, 4], 3));
// console.log(include([1, 2, 5, 4], 6));


// const min = function (list) {
//   let min = list.sort((a, b) => a - b)
//   return min[0]
// }

// const max = function (list) {
//   let max = list.sort((a, b) => b - a)
//   return max[0]
// }


// console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));



// function mango(quantity, price) {

//   let total = 0;
//   for (let index = 1; index <= quantity; index++) {


//     if (index % 3 !== 0) {
//       total += price
//     }

//   }
//   return total;
// }

// console.log(mango(9, 5));
// console.log(mango(3, 3));


// function calculate(string) {
//   const numbers = string.match(/\d+/g).map(Number);

//   if (string.includes('gains')) {
//     return numbers[0] + numbers[1];
//   } else if (string.includes('loses')) {
//     return numbers[0] - numbers[1];
//   }


// }

// console.log(calculate('Jerry has 34 apples and gains 6'));
// console.log(calculate('Panda has 48 apples and loses 4'));



// function removeBMW(str) {

//   if (typeof str === 'string') {
//     return str.replace(/[bmwBMW]/g, '')
//   } else {
//     return new Error("This program only works for text.");
//   }

// }

// console.log(removeBMW('brtmw'));
// console.log(removeBMW('BEREFMOPwrtmw'));



// function titleCase(title, minorWords) {
//   let arr = title.toLowerCase().split(' ')

//   let res = [];

//   let minorArray = minorWords.toLowerCase().split(' ')

//   for (let index = 0; index < arr.length; index++) {
//     if (index == 0) {
//       let firstItem = arr[index].slice(0, 1).toUpperCase() + arr[index].slice(1)
//       res.push(firstItem)
//     } else {
//       if (minorArray.includes(arr[index])) {
//         let nextItems = arr[index].toLowerCase()
//         res.push(nextItems)
//       } else {
//         nextItems = arr[index].slice(0, 1).toUpperCase() + arr[index].slice(1)
//         res.push(nextItems)
//       }
//     }
//   }

//   return res.join(' ')
// }

// console.log(titleCase('a clash of KINGS', 'a an the of'));
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));


// function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
//   let aging1 = age1 * age1
//   let aging2 = age2 * age2
//   let aging3 = age3 * age3
//   let aging4 = age4 * age4
//   let aging5 = age5 * age5
//   let aging6 = age6 * age6
//   let aging7 = age7 * age7
//   let aging8 = age8 * age8

//   let addition = aging1 + aging2 + aging3 + aging4 + aging5 + aging6 + aging7 + aging8

//   let sqrt = Math.sqrt(addition)

//   let result = sqrt / 2

//   return Math.floor(result)
// }

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

// // Take a list of ages when each of your great - grandparent died.
// // Multiply each number by itself.
// // Add them all together.
// // Take the square root of the result.
// // Divide by two.



// function whatListAmIOn(actions) {
//   let words = [];
//   for (index = 0; index < actions.length; index++) {
//     words.push(actions[index].slice(0, 1))
//   }

//   if (actions[0].startsWith(words)) {
//     return 'nice'
//   } else {
//     return 'bad'
//   }

// }


// console.log(whatListAmIOn(["broke someone's window", "fought over a toaster", "killed a bug"]));
// console.log(whatListAmIOn(["got someone a new car", "saved a man from drowning", "never got into a fight"]));



// function michaelPays(costs) {



//   if (costs < 5) {
//     return costs;
//   } else {
//     if ((1 / 3) * costs <= 10) {
//       return (2 / 3) * costs.toFixed(2)
//     } else {
//       return costs - 10;
//     }
//   }
// }

// console.log(michaelPays(80));
// console.log(michaelPays(4));




// function hasSubpattern(string) {
//   let arr = string.split('').reverse()

//   // return arr.length
//   // return string.split('')

//   let result = [];
//   let stringCount = 0;
//   for (let index = string.length; index >= arr.length - string.length; index--) {
//     if (arr[index] === string[stringCount]) {
//       result.push(true)
//     } else {
//       result.push(false)
//     }

//     stringCount++;

//     return result
//   }
// }


// console.log(hasSubpattern('abcd'));
// console.log(hasSubpattern('aaaa'));


// function comp(array1, array2) {

//   if (array1 === null || array2 === null) {
//     return false
//   }


//   let squared = []
//   for (let index = 0; index < array1.length; index++) {
//     squared.push(array1[index] * array1[index])
//   }

//   squared.sort((a, b) => a - b)
//   array2.sort((a, b) => a - b)

//   if (squared.join('') === array2.join('')) {
//     return true
//   } else {
//     return false
//   }
// }


// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [12 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]));



// function differenceInAges(ages) {
//   let array = ages.sort((a, b) => a - b)

//   return [array[0], array[array.length - 1], array[array.length - 1] - array[0]]

// }


// console.log(differenceInAges([82, 15, 6, 38, 35]))

// console.log(differenceInAges([57, 99, 14, 32]))



// function shortenToDate(longDate) {
//   let arr = longDate.split(' ')

//   let res = [];
//   for (let index = 0; index < arr.length - 1; index++) {
//     res.push(arr[index])
//   }
//   return res.join(' ').replaceAll(',', '')

// }

// console.log(shortenToDate("Friday May 2, 9am"));
// console.log(shortenToDate("Tuesday January 29, 10pm"));


// function sumOfDifferences(arr) {


//   let array = arr.sort((a, b) => b - a)

//   let sum = 0
//   for (let i = 0; i < array.length - 1; i++) {
//     sum += array[i] - array[i + 1]
//   }

//   return sum

// }

// console.log(sumOfDifferences([2, 1, 10]));


// function alphabetPosition(text) {
//   let arr = text.split('')

//   let res = []
//   for (let index = 0; index < arr.length; index++) {
//     res.push(charAt(arr[index]))
//   }

//   return res
// }

// console.log(alphabetPosition('Janani'));




function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / ((discount / 100) * normPrice));
}


console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
console.log(dutyFree(621, 12, 16350));
