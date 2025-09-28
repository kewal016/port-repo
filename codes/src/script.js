

class Person {
  constructor(fName, lName, age, eyeColor) {
    this.firstName = fName;
    this.lastName = lName;
    this.myAge = age;
    this.color = eyeColor;
  }
}

const me = new Person('Kewal', 'fernandes', 24, 'darkBrown');

// document.getElementById('demo').innerHTML = Object.entries(me).map(([index, value]) => {
//   return ` ${index}: ${value} `;
// }).join('<br>');


class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car('Honda City', 2001);
document.getElementById('demo').innerHTML = ` my car is ${myCar.name} and it is ${myCar.age()} old.`;