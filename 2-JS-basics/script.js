//var firstName = 'john';
//var age = 28;
//
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'teacher';
//isMarried = false;
//
//console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//age = 'twenty eight';
//job = 'driver';
//alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
//var lastName = prompt('what is his last Name ?');
//console.log(firstName + ' ' + lastName);


/**************************************
 * Basic operators
 */
//var year, yearJohn, yearMark;
//now = 2018
//ageJohn = 28;
//ageMark = 33;
//
////math operators
//yearJohn = now - ageJohn;
//yearMark = now - ageMark;
//
//console.log(yearJohn);
//console.log(now + 2);
//console.log(now * 2);
//console.log(now / 10);
//
////logical operators
//var johnOlder = ageJohn > ageMark;
//console.log(johnOlder);
//
////typeof operator
//console.log(typeof johnOlder);
// 

//Operator precedence

//var now = 2018;
//var yearJohn = 1989;
//var fullAge = 18;
//
//var ifFullAge = now - yearJohn >= fullAge;
//console.log(ifFullAge);
//
//var ageJohn = now - yearJohn;
//var ageark = 35;
//var average = (ageJohn + ageMark)/2;
//console.log(average);
//
//// multiple assignments
//
//var x, y;
//x = y = (3 + 5) * 4 - 6; // assigments from the right to the left
//console.log(x, y);
//
////more operators
//// x = x * 2;
//x *= 2;
//y += 10;
//console.log(x, y);
//
//x = x + 1;
//x++;


/********code challange 1****************/

//var massJohn, massMark;
//var heightJohn, heghtMark;
//
//massJohn = 65;
//massMark = 70;
//heightJohn = 1.75;
//heightMark = 1.8;
//
//function calcBMI(mass, height) {
//    var mass = mass;
//    var height = height;
//    var bmi = mass/(height*height);
//    return bmi;
//}
//
//var bmiJohn = calcBMI(massJohn, heightJohn);
//console.log('John bmi: ' + bmiJohn);
//
//var bmiMark = calcBMI(massMark, heightMark);
//console.log('Mark bmi: ' + bmiMark);
//
//var isMarkHigher;
//isMarkHigher = bmiMark >= bmiJohn;
//console.log('Is Mark\'s bmi higher than Johns\'? ' + isMarkHigher);

/****************************************/
// if /  else statements

//var firstName = 'John';
//var civilStatus = 'single';
//
//if (civilStatus === 'married') {
//    console.log(firstName + ' is married!');
//} else {
//    console.log(firstName + ' will hopefully marry soon ;)');
//}
//
//massJohn = 65;
//massMark = 70;
//heightJohn = 1.75;
//heightMark = 1.8;
//
//function calcBMI(mass, height) {
//    var mass = mass;
//    var height = height;
//    var bmi = mass / (height * height);
//    return bmi;
//}
//
//var bmiJohn = calcBMI(massJohn, heightJohn);
//console.log('John bmi: ' + bmiJohn);
//
//var bmiMark = calcBMI(massMark, heightMark);
//console.log('Mark bmi: ' + bmiMark);
//
//if (bmiMark > bmiJohn) {
//    console.log('Mark\'s bmi higher than Johns\'s');
//} else {
//    console.log('John\'s bmi higher than Mark\'s');
//}

/****************************************/
//Boolean logic

//var firstName = 'John';
//var age = 16;
//
//if (age < 13) {
//    console.log(firstName + ' is a boy');
//} else if (age >= 13 && age < 20) {
//    console.log(firstName + ' is a teenager');
//} else {
//    console.log(firstName + ' is a man');
//}

/****************************************/
// the ternary Operator and switch statements

//var firstName = 'John';
//var age = 16;
//
//age >= 18 ? console.log(firstName + 'drinks beer') : console.log(firstName + 'drinks juice');
//
//var drink = age >= 18 ? 'beer' : 'juice';
//console.log(drink);
//
//if (age >= 18) {
//    var drink = 'beer';
//} else {
//    var drink = 'juice';
//}

