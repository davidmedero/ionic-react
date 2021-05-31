const calculateBtn = document.querySelector("ion-button");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const resetBtn = document.getElementById("reset-btn");
const result = document.getElementById("result");

const calculateBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = enteredWeight / (enteredWeight * enteredHeight);

  if (isNaN(bmi)) {
    alert("Not a number, please check inputs");
    return;
  }

  resultContainer = document.createElement("ion-card");
  resultContainer.innerHTML = `<ion-card-content>
        <h2>${bmi}</h2>
    </ion-card-content>`;

  result.appendChild(resultContainer);
};

calculateBtn.addEventListener("click", calculateBmi);

const Reset = () => {
  heightInput.innerHTML = "";
  weightInput.innerHTML = "";
  document.getElementById("result").innerHTML = "";
  window.location.reload();
};

resetBtn.addEventListener("click", Reset);
