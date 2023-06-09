/*Name: Tyler Nguyen
Name of file: 2158383-homework3.js
Date created: 4/10/23
Date last edited: 4/21/23
Description: Scripts for Medical registration webpage for HW3
*/

/*       VERSION 1
const form = document.getElementById("signup");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();

  if (fnameValue === "") {
    setError(fname, "Username is required");
  } else {
    setSuccess(fname);
  }

  if (lnameValue === "") {
    setError(lname, "Username is required");
  } else {
    setSuccess(lname);
  }
};
*/

///////////////VERSION 2 ///////////////
// submitForm.addEventListener("click", function (e) {
//   fnameValidation();
//   lnameValidation();
//   validateSSN();
//   dobValidation();
//   validateAddress();
//   validateCity();
//   validateZipCode();
//   emailValidation();
//   phoneValidation();
//   isValidUserId();
//   validatePassword();
//   pwdValidation();

//   e.preventDefault();
// });

////////// VERSION 3////////////
// function validateInputs() {
//   fnameValidation();
//   lnameValidation();
//   validateSSN();
//   dobValidation();
//   validateAddress();
//   validateCity();
//   validateZipCode();
//   emailValidation();
//   phoneValidation();
//   isValidUserId();
//   validatePassword();
//   pwdValidation();
// }

///////////////FINAL VERSION///////////////////
// Custom alert box function
function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeBtn = document.getElementById("close-alert");
  alertBox.style.display = "block";
  closeBtn.onclick = function () {
    alertBox.style.display = "none";
  };
}

// Add event listener to the form submit button
submitForm.addEventListener("click", function (e) {
  var valid = true;

  // Call all validation functions and set 'valid' flag to false if any of them return false
  if (!fnameValidation()) {
    valid = false;
  }
  if (!lnameValidation()) {
    valid = false;
  }
  if (!validateSSN()) {
    valid = false;
  }
  if (!dobValidation()) {
    valid = false;
  }
  if (!validateAddress()) {
    valid = false;
  }
  if (!validateCity()) {
    valid = false;
  }
  if (!validateZipCode()) {
    valid = false;
  }
  if (!emailValidation()) {
    valid = false;
  }
  if (!phoneValidation()) {
    valid = false;
  }
  if (!isValidUserId()) {
    valid = false;
  }
  if (!validatePassword()) {
    valid = false;
  }
  if (!pwdValidation()) {
    valid = false;
  }

  // Show custom alert box if any validation failed
  if (!valid) {
    showAlert();
    e.preventDefault();
  }
});

/////////////////////////////////////////////
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

///////////// SLIDER //////////////
var slider = document.getElementById("range");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

///////////// remove user input table on clear ////////////////
function removedisplay() {
  document.getElementById("userinput").innerHTML = "";
}

////////////// re-display user input ///////////////
function displayinput() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th colspan='3'> Your Information</th>";
  for (i = 0; i < formcontents.length; i++) {
    if (formcontents.elements[i].value != "") {
      datatype = formcontents.elements[i].type;
      switch (datatype) {
        case "checkbox":
          if (formcontents.elements[i].checked) {
            formoutput =
              formoutput +
              "<tr><td align='right'>" +
              formcontents.elements[i].name +
              "</td>";
            // formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
            formoutput =
              formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
          }
          break;
        case "radio":
          if (formcontents.elements[i].checked) {
            formoutput =
              formoutput +
              "<tr><td align='right'>" +
              formcontents.elements[i].name +
              "</td>";
            // formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
            formoutput =
              formoutput +
              "<td class='outputdata'>" +
              formcontents.elements[i].value +
              "</td></tr>";
          }
          break;
        case "button":
        case "submit":
        case "reset":
          break;
        default:
          formoutput =
            formoutput +
            "<tr><td align='right'>" +
            formcontents.elements[i].name +
            "</td>";
          // formoutput = formoutput + "<td align='right'>" + datatype + "</td>";
          formoutput =
            formoutput +
            "<td class='outputdata'>" +
            formcontents.elements[i].value +
            "</td></tr>";
      }
    }
  }

  if (formoutput.length > 0) {
    formoutput = formoutput + "</table>";
    document.getElementById("userinput").innerHTML = formoutput;
  }
}

