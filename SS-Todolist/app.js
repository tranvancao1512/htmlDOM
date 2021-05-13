function Cat() {
    this.stomach = []
}

// Cat.prototype.eat = function(mouse) {
//     this.stomach.push(mouse);
//     return this
// };

// function Mouse(name) {
//     this.name = name;

// }
// var tom = new Cat();
// var mickey = new Mouse();
// tom.eat(mickey);

// console.log(tom);

// function say() {
//     // alert('Hello world from JavaScript!');
//     return 'Hello world!';
// }

// var message = say();

// var greeting = say;

// greeting(); //Hello world from JavaScript!
// alert('JavaScript says: ' + message); //JavaScript says: Hello world!

// var greeting = function() {
//     alert('Hello world from JavaScript!');
//     return 'Hello world!';
// }

// console.log(greeting);
// function heSaid(word) {
//     console.log(word);
// }

// function iHear(someFunction, value) {
//     someFunction('I hear he said: "' + value + '."');
// }

// iHear(heSaid, "Hello");  

function xulyArray(arr, callback) {
    var resultArr = [];
    for (var i = arr.length - 1; i >= 0; i--)
        resultArr[i] = callback(arr[i]);
    return resultArr;
}

var arr = [1, 2, 3, 4];
var arrReturned = xulyArray(arr, function(arg) { return arg * -1; });
console.log(arrReturned);