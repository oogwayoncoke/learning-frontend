const generatePassword = () => {
  const passwordlength = document.getElementById("passwordLength").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const result = document.getElementById("generatedPassword");
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppecase = lowercase.toUpperCase();
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+={}[]<>?,./:;\|";

  let allowed = ``;
  let password = ``;

  allowed += includeLowercase ? lowercase : "";
  allowed += includeUppercase ? uppecase : "";
  allowed += includeNumbers ? numbers : "";
  allowed += includeSymbols ? symbols : "";

  if (passwordlength <= 0) {
    result.textContent = `password length must be atleast 1`;
  }
  if (allowed.length === 0) {
    result.textContent = `atleast 1 property should be selected`;
  }

  for (let i = 0; i < passwordlength; i++) {
    let index = Math.floor(Math.random() * allowed.length);
    password += allowed[index];
  }
  result.textContent = password;
};
document.getElementById("button").addEventListener("click", generatePassword);
const copyToClipboard = async () => {
  const passwordText = document.getElementById("generatedPassword").textContent;
  const copyBtn = document.getElementById("copyButton");

  if (!passwordText || passwordText.includes(" ")) return;

  try {
    await navigator.clipboard.writeText(passwordText);

    const originalText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = originalText), 2000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

document
  .getElementById("copyButton")
  .addEventListener("click", copyToClipboard);
