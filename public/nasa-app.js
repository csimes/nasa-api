const baseURL = "https://api.nasa.gov/planetary/apod?";
const k = "nu9FFGClZXH2BcJczfOVerPBwSZdLevxhhOrHTN6";
const date = document.querySelector(".date");
const submitBtn = document.querySelector(".submit-btn");
const section = document.querySelector(".display-details");
const displayDate = document.querySelector(".offcanvas-title");
const nav = document.querySelector("nav")
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');

submitBtn.addEventListener("click", getResults)

async function getResults(e) {
  e.preventDefault();
  let url = `${baseURL}api_key=${k}&date=${date.value}`;
  let response = await fetch(url);
  let data = await response.json();

  const displayWrapper = document.createElement("div");
  const displayTitle = document.createElement("h5")
  const displayExplanation = document.createElement("p");
  const dateInfo = data.date;
  const convertDate = new Date(dateInfo);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  };
  let fullDate = convertDate.toLocaleDateString("default", options);

  displayWrapper.setAttribute("class", "display-wrapper");
  displayDate.setAttribute("class", "display-date");
  displayTitle.setAttribute("class", "title");
  displayExplanation.setAttribute("class", "explanation");

  displayDate.innerText = fullDate;
  displayTitle.innerText = data.title;
  displayExplanation.innerText = data.explanation;

  displayDate.appendChild(displayTitle);

  if (data.media_type == "video") {
    const displayVideo = document.createElement("iframe")
    displayVideo.setAttribute("src", data.url)
    displayVideo.setAttribute("class", "display-video")
    displayWrapper.appendChild(displayVideo)
  } else if (data.media_type == "image") {
    const displayImage = document.createElement("img")
    displayImage.setAttribute("src", data.url)
    displayImage.setAttribute("class", "display-image")
    displayWrapper.appendChild(displayImage)

  }

  displayWrapper.appendChild(displayExplanation)
  section.appendChild(displayWrapper);


  section.replaceChild(displayWrapper, section.firstElementChild);
};