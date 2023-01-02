//Отримати від користувача 3 рядки та вивести їх
//у довільному порядку однією командою (конкатенація);
const firstArray = prompt('Enter first row items for' +
    ' array separate them with a space')
const secondArray = prompt('Enter second row items for' +
    ' array separate them with a space')
const thirdArray = prompt('Enter third row items for' +
    ' array separate them with a space')
const allArray = Array.from(firstArray + secondArray + thirdArray)
function randomFirst() {
    let randomNum = Math.random()
return randomNum > 0.6666 ? 0 : randomNum < 0.3333 ? 1 : 2
}
function randomSecond() {
    let randomNumSecond = Math.random()
    return randomNumSecond > 0.5 ? -1 : 1
}
let k = randomFirst()
let c = randomSecond()
let j
(k === 2 && c === 1) ||
(k === 1 && c === -1) ? j = 0 :
(k === 2 && c === -1) ||
(k === 0 && c === 1) ? j = 1 : j = 2

let i
k !== 0 && j !== 0 ? i = 0 : k !== 1 && j !== 1 ? i = 1 : i = 2
alert(`Random oder of row output :${k}  ${j}  ${i}`)
let result
    if (k === 0 && j === 1 && i === 2) {
        result = `${firstArray}\n ${secondArray}\n ${thirdArray}`
    }
    else if (j === 0 && k === 1  && i === 2) {
        result = `${secondArray}\n ${firstArray}\n ${thirdArray}`
    }
    else if(i === 0 && k === 1 && j === 2) {
        result = `${thirdArray}\n ${firstArray}\n ${secondArray}`
    }
    else if (k === 0 && i === 1 && j === 2) {
        result = `${firstArray}\n ${thirdArray}\n ${secondArray}`
    }
    else if (j === 0 && i === 1  && k === 2) {
        result = `${secondArray}\n ${thirdArray}\n ${firstArray}`
    }
    else {
        result = `${thirdArray}\n ${secondArray}\n ${firstArray}`
    }
alert(`Array of rows in random oder : ${result}`)

/**********************************************************/
//Розбити за цифрами п'ятизначне число і вивести
// у вихідному порядку через пробіл.
const nums = "12345"
const num = Array.from(nums)
const numSplit = num.join(' ')
alert(numSplit)



