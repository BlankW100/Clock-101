dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);



// Common timezones (you can add more later)
const timezones = [
  'Asia/Kuala_Lumpur',
  'Asia/Tokyo',
  'Europe/London',
  'America/New_York',
  'Australia/Sydney',
  'UTC'
];

// Load timezones into the <select> dropdown
function populateTimezoneDropdown() {
  const tzSelect = document.getElementById('timezone');

  timezones.forEach(zone => {
    const option = document.createElement('option');
    option.value = zone;
    option.textContent = zone;
    tzSelect.appendChild(option);
  });
}

// Call this function when the page loads
window.onload = populateTimezoneDropdown;



// =================================== //

function convertTime() {
  const input = document.getElementById('datetime').value;
  const selectedTZ = document.getElementById('timezone').value;
  const convertedDiv = document.getElementById('converted');

  // 🚫 Validate inputs
  if (!input || !selectedTZ) {
    convertedDiv.textContent = 'Please enter both date/time and timezone.';
    return;
  }


  const inputTime = dayjs(input);
  const utcTime = inputTime.utc();
  const converted = utcTime.tz(selectedTZ);

  // ✅ Display result
  convertedDiv.textContent = `In ${selectedTZ}: ${converted.format('YYYY-MM-DD HH:mm:ss')}`;
}



// ========================
// ⏰ Alarm Functionality
// ========================

function setAlarm() {
  const alarmInput = document.getElementById('alarmTime').value;

  if (!alarmInput) {
    alert('⚠️ Please enter an alarm time.');
    return;
  }

  const alarmTime = new Date(alarmInput).getTime();
  const now = Date.now();
  const delay = alarmTime - now;

  if (delay <= 0) {
    alert('⚠️ The alarm time must be in the future.');
    return;
  }

  // 🔔 Set timeout alarm
  setTimeout(() => {
    alert('⏰ Alarm! Time’s up!');
    // TODO: Add sound, notification, or email reminder
  }, delay);

  alert('✅ Alarm is set successfully!');
}
