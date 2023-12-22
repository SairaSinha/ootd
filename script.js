// Move this function definition to the top of script.js
function navigate(page) {
  const contentElement = document.getElementById('content');

  // Clear existing content
  contentElement.innerHTML = '';

  // Load content based on the selected page
  switch (page) {
    case 'home':
      updateHomePage();
      break;
    case 'explore':
      // Add code to load explore page content
      contentElement.textContent = 'Explore page content';
      break;
    case 'activity':
      // Add code to load activity dashboard content
      contentElement.textContent = 'Activity dashboard content';
      break;
    case 'wardrobe':
      // Add code to load wardrobe page content
      contentElement.textContent = 'Wardrobe page content';
      break;
    case 'profile':
      loadUserProfile(); // Call function to load user profile
      break;
    default:
      break;
  }
}

// Function to update the homepage content
async function updateHomePage() {
  const contentElement = document.getElementById('content');

  // Clear existing content
  contentElement.innerHTML = '';

  // Create and append new content
  const homeContent = document.createElement('div');
  homeContent.innerHTML = `
    <h1 id="h1">OOTD</h1>
    <div id="weather">
      <p id="weather-info">Loading weather...</p>
    </div>
    <div id="date">
      <p id="date-info">Loading date...</p>
    </div>
    <p id="welcome-text">Welcome to your digital wardrobe! What would you like to wear today?</p>
    <div id="wardrobe">
      <!-- Wardrobe items will be dynamically added here -->
    </div>
  `;
  
  // Append the content to the homepage
  contentElement.appendChild(homeContent);

  try {
    // Call functions to load weather and wardrobe
    await loadWeather();
    updateDate(); // Call function to update the date
    // displayWardrobeItems(); // Uncomment if you have this function
  } catch (error) {
    console.error('Error updating homepage:', error.message);
  }
}

// Function to update the date content
function updateDate() {
  const dateInfoElement = document.getElementById('date-info');
  const currentDate = getCurrentDate();
  dateInfoElement.textContent = `Date: ${currentDate}`;
}

// Call the function to update the homepage information
updateHomePage();


// Call the function to update the homepage information
updateHomePage();


// Function to load user profile
function loadUserProfile() {
  const contentElement = document.getElementById('content');

  // Clear existing content
  contentElement.innerHTML = '';

  // Load content for the profile page
  const profileContent = document.createElement('div');
  profileContent.innerHTML = `
    <h2>User Profile</h2>
    <p>Username: JohnDoe</p>
    <p>Bio: Fashion enthusiast</p>
    <p>Profile Picture: <img src="path/to/default-profile-pic.png" alt="Profile Picture"></p>
    <p>Outfit of the Day: Your outfit content here</p>
  `;

  // Append the content to the profile page
  contentElement.appendChild(profileContent);
}

// Function to display wardrobe items
//function displayWardrobeItems() {
 // const wardrobeContainer = document.getElementById('wardrobe');

  // Sample wardrobe items (you can replace this with your data)
 // const wardrobeItems = [
 //   { name: 'T-shirt', category: 'Clothing' },
  //  { name: 'Jeans', category: 'Clothing' },
  //  { name: 'Sneakers', category: 'Footwear' },
    // Add more items as needed
  //];

 // wardrobeItems.forEach(item => {
 //  const itemElement = document.createElement('div');
  //  itemElement.classList.add('wardrobe-item');
  //  itemElement.textContent = `${item.name} (${item.category})`;
//
 //  wardrobeContainer.appendChild(itemElement);
 // });
//}

// Function to get weather information from OpenWeatherMap API
async function loadWeather() {
  const weatherInfoElement = document.getElementById('weather-info');
  
  try {
    const weatherData = await getWeather();
    weatherInfoElement.textContent = weatherData;
  } catch (error) {
    console.error('Error loading weather:', error.message);
    weatherInfoElement.textContent = 'Unable to fetch weather';
  }
}

// Function to get weather information from OpenWeatherMap API
async function getWeather() {
  const apiKey = 'b53b71a4786744b2bfb53944231312';
  const city = 'Bangalore';
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = data.main.temp_c;
    const weatherDescription = data.weather[0].description;

    return `Weather in ${city}: ${temperature}°C, ${weatherDescription}`;
  } catch (error) {
    console.error('Error fetching weather:', error.message);
    throw error;
  }
}

// Function to get the current date and time
function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toDateString();
}

// script.js

function signIn() {
  // Your sign-in logic goes here
  console.log('Regular sign-in logic');
}


// Call the function to update the homepage information
updateHomePage();
