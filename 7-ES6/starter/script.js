////spread operator es6
//
//function addFourAges(a, b, c, d) {
//    return a + b + c + d;
//}
//
//var sum1 = addFourAges(18, 30, 12, 21);
//console.log(sum1);
//
//var ages = [18, 30, 12, 21];
//var sum2 = addFourAges.apply(null, ages);
//console.log(sum2);
//
//
////ES6
//const max3 = addFourAges(...ages); //spread operator
//
//console.log(max3);
//
//const familySmith = ['John', 'Jane', 'Mark'];
//const familyMiller = ['Mary', 'Bob'];
//
//const bigFamily = [...familySmith, ...familyMiller];
//console.log(bigFamily);
//
//const h = document.querySelector('h1');
//const boxes = document.querySelectorAll('.box');
//
//const all = [h, ...boxes];
//console.log(all);
//
//Array.from(all).forEach(cur => cur.style.backgroundColor = 'purple');
//
////rest parameters
//
////function isFullAge5() {
////    console.log(arguments);
////    var argsArr = Array.prototype.slice.call(arguments);
////
////    argsArr.forEach(function (cur) {
////        console.log((2016 - cur) >= 18);
////    })
////}
////
////isFullAge(1990, 1999, 1965);
//
//
////es6
//
//function isFullAge(...years) {
//    years.forEach(cur => console.log((2016 - cur) >= 18));
//}
//
//isFullAge(1990, 1999, 1965);
//
//
//
//
////default parameters
//
////es5
////function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
////    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
////
////    nationality === undefined ? nationality = 'amerecan' : nationality = nationality;
////
////    this.firstName = firstName;
////    this.yearOfBirth = yearOfBirth;
////    this.lastName = lastName;
////    this.nationality = nationality;
////}
////
////var john = new SmithPerson('John', 1990);
//
//
////es6
//
//function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//    this.firstName = firstName;
//    this.yearOfBirth = yearOfBirth;
//    this.lastName = lastName;
//    this.nationality = nationality;
//}
//
//var john = new SmithPerson('John', 1990);
//
//
//
////map 
//
//const question = new Map();
//
//question.set('question', 'What is the official name of the lates major JS version?');
//question.set(1, 'ES5');
//question.set(2, 'ES6');
//question.set(3, 'ES2015');
//question.set(4, 'ES7');
//question.set('correct', 3);
//question.set(true, 'Correct answer: D');
//question.set(false, 'Wrong,please try again!');
//
//console.log(question.get('question'));
//console.log(question.size);
//
//if (question.has(4)) {
//    //    question.delete(4);
//    console.log('Answer 4 is here');
//}
//
////question.clear();
//
////question.forEach((value, key) => console.log(`this is ${key} nad it's set to ${value}`));
//
//for (let [key, value] of question.entries()) {
//
//    if (typeof (key) === 'number') {
//        console.log(`Answer ${key}: ${value}`);
//    }
//    //    console.log(`this is ${key} nad it's set to ${value}`);
//}
//
//const ans = parseInt(prompt('Write the correct answer:'));
//
//console.log(question.get(ans === question.get('correct')));
//
//
//
// coding challenge
//
//Suppose that you're working in a small town administration, and you're in charge of two town elements:
//1. Parks
//2. Streets
//
//It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (forumla: number of trees/park area)
//2. Average age of each town's park (forumla: sum of all ages/number of parks)
//3. The name of the park that has more than 1000 trees
//4. Total and average length of the town's streets
//5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
//
//All the report data should be printed to the console.
//
//HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per squarekm.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, lengh, size = 3) {
        super(name, buildYear);
        this.length = lengh;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)}street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('--------Parks report---------');

    //density
    p.forEach(el => el.treeDensity());

    //average age
    const ages = p.map(el => 2018 - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avgAge} years`);

    //which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i]}.name} has more than 1000 trees`);
}

function reportStreets(s) {
    console.log('--------Strees report---------');

    const [totalLenght, avgLengh] = calc(s.map(el => el.length));

    s.forEach(el => el.classifyStreet());
}


reportParks(allParks);
reportStreets(allStreets);
