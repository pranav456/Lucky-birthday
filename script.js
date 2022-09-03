const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function findOutLucky(sum, ln) {
  {
    if (sum % ln === 0) {
      outputBox.innerText = "Your birthdate seems to be lucky😊";
    } else {
      outputBox.innerText = "Your birthdate is not that lucky😕";
    }
  }
}

function checkBirthdayisLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  //   console.log(sum);
}

function calculateSum(dob) {
  dob = dob.split("-").join("");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
    findOutLucky(sum, luckyNumber.value);
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthdayisLucky);
