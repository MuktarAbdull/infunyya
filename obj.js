const me ={
    firstName: 'Muktar',
    lastName: 'Abdullahi',
    Age: '23',
    location: 'jijiga'
}

// let abdull ="";
// for(let x in me){
//     abdull += me[x] + "<br>"
// }
me.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  document.getElementById("demo").innerHTML =
  "My fullName is " + me.fullName(); 

  const person = {
    name: "muktar",
    age: 23,
    city: "New York"
  };
  
  const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray

// Create an object:
const somebody = {
    firstName: "John",
    lastName: "Doe",
    language: "Som",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = somebody.lang;

  // Create an object:
const someone = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set langua(value) {
      this.language.toUpperCase = value;
    }
  };
  
  // Set a property using set:
  someone.langua = "Somali";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = someone.language;

  // Create an object:
const people = {
    firstName: "John",
    lastName: "Doe",
    language: "somali",
    get lang() {
      return this.language.toUpperCase();
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = people.lang;