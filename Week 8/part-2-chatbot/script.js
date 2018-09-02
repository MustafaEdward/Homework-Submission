var chat = [
  {
    input: 'hello',
    output: ['hello', 'heyyyyyyyyyy', 'greetings'],
  },
  {
    input: 'how are you?',
    output: ['fine', 'great', 'not so good'],
  },
  {
    input: 'What is your favourite colour?',
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
  var question = addedInput.value;

  // addedInput.value = ' ';

  var randomNumber = Math.floor(Math.random() * 3 );
  var filterType = null;
  var filterdAnswer = chat.filter(function (cha) {
    return cha.input === question;
  });

  if (filterdAnswer.length > 0 || filterdAnswer.length == filterType) {
    if (longestChecked.checked == true) {
      var longestAnswer = filterdAnswer[0].output.sort(function (a, b) {
        return b.length - a.length;
      })[0];

       addedOutput.value = longestAnswer;
    } else if (shortestChecked.checked == true) {
      var shortestAnswer = filterdAnswer[0].output.sort(function (a, b) {
          return a.length - b.length;
    })[0];

       addedOutput.value = shortestAnswer;
    } else {
       var randomAnswer = filterdAnswer[0].output[randomNumber];
     // var randomAnswer = filterdAnswer[0].output[Math.floor(Math.random()*filterdAnswer[0].output.length)];
     addedOutput.textContent = randomAnswer;
   }
  }else{
     addedOutput.textContent = "I don't understand that command. Please enter another.";
  }
}
