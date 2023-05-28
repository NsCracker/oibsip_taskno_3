const convertBtn = document.getElementById('convert-btn');
const resultContainer = document.querySelector('.result-container');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperatureInput = document.getElementById('temperature');
  const fromUnitSelect = document.getElementById('from_unit');
  const toUnitSelect = document.getElementById('to_unit');

  // Get the input values
  const temperature = Number(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  // Perform the conversion
  let convertedTemperature;

  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    convertedTemperature = temperature * 9 / 5 + 32;
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
    convertedTemperature = temperature + 273.15;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    convertedTemperature = (temperature - 32) * 5 / 9;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
    convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
    convertedTemperature = temperature - 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
    convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
  } else {
    convertedTemperature = temperature;
  }

  // Display the result
  result.textContent = `${convertedTemperature.toFixed(2)} ${toUnit.toUpperCase()}`;
  resultContainer.style.display = 'flex';
});