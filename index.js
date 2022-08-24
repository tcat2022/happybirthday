const btn = document.querySelector('.talk');
const content = document.getElementById('content');
function show(){
  let a = document.getElementById('content')
  a.style.display = "inherit"
  }
function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = .8;
  text_speak.pitch = 1.5;

  window.speechSynthesis.speak(text_speak)
}
function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if(hr >= 0 && hr < 12) {
    speak("good morning")
  }

  else if(hr > 0 && hr <= 16) {
    speak("good afternoon")
  }
 else  {
    speak("good evening")
  }
}

window.addEventListener('load', ()=>{
  speak("hello i am v r cat");
  speak("your virtual assistant");
  wishMe();
})
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
}
btn.addEventListener('click', ()=> {
  recognition.start();
})
function speakThis(message){
const speech = new SpeechSynthesisUtterance();
speech.text = "I did not understand what you said please try again";
if(message.includes('hello') || message.includes('hey')) {
  const finalText = "hello " + name;
  speech.text = finalText

} else if(message.includes('how are you')) {
  const finalText = "i am good thanx for asking"
  speech.text = finalText
}
 else if(message.includes('goodbye')) {
  const finalText = "goodbye" + name;
  speech.text = finalText
}  
 else if(message.includes('name')) {
  const finalText = "my name is v r cat"
  speech.text = finalText
} 
else if(message.includes('calculator')) {
  window.open("Calculator:///")
  const finalText = "opening calculater"
  speech.text = finalText
} 
else if(message.includes('open spotify')) {
  window.open("Spotify:///")
  const finalText = "opening spotify"
  speech.text = finalText
} 
else if(message.includes('open youtube')) {
  window.open("https://youtube.com")
  const finalText = "opening youtube"
  speech.text = finalText
} 
else if(message.includes('time')) {
  const date = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"})
  const finalText = date
  speech.text = finalText
}
else{
  window.open(`https://www.google.com/search?q=${message.replace("", "+")}`, "blank");
  const finalText = "i found some information about" + message
 speech.text = finalText
}

speech.volume = 1;
speech.pitch = 1;
speech.rate = .8;

window.speechSynthesis.speak(speech);
}
 let name = prompt("what is your name")
