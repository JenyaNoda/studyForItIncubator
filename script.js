'use strict';
// let hasDriverlicense = false;
// const passTest = true;

// if(passTest) hasDriverlicense = true;
// if (hasDriverlicense) 
// console.log('i can drive')

// FUNCTIONS STUDY 
function logger(){
    console.log('My name is jenia')
}
logger();
function fruitProccesor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return  juice;
}
const appleJuice = fruitProccesor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProccesor(2, 4) 
console.log(appleOrangeJuice)
    
