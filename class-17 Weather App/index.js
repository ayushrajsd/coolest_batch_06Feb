let target = "Pune";
// DOM code
const temperatureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location > p");
const dateField = document.querySelector(".time_location > span");
const emojiField = document.querySelector(".weather_condition img");
const conditionField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

form.addEventListener("submit", search);

// callback funciton search

function search(event) {
  event.preventDefault(); // it prevents the default behaviour of any event
  target = searchField.value;
  fetchData(target);
}

async function fetchData(target) {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=5d9564dfb4cc4b00bbe104259242003&q=${target}&aqi=yes
        `;
    const response = await fetch(url); // fetch returns a promise
    console.log(response);
    const data = await response.json(); // response.json() returns a promise but this will contain the data we need
    console.log(data);
    if(data.error){
        throw new Error(data.error.message);
    }
    const currentTemp = data.current.temp_c;
    const currentCondition = data.current.condition.text;
    const locationName = data.location.name;
    const localTime = data.location.localtime;
    const conditionEmoji = data.current.condition.icon;
    console.log(
      `The current temperature in ${locationName} is ${currentTemp}°C. The weather is ${currentCondition}. Local time is ${localTime}.`
    );
    updateDOM(currentTemp, locationName, localTime, conditionEmoji, currentCondition);
  } catch (error) {
    console.log(error);
  }
}

function updateDOM(temp, locationName, time, emoji, condition) {
  temperatureField.innerText = `${temp}°C`;
  cityField.innerText = locationName;
//   2024-03-22 23:11
const exactTime = time.split(" ")[1]; // 23:11
const exactDate = time.split(" ")[0]; // 2024-03-22
const exactDay = new Date(exactDate).getDay(); // 0-6
  dateField.innerText = `${exactTime} ${exactDate} ${getDayFullName(exactDay)}`;
  emojiField.src = emoji;
  conditionField.innerText = condition;
}

function getDayFullName(num){
    switch(num){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default:"Invalid Day"
    }
}

fetchData(target);
