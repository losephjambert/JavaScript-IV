// CODE here for your Lambda Classes

// ========== Person ========== // - base class
/*
- First we need a Person class. This will be our `base-class`
- Person receives `name` `age` `location` all as props
- Person receives `speak` as a method.
- This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}
// console.log(new Person({ name: 'joe', age: 32, location: 'Seattle' }).speak());

// ========== Instructor ========== // - inherits from Person
/*
- Instructor uses the same attributes that have been set up by Person
- Instructor has the following unique props:
  - `specialty` what the Instructor is good at i.e. 'redux'
  - `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  - `catchPhrase` i.e. `Don't forget the homies`
- Instructor has the following methods:
  - `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  - `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

// ========== Student ========== // - inherits from Person
/*
- Student uses the same attributes that have been set up by Person
- Student has the following unique props:
  - `previousBackground` i.e. what the Student used to do before Lambda School
  - `className` i.e. CS132
  - `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
- Student has the following methods:
  - `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  - `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  - `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listsSubjects() {
    // this.favSubjects.forEach(subject => {
    //   console.log(subject);
    // });
    return `${this.name}'s favorite subjects are ${this.favSubjects.join(', ')}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun a sprint challenge for ${subject}`;
  }
}

// ========== Project Manager ========== // - inherits from Instructor
/*
- ProjectManagers are extensions of Instructors
- ProjectManagers have the following unique props:
  - `gradClassName`: i.e. CS1
  - `favInstructor`: i.e. Sean
- ProjectManagers have the following Methods:
  - `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  - `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, "@channel standy times!​​​​​"`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

// ========== Tests ========== //

const webFoundationsInstructor = new Instructor({
  name: 'Britt',
  age: 32,
  location: 'Toronto',
});

const webStudent1 = new Student({
  name: 'Joe',
  age: 32,
  location: 'Seattle',
  previousBackground: 'Coffee',
  className: 'WEB23',
  favSubjects: ['JavaScript', 'CSS', 'React', 'Functional Programming'],
});

const webStudent2 = new Student({
  name: 'Stella',
  age: 26,
  location: 'Atlanta',
  previousBackground: 'Musician',
  className: 'WEB23',
  favSubjects: ['Node', 'HTML', 'Vue', 'APIs'],
});

const webPM1 = new ProjectManager({
  name: 'Marc',
  age: 38,
  location: 'San Antonio',
  gradClassName: 'WEB12',
  favInstructor: 'Britt',
  specialty: 'Functional Programming',
  favLanguage: 'JavaScript',
  catchPhrase: 'Oh, hi Marc!',
});

// webFoundationsInstructor
// webStudent1
// webStudent2
// webPM1

// test instances
console.log(webFoundationsInstructor);
console.log(webStudent1);
console.log(webStudent2);
console.log(webPM1);

// test methods
//  - Instructor
console.log(webFoundationsInstructor.speak());
console.log(webFoundationsInstructor.demo('JavaScript'));
console.log(webFoundationsInstructor.grade(webStudent2, 'JavaScript'));

//  - Student
console.log(webStudent1.speak());
console.log(webStudent1.listsSubjects());
console.log(webStudent1.PRAssignment('JavaScript-IV'));
console.log(webStudent1.sprintChallenge('JavaScript'));

console.log(webStudent2.speak());
console.log(webStudent2.listsSubjects());
console.log(webStudent2.PRAssignment('JavaScript-IV'));
console.log(webStudent2.sprintChallenge('JavaScript'));

//  - Project Manager
console.log(webPM1.speak());
console.log(webPM1.demo('React'));
console.log(webPM1.grade(webStudent1, 'React'));
console.log(webPM1.standUp('#web23_marc'));
console.log(webPM1.debugsCode(webStudent1, 'flexbox'));
