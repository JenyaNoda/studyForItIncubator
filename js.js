// document.addEventListener('DOMContentLoaded', (event) => {
//     const resButton = document.getElementById("resButton");
//     resButton.addEventListener("click", () => {
//         var containerApp = document.getElementById("container-app");

//         let v = parseInt(document.getElementById("speed").value);
//         let s = parseInt(document.getElementById("distance").value);

//         if (v) {
//             let time = s/v;
//             containerApp.setHTML("Result:" + time);
//         }
//         else {
//             containerApp.setHTML("Error by devined by zero");
//         }
//     });
// });





// function ketchupTypes (username) {
//    return  username.filter(function(use){
//     return use.length < 10 
//   })
// }

// const myFavGames = ['Falloutfffffff 4', 'CallofDutyyyyyyyy', 'ApexLegendsssssss','kaasdf','werwe' ]
// function favGames (games) {
//    games.filter(function(game){
//      return game.length < 10
//    })
// } 
// const prices = [99.9,89.99,96.76]
// let total = 0;
// for (let price of prices) {
//    total += price
// }
// console.log(total)
// const total = prices.reduce((total, price) => {
//    return total + price 
// })

// const total = prices.reduce((total, price) => {
//    return total + price 
// }) 
// const minPrice = prices.reduce((min, price)=>{
//    if (price < min){
//       return price
//    } return min ;
// })
// const evens = [2,4,6,8];
// // evens.reduce((sum, num) => sum + num, 100)