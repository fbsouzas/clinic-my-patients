var patients = document.querySelectorAll('.paciente');
var btnAddPatient = document.querySelector('#adicionar-paciente');

patients.forEach(patient => {
  var weight = patient.querySelector('.info-peso').textContent;
  var height = patient.querySelector('.info-altura').textContent;

  var imc = calculateIMC(weight, height);
  var lineColor = getLineColorClass(imc);

  patient.querySelector('.info-imc').textContent = imc;
  patient.classList.add(lineColor)
});

function calculateIMC(weight, height) {
  if (!validateWeight(weight)) {
    return 'Peso inválido';
  }

  if (!validateHeight(height)) {
    return 'Altura inválida';
  }

  return (weight / (height * height)).toFixed(2);
}

function validateWeight(weight) {
  return weight > 0 && weight < 400;
}

function validateHeight(height) {
  return height > 0 && height < 3.00;
}

function getLineColorClass(imc) {
  if (imc < 18.5) {
    return 'underweight';
  }

  if (imc >= 18.5 && imc < 25) {
    return 'normal-range';
  }

  if (imc >= 25 && imc < 30) {
    return 'overweight';
  }

  if (imc >= 30) {
    return 'obese';
  }

  return 'imc-invalid';
}
