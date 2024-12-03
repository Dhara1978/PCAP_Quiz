document.addEventListener('DOMContentLoaded', () => {
  fetch('questions.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('question').textContent = data.question;
      const choicesList = document.getElementById('choices');
      data.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        choicesList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Handle errors, e.g., display an error message to the user
    });
});