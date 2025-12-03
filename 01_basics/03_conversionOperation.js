let score = "33abc"
// console.log(typeof score);  // number
// console.log(typeof (score));  // number

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);  // number
// console.log((valueInNumber));  // NaN - Not a Number

/*
    On conversion of variable 'score' -
        "33" => 33
        "33asd" => NaN
        "hitesh" => NaN
        null => 0
        undefined => NaN
        true => 1
        false => 0
*/




// --------------------------------------------------

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)  // true
// console.log(typeof booleanIsLoggedIn)  // boolean

/*
    On conversion of variable 'isLoggedIn' -
        1 => true
        0 => false
        "" => false
        "js" => true
*/




// --------------------------------------------------

let someNumber = true
let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber)  // 33
// console.log(typeof stringSomeNumber)  // string

/*
    On conversion of variable 'someNumber' -
        null => null
        undefined => undefined
        33 => "33"
        true => "true"
        false => "false"
*/







// ********************************** OPERATIONS **********************************
let val = 3
let negVal = -val  // -ve value
// console.log(negVal)

// console.log(2 + 2);  // addition
// console.log(2 - 2);  // subtraction
// console.log(2 * 2);  // multiplication
// console.log(2 / 2);  // division
// console.log(2 % 2);  // modulo
// console.log(2 ** 2);  // exponential


let str1 = "hello"
let str2 = " js"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2)  // 12
// console.log(1 + "2")  // 12
// console.log("1" + 2 + 2)  // 122
// console.log(1 + 2 + "2")  // 32

let gameCounter = 4
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);
