// person.js
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
module.exports = Person;
