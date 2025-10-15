/*
    Hackathon 4
    Aniken Wiens Shepherd
    Dorothy Noble
    Gurmandeep Kaur
    Triumphant Adebayo
    October 15, 2025
*/

const form = document.getElementById("sportSurvey");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  const submission = document.getElementById("Submission-done");
  if (submission) submission.textContent = "";


  if (validateForm()) {
    console.log("Validation successful");

    let success = document.getElementById("Submission-done");
    if (!success) {
      success = document.createElement("p");
      success.id = "Submission-done";
      form.appendChild(success);
    }
    success.textContent = "🎉 Survey submitted successfully. Thank you! 🎉";
    success.style.color = "green";


    form.reset();
  } else {
    console.log("Validation failed");
  }
});

const validateForm = () => {
  let isValid = true;

  const name = document.getElementById("name");
  const city = document.getElementById("city");
  const province = document.getElementById("province");
  const phone = document.getElementById("phone");
  const favSport = document.getElementById("fav-sport");
  const favTeam = document.getElementById("fav-team");

  if (name.value.trim() === "") {
    showInputError(name, "Name is required");
    isValid = false;
  }

  if (city.value.trim() === "") {
    showInputError(city, "City is required");
    isValid = false;
  }

  if (province.value === "") {
    showInputError(province, "Please select your province");
    isValid = false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone.value.trim())) {
    showInputError(phone, "Enter a valid 10-digit phone number");
    isValid = false;
  }

  if (favSport.value.trim() === "") {
    showInputError(favSport, "Please enter your favourite sport");
    isValid = false;
  }

  if (favTeam.value.trim() === "") {
    showInputError(favTeam, "Please enter your favourite team");
    isValid = false;
  }

  return isValid;
};

const showInputError = (inputElement, message) => {
  const errorDisplay = document.createElement("span");
  errorDisplay.innerText = message;
  errorDisplay.className = "error-message";
  errorDisplay.style.color = "red";
  errorDisplay.style.fontStyle = "italic";
  errorDisplay.setAttribute("role", "alert");

  inputElement.parentElement.appendChild(errorDisplay);
};