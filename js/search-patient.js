var searchInput = document.querySelector('#search-input');
var patients = document.querySelectorAll('.paciente');

searchInput.addEventListener('input', () => {
  var searchText = searchInput.value;

  patients.forEach(patient => {
    var name = patient.querySelector('.info-nome').textContent;
    var regex = new RegExp(searchText, 'i');

    patient.classList.remove('hidden-patient');

    if (!regex.test(name) && searchText.length) {
      patient.classList.add('hidden-patient');
    }
  });
});
