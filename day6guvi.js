/*class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
    getPG(moviearr){
        return moviearr.filter(moviearr => moviearr.rating==='PG')
    }
}
const moviearray=new Movie("Casino Royals","Eon Productions","PG-13")
console.log(moviearray)*/

//Write a “person” class to hold all the details.
/*class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getEmail() {
    return this.email;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setAge(age) {
    this.age = age;
  }

  setEmail(email) {
    this.email = email;
  }
}

// Example usage:
const person1 = new Person('John', 'Doe', 25, 'john.doe@example.com');

console.log(person1.getFullName()); // Output: John Doe
console.log(person1.getAge()); // Output: 25
console.log(person1.getEmail()); // Output: john.doe@example.com

person1.setFirstName('Jane');
person1.setAge(30);

console.log(person1.getFullName()); // Output: Jane Doe
console.log(person1.getAge()); // Output: 30*/

//write a class to calculate the uber price.

/*class UberPriceCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculateFare(distance, time) {
    const distanceCost = distance * this.costPerKilometer;
    const timeCost = time * this.costPerMinute;

    const totalFare = this.baseFare + distanceCost + timeCost;
    return totalFare;
  }
}

// Example usage:
const uberCalculator = new UberPriceCalculator(5, 1.5, 0.2);

const distance = 10; // in kilometers
const time = 15; // in minutes

const fare = uberCalculator.calculateFare(distance, time);

console.log(`Uber Fare: $${fare.toFixed(2)}`); */

