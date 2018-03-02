let screenMe = document.querySelector("#screen").innerHTML;

//operators
let butClear = document.querySelector("#clear");
butClear.addEventListener("click", function() {
  document.querySelector("#screen").innerHTML = ""
})

let butDivide = document.querySelector("#divide");
butDivide.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "/"
})

let butMultiply = document.querySelector("#multiply");
butMultiply.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "*"
})

let butMinus = document.querySelector("#minus");
butMinus.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "-"
})

let butPlus = document.querySelector("#plus");
butPlus.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "+"
})

let butEquals = document.querySelector("#equals");
butEquals.addEventListener("click", function(){
let answer = document.querySelector("#screen").innerHTML;
let answerArr = answer.split("")
let last = answerArr[answerArr.length-1]
if (last === "+" || last === "-" || last === "x" || last === "/") {
  document.querySelector("#screen").innerHTML = "ERROR"
}
else if (answer === "07734") {
  document.querySelector("#screen").innerHTML = "HELLO"
}
// if (answerArr[i] === "x") {
//         answerArr = answer.split("")
//     for (i=0; i < answerArr.length; i++) {
//       answerArr[i].replace("x", "*")
//       }
// document.querySelector("#screen").innerHTML = eval(answer)
// }
else {
  document.querySelector("#screen").innerHTML = eval(answer)
}
})

//buttons and clickie
let butSeven = document.querySelector("#seven");
butSeven.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "7"
})

let butEight = document.querySelector("#eight");
butEight.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "8"
})

let butNine = document.querySelector("#nine");
butNine.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "9"
})

let butFour = document.querySelector("#four");
butFour.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "4"
})

let butFive = document.querySelector("#five");
butFive.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "5"
})

let butSix = document.querySelector("#six");
butSix.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "6"
})

let butOne = document.querySelector("#one");
butOne.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "1"
})

let butTwo = document.querySelector("#two");
butTwo.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "2"
})

let butThree = document.querySelector("#three");
butThree.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "3"
})

let butZero = document.querySelector("#zero");
butZero.addEventListener("click", function(){
  if (document.querySelector("#screen").innerHTML === "ERROR") {
    document.querySelector("#screen").innerHTML = "" }
  document.querySelector("#screen").innerHTML += "0"
})
