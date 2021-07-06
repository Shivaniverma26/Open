
// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
if (localStorage.getItem("firstname") != null && localStorage.getItem("gender") != null && localStorage.getItem("date") != null && localStorage.getItem("mobile") != null && localStorage.getItem("email") != null && localStorage.getItem("country") != null && localStorage.getItem("state") != null) {
    document.getElementById("yourName").value = localStorage.getItem("firstname");
    document.getElementById("gender").value = localStorage.getItem("gender");
    document.getElementById("yourDob").value = localStorage.getItem("date");
    document.getElementById("yourMobile").value = localStorage.getItem("phone_number");
    document.getElementById("yourEmail").value = localStorage.getItem("email");
    document.getElementById("country").value = localStorage.getItem("country");
    document.getElementById("state").value = localStorage.getItem("state");

}
// Defining a function to validate form 
function validateForm() {
    e.preventDefault();
    // Retrieving the values of form elements 
    var name = document.getElementById("yourName").value;
    console.log(name);
    var email = document.getElementById("yourEmail").value;
    console.log(email);
    var mobile = document.getElementById("yourMobile").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;

    
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = dateErr  = true;

    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
        
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "India") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr || dateErr ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "State:" + state + "\n" +
                          "Gender: " + gender + "\n";
       
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
    localStorage.setItem('firstname',name);
    localStorage.setItem('email',email);
    localStorage.setItem('phone_number',mobile);
    localStorage.setItem('country',country);
    localStorage.setItem('state',state);
    localStorage.setItem('gender',gender);
    
    document.getElementById("contactForm").reset();
};

// function parseQueryString (string) {
//     let parsed = {};
//         if (string != "") {
//           string = string.substring(string.indexOf("?") + 1);
//           let p1 = string.split("&");
//           p1.map(function (value) {
//             let params = value.split("=");
//             parsed[params[0]] = params[1];
//           });
//         }
//         return parsed;
//     }
function onclick(){
    var params = new URLSearchParams(window.location.href);
    console.log(params);
    var name = localStorage.getItem('name');
    params = params + "?fname=" + name;
    console.log(params);  
}



var countryState = {
    "India" :{
        "Dadra and Nagar Haveli":"DN",
        "Daman and Diu":"DD",
        "Delhi":"DL",
        "Goa":"GA",
        "Gujarat":"GJ",
        "Mizoram":"MZ",
        "Nagaland":"NL",
        "Odisha":"OR",
    },
    "USA":{
        "Alabama":"AL",
        "Alaska":"AK",
        "American Samoa":"AS",
        "Arizona":"AZ",
        "Arkansas":"AR",
        "California":"CA",
        "Indiana":"IN",
    }
}
window.onload = function(){
    for (var x in countryState){
        country.options[country.options.length] = new Option(x, x);
    }
    country.onchange = function(){
        state.length = 1;
        for (var y in countryState[this.value])  {
            state.options[state.options.length] = new Option(y, y);
        }
    }
}