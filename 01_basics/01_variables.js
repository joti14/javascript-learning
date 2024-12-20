const accountId = 20051729
let accountEmail = "joti@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka"
let accountState;

//accountId = 23 // not allowed to change
/*
prefer not to use var, because of issue in scope and functional scope
*/
accountEmail = "hasnahena@gmail.com"
accountPassword = "2323232"
accountCity = "Cumilla"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])