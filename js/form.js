btnAddPatient.addEventListener('click', function(event) {
  event.preventDefault();

  var table = document.querySelector('#tabela-pacientes');
  var form = document.querySelector('#id-add-patient');

  var patient = newPatient(form);
  var tr = createTr(patient);

  table.appendChild(tr);
  form.reset();
});

function newPatient(form) {
  return {
    name: form.name.value,
    weight:form.weight.value,
    height:form.height.value,
    fat:form.fat.value,
    imc: calculateIMC(form.weight.value, form.height.value),
  }
}

function createTr(patient) {
  var tr = document.createElement('tr');

  tr.appendChild(createTd(patient.name, 'info-nome'));
  tr.appendChild(createTd(patient.weight, 'info-peso'));
  tr.appendChild(createTd(patient.height, 'info-altura'));
  tr.appendChild(createTd(patient.fat, 'info-gordura'));
  tr.appendChild(createTd(patient.imc, 'info-imc'));

  tr.classList.add('paciente');
  tr.classList.add(getLineColorClass(patient.imc));

  return tr;
}

function createTd(content, cssClass) {
  var td = document.createElement('td');

  td.textContent = content;
  td.classList.add(cssClass);

  return td;
}
