// chapter 35 to 37 Start //////

// 1. Write a function that displays current date & time in your
// browser.
let displayDate= function(){

var cDate = new Date
document.write(cDate)
}
displayDate()

// // 2. Write a function that takes first & last name and then it
// // greets the user using his full name.

function Fullname(){

    var fnam = prompt('enter your First Name')
    var lnam = prompt('enter your Last name')
    document.write(`<br >Hello Mr. ${fnam} ${lnam}.`)    
}
Fullname()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function AddNum(){

    var num1 = +prompt('enter 1st number to sum up')
    var num2 = +prompt('enter 2nd number')
    if(!(isNaN(num1) && isNaN(num2))){
    console.log(` Sum of two number ${num1 + num2 }`)
}
}
AddNum()

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

let Calc = function(num1, num2, operator){

    switch (true) {
        
        case operator === "+":
            return num1 + num2
        case operator === '-':
            return num1 - num2

            case operator === '*':
            return num1 * num2
            case operator === '/':
            return num1 / num2

        }
}

var result = Calc(14,10,"/")
console.log(result)



// 5. Write a function that squares its argument.

let Square = function(num){
    console.log( ` square of given number is ${num * num}`)
}
Square(6)

// 6. Write a function that computes factorial of a number.

let factorial = function(num){
    let fact = 1 
for(i = num; i>=1; i--){
    fact = i*fact
    console.log(fact)
}
}
factorial(5)

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

    let choosenumber = function(){
        
        let a= +prompt('enter your start number')
        let b= +prompt('enter your end number')

        for( i =a; i<=b; i++){

            console.log(i)
        }

    } 
choosenumber()


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function findHypotenuse(per, base){
     let h = ((per * per) + (base * base));
     let sqr = h **(1/2)
    document.write("<br> inner function : " +h+'<br>')
    return sqr;
}
document.write( "outer function : " + findHypotenuse(3,4).toFixed(2));
 
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function areaRectangle(width, height){
    let A = width * height
         return A

}
    var width = 20
    var height = 10
console.log("Area of rectangle is " + areaRectangle(width,height))


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam

function check_palendrome(){

let string = prompt('enter name')
var len = string.length;
var msg = "it is palindrome"
for(i = 0; i< len/2; i++){
    if(string[i] != string[len -1 -i]){
       msg = 'it is not palindrome'
    }
}
console.log(`${string}: ${msg}`)
}
check_palendrome()

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


let word,
  longestWord,
  longestWordlength = 0;
let findLongestWord = function (str) {
  word = str.split(" ");
  for (const key of word) {
    key.length > longestWordlength
      ? ((longestWordlength = key.length), (longestWord = key))
      : "";
  }
  return `Example String: ${str}
  Expected Output: ${longestWord}`;
};
console.log(findLongestWord("Web Development Tutoriale"));


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(char_count('JSResourceS.com', 'o'));


// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2



let Circumference = function (radius) {
    return `The Circumference is : ${2 * Math.PI * radius}`;
  };
  let Area = function (radius) {
    return `The Area is : ${Math.PI * radius ** 2}`;
  };
  console.log(Circumference(4));
  console.log(Area(10));
