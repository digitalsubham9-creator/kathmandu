const eventDate = new Date('2026-10-02T09:00:00+05:45').getTime();
const units = { days: 86400000, hours: 3600000, minutes: 60000, seconds: 1000 };

function updateTimer() {
  let remaining = Math.max(0, eventDate - Date.now());
  for (const [id, unit] of Object.entries(units)) {
    const value = Math.floor(remaining / unit);
    remaining %= unit;
    document.getElementById(id).textContent = String(value).padStart(2, '0');
  }
}

updateTimer();
setInterval(updateTimer, 1000);

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form-message').textContent = 'Thank you — we’ll be in touch soon.';
  event.currentTarget.reset();
});
