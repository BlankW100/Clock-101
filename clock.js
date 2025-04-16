// Function to populate country/timezone selectors with all time zones
function populateCountrySelect() {
    const countrySelect = document.getElementById("countrySelect");
    const countrySelectConvert = document.getElementById("countrySelectConvert");
    
    // Get all time zone names
    const allTimeZones = moment.tz.names();
  
    // Clear existing options in the select elements
    countrySelect.innerHTML = "";
    countrySelectConvert.innerHTML = "";
  
    // Create a list of countries with time zones
    allTimeZones.forEach((zone) => {
      // Extract country/city from the zone (e.g., "America/New_York")
      const countryName = zone.split("/").join(" ");
      
      // Create option element for the country
      const option = document.createElement("option");
      option.value = zone;
      option.textContent = countryName;
  
      // Add options to both dropdowns
      countrySelect.appendChild(option);
      countrySelectConvert.appendChild(option.cloneNode(true));
    });
  }
  
  // Function to update clocks
  function updateClock(selectedCountry, convertCountry) {
    const clockDisplay = document.getElementById("clockDisplay");
    const convertedClock = document.getElementById("convertedClock");
  
    // Get the local time based on the selected country
    const localTime = moment.tz(selectedCountry).format("YYYY-MM-DD HH:mm:ss");
    clockDisplay.innerHTML = `🕒 Local Time in ${selectedCountry}: <strong>${localTime}</strong>`;
  
    // Get the converted time for the selected country
    const convertedTime = moment.tz(convertCountry).format("YYYY-MM-DD HH:mm:ss");
    convertedClock.innerHTML = `🕒 Converted Time in ${convertCountry}: <strong>${convertedTime}</strong>`;
  }
  
  // Handle the conversion country change
  document.getElementById("countrySelectConvert").addEventListener("change", () => {
    const selectedCountry = document.getElementById("countrySelect").value;
    const convertCountry = document.getElementById("countrySelectConvert").value;
    updateClock(selectedCountry, convertCountry);
  });
  
  // Handle the initial country change
  document.getElementById("countrySelect").addEventListener("change", () => {
    const selectedCountry = document.getElementById("countrySelect").value;
    const convertCountry = document.getElementById("countrySelectConvert").value;
    updateClock(selectedCountry, convertCountry);
  });
  
  // Populate the dropdown with countries and their time zones
  populateCountrySelect();
  
  // Set up the default clock when the page loads
  updateClock("America/New_York", "Europe/London"); // Default to New York and London conversion
  