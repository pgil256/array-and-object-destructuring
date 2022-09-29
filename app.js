// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// ?1=  8
// ?2= 1846

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?

//   ?= 
//   {yearNeptuneDiscovered: 1846;
//   yearMarsDiscovered:1659};

// function getUserData({firstName, favoriteColor="green"}){
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?

//   ?1= "Your name is Alejandro and you like purple"
//   ?2= "Your name is Melissa and you like green"
//   ?3= "Your name is underfined and you like green"



// 

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     "Raindrops on roses",
//     "whiskers on kittens",
//     "Bright copper kettles",
//     "warm woolen mittens",
//     "Brown paper packages tied up with strings"
//   ]
  
//   console.log(raindrops); // ?
//   console.log(whiskers); // ?
//   console.log(aFewOfMyFavoriteThings); // ?

// ?1="Raindrops on roses"
// ?2= "Whiskers on kittens"
// ?3= ["Bright copper kettles",
// "warm woolen mittens",
// "Brown paper packages tied up with strings"]

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?

// ?= [10,30,20];

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {a,b}= obj.numbers;

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0], arr[1]]= [arr[1],arr[0]];

const raceResults = ([first,second,third,...rest]) => ({first,second,third,rest});