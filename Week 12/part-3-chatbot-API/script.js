var chat = [{
    input: ['hello', 'hi', 'greetings'],
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

//using Document method getElementById() to return
//an Element objects representing the element whose id property matches the specified string.
const addedInput = document.getElementById('input');
const addedOutput = document.getElementById('output');
const randomChecked = document.getElementById('random');
const shortestChecked = document.getElementById('shortest');
const longestChecked = document.getElementById('longest');
const chatBotID = document.getElementById("chatBot");
//creating a function and adding onclick event in the button element
function reply() {
  console.log('We are in reply function');
  var filterdAnswer;
  var question = addedInput.value;
  for (var i = 0; i < chat.length; i++) {
    if (chat[i].input.includes(question)) {
      filterdAnswer = chat[i].output;
      console.log('The answer is index ' + i);
    }
  }
//  declaring a variable and assiging it a random number between 0 and 2
  var randomNumber = Math.floor(Math.random() * 3);
//checking if the returned array from the filter method has element(s) or is an empty array
  if (filterdAnswer != null && filterdAnswer.length > 0) {
    //checking which radio button has been clicked
    //If the ‘Longest Answer’ button has been clicked
    // assign longest answer to the value of the <textarea>
    if (longestChecked.checked == true) {
      //ordering array using sort method
      var longestAnswer = filterdAnswer.sort(function(a, b) {
        return b.length - a.length;
      })[0];

      addedOutput.value = longestAnswer + '\n' + addedOutput.value;
      //else if the ‘shortest Answer’ button has been clicked
      // assign shortest answer to the value of the <textarea>
    } else if (shortestChecked.checked == true) {
      //ordering array using sort method and getting the shortest answer
      var shortestAnswer = filterdAnswer.sort(function(a, b) {
        return a.length - b.length;
      })[0];
      addedOutput.value = shortestAnswer + '\n' + addedOutput.value;
    }
//Assigning a random answer to the value of the <textarea> element using the random number generated
     else {
      console.log('User chose random radio button');
      var randomAnswer = filterdAnswer[randomNumber];
      addedOutput.value = randomAnswer + '\n' + addedOutput.value;
    }
  } else if (question === "show me a dog") {
    console.log('User inserted show me a dog');
    loadImage();
  } else if (question === "set an alarm") {
    console.log("waiting for the alarm");
    delayedAlert()
  } else if(question === "show me the weather today"){

    showWeather();

  }else {
    addedOutput.textContent = "I don't understand that command. Please enter another.";
  }
} //reply function ends

//using and API to show pics of dog when typing "show me a dog"
function loadImage() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      chatBotID.innerHTML = "<img style='width:300px;' src=" + obj.message + ">";
    }
  };
  http.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  http.send();

} //loadImage function ends
//Delay an alert message for two second if the user typed "set an alarm"
function delayedAlert() {
  setTimeout(function() {
    alert("Did you forget about me? It’s your friend, the Alarm!");
  }, 2000)
} //DelayedAlert function ends

function showWeather(){
  var weather1 = new XMLHttpRequest();
  weather1.onreadystatechange = function () {
      if (weather1.status == 404) {
          console.log("404");
          return false;
      }

      if (!(weather1.readyState == 4 && weather1.status == 200))
          return false;

      const json = (function(raw) {
          try {
              return JSON.parse(raw);
          } catch (err) {
              addedOutput.innerHTML = "Sorry nothing is showing :(";
              return false;
          }
      })(weather1.responseText);

      if (!json)
          return false;

     chatBotID.innerHTML = "Current location : " + json.name + "<br> Tempreture is " + json.main.temp +"<br>humidity is : " + json.main.humidity;
  };
    weather1.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=c1ef1de04ccd8dd1dfbd25c8d1b04f81&units=metric"  ,true);
    weather1.send();
  }
