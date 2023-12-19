//Write functions into ES2015

//Same keys and values - ES5 code 
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //Same keys and values - ES2015 code
  function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
  }

//Computed Property Name - ES5 code
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//Computed Property Names ES2015
let favoriteNumber2 = 42;
const instructor2 = {
  firstName: "Colt",
  [favoriteNumber2]: "That is my favorite!"
}

//Object Methods - ES5 code
var instructor3 = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

//Object Methods - ES2015 code
let instructor4 = {
  firstName: "Colt",
  sayHi(){
    return "Hi";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}

//createAnimal function
function createAnimal(species, verb, noise) {
  return {species, [verb]: noise}
}