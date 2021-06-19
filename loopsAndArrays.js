// /* Modify this "for" loop to go over the "Foods" array backwards.
// let foods = ["apple", "orange", "rice", "bread", "tofu"]
// for (let i = 0; i > foods.length; i++){
//     console.log()
// }
// Goals!
// Bronze
// Console logging each element of the array but backwards.
// Silver
// Bronze + console logging each element of the array with the first letter capitalized.
// Gold
// Bronze + Silver + Console log only the odd indexed elements
// Collapse
// */

// let foods = ["apple", "orange", "rice", "bread", "tofu"]
// // Bronze
// for (let i=foods.length; i>0; i--){
//     console.log(foods[i-1]); // i-1 because arrays start at 0 and the length is 5
// }

// //Silver
// for (let i=foods.length; i>0; i--){
//     // console.log(foods[i-1].charAt(0).toUpperCase() + foods[i-1].slice(1));
//     let newTitledFood = titleCase(foods[i-1]);
//     console.log(newTitledFood);
// }

// function titleCase(word) {
//     let firstLetter = word[0].toUpperCase();
//     let rest = word.slice(1);
//     let capWord = firstLetter + rest;
//     return capWord;
// }

// //Gold
// for (let i=foods.length; i>0; i--){
//     if (i % 2 === 0){
//         // console.log(foods[i-1].charAt(0).toUpperCase() + foods[i-1].slice(1));
//         let newTitledFood = titleCase(foods[i-1]);
//         console.log(newTitledFood);
// }}


// let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J", 5, 6, "A"]
// let faceCards = []
// let numberedCards = []

// Goals!
// Bronze
// Write a loop that uses array push to fill the face card & numbered card arrays. with elements from cards.

// for (i=0; i<cards.length; i++){
//     let type = cardType(cards[i]);
//     if (type == "string"){
//         faceCards.push(cards[i]);
//     }
//     else if (type == "number"){
//         numberedCards.push(cards[i]);
//     }
// }

// function cardType(card){
//     let value = typeof card;
//     return value;
    
// }

// console.log(cards);
// console.log(faceCards);
// console.log(numberedCards);
// Silver
// Bronze + also empty the cards array as you go, so in the end you should have an empty cards array and faceCards/numberedCards filled

// while (cards.length > 0) {
//     let type = cardType(cards[0]);
//     if (type == "string"){
//         faceCards.push(cards[0]);
//         cards.splice(0,1);
//     }
//     else if (type == "number"){
//         numberedCards.push(cards[0]);
//         cards.splice(0,1);
//     } 
// }
// function cardType(card){
//     let value = typeof card;
//     return value;  
// }

// console.log(cards);
// console.log(faceCards);
// console.log(numberedCards);
// Gold
// Bronze + Silver + Write a function that uses a switch to return the card type and use that in your code.

// while (cards.length > 0) {
//     let type = cardType(cards[0]);
//     if (type == "string"){
//         faceCards.push(cards[0]);
//         cards.splice(0,1);
//     }
//     else if (type == "number"){
//         numberedCards.push(cards[0]);
//         cards.splice(0,1);
//     } 
// }

// function cardType(card){
//     let value;
//     switch (typeof card) {
//         case "number":
//             value = "number";
//             break;
//         default:
//             value = "string";
//             break;
//     }
//     return value;  
// }

// console.log(cards);
// console.log(faceCards);
// console.log(numberedCards);