const calculateBtn = document.querySelector("ion-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const resetBtn = document.getElementById("reset-btn");

const calculateBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredWeight / (enteredWeight * enteredHeight);

  document.getElementById("result").innerHTML = bmi || "Must be a valid number";
};

calculateBtn.addEventListener("click", calculateBmi);

const Reset = () => {
  heightInput.innerHTML = "";
  weightInput.innerHTML = "";
  document.getElementById("result").innerHTML = "";
  window.location.reload();
};

resetBtn.addEventListener("click", Reset);
