const fields = [
  "todayNote",
  "rateDay",
  "studied-hours",
  "book",
  "readingGoal",
  "walterNote",
  "plant",
  "food",
  "tinyTask"
];

const dateText = document.querySelector("#dateText");
const greeting = document.querySelector("#greeting");

const rateDayValue = document.querySelector("#rateDayValue");
const studiedHoursValue = document.querySelector("#studiedHoursValue");

const now = new Date();

dateText.textContent = now.toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long"
});

const hour = now.getHours();
greeting.textContent =
  hour < 12
    ? "Good morning, Evan"
    : hour < 18
    ? "Good afternoon, Evan"
    : "Good evening, Evan";

function saveField(id) {
  const el = document.getElementById(id);
  localStorage.setItem(`dashboard-${id}`, el.value);
}

function loadField(id) {
  const el = document.getElementById(id);
  const saved = localStorage.getItem(`dashboard-${id}`);
  if (saved !== null) el.value = saved;
}

function updateNumbers() {
  rateDayValue.textContent = document.getElementById("rateDay").value;
  studiedHoursValue.textContent = document.getElementById("studied-hours").value;
}

fields.forEach((id) => {
  const el = document.getElementById(id);
  loadField(id);

  el.addEventListener("input", () => {
    saveField(id);
    updateNumbers();
  });
});

updateNumbers();

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Clear today’s dashboard?")) return;

  fields.forEach((id) => localStorage.removeItem(`dashboard-${id}`));
  location.reload();
});