/////////// First Name Validation ////////////////////
function fnameValidation() {
  fname = document.getElementById("fname").value.trim();
  var namePattern = /^[A-Za-z'-]+$/;
  var error = document.getElementById("fname-error");

  if (fname == "") {
    error.innerHTML = "*First name must not be empty.";
    document.getElementById("fname").style.borderColor = "#ff3860";
    return false;
  } else if (fname != "") {
    if (!fname.match(namePattern)) {
      error.innerHTML = "*Letters, apostrophes, and dashes only";
      return false;
    } else if (fname.length < 2) {
      error.innerHTML = "First name must be at least 2 characters";
      return false;
    } else if (fname.length > 30) {
      error.innerHTML = "First name can not exceed 30 characters";
      return false;
    } else {
      error.innerHTML = "";
      document.getElementById("fname").style.borderColor = "#09c372";
      return true;
    }
  }
}

///////////////////Last Name Validation //////////////////////
function lnameValidation() {
  lname = document.getElementById("lname").value.trim();
  var namePattern = /^[A-Za-z'-]+$/;
  var error = document.getElementById("lname-error");

  if (lname == "") {
    error.innerHTML = "*Last name must not be empty.";
    document.getElementById("lname").style.borderColor = "#ff3860";
    return false;
  } else if (lname != "") {
    if (!lname.match(namePattern)) {
      error.innerHTML = "*Letters, apostrophes, and dashes only";
      return false;
    } else if (lname.length < 2) {
      error.innerHTML = "Last name must be at least 2 characters";
      return false;
    } else if (lname.length > 30) {
      error.innerHTML = "Last name can not exceed 30 characters";
      return false;
    } else {
      error.innerHTML = "";
      document.getElementById("lname").style.borderColor = "#09c372";
      return true;
    }
  }
}

////////////// Middle Initial Validation //////////////////
function mnameValidation() {
  mname = document.getElementById("mname").value;
  var mnamePattern = /^[A-Z]/;
  var error = document.getElementById("mname-error");

  if (mname != "") {
    if (!mname.match(mnamePattern)) {
      error.innerHTML = "Upper case letters only";
      return false;
    } else {
      error.innerHTML = "";
      return true;
    }
  }
}

///////////// Email Validation ///////////////////
function emailValidation() {
  email = document.getElementById("email").value;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email == "") {
    document.getElementById("email-error").innerHTML =
      "*Email address must not be empty";
    document.getElementById("email").style.borderColor = "#ff3860";
    return false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("email-error").innerHTML =
      "Must have a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("email").style.borderColor = "#09c372";
    return true;
  }
}

///////////// dob Validation ////////////////////////
function dobValidation() {
  dob = document.getElementById("dob");
  var date = new Date(dob.value);
  var maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  var error = document.getElementById("dob-error");

  if (date > new Date()) {
    error.innerHTML = "Date can not be in the future";
    document.getElementById("dob").style.borderColor = "#ff3860";
    dob.value = "";
    return false;
  } else if (date < new Date(maxDate)) {
    error.innerHTML = "Date can not be more than 120 years ago";
    document.getElementById("dob").style.borderColor = "#ff3860";
    return false;
  } else {
    error.innerHTML = "";
    return true;
  }
}

///////////////ADDRESS//////////////////////
function validateAddress() {
  const address = document.getElementById("address1").value.trim();
  const error = document.getElementById("address-error");

  if (!address) {
    error.innerHTML = "*Address is required";
    document.getElementById("address1").style.borderColor = "#ff3860";
    return false;
  } else {
    error.innerHTML = "";
    document.getElementById("address1").style.borderColor = "#09c372";
    return true;
  }
}

/////////////////////CITY //////////////////
function validateCity() {
  const city = document.getElementById("city").value.trim();
  const cityError = document.getElementById("city-error");

  if (!city) {
    cityError.innerHTML = "*City is required";
    document.getElementById("city").style.borderColor = "#ff3860";
    return false;
  } else {
    cityError.innerHTML = "";
    document.getElementById("city").style.borderColor = "#09c372";
    return true;
  }
}

////////////////// ZIP CODE ////////////////
function validateZipCode() {
  const zipInput = document.getElementById("zcode");
  let zip = zipInput.value.replace(/[^\d-]/g, ""); // Remove all non-digit and non-hyphen characters
  const error = document.getElementById("zcode-error");

  if (!zip) {
    error.innerHTML = "*Zip code is required";
    document.getElementById("zcode").style.borderColor = "#ff3860";
    return false;
  }

  if (zip.length > 5) {
    zip = zip.slice(0, 5); // Only keep the first 5 digits
  }

  zipInput.value = zip;
  error.innerHTML = "";
  document.getElementById("zcode").style.borderColor = "#09c372";
  return true;
}
////////////////// SSN ////////////////////
function validateSSN() {
  const ssn = document.getElementById("ssn").value;

  // Regular expression to match a valid SSN
  const ssnRegex = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnRegex.test(ssn)) {
    document.getElementById("ssn-error").innerHTML =
      "*Please enter a valid Social Security Number (e.g. 123-45-6789).";
    document.getElementById("ssn").style.borderColor = "#ff3860";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    document.getElementById("ssn").style.borderColor = "#09c372";
    return true;
  }
}

