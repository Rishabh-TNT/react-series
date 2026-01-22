const root = document.getElementById("root");

let counter = 0;

root.innerHTML = "<h1>Counter</h1>";
const addBtn = document.createElement("button");
const subBtn = document.createElement("Button");
root.appendChild(addBtn);
root.appendChild(document.createElement("br"));
root.appendChild(subBtn);
addBtn.textContent = "Add " + counter;
subBtn.textContent = "Subtract " + counter;

function render() {
  addBtn.textContent = "Add " + counter;
  subBtn.textContent = "Subtract " + counter;
}

addBtn.addEventListener("click", () => {
  counter++;
  console.log(counter);
  render();
});
subBtn.addEventListener("click", () => {
  counter--, console.log(counter);
  render();
});
