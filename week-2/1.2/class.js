// Classes in JavaScript 
// JavaScript classes provide a structured way to create objects, encapsulating properties and methods into reusable blueprints.


// EXAMPLE -1

class Rectangle {
    constructor(width, height,  color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        const area2 = this.width * this.height;
        return area;
        return area2;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);

    }
}

const rect =  new Rectangle(2, 7);
const rect2 = new Rectangle(2, 10);
const area = rect.area();
const area2 = rect2.area();
console.log(area);
console.log(area2);


// Example 2 


class Car {
    constructor(brand, model, year){
    this.brand = brand;
    this.model =  model;
    this.year = year;
}

   start(){
    console.log(`${this.brand} ${this.model} is starting....`);
   }
}
const car1 = new Car("BMW" , "M5" ,2022);
const car2 = new Car("Mercdes", "aclass" , 2023);

console.log(car1);
console.log(car2);



// Some more classes
// new Date() creates a date object representing the current date and time.
// .toISOString() converts the date to an ISO 8601 string format (UTC).


const now = new Date();
console.log(now.toISOString());



// How does Map work?
// Map is a special object in JavaScript used for storing key-value pairs.
// Unlike regular objects {}, Map allows any type of key (objects, functions, primitive values).
// .set(key, value) stores a value in the Map.
// .get(key) retrieves the value for a given key.
// If a key does not exist, .get(key) returns undefined.

const map = new Map();
map.set('name' ,'nihal');
map.set('age',20);

console.log(map.get('name'));
console.log(map.get('age'));
