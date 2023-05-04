/*Name: Tyler Nguyen
Name of file: 2158383-homework4.js
Date created: 5/1/23
Date last edited: 
Description: Scripts for Medical registration webpage for HW4
*/

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

/////////// STIKCY HEADER///////////////////
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

////////////// COOKIES VERSION 1//////////////////
// function setCookie(name, cvalue, expiryDays) {
//   var day = new Date();
//   day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
//   var expires = "expires=" + day.toUTCString();
//   document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//   var cookieName = name + "=";
//   var cookies = document.cookie.split(";");

//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i];
//     while (cookie.charAt(0) == " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(cookieName) == 0) {
//       return cookie.substring(cookieName.length, cookie.length);
//     }
//   }
//   return "";
// }

// var firstName = getCookie("firstName");
// if (firstName != "") {
//   document.getElementById("hello").innerHTML =
//     "Hello, " +
//     firstName +
//     "! <br><a href='#' id='new-user'>Not " +
//     firstName +
//     "? Click here to start a new form.</a>";

//   document.getElementById("new-user").addEventListener("click", function () {
//     setCookie("firstName", "", -1);
//     location.reload();
//   });
// } else {
//   var nameInput = prompt("Please enter your first name:");
//   document.getElementById("hello").innerHTML = "Welcome, " + nameInput;

//   if (nameInput != "" && nameInput != null) {
//     setCookie("firstName", nameInput, 30);
//   }
// }

// var firstNameInput = document.getElementById("fname");
// if (firstName != "") {
//   firstNameInput.value = firstName;
// }
// firstNameInput.addEventListener("input", function () {
//   setCookie("firstName", firstNameInput.value, 30);
// });

/////////////////// COOKIE VERSION 2 /////////////
// function setCookie(name, cvalue, expiryDays) {
//   var day = new Date();
//   day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
//   var expires = "expires=" + day.toUTCString();
//   document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//   var cookieName = name + "=";
//   var cookies = document.cookie.split(";");

//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i];
//     while (cookie.charAt(0) == " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(cookieName) == 0) {
//       return cookie.substring(cookieName.length, cookie.length);
//     }
//   }
//   return "";
// }

// var firstNameInput = document.getElementById("fname");
// var lastNameInput = document.getElementById("lanme");
// var emailInput = document.getElementById("email");
// var phoneInput = document.getElementById("phone");

// var fieldIds = ["firstNameInput", "lastNameInput", "emailInput", "phoneInput"]; // Add all input field IDs here
// var fieldNames = ["firstName", "lastName", "email", "phone"]; // Add all corresponding cookie names here

// // Loop through all the input fields and prefill them with their corresponding cookie values
// for (var i = 0; i < fieldIds.length; i++) {
//   var fieldId = fieldIds[i];
//   var fieldName = fieldNames[i];
//   var fieldValue = getCookie(fieldName);
//   var field = document.getElementById(fieldId);

//   if (fieldValue != "") {
//     field.value = fieldValue;
//   }

//   field.addEventListener("input", function () {
//     setCookie(fieldName, field.value, 30);
//   });
// }

// var firstName = getCookie("firstName");
// if (firstName != "") {
//   document.getElementById("hello").innerHTML =
//     "Hello, " +
//     firstName +
//     "! <br><a href='#' id='new-user'>Not " +
//     firstName +
//     "? Click here to start a new form.</a>";

//   document.getElementById("new-user").addEventListener("click", function () {
//     for (var i = 0; i < fieldNames.length; i++) {
//       setCookie(fieldNames[i], "", -1);
//     }
//     location.reload();
//   });
// } else {
//   var nameInput = prompt("Please enter your first name:");
//   document.getElementById("hello").innerHTML = "Welcome, " + nameInput;

//   if (nameInput != "" && nameInput != null) {
//     setCookie("firstName", nameInput, 30);
//   }
// }

//////////////// COOKIE VERSION 3 /////////////
// function setCookie(name, cvalue, expiryDays) {
//   var day = new Date();
//   day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
//   var expires = "expires=" + day.toUTCString();
//   document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(name) {
//   var cookieName = name + "=";
//   var cookies = document.cookie.split(";");

