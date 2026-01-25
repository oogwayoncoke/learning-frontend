const add = document.getElementById("add");
const sub = document.getElementById("sub");
const reset = document.getElementById("reset");
let count = 0;
add.onclick = function () {
  count++;
  num.textContent = count;
};
sub.onclick = function () {
  count--;
  num.textContent = count;
};
reset.onclick = function () {
  count = 0;
  num.textContent = count;
};
