let currentInput = "0";

const updateDisplay = () =>
  (document.getElementById("display").textContent = currentInput);

const appendNumber = (num) => {
  currentInput = currentInput === "0" ? num : currentInput + num;
  updateDisplay();
};

const appendSymbol = (sym) => {
  const lastChar = currentInput.slice(-1);
  const operators = ["+", "-", "*", "/"];

  currentInput = operators.includes(lastChar)
    ? currentInput.slice(0, -1) + sym
    : currentInput + sym;
  updateDisplay();
};

const clearDisplay = () => {
  currentInput = "0";
  updateDisplay();
};

const deleteLast = () => {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
};

const calculate = () => {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
};
