// alert("Hello all")

// let js = "amazing"

// if (js === 'amazing' ) alert('JS is fun')
/*
console.log(40+8+6+52)
let firstName = "Asif"
let lastName = "Anam"

console.log(firstName + " "+ lastName)

console.log(firstName)
console.log(lastName)
console.log("hello")

//Assignment- values and variables

const country = "Bangladesh";
const continent = "Asia"
const population = 1000000
console.log(country+ " | "+ continent + " | Population: "+ population)

let isJavascriptIsFun = true
console.log(isJavascriptIsFun)
console.log(typeof(isJavascriptIsFun))*/

/*
//coding challenge 1

const markWeight = 95
const johnWeight = 85

const markHeight = 1.88
const johnHeight = 1.76

let marksBmi = bmi(markWeight, markHeight)

console.log(marksBmi)

let johnBmi = bmi(johnWeight, johnHeight)
console.log(johnBmi) 

let markHigherBmi = marksBmi> johnBmi

if(markHigherBmi){
    console.log(`Mark's BMI(${marksBmi}) is higher than John's BMI(${johnBmi})`)

}
else{
    console.log(`John's BMI(${johnBmi}) is higher than Mark's BMI(${marksBmi})`)
}


function bmi(weight, height){
    _bmi = weight/(height*height)

    return _bmi
}
*/
/*
const firstName = 'John'
const lastName = 'Snow'
const job = 'Instructor'
const birthYear = 1991
let year = 2023

const bio = `Hello, I'm ${firstName} ${lastName}. I am a ${year - birthYear} old ${job}.`

console.log(bio)
*/
/*
const age = 12
const isOldEnough = age >=18
if(isOldEnough){
    console.log('you can get a driving license! 🚗')
}
else{
    let yearsLeft = 18- age
    console.log(`you need to wait ${yearsLeft} year(s) for the driving license! `)
}*/
/*
//----type conversion---------
const inputYear = '1999'
let year = 2023
console.log(year - Number(inputYear))
console.log(Number(inputYear)+ 18)
*/


/*
//Challenge ------------------------------


const dolphineScore1 = 96
const dolphineScore2 = 99
const dolphineScore3 = 89

const koalasScore1 = 88
const koalasScore2 = 91
const koalasScore3 = 102

const dolphineAvgScore = avgScore(dolphineScore1,dolphineScore2, dolphineScore3)

console.log('dolphine avg '+ dolphineAvgScore)

const koalaAvgScore = avgScore(koalasScore1, koalasScore2, koalasScore3)
console.log('koala avg '+ koalaAvgScore)


const dolphineHas100 = mark100(dolphineScore1,dolphineScore2, dolphineScore3)
const koalaHas100 = mark100(koalasScore1, koalasScore2, koalasScore3)

if((dolphineAvgScore>koalaAvgScore) && dolphineHas100 ){
    console.log("Dolphines win!")
}
else if((koalaAvgScore>dolphineAvgScore) && koalaHas100){
    console.log("Koalas win!")
}
else if((dolphineAvgScore === koalaAvgScore)&& dolphineHas100){
    console.log("Dolphines win!")
}
else if((dolphineAvgScore === koalaAvgScore)&& koalaHas100){
    console.log("Koalas win!")
}
else{
    console.log('Match draw!!')
}

function avgScore(score1, score2, score3){
    let avg = (score1+score2+score3)/3

    

    return avg
}
function mark100(score1, score2, score3){
    let score = score1>100 || score2> 100 || score3>100
    return score
}
*/

// let x = Number(prompt('enter a number'))
// let operator = prompt("Enter the operation'+,-,*,/'")
// let y = Number(prompt('enter another number'))
/*
const x = 10
const y = 20
let operator = '+'
let result
switch(operator){
    case '+':
        console.log('Adddition operation')
        result = x+y
        console.log(result)
        break

    case '-':
        console.log('Subtraction operation')
        result = x-y
        console.log(result)
        break

    case '*':
        console.log('Multiplication operation')
        result = x*y
        console.log(result)
        break
    case '/':
        console.log('Division operation')
        result = x/y
        console.log(result)
        break

    default:
        console.log('Invalid operation')
}
*/
