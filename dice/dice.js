const button = document.getElementById("dice");
const diceContainer = document.getElementById("dice-container");
const input = document.getElementById("numofdice");

button.onclick = () => {
  diceContainer.textContent = "";
  const amount = Number(input.value);
  const duration = 500;
  const intervalTime = 50;

  const diceData = Array.from({ length: amount }, () => {
    const dieWrapper = document.createElement("div");
    dieWrapper.className = "die-wrapper";

    const img = document.createElement("img");
    img.className = "die-img die-shaking";
    img.src = `images/${Math.floor(Math.random() * 6 + 1)}.png`;

    const label = document.createElement("p");
    label.textContent = "?";

    dieWrapper.appendChild(img);
    dieWrapper.appendChild(label);
    diceContainer.appendChild(dieWrapper);

    return { img, label };
  });

  const shuffleInterval = setInterval(() => {
    diceData.forEach((die) => {
      const tempRoll = Math.floor(Math.random() * 6 + 1);
      die.img.src = `images/${tempRoll}.png`;
    });
  }, intervalTime);

  setTimeout(() => {
    clearInterval(shuffleInterval);

    let totalSum = 0;
    diceData.forEach((die) => {
      const finalRoll = Math.floor(Math.random() * 6 + 1);
      totalSum += finalRoll;

      die.img.src = `images/${finalRoll}.png`;
      die.img.classList.remove("die-shaking");
      die.label.textContent = finalRoll;
    });

    const sumH1 = document.createElement("h1");
    sumH1.textContent = `Total: ${totalSum}`;
    diceContainer.appendChild(sumH1);
  }, duration);
};
