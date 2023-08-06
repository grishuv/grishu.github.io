// JavaScript for the second page (next-page.html)
window.onload = function() {
  // Check if the user came from the index page (by checking the password)
  const urlParams = new URLSearchParams(window.location.search);
  const passwordParam = urlParams.get('password');

  // Replace 'your_password_here' with the actual password you want to use
  const correctPassword = 'ilu';

  if (passwordParam === encodeURIComponent(correctPassword)) {
    // Add a class to the body to apply the background image
    document.body.classList.add('next-page');
  } else {
    // Redirect the user back to the index page if they didn't enter the correct password
    window.location.href = 'index.html';
  }
};
// ... Previous JavaScript code ...

function checkAnswers() {
  const answer1Input = document.getElementById('answer1Input').value.trim().toLowerCase();
  const answer2Input = document.getElementById('answer2Input').value.trim().toLowerCase();
  const answer3Input = parseInt(document.getElementById('answer3Input').value);
  const answer4Input = document.getElementById('answer4Input').value.trim().toLowerCase();

  const correctAnswers = {
    answer1: 'chuha',
    answer2: 'me',
    answer3: 5,
    answer4: 'burger',
  };

  if (
    answer1Input === correctAnswers.answer1 &&
    answer2Input === correctAnswers.answer2 &&
    answer3Input === correctAnswers.answer3 &&
    answer4Input === correctAnswers.answer4
  ) {
    // Redirect to the third page if all answers are correct
    window.location.href = 'third-page.html?correctAnswers=true';

  } else {
    const answerFeedback = document.getElementById('answerFeedback');
    answerFeedback.textContent = 'Oops! Some answers were incorrect. Try again.';
    
    // Clear all input fields for the next attempt
    document.getElementById('answer1Input').value = '';
    document.getElementById('answer2Input').value = '';
    document.getElementById('answer3Input').value = '';
    document.getElementById('answer4Input').value = '';
  }
}


