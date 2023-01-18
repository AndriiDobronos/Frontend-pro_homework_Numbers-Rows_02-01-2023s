"use strict";
//Отримати від користувача 3 рядки та вивести їх
//у довільному порядку однією командою (конкатенація);
const firstArray = prompt('Enter first row items for' +
    ' array separate them with a space').split(" ")
const secondArray = prompt('Enter second row items for' +
    ' array separate them with a space').split(" ")
const thirdArray = prompt('Enter third row items for' +
    ' array separate them with a space').split(" ")
const randomNum = Math.random()*6
let result
if (randomNum > 0 && randomNum < 1) {
    result = `${firstArray}\n ${secondArray}\n ${thirdArray}`
}
else if (randomNum > 1 && randomNum < 2) {
    result = `${secondArray}\n ${firstArray}\n ${thirdArray}`
}
else if(randomNum > 2 && randomNum < 3) {
    result = `${thirdArray}\n ${firstArray}\n ${secondArray}`
}
else if (randomNum > 3 && randomNum < 4) {
    result = `${firstArray}\n ${thirdArray}\n ${secondArray}`
}
else if (randomNum > 4 && randomNum < 5) {
    result = `${secondArray}\n ${thirdArray}\n ${firstArray}`
}
else {
    result = `${thirdArray}\n ${secondArray}\n ${firstArray}`
}
const definition = `Array of rows in random oder :\n`
alert(definition.concat(` ${result}`))
/**********************************************************/
//Розбити за цифрами п'ятизначне число і вивести
// у вихідному порядку через пробіл.
const nums = "12345"
const num = Array.from(nums)
const numSplit = num.join(' ')
alert(numSplit)



