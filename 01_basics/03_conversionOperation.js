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




let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)