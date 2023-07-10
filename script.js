// console.log("hello");
// alert("this page works right")
// var userName = prompt("Enter your name?")
// console.log("Hello "+ userName);
// alert("hello");
var btnTranslate = document.querySelector("#btn");
var text = document.querySelector("#text");  
var OutputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverURL +"?" + "text="+text;
}

function errorHandler(error){
    console.log("Error occured:" + error)
} 

function clickHandler(){
    var InputText = text.value; //taking input
    //calling server for processing
    fetch(getTranslation(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated; 
        OutputDiv.innerText = translatedText;
        console.log(json.contents.translated)
    })
    .catch(errorHandler)
}
// OutputDiv.innerText = "Tanisha Verma"; //output
btnTranslate.addEventListener("click", clickHandler);

// console.log("input", textInput.value) //input
// fetch(url)
// .then(response => response.json())
// .then(json => console.log(json))
