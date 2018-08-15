// declaring a variable and initializing it as an object
var chat = {
  input : 'hello',
  output : 'Hi'
};
console.log(chat);

// creating function and making sure it matches the value in the object above
// the onclick event has been added to the button element in the HTML

const addedInput = document.getElementById('input');
const addedOutput =  document.getElementById('output');

function reply(){
  var question = addedInput.value;
  // adding empty string below to erase the sumbitted string input
  addedInput.value = ' ';
  // conditional statement to check if the value  stored in the 'question' variable matches the 'input' defined
   // in the first object created
  if( question == chat.input ){
  addedOutput.textContent = chat.output;

 }else{
   addedOutput.textContent = "I don't understand that command. Please enter another.";
 }
}
