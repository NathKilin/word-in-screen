let ratingValue = null; // Variable to recive the selected value

const ratingButtons = document.querySelectorAll('.rating-btn');// select all the rating buttons

// Add an event listener to each button  :O
ratingButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // remove 'active' of all buttons
    ratingButtons.forEach(btn => btn.classList.remove('active'));

    // add 'active' only to the selected button
    event.target.classList.add('active');

    // remember and keeps the value in the selected button
    ratingValue = event.target.innerText;
    console.log(`Rating selecionado: ${ratingValue}`);
  });
});

//reading a click out of the buttons
document.addEventListener('click', (event) => {
  //check if the click is realy out of the button
  if (!event.target.classList.contains('rating-btn')) {
    // Remove the 'active' from the button
    ratingButtons.forEach(btn => btn.classList.remove('active'));
  }
});

// Function to submit the value in the pressed button
function submitRating() {
  console.log(`Tentando enviar: ${ratingValue}`); 
  if (ratingValue) {
    localStorage.setItem('selectedRating', ratingValue); // keep in localStorage
    window.location.href = 'thank-you.html'; // Redirects to the thank-you page
  } else {
    alert('Please, select an option before submit.');
  }
}

// loads the kept value and shows it in the screen
window.onload = () => {
  const selectedRating = localStorage.getItem('selectedRating');
  if (selectedRating) {
    document.getElementById('selected-rating').innerText = ` ${selectedRating} `;
  } else {
    document.getElementById('selected-rating').innerText = "No rating selected";
  }
};
