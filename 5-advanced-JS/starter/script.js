 var Person = function (name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

 Person.prototype.calcAge = function () {
     console.log(2016 - this.yearOfBirth);
 }



 var john = new Person('John', 1990, 'teacher');
 john.calcAge();
 var jane = new Person('Jane', 1969, 'designer');
 jane.calcAge();
