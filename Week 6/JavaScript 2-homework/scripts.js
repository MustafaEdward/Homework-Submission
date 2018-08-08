// Problem 1:
//
// Create a function called vehicle that receives a color, a code(1 for car, 2 for motorbike), and age(years 0-5) and prints out the type, color and age.
//
// Example: vehicle("blue", 1, 5) prints 'a blue used car'
//
//
// Problem 2:
//
// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more. Now, change the function vehicle(from problem 1) to use this list . So that
//
// Example: vehicle("green", 3, 1) prints "a green new bike".


var vehicles = ["bike","caravan","suv"];

function vehicle(color, code, age) {
  var isValid = true;
  var result = "a " + color;
  if(age === 0){
    result += " new";
  } else {
    result += " used";
  }
  for(var i=0; i< vehicles.length; i++){
    if(code === i) {
      result += " " +vehicles[i];
    }
  }

  if(isValid){
    console.log( result );
  }

}

vehicle("blue",2,0);


// Problem 3:
// Create an object that contains the teachers(from Hack Your Future) that you have had so far for the different topics. Add a property to the object you just created that contains the languages that they have taught you.

var teachers = {
firstTeacher : "Rajaee",
firstLanguage : ['HTML' , 'CSS'],
secondTeacher : "Saad",
secondLanguage : "Javascript",
HackyourFutureTeacher : true
};

var message = "<p>" + teachers.firstTeacher + " is an effective teacher that taught "+ teachers.firstLanguage.length +" subjects.";
message += " He is skilled in " + teachers.firstLanguage.join(', '); + "</p>";

document.write(message);
