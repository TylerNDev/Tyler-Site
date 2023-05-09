// function displayInputFromLocalStorage() {
//   var formData = JSON.parse(localStorage.getItem("formData"));
//   var formoutput = "<table>";
//   for (var key in formData) {
//     formoutput += "<tr><td>" + key + "</td><td>" + formData[key] + "</td></tr>";
//   }
//   formoutput += "</table>";
//   document.getElementById("userinput").innerHTML = formoutput;
// }

// function submitForm() {
//   var formcontents = document.getElementById("signup");
//   var formData = {};
//   for (var i = 0; i < formcontents.length; i++) {
//     var element = formcontents.elements[i];
//     if (element.value !== "") {
//       if (element.type === "checkbox") {
//         formData[element.name] = element.checked;
//       } else {
//         formData[element.name] = element.value;
//       }
//     }
//   }
//   localStorage.setItem("formData", JSON.stringify(formData));
//   console.log(formData);
//   window.location.href = "thanks.html";
// }

function storeInput() {
  var formcontents = document.getElementById("signup");
  var data = {};
  for (var i = 0; i < formcontents.length; i++) {
    var element = formcontents.elements[i];
    if (
      element.value !== "" &&
      element.type !== "submit" &&
      element.type !== "reset" &&
      element.type !== "button"
    ) {
      if (element.type === "checkbox") {
        data[element.name] = element.checked;
      } else if (element.type === "radio" && element.checked) {
        data[element.name] = element.value;
      } else {
        data[element.name] = element.value;
      }
    }
  }
  localStorage.setItem("formData", JSON.stringify(data));
}

function displaylocalStorage() {
  var formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    var formOutput =
      "<table width='65%' class='output'><th colspan='3'> Your Information</th>";
    for (var key in formData) {
      formOutput += "<tr><td align='right'>" + key + "</td>";
      formOutput += "<td class='outputdata'>" + formData[key] + "</td></tr>";
    }
    formOutput += "</table>";
    document.getElementById("output").innerHTML = formOutput;
  }
}

function clearLocalStorage() {
  localStorage.removeItem("formData");
  // Add any other data you want to clear from local storage here
}
