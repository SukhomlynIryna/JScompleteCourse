// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
//
// Person.prototype.calcAge = function () {
//     console.log(2016 - this.yearOfBirth);
// }
//
//
//
// var john = new Person('John', 1990, 'teacher');
// john.calcAge();
// var jane = new Person('Jane', 1969, 'designer');
// jane.calcAge();


//object.create

//var personProto = {
//    calculateAge: function () {
//        console.log(2016 - this.yearOfBirth);
//    }
//};
//
//var john = Object.create(personProto);
//john.name = 'John';
//john.yearOfBirth = 1990;
//john.job = 'teacher';
//
//var jane = Object.create(personProto, {
//    name: {
//        value: 'Jane'
//    },
//    yearOfBirth: {
//        value: 1968
//    },
//    job: {
//        value: 'designer'
//    }
//
//});


//primitives vs objects

//var a = 45;
//var b = a;
//a = 35;
//
//console.log(a);
//console.log(b);
//
////objects
//var obj1 = {
//    name: 'john',
//    age: 26
//};
//
//var obj2 = obj1;
//obj1.age = 30;
//
//console.log(obj1.age);
//console.log(obj2.age);
//
////functions
//
//var age = 27;
//var obj = {
//    name: 'Jonas',
//    city: 'Lisabon'
//}
//
//function change(a, b) {
//    a = 30;
//    b.city = 'San Francisco';
//}
//
//change(age, obj);
//confirm.log(age);
//
//confirm.log(obj.city);


// passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arr.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {

    if (el >= 18 && <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
