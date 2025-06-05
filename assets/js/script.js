function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Form Validation
const nameRegex = /^[a-zA-Z]$/;
const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;

const btn = document.getElementById("submitBtn");

function checkForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";

  let isValid = true;

  const result = document.createElement("p");

  if (name === "" || !nameRegex.test(name)) {
    document.getElementById("name-error").textContent = "Name is required.";
    isValid = false;
  }

  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("email-error").textContent =
      "Vaild email is required.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("message-error").textContent =
      "Message cannot be empty.";
    isValid = false;
  }

  return isValid;
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const valid = checkForm();
  if (valid) {
    console.log("Form is valid. Submit logic goes here.");
  }
});
