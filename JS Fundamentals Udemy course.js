'use strict';
// let hasDriverlicense = false;
// const passTest = true;

// if(passTest) hasDriverlicense = true;
// if (hasDriverlicense) 
// console.log('i can drive')

// FUNCTIONS STUDY 

// function logger(){
//     console.log('My name is jenia')
// }
// logger();
// function fruitProccesor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return  juice;
// }
// const appleJuice = fruitProccesor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProccesor(2, 4) 
// console.log(appleOrangeJuice)
   //   function calcAge1(birthYear) {
   //      return 2037 - birthYear
   //   }
   //   const age1 = calcAge1(1997); 
   //   console.log(age1); 

   //   const calcAge2 = function(birthYear) {
   //      return 2037 - birthYear;
   //   }
   //   const age2 = calcAge2(2004)
   //   console.log(age1, age2); 
     // arrow function 
     birthYear => 2037 - birthYear
     const calcAge3 = birthYear => 2037 - birthYear
     const age3 = calcAge3(2037)
     console.log(age3)
     const yearUntilRetirement = (birthYear, firstName) => {
      const age = 2023 - birthYear
      const retirementAge = 65 - age
      // return retirement
      return `${firstName} retires in ${retirementAge} years`
     }
    console.log(yearUntilRetirement(1997, 'Jenia')) 
    console.log(yearUntilRetirement(1978, 'Viktoria')) 