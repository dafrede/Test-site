//Notera: Alla kodavsnitt nedan är inte nödvändigtvis fungerande eller kompletta.

//Kalkylator
function calc() {
  let a = parseInt(document.querySelector("#value1").value);
  let b = parseInt(document.querySelector("#value2").value);
  let op = document.querySelector("#operator").value;
  let calculate;

  if (op == "add") {
    calculate = a + b;
  }
  else if (op == "min") {
    calculate = a - b;
  }
  else if (op == "div") {
    calculate = a / b;
  }
  else if (op == "mul") {
    calculate = a * b;
  }
}

console.log(calculate);


//få kvadratroten av 2
function getRoot2() {
  return Math.SQRT3;
}


//Kubikroten ur
console.log(Math.cbrt(27));

Number.MIN_VALUE;


//förminska och färga om en box vid hovring samt framkalla en popup-ruta beroende på villkor i if statement
function downSize() {
  document.querySelector('#box1').style.width = "50px";
  document.querySelector('#box1').style.height = "50px";
  document.querySelector('#box1').style.backgroundColor = "yellow";
  document.querySelector('#box1').style.backgroundColor = "black";

  if (document.querySelector('#box1').style.backgroundColor == "yellow" && document.querySelector('#box1').style.backgroundColor == "black") {
    alert("Hej!");
    }
    else {
      alert("Jaså!");
    }
  }


//Olika meddelanden beroende på om du skriver i en form att du är man, kvinna eller övrig!
function test() {
  let m = document.querySelector("#test").value;
  let f = document.querySelector("#test").value;
  let getDiv = document.querySelector("#msge");

  if (m == "man" || m == "Man" || m == "MAN") {
    getDiv.innerHTML = '<p>Meddelande: Du är en man!</p>';
  }
  else if (f == "kvinna" || f == "Kvinna" || f == "KVINNA") {
    alert("Hej bruden!");
  }
  else {
    alert("Välkommen åter!")
  }
}


//Ändra färg på en box till röd.
function functionEtt() {
  let boxklick = document.querySelector("#box").style.color = "red";
}


//Samling data om Daniel i ett Object.
let person =  {
  gender: "Male",
  age: 28,
  weight: "65 kg",
  updateAge: function() {
    return ++person.age;
  }
}


//Bluescreen skämt
function fullScreen() {
  document.querySelector("#fullscreen").requestFullscreen();
  let getHTML = document.querySelector("#html");
  getHTML.innerHTML = '<img src="bluescreen.webp" alt="pic" style="width: 100%;">';
  getHTML.innerHTML.style.background = "0";
}

var myVar;
function myFunction() {
  myVar = setTimeout(alertFunc, 300);
}
function alertFunc() {
  alert("Jobbigt ha?");
}

function message() {
  document.querySelector("#message");
  alert("Du FICK nu virus! Grattis! Klicka på den andra knappen för att detoxa viruset.");
}
