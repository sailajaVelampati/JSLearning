object: collection of data and functionality.

new: new keyword always creates the instance of an object 

literals:  is a notation for representing a fixed datatype / value.

dot notation: used to access object properties or methods.

Bracket notation: another way to access object properties.

Namespacing: is a technique employed to avoid collisions with other objects or variables in the global namespace.

this: this.js

lexcial this: 

bind:

map: Method creates a new array with the results of calling a provided function on every element in the calling array. use it when you want to apply a common change on all the elements of an array.

        var numbers = [1, 5, 10, 15];
        var doubles = numbers.map(function(x) {
           return x * 2;
        });
reduce:method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);//
console.log(sum); // 6


prototype: Every JavaScript object has an internal property called [[Prototype]]. It is used to add new properties or methods to an existing object, all existing objects of a given type, an object prototype.

Exception handling: Used to handle error and let the user know

The try statement lets you test a block of code for errors.

The catch statement lets you handle the error.

The throw statement lets you create custom errors.

The finally statement lets you execute code, after try and catch, regardless of the result.

in angular js  $exceptionHandler service is used.

Modularity: the separation of a system’s functionality into a set of logically independent pieces — referred as modules or components. Best is highly cohesive and low coupled modules

coupling:measures how dependent different modules are on each other. A module should be as low coupled as possible, meaning that it should have few or no dependencies on other modules.

Cohesion: measures what the modules does. Instead of addressing many different concerns, a highly cohesive module focus on a single purpose or responsibility. 

Dependency injection: design pattern allows us to loosely couple the code.

Inversion of Control: prograsming style where framework controls the program flow with the help of DI.
 
version control tools:is a system that records changes to a file or set of files over time so that you can recall specific versions later.
Eg: SVN, Git

functions and this Quiz: copy all the functions form the MSDN examples


ES6 concepts:

version control in javascrit:

sets:

splat:

fat arrow:

const:

let:

ES6 ends.




oops concepts:
    >Method Overloading : methodOverloading.js
    >Inheritance:
    >Abstraction
    >Encapsulation
    >Polymorphysim
oops ends.


Angularjs concepts:


Angularjs ends.


//simple codes
how to join two arrays || join with no duplicates: array.js
sum of all the elements in an array: array.js