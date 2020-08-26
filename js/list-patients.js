var btnUpdatePatientList = document.querySelector('#update-patient-list');

btnUpdatePatientList.addEventListener('click', () => {
  var listError = document.querySelector('#update-list-error');
  var xhr = new XMLHttpRequest();

  listError.classList.add('hidden');
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', () => {
    if (xhr.status != 200) {
      console.log(xhr.status);
      console.log(xhr.responseText);

      listError.classList.remove('hidden');

      return;
    }

    var patients = JSON.parse(xhr.responseText);

    patients.forEach(patient => {
      addPatientInTheTable(patientAdapter(patient));
    });
  });

  xhr.send();
});

function patientAdapter(patient) {
  return {
    name: patient.nome,
    weight: patient.peso,
    height: patient.altura,
    fat: patient.gordura,
    imc: patient.imc,
  }
}
