var tbody = document.querySelector('tbody');

tbody.addEventListener('dblclick', (event) => {
  event.target.parentNode.classList.add('fade-out');

  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500);
});
