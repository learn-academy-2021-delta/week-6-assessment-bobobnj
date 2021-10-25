// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Add appropriate dependencies: $ yarn add jest

// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
//describe function stryMkr
describe("function test got stryMkr", () => {
  //  it has a responsibility
    it("should take in an arrray of objects and return full sentence with names capitalized", () => {
      //this variable example should pass through the function
      var people = [
        { name: "ford prefect", occupation: "a hitchhiker" },
        { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
        { name: "arthur dent", occupation: "a radio employee" }
        // Expected output:
         // ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    //expect variable to eqaul this upon passing through the function            ]
      expect(stryMkr(people)).toEqual(
        ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

    })
  })


var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.
//create function that takes in array as input
const stryMkr = (arr) => {
  // map through array
  return arr.map(obj =>
    // .toUppercase to capitalize data in object name
  `My name is ${obj.name.toUpperCase()}
  I am ${obj.occupation} `)
}
 //Return name capitalized.

//  I split this, used charAt, splice, and slice.... all with no dice. 
//My otputs with either have Just the first name capitalized, the whole name capitalized, or an error. This one really got me. Also the test, which I'm sure the expect needs to be more dynamic. 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("function test got remainsByTre", () => {
  //  it has a responsibility
    it("should take in an arrray of objects and return full sentence with names capitalized", () => {
      //this variable example should pass through the function
      var people = [
        var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
        // Expected output: [ 2, 0, -1, 0 ]
        var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
        // Expected output: [ 2, 1, -1 ]
        //expect variable to eqaul this upon passing through the function            ]
      expect(onlyByTre(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyByTre(hodgepodge2)).toEqual([ 2, 1, -1 ])


    })
  })


var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

//assign function remainsByTre to take input parameter array of mixed data
const remainsByTre = (arr) => {
  //filter array and use typeof "number" to retrieve only number type data
  return arr.filter((nums) => {
    return typeof nums == "number";
    //map throgh the nymbers and return output array with divided by 3
  }).map( (num) => {
    return num % 3;
  })
}



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("function test got arrSumCbd", () => {
  //  it has a responsibility
    it("should take in an arrray of numbers and return the sum of all cubed", () => {
      //this variable example should pass through the function
      var cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      var cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      //expect variable to eqaul this upon passing through the function            ]
      expect(arrSumCbd(cubeAndSum1)).toEqual(99)
      expect(arrSumCbd(cubeAndSum2)).toEqual(1125)


// b) Create the function that makes the test pass.


// assign function arrSumCbd to take input parameter of numbers array 
function arrSumCbd(arr) {
  //iterate using .map() to cube each index of the array and return that length ** 3
  let cubed = arr.map(x => x ** 3)
  // use .reduce to accumulatethe cubed indexes in array and return output sum of all cubed
  return cubed.reduce((acc,curr) => acc +curr)

}
