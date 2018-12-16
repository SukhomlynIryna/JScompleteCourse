//spread operator es6

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);


//ES6
const max3 = addFourAges(...ages); //spread operator

console.log(max3);

const familySmith = ['John','Jane','Mark'];
const familyMiller = ['Mary','Bob'];

const bigFamily = [...familySmith,...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.backgroundColor = 'purple');

