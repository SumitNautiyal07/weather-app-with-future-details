# 🌦️ Weather App with 7-Day Forecast

A modern weather application built using **HTML, CSS, and JavaScript** that provides real-time weather information along with a **7-day weather forecast** using the **OpenWeather API**. The application features a clean, responsive interface and displays detailed weather conditions for any searched location.

---

# ✨ Features

## 🌍 Current Weather

* Search weather by city name
* Displays:

  * 🌡️ Current temperature
  * 🤒 Feels like temperature
  * 💧 Humidity
  * 🌬️ Wind speed
  * 📊 Atmospheric pressure
  * 👁️ Visibility
  * ☁️ Weather condition and description
  * 🌅 Sunrise & Sunset timings

## 📅 7-Day Weather Forecast

* View weather predictions for the next seven days
* Daily maximum and minimum temperatures
* Weather icons for each day
* Weather descriptions for upcoming days

## 🎨 User Interface

* Modern and minimal design
* Responsive layout for desktop, tablet, and mobile devices
* Clean weather cards with intuitive icons
* Smooth transitions and hover effects
* Easy-to-read weather information

## 🔍 Search Functionality

* Search weather for any city worldwide
* Instant weather updates
* Handles invalid city names gracefully

---

# 🚀 How to Use

1. Download or clone this repository.
2. Open the project folder.
3. Add your own OpenWeather API keys (see API Setup below).
4. Open `index.html` in your browser.
5. Search for any city to view its current weather and 7-day forecast.

---

# 🔑 API Setup

This project uses the **OpenWeather API**.

Before running the project, you **must replace the API keys with your own**.

You will need:

* **Current Weather API Key**
* **7-Day Forecast (One Call API) Key**

Update both API keys in the JavaScript file before running the application.

You can get your free API key from:

https://openweathermap.org/api

> **Important:** The application will not work until you replace both API keys with your own OpenWeather API keys.

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeather API

---

# 📁 Project Structure

```
weather-app-with-future-details/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # Weather fetching logic
├── assets/             # Images/Icons (if applicable)
└── README.md
```

---

# ⚙️ Technical Implementation

## Weather Data

* Fetches real-time weather information using the OpenWeather Current Weather API.
* Retrieves a 7-day forecast using the OpenWeather Forecast/One Call API.
* Uses asynchronous JavaScript (`fetch` and Promises) for API requests.
* Dynamically updates the UI based on API responses.

## JavaScript

* Fetch API for retrieving weather data
* Async/Await for API handling
* DOM Manipulation
* Error handling for invalid locations
* Dynamic weather icon rendering

## CSS

* Responsive design
* Flexbox/Grid layout
* Modern color palette
* Hover animations
* Mobile-friendly interface

---

# 🎨 Design Features

## Visual Elements

* Modern weather cards
* Dynamic weather icons
* Clean typography
* Soft color scheme
* Responsive layout

## User Experience

* Fast city search
* Easy-to-read weather details
* Responsive design for all screen sizes
* Smooth UI interactions

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

---

# 🌐 Browser Compatibility

* ✅ Google Chrome
* ✅ Mozilla Firefox
* ✅ Microsoft Edge
* ✅ Safari
* ✅ Mobile Browsers

---

# 🚀 Getting Started

## Prerequisites

* A modern web browser
* Internet connection
* OpenWeather API Key

## Installation

```bash
git clone https://github.com/SumitNautiyal07/weather-app-with-future-details.git
```

Open the project folder and launch `index.html`.

---

# 🔮 Future Enhancements

Possible improvements include:

* 📍 Current location weather using Geolocation API
* 🕒 Hourly weather forecast
* 🌙 Dark/Light mode
* ⭐ Favorite cities
* 🌡️ Celsius/Fahrenheit toggle
* 🌧️ Weather alerts
* 🗺️ Interactive weather maps
* 📊 Air Quality Index (AQI)

---

# 📄 License

This project is open source and available under the MIT License.

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve the project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a Pull Request.

---

# 📂 GitHub Repository

Repository:

**https://github.com/SumitNautiyal07/weather-app-with-future-details**

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

If you encounter any issues or have suggestions, feel free to open an Issue in the repository.

---

Made with ❤️ using **HTML, CSS, JavaScript, and OpenWeather API**.
