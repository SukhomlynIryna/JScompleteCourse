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

//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arr.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calcAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartRate(el) {
//
//    if (el >= 18 && <= 81) {
//        return Math.round(206.9 - (0.67 * el));
//    } else {
//        return -1;
//    }
//}
//
//var ages = arrayCalc(years, calcAge);
//var fullAges = arrayCalc(ages, isFullAge);
//var rates = arrayCalc(ages, maxHeartRate);
//
//console.log(ages);
//console.log(rates);

///////////////////////////////////////////
// Functions returning functions

//function interviewQuestion(job) {
//    if (job === 'designer') {
//        return function (name) {
//            console.log(name + ',can you please explain what UX design is?');
//        }
//    } else if (job === 'teacher') {
//        return function (name) {
//            console.log('What subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function (name) {
//            console.log('Hello ' + name + ', what do you do ?');
//        }
//    }
//}
//
//var teacherQuestion = interviewQuestion('teacher');
//var designerQuestion = interviewQuestion('designer');
//
//teacherQuestion('John');
//designerQuestion('John');
//
//interviewQuestion('teacher')('Mark');

///////////////////////////////////////////
// Immediately invoked Function Expressions 


//function game() {
//    var score = Math.random() * 18;
//    console.log(score >= 5);
//}
//
//game();

//(function () {
//    var score = Math.random() * 18;
//    console.log(score >= 5);
//
//})();
//
////console.log(score);
//
//(function (goodLuck) {
//    var score = Math.random() * 18;
//    console.log(score >= 5 - goodLuck);
//
//})(5);

//Closeres

//function retirement(retirementAge) {
//    var a = 'years left until retirement';
//    return function (yearOfBirth) {
//        var age = 2016 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//
//var retirementUS = retirement(66);
////retirement(66)(1990);
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementUS(1990);
//retirementGermany(1990);
//retirementIceland(1990);

//function interviewQuestion(job) {
//    return function (name) {
//        if (job === 'designer') {
//            return function (name) {
//                console.log(name + ', can you please explain what UX design is?');
//            }
//        } else if (job === 'teacher') {
//            return function (name) {
//                console.log('What subject do you teach, ' + name + '?');
//            }
//        } else {
//            return function (name) {
//                console.log('Hello ' + name + ', what do you do ?');
//            }
//        }
//    }
//}
//
//interviewQuestion('teacher')('John');


// Bind, call and apply

//var john = {
//    name: 'John',
//    age: 26,
//    job: 'developer',
//    presentation: function (style, timeOfDay) {
//        if (style === 'formal') {
//            console.log('Good ' + timeOfDay + ' Ladies and gentlemens! I\'m ' +
//                this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' year\'s old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' +
//                this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + '  year\'s old. Have a nice ' + timeOfDay);
//        }
//    }
//}
//
//john.presentation('friendly', 'morning');

//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//}
//
//john.presentation.call(emily, 'friendly', 'afternoon');
//
////john.presentation.apply(emily, ['friendly', 'afternoon']);
//var johnFriendly = john.presentation.bind(john, 'friendly');
//johnFriendly('morning');
//
//var emilyFormal = john.presentation.bind(emily, 'formal');
//emilyFormal('afternoon');


//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arr.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge(el) {
//    return 2016 - el;
//}
//
//function isFullAge(limit, el) {
//    return el >= limit;
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullJapan = arrCalc(ages, isFullAge.bind(this, 20));
//console.log(ages);
//console.log(fullJapan);


///////////////////////////////////////////////
///////////////coding challenge////////////////


(function () {

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;
        if (answer === this.correctAnswer) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong nswer.Try again: ');
            sc = callback(false);
        };

        this.dislayScore(sc);
    }

    Question.prototype.dislayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------');
    }

    var q1 = new Question('Is JS the coolest programming language in the world? ', ['Yes', 'No'], 0);
    var q2 = new Question('What the name of this courseґ\s teacher? ', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();
