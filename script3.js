window.onload = function() {
    // Check if the user came from the index page (by checking the password)
    const urlParams = new URLSearchParams(window.location.search);
    const passwordParam = urlParams.get('password');
  
    if (passwordParam === 'ilu') {
      // Add a class to the body to apply the background color
      document.body.classList.add('third-page');
    } else {
      // Redirect the user back to the index page if they didn't enter the correct password
      window.location.href = 'index.html';
    }
  };
  
