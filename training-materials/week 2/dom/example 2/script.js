function decrement() {
  const valueBtn = document.getElementById("value");
  console.log("ici c'est la valeur initale", valueBtn.textContent);
  console.log(
    "ici le type de la valeur initale est ",
    typeof valueBtn.textContent
  );
  const newValue = Number(valueBtn.textContent);
  if (newValue <= 0) {
    valueBtn.textContent = 0;
    const decBtn = document.getElementById("dec");
    decBtn.setAttribute("disabled", true);
  } else {
    valueBtn.textContent = newValue - 1;
  }
}

function increment() {
  const decBtn = document.getElementById("dec");
  decBtn.removeAttribute("disabled");
  const valueBtn = document.getElementById("value");
  const newValue = Number(valueBtn.textContent) + 1;
  valueBtn.textContent = newValue;
}
