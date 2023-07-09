// console.log("hello");
// alert("this page works right")
// var userName = prompt("Enter your name?")
// console.log("Hello "+ userName);
// alert("hello");
var btnTranslate = document.querySelector("#btn");
var text = document.querySelector("#text");  
var OutputDiv = document.querySelector("#output");

// OutputDiv.innerText = "Tanisha Verma"; //output
btnTranslate.addEventListener("click", function clickEventHandler(){
    // console.log("input", textInput.value) //input
    OutputDiv.innerText = "aaaaaa" + text.value;
});