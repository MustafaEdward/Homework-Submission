var chat = [
  {
    input:  ['hello', 'hi', 'greetings'],
    output: ['hello', 'heyyyyyyyyyy', 'greetings'],
  },
  {
    input: ['how are you?', 'how is the weather?', 'are you okay?'],
    output: ['fine', 'great', 'not so good'],
  },
  {
    input: ['how is canada doing in the worldcup?', 'what is your favorite color?', 'which jazz artist you like?'],
    output: ['i am not sure', 'there are so many to choose from', 'i like evryone'],
  },
];
console.log(chat);

const addedInput = document.getElementById('input');
const addedOutput =  document.getElementById('output');
const randomChecked =  document.getElementById('random');
const shortestChecked =  document.getElementById('shortest');
const longestChecked =  document.getElementById('longest');

function reply() {
  console.log('We are in reply function');
  var filterdAnswer;
  var question = addedInput.value;

  for (var i = 0; i < chat.length; i++) {

     if(chat[i].input.includes(addedInput.value)){
        filterdAnswer = chat[i].output;
        console.log('The answer is index ' + i);
     }
  }
  // addedInput.value = ' ';

  var randomNumber = Math.floor(Math.random() * 3 );

  if (filterdAnswer != null && filterdAnswer.length > 0) {
    if (longestChecked.checked == true) {
      var longestAnswer = filterdAnswer.sort(function (a, b) {
        return b.length - a.length;
      })[0];

       addedOutput.value = longestAnswer + '\n' + addedOutput.value;
    }
    else if (shortestChecked.checked == true) {
      var shortestAnswer = filterdAnswer.sort(function (a, b) {
          return a.length - b.length;
    })[0];
       addedOutput.value = shortestAnswer + '\n' + addedOutput.value;
    }
    else {
      console.log('User chose random radio button');
       var randomAnswer = filterdAnswer[randomNumber];
     // var randomAnswer = filterdAnswer[0].output[Math.floor(Math.random()*filterdAnswer[0].output.length)];
     addedOutput.value = randomAnswer + '\n' + addedOutput.value;
   }
  }else{
     addedOutput.textContent = "I don't understand that command. Please enter another.";
  }
}
