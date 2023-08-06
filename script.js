// JavaScript for the first page (index.html)
function checkPassword() {
  const passwordInput = document.getElementById('passwordInput');
  const password = passwordInput.value;

  // Replace 'your_password_here' with the actual password you want to use
  const correctPassword = 'ilu';

  if (password === correctPassword) {
    // Save the password as a URL parameter when redirecting to the next page
    window.location.href = 'next-page.html?password=' + encodeURIComponent(password);
  } else {
    const errorText = document.getElementById('errorText');
    errorText.textContent = 'Invalid password. Please try again.';
  }
}

// ... (rest of the JavaScript as before) ...


// ... Previous JavaScript code ...

// Function to close the modal
function closeModal() {
  const congratsModal = document.getElementById('congratsModal');
  congratsModal.style.display = 'none';
}

// Check if the user came from the second page with correct answers
window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const isCorrectAnswers = urlParams.get('correctAnswers');

  if (isCorrectAnswers === 'true') {
    // Show the congratulations modal if the user got all answers correct
    const congratsModal = document.getElementById('congratsModal');
    congratsModal.style.display = 'block';
  }
};

// ... Previous JavaScript code ...

// Function to close the modal (same as before)

// ... Previous JavaScript code ...

// Function to handle image clicks and redirect to the fourth page
const imageGallery = document.querySelectorAll('.image-gallery a');

imageGallery.forEach((imageLink) => {
  imageLink.addEventListener('click', (event) => {
    event.preventDefault();
    const imageUrl = imageLink.getAttribute('href');
    window.location.href = imageUrl;
  });
});

// ... Previous JavaScript code ...

// Function to handle image clicks and redirect to the fourth page (same as before)

// Function to open the final page
function openFinalPage() {
  // Replace 'final-page.html' with the URL or path to your final page
  window.location.href = 'final-page.html';
}

