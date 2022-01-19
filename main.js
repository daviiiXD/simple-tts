function speak() {
  
//values: text, volume, pitch, rate, lang

  var script = document.getElementById("text").value
  var volume = document.getElementById("volume").value
  var pitch = document.getElementById("pitch").value
  var rate = document.getElementById("rate").value
  var lang = document.getElementById("lang").value
  
  var msg = new SpeechSynthesisUtterance();
 
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; 
msg.volume = volume; // From 0 to 1
msg.rate = rate; // From 0.1 to 10
msg.pitch = pitch; // From 0 to 2
msg.text = script;
msg.lang = lang;
speechSynthesis.speak(msg);

} 