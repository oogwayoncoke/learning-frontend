const button = document.getElementById("button");
const result = document.getElementById("result");

const submit = () => {
  const max = Number(document.getElementById("max").value);
  const min = Number(document.getElementById("min").value);
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  result.textContent =
    min > max ? `error ${min} is larger than ${max}` : random;
};

button.addEventListener("click", submit);
