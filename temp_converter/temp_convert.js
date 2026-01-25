const radio = document.getElementById("toFahrenhiet");
const radio1 = document.getElementById("toCelcius");
const diceContainer = document.getElementById("diceContainer");
const resultDisplay = document.getElementById("result");

function convert() {
  const num = parseFloat(document.getElementById("textbox").value);
  let convertedValue;

  if (isNaN(num)) {
    resultDisplay.textContent = "Please enter a valid number";
    return;
  }

  if (radio.checked) {
    convertedValue = num * (9 / 5) + 32;
    resultDisplay.textContent = convertedValue.toFixed(1) + "°F";
  } else if (radio1.checked) {
    convertedValue = (num - 32) * (5 / 9);
    resultDisplay.textContent = convertedValue.toFixed(1) + "°C";
  } else {
    const sumH1 = document.createElement("h1");
    sumH1.textContent = "Please select conversion";
    diceContainer.appendChild(sumH1);
  }
}
