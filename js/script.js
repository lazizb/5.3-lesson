// let son = 10;
// let sum = '';
// for (let i = 1; i < son; i++) {
//     for (let j = i; j < son; j++) {
//         sum += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         sum +='* ';
//     }
//     console.log(sum);
//     sum = '';
// }

// let son2 = 9;
// let sum2 = '';

// for (let i = 1; i < son2; i++) {
//     for (let j = 1; j <= i; j++) {
//         sum2 += ' '
//     }
//     for (let k = i; k < son2; k++) {
//         sum2 += ' *'
//     }
//     console.log(sum2);
//     sum2 = "";
// }

// "use strict";
// text();

// function text() {
//     console.log("salom");
// }


// declarition function
// let akbar = worderSalary('200$')
// let shodi = worderSalary('500$')
// let umar = worderSalary(800000000)
// console.log(akbar, shodi, umar);
// function worderSalary(salary) {
//     let tax = (salary / 100) * 16;
//     return tax;
// }









// expression function
// const updater = function() {console.log('salom');};
// updater();

// ES6 (chiziqli, arrow, strelochniy) arrow function 
// function calc() {
//     console.log('salom');
// }

// let calc = (a, b) =>  a+b
// let calc = a =>a;
// let calc = a =>{
//     console.log('adsasdsdasddsa');
//     return a;
// }
// console.log(calc());


// let add = (x, y) => x + y;
// let filter = (num) => num >= 0;
// let randown = () => Math.random();

// let h1 = document.querySelectorAll('.lazb')[0],
//     laz = document.querySelectorAll('.par')[0];

// h1.addEventListener('click', () => );



// console.log(Math.abs(''));




function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


let miniNum = +prompt('Minimum sonni kiriting')
let MaxiMum = +prompt('MaxiMum sonni kiriting')


for (let i = 0; i < 5; i++) {
    let num1 = random(miniNum, MaxiMum);
    let num2 = random(miniNum, MaxiMum);
        
    let pr = +prompt(num1 + " + " + num2 + " = ")
    let answers = (num1 + num2) == pr ? "togri": "xato"
    
    
    alert(num1  + " + " + num2 + " = " +(num1 + num2)+'Siznning javob' + pr + ', ' + answers)
}