`use strict`
const apiKey = "1126efff89ad48a7a56215324231408";
const displayWeartherInfo = document.querySelectorAll(".displayInfo");
const todayDate = document.getElementById("today");
const tomorrowDate = document.getElementById("tomorrow");
const afterTomorrowDate = document.getElementById("after");
const dateByNum= document.querySelector(".date");
const dateByNum2= document.querySelector(".date2");
const dateByNum3= document.querySelector(".date3");
const inputAddData = document.querySelector("#inputAddData")

inputAddData.addEventListener('keypress' ,function(eventInfo){
   if (eventInfo.key === "Enter") {
 httpRequest(inputAddData.value)
 inputAddData.style.backgroundColor= "#2B3035";
   }
})
inputAddData.addEventListener('focus' ,function(eventInfo){
   inputAddData.style.backgroundColor= "#000";
})
async function httpRequest(city) 
{
   const url =  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
  
    try {
      const apiResponse = await fetch(url)
      const apiData = await apiResponse.json();
      let daysInfo = apiData.forecast.forecastday
      for (let i = 0; i < daysInfo.length; i++) {
     const day = `
     <p class="m-0">${apiData.location.name}</p>
     <h1 class="m-0">
       <span class="degree pb-5">${daysInfo[i].day.avgtemp_c}°C</span>
       <span><img src="${daysInfo[i].day.condition.icon}" alt=""></span>
       <p class="m-0 fs-6 text-primary p-5">${daysInfo[i].day.condition.text}</p>
     </h1>
     <div class="pb-5">
     <span class="px-2"> <img src="img/icon-umberella.png" class="px-2">20%</span>
     <span class="px-2"> <img src="img/icon-wind.png" class="px-2">18km/h</span>
     <span class="px-2"> <img src="img/icon-compass.png" class="px-2">East</span>
     </div>
   `;
   displayWeartherInfo[i].innerHTML= day ;
}
   
    } catch (error) {
      if (error) {
         alert("Not matching Location");
      }
     
    }

};  

httpRequest('Cairo') ;

  // Get the current date
const numTodayDate = new Date();
const options = {day: 'numeric', month: 'long'};
const formattedDate = numTodayDate.toLocaleDateString('en-EG', options);
 
const numTomorrowDate = new Date()
numTomorrowDate.setDate(numTodayDate.getDate() + 1);
const options2 = {day: 'numeric', month: 'long'};
const formattedDate2 = numTomorrowDate.toLocaleDateString('en-EG', options2);

const numAfterTomorrow = new Date()
numAfterTomorrow.setDate(numTomorrowDate.getDate() + 1);
const options3 = {day: 'numeric', month: 'long'};
const formattedDate3 = numAfterTomorrow.toLocaleDateString('en-EG', options3);


const today = new Date();

  // Calculate the date for tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  // Calculate the date for the day after tomorrow
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(today.getDate() + 2);
  // Define an array of day names
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Get the day names for today, tomorrow, and the day after tomorrow
  const todayName = daysOfWeek[today.getDay()];
  const tomorrowName = daysOfWeek[tomorrow.getDay()];
  const dayAfterTomorrowName = daysOfWeek[dayAfterTomorrow.getDay()];
  todayDate.innerHTML = todayName;
  tomorrowDate.innerHTML = tomorrowName;
  afterTomorrowDate.innerHTML = dayAfterTomorrowName;
  dateByNum.innerHTML= formattedDate;
  dateByNum2.innerHTML= formattedDate2;
  dateByNum3.innerHTML= formattedDate3;

// https://api.weatherapi.com/v1/forecast.json?key=1126efff89ad48a7a56215324231408&q=egypt&days=3


