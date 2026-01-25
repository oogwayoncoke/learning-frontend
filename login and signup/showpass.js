function showPass() {
  let x = document.getElementById("password");
  let btn = document.getElementById("show");

  x.type === "password" ? (x.type = "text") : (x.type = "password");
  btn.textContent === "Show"
    ? (btn.textContent = "Hide")
    : (btn.textContent = "Show");
}