//var job ='instractor';
//switch(job){
//    case 'teacher':
//    case 'instractor':
//        console.log(firstName + ' teaches kids how to code');
//        break;
//    case 'driver':
//        console.log(firstName + ' drives an uber in Lisbon');
//        break
//    case 'designer':
//        console.log(firstName + ' designs beautiful websites');
//        break;
//    default:
//        console.log(firstName + ' does something else');
//}
//
//var firstName = 'John';
//var age = 16;
//
//switch(true){
//    case age < 13:
//        console.log(firstName + ' is a boy');
//        break;
//    case age >= 13 && age < 20:
//        console.log(firstName + ' is a teenager');
//        break;
//    case age>= 20 && age <= 30:
//        console.log(firstName + ' is a young man');
//        break;
//    default:
//        console.log(firstName + ' ia a man');
//}

//*************************************
// Truthy and falsy values

// falsy: undefined, null, 0 , '', Nan
// truthy: NOT falsy values

//var height = 0;
//
//if (height || height === 0) {
//    console.log('Variable is defined');
//} else {
//    console.log('Variable hasn\'t been defined')
//};
//
//// equality operators
//
//if (height === '23') {
//    console.log('The == operator does type coersion!');
//}

//***************************************
// coding challenge 2

//var firstJohnGameScore = 89;
//var secondJohnGameScore = 120;
//var thirdJohnGameScore = 103;
//
//var firstMikeGameScore = 116;
//var secondMikeGameScore = 94;
//var thirdMikeGameScore = 123;
//
//var firstMaryGameScore = 97;
//var secondMaryGameScore = 134;
//var thirdMaryGameScore = 105;
//
//
//function calcAverageScore(s1, s2, s3) {
//    var result = (s1 + s2 + s3)/3 ;
//    return result;
//}
//
//var averageJohnTeamScore = calcAverageScore(firstJohnGameScore, secondJohnGameScore, thirdJohnGameScore);
//console.log('Average John\'s team score: ' + averageJohnTeamScore);
//
//var averageMikeTeamScore = calcAverageScore(firstMikeGameScore, secondMikeGameScore, thirdMikeGameScore);
//console.log('Average Mike\'s team score: ' + averageMikeTeamScore);
//
//var averageMaryTeamScore = calcAverageScore(firstMaryGameScore, secondMaryGameScore, thirdMaryGameScore);
//console.log('Average Mary\'s team score: ' + averageMaryTeamScore);
//
//
//switch (true) {
//    case averageJohnTeamScore > averageMikeTeamScore && averageJohnTeamScore > averageMaryTeamScore:
//        console.log('John\'s team wins in average with score: ' + averageJohnTeamScore);
//        break;
//    case (averageMaryTeamScore > averageMikeTeamScore &&
//         averageMaryTeamScore > averageJohnTeamScore):
//        console.log('Marie\'s team wins in average with score: ' + averageMaryTeamScore);
//        break;
//    case (averageMikeTeamScore > averageJohnTeamScore &&
//         averageMikeTeamScore > averageMaryTeamScore):
//        console.log('Mike\'s team wins in average with score: ' + averageMikeTeamScore);
//        break;
//    default:
//        console.log('There is a draw');
//}

//********************************
//functions statements ans expressions

//function declaration
//function whatDoYOuDo (job, firstName){}

//function expression
//var whatDoYouDo = function (job, firstName) {
//    switch(job) {
//            case 'teacher':
//            return firstName + ' teaches how to code'; //immediately finishes the function, no break needed
//        case 'driver':
//            return firstName + ' dvires uber in Lisbon';
//        default:
//            return firstName + ' does something else';
//    }        
//}
//
//console.log(whatDoYouDo('teacher','John'));

//*******************************************
//arrays//
//initialize new array
//var names = ['John', 'Mark', "Jane"];
//var years = new Array(1990, 1969, 1948);
//
//console.log(names.length);
//
//names[1] = 'Ben';
//names[names.length] = 'Mary';
//console.log(names);

//different data types

//var john = ['John', 'Smith', 1990, 'designer', false];
//
//john.push('blue'); //add element to the end of array
//john.unshift('Mr.'); // add element to the begining of array
//john.pop(); //removes element from the end
//john.shift(); //removes element from the start 
//
//console.log(john.indexOf(1990)); //returns elements position in the array, othervise it returns -1;
//
//var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a disagner';
//console.log(isDesigner);

//***********************************
// coding challenge 3