//   for (var i = 0; i < cookies.length; i++) {
//     var cookie = cookies[i];
//     while (cookie.charAt(0) == " ") {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(cookieName) == 0) {
//       return cookie.substring(cookieName.length, cookie.length);
//     }
//   }
//   return "";
// }

// var firstNameInput = document.getElementById("fname");
// var lastNameInput = document.getElementById("lname");
// var phoneInput = document.getElementById("phone");

// // Prefill the first name input field with the value stored in the "firstName" cookie
// var firstName = getCookie("firstName");
// if (firstName !== "") {
//   firstNameInput.value = firstName;
// }

// // Prefill the last name input field with the value stored in the "lastName" cookie
// var lastName = getCookie("lastName");
// if (lastName !== "") {
//   lastNameInput.value = lastName;
// }

// // Prefill the phone input field with the value stored in the "phone" cookie
// var phone = getCookie("phone");
// if (phone !== "") {
//   phoneInput.value = phone;
// }

// // Set a cookie with the value of the first name input field whenever it is changed
// firstNameInput.addEventListener("input", function () {
//   setCookie("firstName", firstNameInput.value, 30);
// });

// // Set a cookie with the value of the last name input field whenever it is changed
// lastNameInput.addEventListener("input", function () {
//   setCookie("lastName", lastNameInput.value, 30);
// });

// // Set a cookie with the value of the phone input field whenever it is changed
// phoneInput.addEventListener("input", function () {
//   setCookie("phone", phoneInput.value, 30);
// });

// // Greet the user if a first name cookie is set
// if (firstName !== "") {
//   document.getElementById("hello").innerHTML =
//     "Hello, " +
//     firstName +
//     "! <br><a href='#' id='new-user'>Not " +
//     firstName +
//     "? Click here to start a new form.</a>";

//   document.getElementById("new-user").addEventListener("click", function () {
//     setCookie("firstName", "", -1);
//     setCookie("lastName", "", -1);
//     location.reload();
//   });
// }

/////////////////// COOKIE VERSION 4//////////////////
function setCookie(name, cvalue, expiryDays) {
  var day = new Date();
  day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + day.toUTCString();
  document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
  var cookieName = name + "=";
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

var inputs = [
  { id: "fname", cookieName: "firstName" },
  { id: "mname", cookieName: "middleName" },
  { id: "lname", cookieName: "lastName" },
  { id: "dob", cookieName: "DateofBirth" },
  { id: "address1", cookieName: "address1" },
  { id: "address2", cookieName: "address2" },
  { id: "city", cookieName: "city" },
  { id: "zcode", cookieName: "zipCode" },
  { id: "email", cookieName: "email" },
  { id: "phone", cookieName: "phone" },
  { id: "userid", cookieName: "userid" },
  // add more input fields here
];

inputs.forEach(function (input) {
  var inputElement = document.getElementById(input.id);

  // Prefill the input field with the value stored in the corresponding cookie
  var cookieValue = getCookie(input.cookieName);
  if (cookieValue !== "") {
    inputElement.value = cookieValue;
  }

  // Set a cookie with the value of the input field whenever it is changed
  inputElement.addEventListener("input", function () {
    setCookie(input.cookieName, inputElement.value, 30);
  });
});

// Greet the user if a first name cookie is set
var firstName = getCookie("firstName");
if (firstName !== "") {
  document.getElementById("hello1").innerHTML =
    "Welcome back <b>" + firstName + "! </b><br>";
  document.getElementById("hello2").innerHTML =
    "<a href='#' id='new-user'>Not " +
    firstName +
    "? Click here to start a new form.</a>";

  document.getElementById("new-user").addEventListener("click", function () {
    inputs.forEach(function (input) {
      setCookie(input.cookieName, "", -1);
    });
    location.reload();
  });
}

//////////////////////////TESTING CODE ////////////////////////

// let testName = document.querySelector("#fname");

// function saveCookie() {
//   setCookie("fname", testName.value, 30);
// }

// function preFill() {
//   fname.value = getCookie("fname");
// }

// window.onload = function () {
//   // testName.value = getCookie("firstText");
//   preFill();
// };

// //////////// DONT NEED ////////////////
// function deleteCookie(name) {
//   setCookie(name, "", -1);
// }

/////////// STIKCY HEADER///////////////////
// window.onscroll = function () {
//   myFunction();
// };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

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
