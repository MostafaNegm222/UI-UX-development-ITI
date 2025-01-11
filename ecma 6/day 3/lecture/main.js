/* ***************************   Classes   *******************************/

// class Employee {
//     constructor(name,age) {
//         this.name = name
//         this.age = age
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age}`
//     }
// }

// let emp1 = new Employee ("negm" , 25)

// console.log(emp1);
// console.log(emp1.display());

/* ***************************   Classes  inheritance  *******************************/

// class User {
//     constructor (name,age) {
//         this.name = name
//         this.age = age
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age}`
//     }
// }

// class Employee extends User{
//     constructor (names , ages , salary) {
//         super(names,ages)
//         this.salary = salary
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age} and salary is ${this.salary}`
//     }
// }

// let user1 = new User ("Negm" , 25)
// let emp1 = new Employee ("Negm" , 25 , 8000)

// console.log(user1.display());
// console.log(emp1.display());


/* ***************************   Classes  static  *******************************/

// class User {
//     constructor (name,age) {
//         this.name = name
//         this.age = age
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age}`
//     }
    
//     static staticMethod () {
//         return `I'm static`
//     }
    
//     static counter = 0
// }

// console.log(User.staticMethod());
// console.log(User.counter);


/* ***************************   Classes  encapsulation  *******************************/


// class User {
//     #salary
//     constructor (name,age , salary) {
//         this.name = name
//         this.age = age
//         this.#salary = salary
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age}`
//     }

//     get getSalary () {
//         return this.#salary
//     }
    
//     set setSalary (val) {
//         this.#salary = val
//     }

//     #privateMethod () {
//         console.log(`private method`);
        
//     }
//     test () {
//         this.#privateMethod ()
        
//     }
// }

// let user1= new User ("negm" , 25 , 8000)

// console.log(user1);
// console.log(user1.salary);
// console.log(user1.getSalary);
// user1.setSalary = 4000
// console.log(user1.getSalary);
// console.log(user1.test());

/* ***************************   Classes  abstract  *******************************/

// class User {
//     constructor (name,age , salary) {
//         if (this.constructor == User) {
//             throw `this is abstract class`
//         }
//         this.name = name
//         this.age = age
//     }
//     display () {
//         return `the name is ${this.name} and age is ${this.age}`
//     }
// }
// let user1 = new User ("Negm" , 25)



/* **************************  use strict  ****************************** */

//sloppy mode 

// any variable can't declare without key word

// let obj = {
//     name : "Negm"
// }

// Object.freeze(obj)
// obj.name =20;
// delete obj.name

// function test () {
//     console.log(this);
    
// }

// test.call(window)


// **** window object is instance of constructor function call Window *****//



/* ****************************  Proxy **************************** */


let obj = {
    name : "negm"
}







/* ******************************************************** */











/* ******************************************************** */