var friendlyScore = 0;
var lazyScore = 0;
var sigmaScore = 0;
var cuteScore = 0;

var questionCount = 0;

var result = document.getElementById("result")
var restart = document.getElementById("restart");
restart.addEventListener("click", resetQuiz);

// questions

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

// button

q1a1.addEventListener("click", sigma );
q1a2.addEventListener("click", friendly );
q1a3.addEventListener("click", lazy );
q1a4.addEventListener("click", cute );

q2a1.addEventListener("click", friendly );
q2a2.addEventListener("click", sigma );
q2a3.addEventListener("click", cute );
q2a4.addEventListener("click", lazy );

q3a1.addEventListener("click", friendly );
q3a2.addEventListener("click", cute );
q3a3.addEventListener("click", lazy );
q3a4.addEventListener("click", sigma );

q4a1.addEventListener("click", lazy );
q4a2.addEventListener("click", friendly );
q4a3.addEventListener("click", cute );
q4a4.addEventListener("click", sigma );

q5a1.addEventListener("click", lazy );
q5a2.addEventListener("click", sigma );
q5a3.addEventListener("click", friendly );
q5a4.addEventListener("click", cute );

q6a1.addEventListener("click", friendly );
q6a2.addEventListener("click", lazy );
q6a3.addEventListener("click", cute );
q6a4.addEventListener("click", sigma );

// functions

function friendly() {
  friendlyScore += 1;
  questionCount +=1;

  console.log("questionCount" + questionCount + " friendlyScore " + friendlyScore);

if (questionCount == 6) {
  console.log("You have completed the quiz!!")
  updateResult();
}
 
}

function lazy() {
  lazyScore += 1;
  questionCount +=1;

  console.log("questionCount" + questionCount + " lazyScore " + lazyScore);

if (questionCount == 6) {
  console.log("You have completed the quiz!!")
  updateResult();
}

}

function sigma() {
  sigmaScore += 1;
  questionCount +=1;

  console.log("questionCount" + questionCount + " sigmaScore " + sigmaScore);

if (questionCount == 6) {
  console.log("You have completed the quiz!!")
  updateResult();
}

}

function cute() {
  cuteScore += 1;
  questionCount +=1;

  console.log("questionCount" + questionCount + " cuteScore " + cuteScore);

if (questionCount == 6) {
  console.log("You have completed the quiz!!")
  updateResult();
}

}

function updateResult(){
  if (sigmaScore >=3){
    console.log("You are a sigma cat!")
    result.innerHTML = "You are a sigma cat!"
  }
  else if (lazyScore >=3){
    console.log("you are a lazy cat!")
    result.innerHTML = "You are a lazy cat!"
  }
  else if (friendlyScore >=3){
    console.log("you are a friendly cat!")
    result.innerHTML = "You are a friendly cat!"
  }
  else if (cuteScore >=3){
    console.log("you are a cute cat!")
    result.innerHTML = "You are a cute cat!"
    }
  else{
    result.innerHTML = "You are a unique cat!" }
}




// disable the button after clicking

document.getElementById("q1a1").disabled = false;
document.getElementById("q1a2").disabled = false;
document.getElementById("q1a3").disabled = false;
document.getElementById("q1a4").disabled = false;

document.getElementById("q2a1").disabled = false;
document.getElementById("q2a2").disabled = false;
document.getElementById("q2a3").disabled = false;
document.getElementById("q2a4").disabled = false;

document.getElementById("q3a1").disabled = false;
document.getElementById("q3a2").disabled = false;
document.getElementById("q3a3").disabled = false;
document.getElementById("q3a4").disabled = false;

document.getElementById("q4a1").disabled = false;
document.getElementById("q4a2").disabled = false;
document.getElementById("q4a3").disabled = false;
document.getElementById("q4a4").disabled = false;

document.getElementById("q5a1").disabled = false;
document.getElementById("q5a2").disabled = false;
document.getElementById("q5a3").disabled = false;
document.getElementById("q5a4").disabled = false;

document.getElementById("q6a1").disabled = false;
document.getElementById("q6a2").disabled = false;
document.getElementById("q6a3").disabled = false;
document.getElementById("q6a4").disabled = false;


q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);
q1a3.addEventListener("click", disableq1);
q1a4.addEventListener("click", disableq1);
q2a1.addEventListener("click", disableq2);
q2a2.addEventListener("click", disableq2);
q2a3.addEventListener("click", disableq2);
q2a4.addEventListener("click", disableq2);
q3a1.addEventListener("click", disableq3);
q3a2.addEventListener("click", disableq3);
q3a3.addEventListener("click", disableq3);
q3a4.addEventListener("click", disableq3);
q4a1.addEventListener("click", disableq4);
q4a2.addEventListener("click", disableq4);
q4a3.addEventListener("click", disableq4);
q4a4.addEventListener("click", disableq4);
q5a1.addEventListener("click", disableq5);
q5a2.addEventListener("click", disableq5);
q5a3.addEventListener("click", disableq5);
q5a4.addEventListener("click", disableq5);
q6a1.addEventListener("click", disableq6);
q6a2.addEventListener("click", disableq6);
q6a3.addEventListener("click", disableq6);
q6a4.addEventListener("click", disableq6);


function disableq1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  
}

function disableq2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

function disableq3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

function disableq4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
}

function disableq5(){
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function disableq6(){
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
}

function enableqs(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false; 
  q1a4.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false; 
  q2a4.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false; 
  q3a4.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false; 
  q4a4.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false; 
  q5a4.disabled = false;
  q6a1.disabled = false; 
  q6a2.disabled = false;
  q6a3.disabled = false; 
  q6a4.disabled = false;
}

function resetQuiz(){
  result.innerHTML = "Your result is...";
  questionCount = 0;
  var friendlyScore = 0;
  var lazyScore = 0;
  var sigmaScore = 0;
  var cuteScore = 0;
  enableqs();
}
