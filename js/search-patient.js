var searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', () => {
  var patients = document.querySelectorAll('.paciente');
  var searchText = searchInput.value;

  patients.forEach(patient => {
    var name = patient.querySelector('.info-nome').textContent;
    var regex = new RegExp(searchText, 'i');

    patient.classList.remove('hidden');

    if (!regex.test(name) && searchText.length) {
      patient.classList.add('hidden');
    }
  });
});
