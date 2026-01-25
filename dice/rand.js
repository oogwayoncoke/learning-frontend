const button = document.getElementById("dice");
const diceContainer = document.getElementById("dice-container");
const input = document.getElementById("numofdice");
const sep = document.getElementById("seperate");

button.onclick = () => {
  diceContainer.textContent = "";
  const amount = Number(input.value);
  let totalSum = 0;

  (() => {
    const rolls = Array.from({ length: amount }, () =>
      Math.floor(Math.random() * 6 + 1),
    );

    rolls.forEach((roll) => {
      const dieDiv = document.createElement("div");
      dieDiv.className = "die";
      dieDiv.textContent = roll;
      diceContainer.appendChild(dieDiv);
    });

    totalSum = rolls.reduce((acc, curr) => acc + curr, 0);

    const sumH1 = document.createElement("h1");
    sumH1.textContent = `Total: ${totalSum}`;
    diceContainer.appendChild(sumH1);
  })();
};
