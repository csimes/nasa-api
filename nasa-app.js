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
}
