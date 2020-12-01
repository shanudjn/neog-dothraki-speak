var inputText = document.querySelector('#input-text');
var btnTranslate = document.querySelector('#btn-translate')
var outputArea = document.querySelector('#output-area');


var url = 'https://api.funtranslations.com/translate/valyrian.json'

function getTranslateURL(text) {
    return url + "?" + "text=" + text;
}
function displayTranslation(outputText) {
    console.log(outputText)
    outputArea.innerText = outputText //add the tranlsation to the reqd div
}



function errorHandler(error) {
    console.log("Error occured" + error);
}

function clickHandler() {

    let inputTextValue = inputText.value; //take value from input

    fetch(getTranslateURL(inputTextValue))
        .then(response => response.json())
        .then(json => {
            console.log(json)

            displayTranslation(json.contents.translated);
        })
        .catch(errorHandler);

}
//entry point
btnTranslate.addEventListener("click", clickHandler);