function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var getFacilitator = document.getElementById("facilitator");   
    var facilitator = getFacilitator.value.toLowerCase(); 
    var fullName = firstName.value + lastName.value;
    const facilitatorNames = ["jen", "behdad", "chris", "christian", "josh"]
    const regEx = /^[a-zA-z]+$/;
    var errorMsg = document.getElementById("errorMsg");

    if (firstName.value.length < 2) {
        errorMsg.innerHTML = "Your first name must contain two or more characters."
        /*alert("Oops! The first name must contain two or more characters.")*/
        return false;
    } else if (lastName.value.length < 2) {
        errorMsg.innerHTML = "Your last name must contain two or more characters."
        /*alert("Oops! The last name must contain two or more characters.")*/
        return false;
    } else if (!facilitatorNames.includes(facilitator)) {
        errorMsg.innerHTML = "Your facilitator must be Jen, Behdad, Chris, Christian, or Josh."
        /*alert("Oops! Your facilitator must be Jen, Behdad, Chris, Christian, or Josh.")*/
        return false;
    } else if (!regEx.test(fullName)) {
        errorMsg.innerHTML = "Your first and last names must include alpha characters only."
        /*alert("Your first and last names must include alpha characters only.")*/
        console.log(fullName)
        return false;
    } else {
        return true;
    }
}