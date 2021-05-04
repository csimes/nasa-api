const baseURL = "https://api.nasa.gov/planetary/apod?";
const k = "nu9FFGClZXH2BcJczfOVerPBwSZdLevxhhOrHTN6";
const date = document.querySelector(".date")
const submitBtn = document.querySelector(".submit-btn")

submitBtn.onclick = function() {getResults()};
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

async function getResults () {
let url = `${baseURL}api_key=${k}&date=${date.value}`;
let response = await fetch(url);
let data = await response.json();
console.log(data);

function displayResults() {

    
    let display = document.querySelector(".display-details")
    let displayDate = document.createElement("p");
    let displayTitle = document.createElement("p")
    let displayExplanation = document.createElement("p"); 
    let displayImage = document.createElement("img")
    displayDate.setAttribute("class", "display-date");
    displayDate.innerText = data.date;
    display.appendChild(displayDate);
    displayTitle.setAttribute("class", "title");
    displayTitle.innerText = data.title;
    display.appendChild(displayTitle);
    displayExplanation.setAttribute("class", "explanation"); 
    displayExplanation.innerText = data.explanation; 
    display.appendChild(displayExplanation)
    displayImage.setAttribute("src", data.url)
    display.appendChild(displayImage)
    
    // while (display.firstChild) {
    // display.removeChild(display.firstChild);
    // }
}
displayResults(data);
}
getResults();
