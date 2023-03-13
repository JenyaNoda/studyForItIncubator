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

// let input = prompt("what you like to do?") 
// const todos = ['collect eggs','collect chicken']
// while (input !== "quit" && input !== 'q') {
//     if (input === 'list'){
//     console.log('*****')
//     for (i = 0; i < todos.length;i++){
//         console.log(`${i}:${todos[i]}`)
//     }
//     console.log('****')
// } else if (input === 'new'){
//     const newTodo = prompt ('Ok what is the new todo')
//     todos.push(newTodo)
//     console.log(`${newTodo}added to the list`) 
// } else if (input === 'delete'){
//     let indexStr = parseInt(prompt('Ok what we are going to delete'))
//     if(!Number.isNaN(index)){
// const deleted = todos.splice(deleteTodo,1)
// console.log(`okay deleted ${deleted}`) 
//     } else { console.log('Unknow index')
        
// } 
// input = prompt("what you like to do?") 
// }






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

// 
// function sing (arg){
//     console.log("I am a singer".toUpperCase())
// } 
// sing()
// function rant (message) {
//     message = ("I hate beets".toUpperCase())
//     console.log(message)
//     console.log(message)
//     console.log(message)
//    }
//    rant() 
// function gree(firstName, lastName){
//     console.log(`hey there, ${firstName} ${lastName[0]}`)
// }
// gree('Narnia', 'dwqdd')
// function repeat stuff
// function repeat(rep, fun) {
//     let result = ''
// for (let i = 0; i < fun;i++) {
//     result+=rep
    
// }
// console.log(result)   
// }
// function isSnakeEyes (num1,num2) {
//     if (num1 && num2 === 1){
//         console.log('Snake Eyes!')
//     } else if (num1 === 1 && num2 === 5) {
//                 console.log('Not Snake Eyes!')
//      } else { console.log('Not Snake Eyes!')
//         }
        
//     }
//     isSnakeEyes(1,5)
// function bringit (num1,num2) {
//     if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//         return false 
//     }
// 
// function multiply (num1,num2) {
//    let result = num1 * num2
//    console.log(result) 
//    return result;
// }
// multiply(2,3)
// multiply(9,9)
// multiply(5,4)

// function lastElement (arr) {
// let rtr = arr.slice(-1)
// return rtr || null
    
// }
// lastElement([3,5,7])
// lastElement([1]) 
// lastElement([])

// function lastElement (arr) {
//     if (arr.length === 0) {
//         console.log(arr)
//         return null;
    
//     } else  (arr.slice(-1))
// console.log(arr)
//  return arr
 
// }

// lastElement([3,5,7])
// lastElement([1]) 
// lastElement([]) 

// function lastElement (arr) {
//     if ( arr.lenght > 0) {
//         return arr
//     } 

//     }
//     lastElement([3,5,7])
//     lastElement([1]) 
//     lastElement([])
    
// function capitalize (arg) {
//     let big = 'Eggplant';
//     if (arg  === 'eggplant') {
//         console.log(big)
//    return big
// } else return arg
// }
// capitalize('eggplant') 
// capitalize('pamplemousse') 
// capitalize('squid')
// function capitalize (arg) {
//     return arg.charAt(0).toUpperCase() + arg.slice(1);
// }
// capitalize('eggplant') 
// capitalize('pamplemousse') 
// capitalize('squid')
// function sumArray (arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]  
//       console.log(total)
//         return total
//     }
// }
// sumArray([1,2,3]) 
// sumArray([2,2,2,2])
// sumArray([50,50,1])

// const greet = function () {
//     console.log("HI")
// }
// function callTwice (func){
//     func();
//     func();
// }
// function callTenTimes (f){
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }
//     function rollDies() {   
//         const roll = Math.floor(Math.random() * 6) + 1
        
//         console.log(roll)
//     }
//     callTenTimes(rollDies);

// function makeMysteryFunction () {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log('u win hehe')
//         }
//     } else  {
//         return function () {
//             alert ('eergeggrergg')
//         }
//     }
// }
// function numbetweeen (num) {
//      return num >= 50 && num <= 100 
// }
// function numbetweeen2 (num) {
//     return num >= 1 && num <= 10

// }
// function  makeBetweenFunc (min, max) {
//     return function (num) {
//         return num >= min && num <= max ;
//     }
   
// }
// const tot = function (num) {
//     return num >= min && num <= max ;
// }
// const math = { 
//     PI: 3.14159,
//     square: function (num) {
//         return num * num ;
//     },
//     cubre: function (num) {
//         return num ** 3;
//     }
// }

// const cat = {
//     name: 'Blue some',
//     color: 'grey', 
//     voice() {
//         console.log(`${this.name} says BLAAAAAAAAACKYYYY`)
// }
// }
//  const meow = cat.voice;

