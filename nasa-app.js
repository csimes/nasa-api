const baseURL = "https://api.nasa.gov/planetary/apod?";
const k = "nu9FFGClZXH2BcJczfOVerPBwSZdLevxhhOrHTN6";
const date = document.querySelector(".date");
const submitBtn = document.querySelector(".btn btn-primary");
const section = document.querySelector(".display-details");
// const nav = document.querySelector('nav');
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');



// let pageNumber = 0; // counter
// // console.log('PageNumber:', pageNumber); 
// let displayNav = false;

// nav.style.display = 'none';



submitBtn.onclick = function() {getResults()};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
})

async function getResults() {
  let url = `${baseURL}api_key=${k}&date=${date.value}`;
  let response = await fetch(url);
  let data = await response.json();
  
  const displayWrapper = document.createElement("div")
  const displayDate = document.createElement("p");
  const displayTitle = document.createElement("p")
  const displayExplanation = document.createElement("p"); 
  const dateInfo = data.date;
  console.log(dateInfo)
  const convertDate = new Date(dateInfo);
  console.log(convertDate)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  // const fullDate = convertDate.toLocaleDateString("default", options);
  fullDate = convertDate.toUTCString();
  console.log(fullDate);


  displayWrapper.setAttribute("class", "display-wrapper")
  displayDate.setAttribute("class", "display-date");
  displayTitle.setAttribute("class", "title");
  displayExplanation.setAttribute("class", "explanation"); 
  
  
  displayDate.innerText = fullDate;
  displayTitle.innerText = data.title;
  displayExplanation.innerText = data.explanation; 
  
  displayWrapper.appendChild(displayDate);
  displayWrapper.appendChild(displayTitle);
  displayWrapper.appendChild(displayExplanation)
  section.appendChild(displayWrapper);
  
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
  
  section.replaceChild(displayWrapper, section.firstElementChild);
  
  
  
  
  // if (data.length >= 1) {
  //   nav.style.display = "block";
  // }   else {
  //   nav.style.display = "none";
  // }
  
  // function nextPage() {
  //   pageNumber++; 
  //   getResults(); 
  //   console.log("Page number:", pageNumber); 
  // };
  
  // function previousPage(){
  //   if(pageNumber > 0) { 
  //     pageNumber--;
  //   } else {
  //     return;
  //   }
    
    
  // };
  
  // getResults();
  // console.log("Page", pageNumber)
};

// nextBtn.addEventListener('click', nextPage());
// previousBtn.addEventListener('click', previousPage());