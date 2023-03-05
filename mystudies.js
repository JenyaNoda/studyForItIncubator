// const planet = {
//     plsnet: 'Venus',
//     atmosphere: ' is actually bad',
//     medium: '453 c'
// }
// const planet1 = `${planet.plsnet}, ${planet.atmosphere}, ${planet.medium}`
// console.log(planet1)
// const comments = [{
// username: 'Tammy',
// text: 'lololool',
// votes: 9},
// {
//     username: 'Fishboi', 
//     text: 'glub glub',
//     votes: 12387
// }

// ]
// for (let i = 1; i <= 10;i++) {
//     console.log(i)
// }
// for (let i = 0; i <= 20;i+=2){ 
//     console.log(i)

// } for (let j = 20; j >= 0;j-=2){ 
//     console.log(j)
// }
//  const animals = [
//     "Aardvark",
//     "Albatross",
//     "Alligator",
//     "Alpaca",
//     "Ant",
//     "Anteater",
//     "Antelope",
//     "Ape",
//     "Armadillo",
//     "Donkey",
//     "Baboon",
//     "Badger",
//     "Barracuda",
//     "Bat",
//     "Bear",
//     "Beaver",
//     "Bee",
//     "Bison",
//     "Boar",
//     "Buffalo",
//     "Butterfly",
//     "Camel",
//     "Capybara",
//     "Caribou",
//     "Cassowary",
//     "Cat",
//     "Caterpillar",
//     "Cattle",
//     "Chamois",
//     "Cheetah",
//     "Chicken",
//     "Chimpanzee",
//     "Chinchilla",
//     "Chough",
//     "Clam",
//     "Cobra",
//     "Cockroach",
//     "Cod",
//     "Cormorant",
//     "Coyote",
//     "Crab",
//     "Crane",
//     "Crocodile",
//     "Crow",
//     "Curlew",
//     "Deer",
//     "Dinosaur",
//     "Dog",
//     "Dogfish",
//     "Dolphin",
//     "Dotterel",
//     "Dove",
//     "Dragonfly",
//     "Duck",
//     "Dugong",
//     "Dunlin"
//  ] 
//  for (let i = 0; i < animals.length;i++) {
//     console.log(animals[i])
// toUpper = function(x){ 
//     return x.toUpperCase();
//   };
//   array2 = array2.map(toUpper);
//  for (let i = animals.length - 1;i >= 0;i--) {
//     console.log(animals.toUpper([i]))
//  }
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 


// function countPeople(arr) {
//     newarray = [];
//     for (let i = 0; i < arr.length; i++) {
      
//       newarray.push(arr[i].toUpperCase());
//     }
//     return newarray;
//   };
//   console.log(countPeople(people))
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 
// for (let i = 0; i < people.length;i++) {
//     console.log(people[0])
// for (let i = 0; i <= 10;i++){
//     console.log(`i is ${i}`)
//     for (let j = 1; j < 4 ;)
// } 
// for (let i = 0; i < 10; i++){
//     console.log(`i is ${i}`)
//     for (let j = 0 ; j <= 3;j++) {
//         console.log(`           it is ${j}`)
//     }
// }
// const seatingChart = [
//     ['Rohan', 'Ritik', 'perty'],
//     [23, 20],
//     ['Lucknow, Delhi, Jaipur']
// ] 
// for (let i = 0; i < seatingChart.length;i++) {
//     const row = (seatingChart[i])
//     console.log(`Row3${i + 1}`)
//     for (let j = 0; j < row.length;j++){
//         console.log(row[j])
//     }
// }
// let count = 0 
// while (count < 10) {
//     console.log(count)
//     count++
// }
// const secretCode = "Baby"
// let guess = prompt('password please')
// while (guess !== secretCode) {
//     guess = prompt ('enter the password')
    
// }
// console.log('Password in incorrect')
// let input = prompt('heyyyyy')
// while (true) {
// input = prompt(input)
// if (input.toLowerCase() === "stop copying me") break;
// }
// console.log('Gosh you won')
// for (let i = 0; i < 100;i++) {
//     console.log(i)
//     if(i === 50) break;
// }

// loop game
// let maximum = parseInt(prompt('Enter the maximum number!'))
// while (!maximum){
//     maximum = parseInt(prompt('Enter the valid number')) 
// }
// const targetNum = Math.floor (Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter you first guess"));
// let attemps = 1;
// while (parseInt(guess) !== targetNum) {
//     if(guess === 'q') break;
//     attemps++
//     if (guess > targetNum){
//         guess = prompt('Too high! Please enter a new guess');
//          } else {
//         guess = prompt("Too low, enter a new guess please");
        
//     }
    

// }
// if(guess === 'q') {     
//     console.log('OK')

// } else {
//     console.log('okay u win')
//     console.log(`You got it it took you ${attemps} guesses`)
// }

// const subredits = ['cringe', 'books', 'chickens', 'funny']
// for (let i = 0; i < subredits.length;i++) {
// console.log(`Visit reddit ${subredits[i]}`)
// }
// for (let sub of subredits) {
//     console.log(`Visit reddit ${subredits}`)
// }
// const seatingChart = [
//         ['Rohan', 'Ritik', 'perty'],
//         [23, 20],
//         ['Lucknow, Delhi, Jaipur']
//     ] 
//     for (let i = 0; i < seatingChart.length;i++) {
//         const row = (seatingChart[i])
//         console.log(`Row3${i + 1}`)
//         for (let j = 0; j < row.length;j++){
//             console.log(row[j])
//         }
//     } 
//     for (let row of seatingChart) {
//         for (let student of row){
//             console.log(student)
//         }
//     }
// for (let char of "*****") {
//     console.log(char)
// }
// const numbers = [1,2,3,4,5,6,7,8,9]; 


// for (let num of numbers) {
//     console.log(num * num)
// }
// const testScores = {
//     keenan: 90,
//     keeiu: 21,
//     fgew: 35
// }
// for ( let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// } 

let input = prompt("what you like to do?") 
const todos = ['collect eggs','collect chicken']
while (input !== "quit" && input !== 'q') {
    if (input === 'list'){
    console.log('*****')
    for (i = 0; i < todos.length;i++){
        console.log(`${i}:${todos[i]}`)
    }
    console.log('****')
} else if (input === 'new'){
    const newTodo = prompt ('Ok what is the new todo')
    todos.push(newTodo)
    console.log(`${newTodo}added to the list`) 
} else if (input === 'delete'){
    let indexStr = parseInt(prompt('Ok what we are going to delete'))
    if(!Number.isNaN(index)){
const deleted = todos.splice(deleteTodo,1)
console.log(`okay deleted ${deleted}`) 
    } else { console.log('Unknow index')
        
} 
input = prompt("what you like to do?") 
}






// let maximum = parseInt(prompt('Enter the maximum number!'))
// while (!maximum){
//     maximum = parseInt(prompt('Enter the valid number')) 
// }
// const targetNum = Math.floor (Math.random() * maximum) + 1;
// console.log(targetNum)

// let guess = parseInt(prompt("Enter you first guess"));
// let attemps = 1;
// while (parseInt(guess) !== targetNum) {
//     if(guess === 'q') break;
//     attemps++
//     if (guess > targetNum){
//         guess = prompt('Too high! Please enter a new guess');
//          } else {
//         guess = prompt("Too low, enter a new guess please");
        
//     }
    

// }
// if(guess === 'q') {     
//     console.log('OK')

// } else {
//     console.log('okay u win')
//     console.log(`You got it it took you ${attemps} guesses`)
// }