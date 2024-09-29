document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;
  
      // Text Input Validation
      const textInput = document.getElementById("text");
      const textError = document.getElementById("text-error");
      if (textInput.value.trim() === "") {
        isValid = false;
        showError(textError, "Text is required.");
      } else {
        clearError(textError);
      }
  
      // Email Input Validation
      const emailInput = document.getElementById("email");
      const emailError = document.getElementById("email-error");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        showError(emailError, "Invalid email address.");
      } else {
        clearError(emailError);
      }
  
      // Password Input Validation
      const passwordInput = document.getElementById("password");
      const passwordError = document.getElementById("password-error");
      if (passwordInput.value.length < 6) {
        isValid = false;
        showError(passwordError, "Password must be at least 6 characters long.");
      } else {
        clearError(passwordError);
      }
  
      // Number Input Validation
      const numberInput = document.getElementById("number");
      const numberError = document.getElementById("number-error");
      if (numberInput.value.trim() === "" || isNaN(numberInput.value)) {
        isValid = false;
        showError(numberError, "Number is required and must be a valid number.");
      } else {
        clearError(numberError);
      }
  
      // Date Input Validation
      const dateInput = document.getElementById("date");
      const dateError = document.getElementById("date-error");
      if (dateInput.value.trim() === "") {
        isValid = false;
        showError(dateError, "Date is required.");
      } else {
        clearError(dateError);
      }
  
      // File Input Validation
      const fileInput = document.getElementById("file");
      const fileError = document.getElementById("file-error");
      if (fileInput.files.length === 0) {
        isValid = false;
        showError(fileError, "File is required.");
      } else {
        clearError(fileError);
      }
  
      // Select Input Validation
      const selectInput = document.getElementById("select");
      const selectError = document.getElementById("select-error");
      if (selectInput.value.trim() === "") {
        isValid = false;
        showError(selectError, "Select an option.");
      } else {
        clearError(selectError);
      }
  
      // Radio Button Validation
      const radioButtons = document.getElementsByName("radio");
      let radioSelected = false;
      radioButtons.forEach((radio) => {
        if (radio.checked) {
          radioSelected = true;
        }
      });
      const radioError = document.getElementById("radio-error");
      if (!radioSelected) {
        isValid = false;
        showError(radioError, "Select a radio option.");
      } else {
        clearError(radioError);
      }
  
      // Checkbox Validation
      const checkbox = document.getElementById("checkbox");
      const checkboxError = document.getElementById("checkbox-error");
      if (!checkbox.checked) {
        isValid = false;
        showError(checkboxError, "Checkbox must be checked.");
      } else {
        clearError(checkboxError);
      }
  
      // Range Input Validation
      const rangeInput = document.getElementById("range");
      const rangeError = document.getElementById("range-error");
      if (rangeInput.value < 0 || rangeInput.value > 100) {
        isValid = false;
        showError(rangeError, "Range must be between 0 and 100.");
      } else {
        clearError(rangeError);
      }
  
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  
    function showError(errorElement, message) {
      errorElement.innerText = message;
    }
  
    function clearError(errorElement) {
      errorElement.innerText = "";
    }
  });
  