//var bills = [124, 48, 268];
//var tips = [];
//var total = [];
//var calculatedTips = function (bill) {
//    if (bills[i] < 50) {
//        return Math.round(bills[i] * 0.2);
//    } else if (bills[i] >= 50 && bills[i] < 200) {
//        return Math.round(bills[i] * 0.15);
//    } else {
//        return Math.round(bills[i] * 0.1);
//    }
//}
//
//for (var i = 0; i < bills.length; i++) {
//    tips.push(calculatedTips(bills[i]));
//    total.push(bills[i] + tips[i]);
//}
//console.log(tips, total);

//**********************************************
// Objects and properties

//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false
//};
//
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'birthYear';
//console.log(john[x]);
//
//john.job = 'designer';
//john['isMarried'] = true;
//console.log(john);
//
//// new Objects syntax
//var jane = new Object();
//jane.name = 'Jane';
//jane.birthYear = 1969;
//jane['lastName'] = 'Smith';
//console.log(jane);

//*******************************************
// Objects and methods
//var john = {
//    firstName: 'John',
//    lastName: 'Smith',
//    birthYear: 1990,
//    family: ['Jane', 'Mark', 'Bob', 'Emily'],
//    job: 'teacher',
//    isMarried: false,
//    calcAge: function () {
//        john.age = 2018 - this.birthYear;
//    }
//};

//john.calcAge();
//console.log(john);
//*********************************************
// coding challenge 4
//var john = {
//    firstName: "John",
//    mass: 89,
//    height: 1.9,
//    calcBMI: function () {
//        john.bmi = Math.round(this.mass / (this.height * this.height));
//        return this.bmi;
//    }
//}
//
//var mark = {
//    firstName: "Mark",
//    mass: 73,
//    height: 1.85,
//    calcBMI: function () {
//        mark.bmi = Math.round(this.mass / (this.height * this.height));
//        return this.bmi;
//    }
//}
//
//console.log('John: ' + john.calcBMI());
//console.log('Mark: ' + mark.calcBMI());
//
//
//if (john.calcBMI() > mark.calcBMI()) {
//    console.log(john.firstName + ' has a highest BMI - ' + john.bmi);
//} else if (john.bmi === mark.bmi {
//        console.log(john.firstName + ' has the same BMI as ' + mark.firstName);
//    } else {
//        console.log(mark.firstName + 'has a highest BMI - ');
//    }

//**********************************************
//Loops

//var john = [1, 2, 3, 4, 5];
//for (var i = 0; i < N; i++) {
//    console.log(i);
//}
//
//var i = 0;
//while (i < john.lengh) {
//    console.log(john[i]);
//    i++;
//}

//continue and break statements
//var john = [1, '2', '3', 4, 5];
//for (var i = 0; i < john.length; i++) {
//    if (typeof john[i] !== 'string') continue;
//    console.log(john[i]);
//}
//
//for (var i = 0; i < john.length; i++) {
//    if (typeof john[i] !== 'string') break;
//    console.log(john[i]);
//}

//******************************************************
// Coding challenge 5 

//johnRest = {
//    fullName: 'John Smith',
//    bills: [124, 48, 468, 180, 42],
//    tips: [],
//    finalAmount: [],
//    calcTips: function () {
//        for (var i = 0; i < this.bills.length; i++) {
//            var bill = this.bills[i];
//            if (bill < 50) {
//                this.tips.push(Math.round(bill * 0.2));
//                this.finalAmount.push(Math.round(this.tips[i] + bill));
//            } else if (bill > 200) {
//                this.tips.push(Math.round(bill * 0.1));
//                this.finalAmount.push(Math.round(this.tips[i] + bill));
//            } else {
//                this.tips.push(Math.round(bill * 0.15));
//                this.finalAmount.push(Math.round(this.tips[i] + bill));
//            }
//        }
//
//    }
//}
//
//averageTip = function (tips) {
//    var sum = 0;
//    for (var i = 0; i < tips.length; i++) {
//        sum = sum + tips[i];
//    }
//    return sum / tips.length;
//}
//
//
//johnRest.calcTips();
//console.log(johnRest.bills, johnRest.tips, johnRest.finalAmount);
//johnRest.johnAverageTip = averageTip(johnRest.tips);
//console.log(johnRest.johnAverageTip);
