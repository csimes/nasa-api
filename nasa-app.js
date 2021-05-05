const baseURL = "https://api.nasa.gov/planetary/apod?";
const k = "nu9FFGClZXH2BcJczfOVerPBwSZdLevxhhOrHTN6";
const date = document.querySelector(".date")
const submitBtn = document.querySelector(".submit-btn")
let section = document.querySelector(".display-details")

submitBtn.onclick = function() {getResults()};
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
})

async function getResults() {
    let url = `${baseURL}api_key=${k}&date=${date.value}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)


let displayWrapper = document.createElement("div")
let displayDate = document.createElement("p");
let displayTitle = document.createElement("p")
let displayExplanation = document.createElement("p"); 
let dataDate = data.date;

displayWrapper.setAttribute("class", "display-wrapper")
displayDate.setAttribute("class", "display-date");
displayTitle.setAttribute("class", "title");
displayExplanation.setAttribute("class", "explanation"); 
let dateInfo = data.date
// let fullDate = dataDate.split(" ");
// console.log(fullDate)
// let day = fullDate[0].split("-")
// console.log(day)
// // let month = [" ","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// // console.log(month)
// // console.log(month[day])
// // let newDate = `${day[1]}/${day[2]}/${day[0]}`
// console.log(newDate)

const fullDate = new Date(dateInfo);
// console.log(fullDate.toLocaleDateString("default", {month:"long"}))



displayDate.innerText = fullDate;

displayTitle.innerText = data.title;
displayExplanation.innerText = data.explanation; 

displayWrapper.appendChild(displayDate);
displayWrapper.appendChild(displayTitle);
displayWrapper.appendChild(displayExplanation)
section.appendChild(displayWrapper);

if (data.media_type == "video") {
    let video = document.createElement("iframe")
    video.setAttribute("src", data.url)
    displayWrapper.appendChild(video)
} else if (data.media_type == "image") {
    let displayImage = document.createElement("img")
    displayImage.setAttribute("src", data.url)
    displayWrapper.appendChild(displayImage)

}

section.replaceChild(displayWrapper, section.firstElementChild);

}
