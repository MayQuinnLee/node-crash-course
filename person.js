//Module Wrapper Function
// (function(exports, require, module, __filename, __dirname))

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello, I am ${this.name} and ${this.age} years old`);
  }
}

module.exports = Person;
