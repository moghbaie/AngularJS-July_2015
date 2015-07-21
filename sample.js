5 - 'hello'
NaN
100/0
Infinity
var myObj = {};
undefined
var myCar = {
   name: "Honda"
}
undefined
myCar.name
"Honda"
myCar.year = 1984
1984
myCar
Object {name: "Honda", year: 1984}
var myPerson = {
     name: {
        first: "George",
        last: "Dagher
     }
}
VM610:5 Uncaught SyntaxError: Unexpected token ILLEGAL
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM302:895InjectedScript._evaluateAndWrap @ VM302:828InjectedScript.evaluate @ VM302:694
var myPerson = {
     name: {
        first: "George",
        last: "Dagher"
     }
}
undefined
myPerson.name.first
"George"


var myPerson = {
     name: {
        first: "George",
        last: "Dagher"
     },
     friends: []
}
undefined
var friendOne = {
   first: "Tom",
}
undefined
var friendOne = {
   first: "Tom",
   last: "Ford"
}
undefined
var friendTwo = {
   first: "Bill",
   last: "Clinton"
}
undefined
myPerson.friends.push(friendOne)
1
myPerson.friends.push(friendTwo)
2
myPerson.friends
[Objectfirst: "Tom"last: "Ford"__proto__: Object, Objectfirst: "Bill"last: "Clinton"__proto__: Object]
myPerson
Object {name: Object, friends: Array[2]}friends: Array[2]0: Objectfirst: "Tom"last: "Ford"__proto__: Object1: Objectfirst: "Bill"last: "Clinton"__proto__: Objectlength: 2__proto__: Array[0]name: Objectfirst: "George"last: "Dagher"__proto__: Object__defineGetter__: __defineGetter__() { [native code] }__defineSetter__: __defineSetter__() { [native code] }__lookupGetter__: __lookupGetter__() { [native code] }__lookupSetter__: __lookupSetter__() { [native code] }constructor: Object() { [native code] }hasOwnProperty: hasOwnProperty() { [native code] }isPrototypeOf: isPrototypeOf() { [native code] }propertyIsEnumerable: propertyIsEnumerable() { [native code] }toLocaleString: toLocaleString() { [native code] }toString: toString() { [native code] }valueOf: valueOf() { [native code] }get __proto__: __proto__() { [native code] }set __proto__: __proto__() { [native code] }__proto__: Object
myPerson.friends[1].last
"Clinton"
myPerson.friends[1]
Object {first: "Bill", last: "Clinton"}
var userLastName = myPerson.friends[1].last
undefined
userLastName
"Clinton"

var isCorrect = true;
undefined
if (isCorrect) {
  console.log('correct');
}
VM1218:3 correct
undefined
var george = {};
undefined
if (george) {
   console.log('hello world');
}
VM1284:3 hello world
undefined
var harry = undefined;
undefined
if (harry) {
   console.log('hello world');
}
undefined
var harry = null;
undefined
if (harry) {
   console.log('hello world');
}
undefined




Regex
All
Errors
Warnings
Info
Logs
Debug
Hide network messages
.
if (5 === 5) {
    console.log('hooray')
}
VM1433:3 hooray
undefined
if (5 == 5) {
    console.log('hooray')
}
VM1434:3 hooray
undefined
if (5 === '5') {
    console.log('hooray')
}
undefined
if (5 == '5') {
    console.log('hooray')
}
VM1436:3 hooray
undefined
null === undefined
false
null == undefined
true


var myVar = 8
undefined
function addItems(a, b) {
    return a + b;
}
undefined
var myTotal = addItems(5, 6);
undefined
myTotal
11
var myFunc = function(name) {
   console.log('hello' + name);
};
undefined
var myFunc = function(name) {
   console.log('hello ' + name);
};
undefined
myFunc('Harry')
VM1816:3 hello Harry
undefined
myFunc('Harry');
VM1816:3 hello Harry
undefined
var myFunc = function(name) {
   console.log('hello ' + name);
    return 5;
};
undefined
myFunc('Harry');
VM1859:3 hello Harry
5
function caller(sampleFunc) {
   sampleFunc();
}
undefined
caller(myFunc);
VM1859:3 hello undefined
undefined


var myArray = [1, 2, 3]
undefined
myArray = [{name: 'Georg']
VM2124:2 Uncaught SyntaxError: Unexpected token ]
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM302:895InjectedScript._evaluateAndWrap @ VM302:828InjectedScript.evaluate @ VM302:694
myArray = [{name: 'Georg'}]
[Object]
myArray.push(7)
2
myArray.push(7, 8, 9, 20)
6
myArray
[Object, 7, 7, 8, 9, 20]
myArray.pop();
20
myArray
[Object, 7, 7, 8, 9]
myArray.splice(3, 1)
[8]
myArray
[Object, 7, 7, 9]
myArray.splice(-2, 1)
[7]
myArray.splice(2, 0, 41)
[]
myArray
[Object, 7, 41, 9]



Regex
All
Errors
Warnings
Info
Logs
Debug
Hide network messages
.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
undefined
Person.prototype.increaseAge = function() {
   this.age = this.age + 1;
}
Person.increaseAge()
var myPerson = new Person("Bill Clinton", 65)
undefined
myPerson.increaseAge()
undefined
myPerson.age
66
myPerson.increaseAge()
undefined
myPerson.increaseAge()
undefined
myPerson.age
68
var yourPerson = new Person("Tom Ford", 21);
undefined
yourPerson.increaseAge();
undefined
yourPerson
Person {name: "Tom Ford", age: 22}
yourPerson.age
.


function outer(a) {
 
    function inner(b) {
       return a + b;    
    }

}
undefined
function outer(a) {
 
    function inner(b) {
       return a + b;    
    }

    return inner;

}
undefined
var add7 = outer(7)
undefined
add7(3)
10
var add9 = outer(9)
undefined
add9(10)
19
function add(a, b) {

return a + b;

}
undefined
add(3, 1)
4



function parent() {
  
  var myObj = {
    first: 'Tom',
    last: 'Ford'
    age: 65
  };

  var myDog = {
    name: 'Harry'
  };

  function child() {
      var myObj = {
        first: 'Bill'
      }

      myObj.first = 'Sam'
      myObj.age  = 21;
      myDog.age = 14;

      console.log(myObj);
  }

  child();
  console.log(myObj);
  console.log(myDog);
}

parent();