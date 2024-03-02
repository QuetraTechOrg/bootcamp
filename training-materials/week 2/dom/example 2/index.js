// Get references to DOM elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0; // Initialize counter value

// Update the counter display with the current count
function updateCountDisplay() {
  countDisplay.textContent = count;
}

// Increment the counter value
function incrementCount() {
  count++;
  updateCountDisplay();
}

// Decrement the counter value
function decrementCount() {
  if (count > 0) {
    count--;
    updateCountDisplay();
  }
}

// Reset the counter value to 0
function resetCount() {
  count = 0;
  updateCountDisplay();
}

// Add event listeners to buttons
incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);
resetBtn.addEventListener("click", resetCount);

// Initial display
updateCountDisplay();