////////////// Password Validation ///////////
function validatePassword() {
  const pwd = document.getElementById("pwd").value;
  const user = document.getElementById("userid").value;
  const pwdPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).*$/;

  const error = document.getElementById("pwd-error");

  if (pwd === "") {
    error.innerHTML = "*Password must not be empty";
    document.getElementById("pwd").style.borderColor = "#ff3860";
    return false;
  }

  if (!pwd.match(pwdPattern)) {
    error.innerHTML =
      "Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character";
    document.getElementById("pwd").style.borderColor = "#ff3860";
    return false;
  }

  if (pwd === user || pwd.includes(user)) {
    error.innerHTML = "Password cannot match or contain Username";
    document.getElementById("pwd").style.borderColor = "#ff3860";
    return false;
  }

  if (pwd.length > 30) {
    error.innerHTML = "Password cannot exceed 30 characters";
    document.getElementById("pwd").style.borderColor = "#ff3860";
    return false;
  }

  error.innerHTML = "";
  document.getElementById("pwd").style.borderColor = "#09c372";
  return true;
}

/////////////////////// re enter Password /////////////////////////
function pwdValidation() {
  pwd1 = document.getElementById("pwd").value;
  pwd2 = document.getElementById("repwd").value;

  if (!pwd2) {
    document.getElementById("repwd-error").innerHTML =
      "*Please confirm your password";
    document.getElementById("repwd").style.borderColor = "#ff3860";
    return false;
  }

  if (pwd2 != pwd1) {
    document.getElementById("repwd-error").innerHTML = "Password do not match";
    document.getElementById("repwd").style.borderColor = "#ff3860";
    return false;
  } else if (pwd2 == pwd1) {
    document.getElementById("repwd-error").innerHTML = "";
    document.getElementById("repwd").style.borderColor = "#09c372";
    return true;
  }
}

///////////////////// User ID ///////////////

function isValidUserId() {
  userId = document.getElementById("userid").value;
  // Check that the user ID is not empty
  if (userId.length === 0) {
    document.getElementById("userid-error").innerHTML =
      "*User ID can not be empty";
    document.getElementById("userid").style.borderColor = "#ff3860";
    return false;
  }

  // Check that the first character is not a number
  if (!isNaN(userId.charAt(0))) {
    document.getElementById("userid-error").innerHTML =
      "User ID can not start with a number";
    document.getElementById("userid").style.borderColor = "#ff3860";
    return false;
  }

  // Check that the user ID only contains letters, numbers, or underscores
  var regex = /^[a-zA-Z0-9_]+$/;
  if (!regex.test(userId)) {
    document.getElementById("userid-error").innerHTML =
      "User ID can only contains letters, numbers, or underscores";
    document.getElementById("userid").style.borderColor = "#ff3860";
    return false;
  } else if (userId.length < 5) {
    document.getElementById("userid-error").innerHTML =
      "Username must be at least 5 characters";
    document.getElementById("userid").style.borderColor = "#ff3860";
    return false;
  } else if (userId.length > 30) {
    document.getElementById("userid-error").innerHTML =
      "Username must not exceed 30 characters";
    document.getElementById("userid").style.borderColor = "#ff3860";
    return false;
  } else {
    // If all checks pass, the user ID is valid
    document.getElementById("userid-error").innerHTML = "";
    document.getElementById("userid").style.borderColor = "#09c372";
    return true;
  }
}

//////////// Phone Number ////////////
function phoneValidation() {
  const phoneInput = document.getElementById("phone");
  const phone = phoneInput.value.replace(/\D/g, ""); // Remove all non-digit characters
  const error = document.getElementById("phone-error");

  if (!phone) {
    error.innerHTML = "*Phone number is required";
    document.getElementById("phone").style.borderColor = "#ff3860";
    return false;
  }

  if (phone.length !== 10) {
    error.innerHTML = "Invalid phone number";
    document.getElementById("phone").style.borderColor = "#ff3860";
    return false;
  }

  const formattedPhone = `(${phone.slice(0, 3)}) ${phone.slice(
    3,
    6
  )}-${phone.slice(6)}`;
  phoneInput.value = formattedPhone;
  error.innerHTML = "";
  document.getElementById("phone").style.borderColor = "#09c372";
  return true;
}

//////////////// TEST CODE///////////////////
// function validateInputs() {
//   const fname = document.getElementById("fname").value;
//   const lname = document.getElementById("lname").value;

//   if (fname == "") {
//     document.getElementById("fname").style.borderColor = "#ff3860";
//     return false;
//   } else {
//     document.getElementById("fname").style.borderColor = "#09c372";
//     return true;
//   }
// }

/*        MAIN CODE
document.getElementById("fname").style.borderColor = "#ff3860";
document.getElementById("fname").style.borderColor = "#09c372";
*/
