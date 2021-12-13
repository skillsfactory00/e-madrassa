function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mCXYqKEJws":
        Script1();
        break;
      case "6FChPVvr6m5":
        Script2();
        break;
      case "5ze8gOvxL5Q":
        Script3();
        break;
      case "5i4OinjoPtB":
        Script4();
        break;
      case "68hCNTXL8Zo":
        Script5();
        break;
      case "5dPzEbSAVJE":
        Script6();
        break;
      case "68coeVpDZVz":
        Script7();
        break;
      case "6ICWRZzyDeh":
        Script8();
        break;
      case "62S43r59rpS":
        Script9();
        break;
      case "6hNW07yQZDP":
        Script10();
        break;
      case "5kVaNgI373R":
        Script11();
        break;
      case "6OXDKEbm1af":
        Script12();
        break;
  }
}

function Script1()
{
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
  var player = parent.GetPlayer();
  var sValue = player.GetVar("StorylineVar");
  console.log(sValue);
 
if(SpeechRecognition) {
  console.log("Votre navigateur  prend en charge la reconnaissance vocale");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "ar-MA";

    if( sValue == "start" ) { 
      console.log("start...")
      recognition.start(); 
    }
    else {
      recognition.stop();
     var player = parent.GetPlayer();
     player.SetVar("notPlayed","stop");
    }
  

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
     var player = parent.GetPlayer();
    player.SetVar("notPlayed","stop");
    console.log("Speech recognition service disconnected");   

  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;      
    console.log(transcript)
  
    var player = parent.GetPlayer();
    player.SetVar("recordedSalam",transcript);
    recognition.stop();

    if(transcript.toLowerCase().trim()==="stop recording") {      
      recognition.stop();
    }
  }  
}
else {
  console.log("Votre navigateur ne prend pas en charge la reconnaissance vocale");
  info.textContent = "Votre navigateur ne prend pas en charge la reconnaissance vocale";
}
}

function Script2()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script3()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script4()
{
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
  var player = parent.GetPlayer();
  var sValue = player.GetVar("StorylineVar");
  console.log(sValue);
 
if(SpeechRecognition) {
  console.log("Votre navigateur  prend en charge la reconnaissance vocale");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "ar-MA";

    if( sValue == "start" ) { 
      console.log("start...")
      recognition.start(); 
    }
    else {
      recognition.stop();
     var player = parent.GetPlayer();
     player.SetVar("notPlayed","stop");
    }
  

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
     var player = parent.GetPlayer();
    player.SetVar("notPlayed","stop");
    console.log("Speech recognition service disconnected");   

  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;      
    console.log(transcript)
  
    var player = parent.GetPlayer();
    player.SetVar("recordedMarhaba",transcript);
    recognition.stop();

    if(transcript.toLowerCase().trim()==="stop recording") {      
      recognition.stop();
    }
  }  
}
else {
  console.log("Votre navigateur ne prend pas en charge la reconnaissance vocale");
  info.textContent = "Votre navigateur ne prend pas en charge la reconnaissance vocale";
}
}

function Script5()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script6()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script7()
{
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
  var player = parent.GetPlayer();
  var sValue = player.GetVar("StorylineVar");
  console.log(sValue);
 
if(SpeechRecognition) {
  console.log("Votre navigateur  prend en charge la reconnaissance vocale");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "ar-MA";

    if( sValue == "start" ) { 
      console.log("start...")
      recognition.start(); 
    }
    else {
      recognition.stop();
     var player = parent.GetPlayer();
     player.SetVar("notPlayed","stop");
    }
  

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
     var player = parent.GetPlayer();
    player.SetVar("notPlayed","stop");
    console.log("Speech recognition service disconnected");   

  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;      
    console.log(transcript)
  
    var player = parent.GetPlayer();
    player.SetVar("recordedSabah",transcript);
    recognition.stop();

    if(transcript.toLowerCase().trim()==="stop recording") {      
      recognition.stop();
    }
  }  
}
else {
  console.log("Votre navigateur ne prend pas en charge la reconnaissance vocale");
  info.textContent = "Votre navigateur ne prend pas en charge la reconnaissance vocale";
}
}

function Script8()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script9()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script10()
{
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
  var player = parent.GetPlayer();
  var sValue = player.GetVar("StorylineVar");
  console.log(sValue);
 
if(SpeechRecognition) {
  console.log("Votre navigateur  prend en charge la reconnaissance vocale");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "ar-MA";

    if( sValue == "start" ) { 
      console.log("start...")
      recognition.start(); 
    }
    else {
      recognition.stop();
     var player = parent.GetPlayer();
     player.SetVar("notPlayed","stop");
    }
  

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
     var player = parent.GetPlayer();
    player.SetVar("notPlayed","stop");
    console.log("Speech recognition service disconnected");   

  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;      
    console.log(transcript)
  
    var player = parent.GetPlayer();
    player.SetVar("recordedMassa",transcript);
    recognition.stop();

    if(transcript.toLowerCase().trim()==="stop recording") {      
      recognition.stop();
    }
  }  
}
else {
  console.log("Votre navigateur ne prend pas en charge la reconnaissance vocale");
  info.textContent = "Votre navigateur ne prend pas en charge la reconnaissance vocale";
}
}

function Script11()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

function Script12()
{
       var player = parent.GetPlayer();
    player.SetVar("notPlayed","start");
}

