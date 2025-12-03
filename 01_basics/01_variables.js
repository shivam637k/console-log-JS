/*
    const - value once declared, can't be modified
    let - declares variables; value once declared, can be modified
    var - (DON'T USE) declares variables, issues in block & functional scopes
*/

const accountId = 144553
let accountEmail = "js@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;    // returns 'undefined'



// accountId = 2    // const can't be modified
accountEmail = "javascript@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])