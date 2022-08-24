const btn = document.querySelector('.talk');

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = .8;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak)
}
function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if(hr >= 0 && hr < 12) {
    speak("good morning")
  }

  else if(hr > 0 && hr <= 17) {
    speak("good afternoon")
  }
  
 else  {
    speak("good evening")
  }
}

window.addEventListener('load', ()=>{
  speak("hello i am v r cat");
  wishMe();
})