// const planets = {
//     planet1: 'Mercury',
//     planet2: 'Venus',
//     planet3: 'Eath',
//     planet4: 'Mars',
//     planet5: 'Jupiter',
//     plan () {
//         console.log(`im am going to ${this.planet3} any time soon`)
//     }

// }
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg (){
//         return `${this.eggCount + 1} "Eggs "`
//         }
//     }

//     hen.name 
// hen.eggCount 
// hen.layAnEgg() 
// hen.layAnEgg() 
// hen.eggCount 
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg (){
//         if (this.eggCount === 0){
//         return this.eggCount++ && "EGG"
//         }
//     }
// }
// hen.name 
// hen.eggCount 
// hen.layAnEgg() 
// hen.layAnEgg() 
// hen.eggCount 

///////////////

        // function  print (element) {
        //     console.log(element)
        // }
// print(numbers[1]);
// print(numbers[3])
// arry.forEach(function(el) {
//     console.log(el)

// }) 
// arry.forEach(function(el) {
//     if (el % 2) {
//         console.log(el)
//     }
// })
// 
// // movies.forEach(function(movie){
// //     console.log(`${movie.title} - ${movie.score}/100 `)
// // })
// const titles = movies.map(function(movie){
//     return movie.title
// })

// const arry = [1,2,3,4,5,6,6,7,8,8,8,8,9,9,0];
// const numbers = arry.map(function(arr){
//     return arr * 2;
// })



    
// const Dragonfly = [
// {
//     planet: 'Mercury',
//     distance: 150
// },
//  {
//     planet: "Venus",
//     distance: 130
//  }  
// ]
// const space = Dragonfly.map(function(dark){
//     return dark.planet
// })
// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];
// const add = (x,y) => {
//     return x * y;
// }
// add()

// let square = (x) => {
//     return x * x
// }
// square()

// const mas = [{
//     meta: "djad",
//     valu: 321
// }, 
// {
//     meta: "dadsa",
//     valu: 54
// }
// ]
// let tyu = mas.map(function(x){
//     return x.meta
// })

// const ketchup = (x,y) => {
//     return x + y;
// }
// const greet = (tin) => {
//     hey = 'Hey ' + tin + '!';
//     return hey
// };
// greet("Hagrid")  ;
// greet("Luna");
// const movies = [
//         {
//         title: "Spidae",
//         score: 92
//     },
//     {
//         title: 'The Lust of Us',
//         score: 100
    
//     },
//     {   title: 'Sky rocket',
//         score: 93
//     }
//     ]
//     // const newMovies = movies.map(function (movie){
//     //     return `${movie.title} - ${movie.score / 10}`

//     // })
//     const newMovies = movies.map(movie  => (
//         `${movie.title} - ${movie.score / 10}`
//     ))
// setTimeout(() => {
//     console.log('Hellllllooooooo')
// }, 3000)
// const id = setInterval(() => {
// console.log(Math.random())
// }, 1500)
// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// numbers.filter(n =>{
//     return n < 8
// })
// const bestAwards = [
//     {
//     GOTY: "The Lust of Us",
//     year: 2013,
//     mark: 10
// },
//   {  
//     GOTY: "Fallout 4",
//     year: 2016,
//     mark: 10
// },
// {   GOTY: "CyberPunk 2077",
//     year: 2020,
//     mark: 8
// },
// {   GOTY: "weghff",
//     year: 2020,
//     mark: 8
// },
// {   GOTY: "ewrew",
//     year: 2020,
//     mark: 8
// },
// {   GOTY: "The Elden Ring",
//     year: 2020,
//     mark: 9.2
// },
// {    GOTY: "Black ops 3",
//      year: 2016,
//      mark: 9
// }
// ]

// const goodGames = bestAwards.filter(m => m.mark >= 8.5) 
// const goodtitles = goodGames.map(m => m.GOTY)
// const badGames = bestAwards.filter(m => m.mark <= 8) 

// const recentgames = bestAwards.filter (m => m.year >= 2020 )

// bestAwards.filter(m => m.year >= 2010 && m.year < 2017).map(m => m.GOTY)

// const person = {
//     firstName: 'Call of Duty:', 
//     lastName: 'Modern Warfare',
//     fullName: function (){
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this.fullName())
//         },3000)
//     }
// }
// function rollDie(num = 6) {
//     return Math.floor(Math.random() * num) + 1
// }
// function greet (msg,person = 'Hey There') {
//     return `${msg}, ${person}`
// }
// const cats = ['Ben','Bob','tripl'];
// const dogs = ['bILL', 'Gerrard', 'Anonella']
// const allPets = [...cats,...dogs]
const feline = {legs: 4,family: 'Felidae'}
const canine = {ifFurry: true,family: 'Caninae'}