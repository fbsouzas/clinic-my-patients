btnAddPatient.addEventListener('click', function(event) {
  event.preventDefault();

  var table = document.querySelector('#tabela-pacientes');
  var form = document.querySelector('#id-add-patient');

  var patient = newPatient(form);
  var tr = createTr(patient);
  var errors = validate(patient);

  if (errors.length > 0) {
    showErrors(errors);
    return;
  }

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

function validate(patient) {
  errors = [];

  clearErrors();

  if (patient.name.length == 0) {
    errors.push("Nome é obrigatório")
  }

  if (patient.weight.length == 0) {
    errors.push("Peso é obrigatório")
  }

  if (!validateWeight(patient.weight) && patient.weight.length > 0) {
    errors.push("Peso inválido");
  }

  if (patient.height.length == 0) {
    errors.push("Altura é obrigatório")
  }

  if (!validateHeight(patient.height) && patient.height.length > 0) {
    errors.push("Altura inválida")
  }

  if (patient.fat.length == 0) {
    errors.push("Gordura é obrigatório")
  }

  return errors;
}

function showErrors(errors) {
  var ul = document.querySelector('#error-messages');

  errors.forEach(error => {
    var li = document.createElement('li');

    li.textContent = error;
    ul.appendChild(li);
  });
}

function clearErrors() {
  var ul = document.querySelector('#error-messages');

  ul.innerHTML = '';
}
